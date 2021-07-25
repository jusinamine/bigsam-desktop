import React, { useEffect, useState } from "react";
const { ipcRenderer } = window.require("electron");

export default function Settings({ setShowSettings }) {
  const [page, setPage] = useState(1);
  return (
    <div
      style={{
        height: "460px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        boxSizing: "border-box",
        direction: "rtl",
      }}
    >
      {page === 1 && (
        <>
          <div className="settings-block" onClick={() => setPage(2)}>
            <div>GYM INSTRUCTIONS</div>
          </div>
          <div className="settings-block" onClick={() => setPage(3)}>
            <div>DEIT</div>
          </div>
          <div className="settings-block" onClick={() => setPage(4)}>
            <div>إرشادات غذائية</div>
          </div>
          <div className="settings-block" onClick={() => setPage(5)}>
            <div>CLIENTS AND EXPERIENCE</div>
          </div>
        </>
      )}
      {page === 2 && <GymInstruction setPage={setPage} />}
      {page === 3 && <DeitSettings setPage={setPage} />}
      {page === 4 && <MealInstruction setPage={setPage} />}
      {page === 5 && <ExperienceSettings setPage={setPage} />}
    </div>
  );
}

function DeitSettings({ setPage }) {
  var [meals, setMeals] = useState({});
  const [originalMeals, setOriginalMeals] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // get the data of meals and customers number
    let meals = ipcRenderer.sendSync("send_specific_data", "meals");
    setOriginalMeals(meals);
    setMeals(meals);
  };

  const saveData = () => {
    console.log(meals);
    ipcRenderer.send("save-data", {
      meals: meals,
      type: "meals",
    });
    setPage(1);
  };
  console.log(originalMeals);
  console.log(meals);
  return (
    <>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">الوجبة 1</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="البروتين"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal1: { ...meals.meal1, protien: event.target.value },
              })
            }
            value={meals?.meal1?.protien || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",

              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الكارب"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal1: { ...meals.meal1, carbs: event.target.value },
              })
            }
            value={meals?.meal1?.carbs || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",

              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الدهون"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal1: { ...meals.meal1, fats: event.target.value },
              })
            }
            defaultValue={meals?.meal1?.fats || ""}
          />
        </div>
      </div>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">الوجبة 2</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",

              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="البروتين"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal2: { ...meals.meal2, protien: event.target.value },
              })
            }
            value={meals?.meal2?.protien || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الكارب"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal2: { ...meals.meal2, carbs: event.target.value },
              })
            }
            value={meals?.meal2?.carbs || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الدهون"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal2: { ...meals.meal2, fats: event.target.value },
              })
            }
            value={meals?.meal2?.fats || ""}
          />
        </div>
      </div>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">الوجبة 3</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="البروتين"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal3: { ...meals.meal3, protien: event.target.value },
              })
            }
            value={meals?.meal3?.protien || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الكارب"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal3: { ...meals.meal3, carbs: event.target.value },
              })
            }
            value={meals?.meal3?.carbs || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الدهون"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal3: { ...meals.meal3, fats: event.target.value },
              })
            }
            value={meals?.meal3?.fats || ""}
          />
        </div>
      </div>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">الوجبة 4</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="البروتين"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal4: { ...meals.meal4, protien: event.target.value },
              })
            }
            value={meals?.meal4?.protien || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الكارب"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal4: { ...meals.meal4, carbs: event.target.value },
              })
            }
            value={meals?.meal4?.carbs || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الدهون"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal4: { ...meals.meal4, fats: event.target.value },
              })
            }
            value={meals?.meal4?.fats || ""}
          />
        </div>
      </div>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">الوجبة 5</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="البروتين"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal5: { ...meals.meal5, protien: event.target.value },
              })
            }
            value={meals?.meal5?.protien || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الكارب"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal5: { ...meals.meal5, carbs: event.target.value },
              })
            }
            value={meals?.meal5?.carbs || ""}
          />

          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
            }}
            type="text"
            placeholder="الدهون"
            onChange={(event) =>
              setMeals({
                ...meals,
                meal5: { ...meals.meal5, fats: event.target.value },
              })
            }
            value={meals?.meal5?.fats || ""}
          />
        </div>
      </div>
      <div className="flex-row padding-v-1 flex-1">
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginLeft: "5px",
          }}
          className="btn-back"
          onClick={() => setPage(1)}
        >
          الرجوع
        </div>
        <div
          onClick={saveData}
          style={{ width: "50%", flex: "none", marginRight: "5px" }}
          className="btn-save"
        >
          حفظ التغييرات
        </div>
      </div>
    </>
  );
}

