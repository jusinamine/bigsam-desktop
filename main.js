const path = require("path");
const url = require("url");
const fs = require("fs");
var html_to_pdf = require("html-pdf-node");
const { generatepdf } = require("./generatePDF");

const { app, BrowserWindow, ipcMain, dialog } = require("electron");

let mainWindow;

let isDev = false;

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  isDev = true;
}

/* 
 0 tanchif 1 tadkhim
 0 male 1 female
*/

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 500,
    maxWidth: 500,
    minWidth: 500,
    height: 500,
    maxHeight: 500,
    minHeight: 500,
    show: false,
    autoHideMenuBar: true,
    frame: false,
    icon: `${__dirname}/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let indexPath;

  if (isDev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    // Open devtools if dev
    if (isDev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.log("Error loading React DevTools: ", err)
      );
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

ipcMain.on("app-maximize", (_event, _arg) => mainWindow.maximize());
ipcMain.on("app-minimize", (_event, _arg) => mainWindow.minimize());
ipcMain.on("app-quit", (_event, _arg) => app.quit());
ipcMain.on("app-unmaximize", (_event, _arg) => mainWindow.unmaximize());

/* sending meals data to front or  cusotmers number to front*/
ipcMain.on("send_specific_data", (event, type) => {
  if (type === "meals") {
    var MEALS_DATA = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./app-meals-data.json"), "utf8")
    );
    event.returnValue = MEALS_DATA;
  } else if (type === "customers") {
    var CUSTOMERS = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/customers.json"), "utf8")
    );
    event.returnValue = CUSTOMERS;
  } else if (type === "gym") {
    var GYM_INSTRUCTION = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/gymInsruction.json"), "utf8")
    );
    event.returnValue = GYM_INSTRUCTION;
  } else if (type === "meal_instruction") {
    var MEAL_INSTRUCTION = JSON.parse(
      fs.readFileSync(path.join(__dirname, "/meal-instruction.json"), "utf8")
    );
    event.returnValue = MEAL_INSTRUCTION;
  }
});

//save data in json
ipcMain.on("save-data", (event, data) => {
  if (data.type === "meals")
    fs.writeFileSync(
      path.join(__dirname, "./app-meals-data.json"),
      JSON.stringify(data.meals)
    );
  else if (data.type === "customers")
    fs.writeFileSync(
      path.join(__dirname, "./customers.json"),
      JSON.stringify(data.customers)
    );
  else if (data.type === "gym")
    fs.writeFileSync(
      path.join(__dirname, "./gymInsruction.json"),
      JSON.stringify(data.data)
    );
  else if (data.type === "meal_instruction")
    fs.writeFileSync(
      path.join(__dirname, "./meal-instruction.json"),
      JSON.stringify(data.data)
    );
});

/* sending data from ui to node*/
ipcMain.on("send_data", (event, data) => {
  let options = {
    //Placeholder 1
    title: "Save file - Electron example",

    //Placeholder 2
    defaultPath: "custom_program.pdf",

    //Placeholder 4
    buttonLabel: "Save",

    //Placeholder 3
    filters: [
      { name: "pdf file", extensions: ["pdf"] },

      { name: "All Files", extensions: ["*"] },
    ],
  };

  if (data.type === "save_file") {
    console.log(data);
    let client = {
      name: data?.customerData?.name,
      age: data?.customerData?.age,
      weight: data?.customerData?.weight,
      sexe: data?.customerData?.sexe,
      height: data?.customerData?.height,
      bodyfat: data?.customerData?.bodyFat,
      training: {
        protiens: data?.customerData?.total?.protien_sport,
        carbs: data?.customerData?.total?.carbs_sport,
        fats: data?.customerData?.total?.fats_sport,
        calories: data?.customerData?.total?.calories_sport,
      },
      relax: {
        protiens: data?.customerData?.total?.protien_relax,
        carbs: data?.customerData?.total?.carbs_relax,
        fats: data?.customerData?.total?.fats_relax,
        calories: data?.customerData?.total?.calories_relax,
      },
    };

    var MEALS_DATA = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./app-meals-data.json"), "utf8")
    );
    var CUSTOMERS = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./customers.json"), "utf8")
    );
    var GYM_INSTRUCTION = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./gymInsruction.json"), "utf8")
    );
    var MEAL_INSTRUCTION = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./meal-instruction.json"), "utf8")
    );

    var gym = "";
    var meal = "";
    GYM_INSTRUCTION.lines.map((text) => {
      gym = gym + `<div>${"-" + text} </div>`;
    });
    MEAL_INSTRUCTION.lines.map((text) => {
      meal = meal + `<div>${"-" + text} </div>`;
    });

    let options_pdf = {
      format: "A4",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      margin: { top: 16, bottom: 16 },
    };
    let file = generatepdf(
      client,
      data?.customerData?.goal,
      data?.customerData?.plan,
      data?.message,
      CUSTOMERS?.number,
      CUSTOMERS?.experience,
      data?.data,
      MEALS_DATA,
      gym,
      meal
    );
    html_to_pdf
      .generatePdf(
        {
          content: file,
        },
        options_pdf
      )
      .then((pdfBuffer) => {
        dialog.showSaveDialog(mainWindow, options).then((loc) => {
          if (loc.filePath && !loc.canceled)
            fs.writeFile(loc.filePath, pdfBuffer, (err, res) => {
              console.log(res);
            });
        });
      });
  }
});

// Stop error
app.allowRendererProcessReuse = true;
