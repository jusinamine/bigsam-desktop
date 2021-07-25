const { MSICreator } = require("electron-wix-msi");

// Define input and output directories
const path = (directory) => {
  return require("path").resolve(__dirname, directory);
};
const msiCreator = new MSICreator({
  appDirectory: path("./release-builds/React Electron App-win32-ia32"),
  appIconPath: path("./assets/icon.ico"),
  outputDirectory: path("./dist/windows/setup"),
  description: "Custom deit program app",
  exe: "app",
  manufacturer: "Example Manufacturer",
  name: "BIGSAM App",
  version: "1.0.0",
});

// Customized MSI template
msiCreator.wixTemplate = msiCreator.wixTemplate
  .replace(/ \(Machine - MSI\)/gi, "")
  .replace(/ \(Machine\)/gi, "");

// Create .wxs template and compile MSI
msiCreator.create().then(() => msiCreator.compile());