function ExperienceSettings({ setPage }) {
  const [experience, setExperience] = useState("");
  const [programes, setProgrames] = useState("");
  useEffect(() => {
    let customers = ipcRenderer.sendSync("send_specific_data", "customers");
    setProgrames(customers?.number);
    setExperience(customers.experience);
  }, []);
  const onSave = () => {
    ipcRenderer.send("save-data", {
      type: "customers",
      customers: { number: programes, experience: experience },
    });
    setPage(1);
  };
  return (
    <>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">العدد الإجمالي للبرامج</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
              maxHeight: "50px",
            }}
            type="text"
            placeholder="البرامج"
            onChange={(e) => setProgrames(e.target.value)}
            value={programes}
          />
        </div>
      </div>
      <div className="flex-column padding-v-1 flex-1">
        <div className="label">سنوات الخبرة</div>
        <div className="flex-row width-100 flex-1">
          <input
            style={{
              width: "inherit",
              padding: "0.2rem",
              overflow: "hidden",
              outline: "none",
              fontFamily: "Tajwal",
              fontWeight: "700",
              maxHeight: "50px",
            }}
            type="text"
            placeholder="سنوات الخبرة"
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          />
        </div>
      </div>
      <div className="flex-row padding-v-1 flex-1">
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginLeft: "5px",
          }}
          className="btn-back"
          onClick={() => setPage(1)}
        >
          الرجوع
        </div>
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginRight: "5px",
          }}
          className="btn-save"
          onClick={onSave}
        >
          حفظ التغييرات
        </div>
      </div>
    </>
  );
}

function GymInstruction({ setPage }) {
  const [gymData, setGymData] = useState([]);
  useEffect(() => {
    let gymData = ipcRenderer.sendSync("send_specific_data", "gym");
    setGymData(gymData.lines);
  }, []);
  const onsave = () => {
    ipcRenderer.send("save-data", {
      type: "gym",
      data: { lines: gymData },
    });
    setPage(1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "70%",
          overflowY: "auto",
        }}
      >
        {gymData.map((text, key) => (
          <div
            style={{ maxHeight: "50px" }}
            className="flex-row width-100 flex-1"
            key={"line" + key}
          >
            <input
              key={"text-" + key}
              style={{
                width: "inherit",
                padding: "0.2rem",
                overflow: "hidden",
                outline: "none",
                fontFamily: "Tajwal",
                fontWeight: "700",
              }}
              onChange={(e) => {
                gymData[key] = e.target.value;
                setGymData([...gymData]);
              }}
              type="text"
              placeholder={"السطر" + key}
              value={text}
            />
            <div
              style={{
                background: "#e31c25",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1px",
              }}
              onClick={() => {
                let newData = gymData.filter((element, index) => index !== key);
                setGymData([...newData]);
              }}
              key={"delete-" + key}
            >
              <svg
                key={"svg-" + key}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                className="topbar-icon"
                version="1.1"
                viewBox="0 0 492 492"
                xmlSpace="preserve"
              >
                <path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => {
          setGymData([...gymData, ""]);
        }}
      >
        أضافت سطر
      </div>
      <div className="flex-row padding-v-1 flex-1">
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginLeft: "5px",
          }}
          className="btn-back"
          onClick={() => setPage(1)}
        >
          الرجوع
        </div>
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginRight: "5px",
          }}
          className="btn-save"
          onClick={onsave}
        >
          حفظ التغييرات
        </div>
      </div>
    </>
  );
}

function MealInstruction({ setPage }) {
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    let mealData = ipcRenderer.sendSync(
      "send_specific_data",
      "meal_instruction"
    );
    setMealData(mealData.lines);
  }, []);
  const onsave = () => {
    ipcRenderer.send("save-data", {
      type: "meal_instruction",
      data: { lines: mealData },
    });
    setPage(1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "70%",
          overflowY: "auto",
        }}
      >
        {mealData.map((text, key) => (
          <div
            style={{ maxHeight: "50px" }}
            className="flex-row width-100 flex-1"
            key={"line-meal-" + key}
          >
            <input
              key={"text-" + key}
              style={{
                width: "inherit",
                padding: "0.2rem",
                overflow: "hidden",
                outline: "none",
                fontFamily: "Tajwal",
                fontWeight: "700",
              }}
              onChange={(e) => {
                mealData[key] = e.target.value;
                setMealData([...mealData]);
              }}
              type="text"
              placeholder={"السطر" + key}
              value={text}
            />
            <div
              style={{
                background: "#e31c25",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1px",
              }}
              onClick={() => {
                let newData = mealData.filter(
                  (element, index) => index !== key
                );
                setMealData([...newData]);
              }}
              key={"delete-" + key}
            >
              <svg
                key={"svg-" + key}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                className="topbar-icon"
                version="1.1"
                viewBox="0 0 492 492"
                xmlSpace="preserve"
              >
                <path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#fff",
          cursor: "pointer",
          textAlign: "center",
        }}
        onClick={() => {
          setMealData([...mealData, ""]);
        }}
      >
        أضافت سطر
      </div>
      <div className="flex-row padding-v-1 flex-1">
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginLeft: "5px",
          }}
          className="btn-back"
          onClick={() => setPage(1)}
        >
          الرجوع
        </div>
        <div
          style={{
            width: "50%",
            maxHeight: "60px",
            marginRight: "5px",
          }}
          className="btn-save"
          onClick={onsave}
        >
          حفظ التغييرات
        </div>
      </div>
    </>
  );
}
