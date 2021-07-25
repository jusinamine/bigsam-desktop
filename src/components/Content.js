import React, { useEffect, useState } from "react";
import { loaderSVG } from "./loader.jsx";
const { ipcRenderer } = window.require("electron");

export default function Content() {
  const [programType, setProgramType] = useState(null);
  const [metabolicRate, setmetabolicRate] = useState(null);
  const [sexe, setSexe] = useState(null);
  const [weight, setWeight] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [plan, setPlan] = useState("");
  const [meal, setMeal] = useState(null);
  const [total, setTotal] = useState({
    protien: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
  });
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (programType !== null && sexe !== null) {
      if (programType === 0) {
        if (metabolicRate === 0) {
          if (sexe === 0) {
            let dayProtien = 3 * +weight;
            let dayCarbs = 6 * +weight;
            let dayFats = 0.9 * +weight;
            let protien = dayProtien / 5;
            let carbs = dayCarbs / 5;
            let fats = dayFats / 5;
            setTotal({
              protien_sport: dayProtien,
              carbs_sport: dayCarbs,
              fats_sport: dayFats,
              calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
              protien_relax: dayProtien,
              carbs_relax: dayCarbs,
              fats_relax: dayFats,
              calories_relax: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
            });
            setMeal({
              sportDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
              relaxDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: fats / 5,
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
            });
          } else {
            let dayProtien = 2.5 * +weight;
            let dayCarbs = 4.5 * +weight;
            let dayFats = 0.9 * +weight;
            let protien = dayProtien / 5;
            let carbs = dayCarbs / 5;
            let fats = dayFats / 5;
            //calculate total protien - carbs - fats - calories per day
            setTotal({
              protien_sport: dayProtien,
              carbs_sport: dayCarbs,
              fats_sport: dayFats,
              calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
              protien_relax: dayProtien,
              carbs_relax: dayCarbs,
              fats_relax: dayFats,
              calories_relax: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
            });
            setMeal({
              sportDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
              relaxDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
            });
          }
        } else if (metabolicRate === 1) {
          if (sexe === 0) {
            let dayProtien = 2.5 * +weight;
            let dayCarbs = 5 * +weight;
            let dayFats = 0.9 * +weight;
            let dayCarbsRelax = 4 * +weight;
            let protien = dayProtien / 5;
            let carbs = dayCarbs / 5;
            let fats = dayFats / 5;
            let carbsRelax = dayCarbsRelax / 5;
            setTotal({
              protien_sport: dayProtien,
              carbs_sport: dayCarbs,
              fats_sport: dayFats,
              calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
              protien_relax: dayProtien,
              carbs_relax: dayCarbsRelax,
              fats_relax: dayFats,
              calories_relax: dayProtien * 4 + dayCarbsRelax * 4 + dayFats * 9,
            });
            setMeal({
              sportDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
              relaxDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbsRelax * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbsRelax * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
            });
          } else {
            let dayProtien = 2.5 * +weight;
            let dayCarbs = 3.5 * +weight;
            let dayFats = 0.9 * +weight;
            let dayCarbsRelax = 2.5 * +weight;
            let protien = dayProtien / 5;
            let carbs = dayCarbs / 5;
            let fats = dayFats / 5;
            let carbsRelax = dayCarbsRelax / 5;
            setTotal({
              protien_sport: dayProtien,
              carbs_sport: dayCarbs,
              fats_sport: dayFats,
              calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
              protien_relax: dayProtien,
              carbs_relax: dayCarbsRelax,
              fats_relax: dayFats,
              calories_relax: dayProtien * 4 + dayCarbsRelax * 4 + dayFats * 9,
            });
            setMeal({
              sportDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbs * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbs * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
              relaxDays: {
                firstMeal: {
                  protien: (protien / 3).toFixed(2),
                  carbs: ((carbsRelax * 100) / 60).toFixed(2),
                  fats: (fats / 5).toFixed(2),
                },
                otherMeals: {
                  protien: ((protien * 100) / 22).toFixed(2),
                  carbs: ((carbsRelax * 100) / 28).toFixed(2),
                  fats: fats.toFixed(2),
                },
              },
            });
          }
        }
      } else {
        if (sexe === 0) {
          let dayProtien = 3 * +weight;
          let dayCarbs = 3 * +weight;
          let dayFats = 0.5 * +weight;
          let protien = dayProtien / 5;
          let carbs = dayCarbs / 5;
          let fats = dayFats / 5;
          setTotal({
            protien_sport: dayProtien,
            carbs_sport: dayCarbs,
            fats_sport: dayFats,
            calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
            protien_relax: dayProtien,
            carbs_relax: dayCarbs,
            fats_relax: dayFats,
            calories_relax: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
          });
          setMeal({
            sportDays: {
              firstMeal: {
                protien: (protien / 3).toFixed(2),
                carbs: ((carbs * 100) / 60).toFixed(2),
                fats: (fats / 5).toFixed(2),
              },
              otherMeals: {
                protien: ((protien * 100) / 22).toFixed(2),
                carbs: ((carbs * 100) / 28).toFixed(2),
                fats: fats.toFixed(2),
              },
            },
            relaxDays: {
              firstMeal: {
                protien: (protien / 3).toFixed(2),
                carbs: ((carbs * 100) / 60).toFixed(2),
                fats: (fats / 5).toFixed(2),
              },
              otherMeals: {
                protien: ((protien * 100) / 22).toFixed(2),
                carbs: ((carbs * 100) / 28).toFixed(2),
                fats: fats.toFixed(2),
              },
            },
          });
        } else {
          let dayProtien = 2.5 * +weight;
          let dayCarbs = 2 * +weight;
          let dayFats = 0.4 * +weight;
          let protien = dayProtien / 5;
          let carbs = dayCarbs / 5;
          let fats = dayFats / 5;
          setTotal({
            protien_sport: dayProtien,
            carbs_sport: dayCarbs,
            fats_sport: dayFats,
            calories_sport: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
            protien_relax: dayProtien,
            carbs_relax: dayCarbs,
            fats_relax: dayFats,
            calories_relax: dayProtien * 4 + dayCarbs * 4 + dayFats * 9,
          });
          setMeal({
            sportDays: {
              firstMeal: {
                protien: (protien / 3).toFixed(2),
                carbs: ((carbs * 100) / 60).toFixed(2),
                fats: (fats / 5).toFixed(2),
              },
              otherMeals: {
                protien: ((protien * 100) / 22).toFixed(),
                carbs: ((carbs * 100) / 28).toFixed(2),
                fats: fats.toFixed(2),
              },
            },
            relaxDays: {
              firstMeal: {
                protien: (protien / 3).toFixed(2),
                carbs: ((carbs * 100) / 60).toFixed(2),
                fats: (fats / 5).toFixed(2),
              },
              otherMeals: {
                protien: ((protien * 100) / 22).toFixed(),
                carbs: ((carbs * 100) / 28).toFixed(2),
                fats: fats.toFixed(2),
              },
            },
          });
        }
      }
    }
  }, [sexe, metabolicRate, programType, weight]);

  console.log(meal);
  console.log(total);
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
      {page === 0 && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              margin: "0 0 0.2rem 0",
              backgroundColor: "#161616",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className="label">الاسم الكامل:</div>
              <input
                type="text"
                className="input-style"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className="label">عمر الزبون:</div>
              <input
                type="text"
                className="input-style"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                value={age}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className="label">دهون الجسم:</div>
              <input
                type="text"
                className="input-style"
                onChange={(event) => {
                  setBodyFat(event.target.value);
                }}
                value={bodyFat}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              backgroundColor: "#161616",
            }}
          >
            <div
              className={
                programType === 0 ? "btn-select-clicked" : "btn-select"
              }
              onClick={() => setProgramType(0)}
            >
              تضخيم
            </div>
            <div
              className={
                programType === 1 ? "btn-select-clicked" : "btn-select"
              }
              onClick={() => setProgramType(1)}
            >
              تنشيف
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              backgroundColor: "#161616",
            }}
          >
            <div
              className={
                programType === 0
                  ? metabolicRate === 0
                    ? "btn-select-clicked"
                    : "btn-select"
                  : "btn-select-disabled"
              }
              onClick={() => setmetabolicRate(0)}
            >
              سرعة أيض سريع
            </div>
            <div
              className={
                programType === 0
                  ? metabolicRate === 1
                    ? "btn-select-clicked"
                    : "btn-select"
                  : "btn-select-disabled"
              }
              onClick={() => setmetabolicRate(1)}
            >
              سرعة أيض متوسطة
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              backgroundColor: "#161616",
            }}
          >
            <div
              className="btn-select"
              className={sexe === 0 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setSexe(0)}
            >
              ذكر
            </div>
            <div
              className={sexe === 1 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setSexe(1)}
            >
              أنثى
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              margin: "0.3rem 0",
              backgroundColor: "#161616",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="label">الوزن:</div>
              <input
                type="text"
                className="input-style"
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
                value={weight}
                placeholder="الوزن بالكيلوغرام"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="label">الطول:</div>
              <input
                type="text"
                className="input-style"
                onChange={(event) => {
                  setHeight(event.target.value);
                }}
                value={height}
                placeholder="الطول"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              backgroundColor: "#161616",
            }}
          >
            <div
              style={{ fontSize: "14px" }}
              className={plan === 0 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setPlan(0)}
            >
              خطة مبتدأ
            </div>
            <div
              style={{ fontSize: "14px" }}
              className={plan === 1 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setPlan(1)}
            >
              خطة متوسط
            </div>
            <div
              style={{ fontSize: "14px" }}
              className={plan === 2 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setPlan(2)}
            >
              خطة متقدم
            </div>
            <div
              style={{ fontSize: "14px" }}
              className={plan === 3 ? "btn-select-clicked" : "btn-select"}
              onClick={() => setPlan(3)}
            >
              خطة منزلية
            </div>
          </div>
        </>
      )}

      {page === 1 && (
        <div>
          <div className="label">رسالة إلى الزبون</div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            style={{ textAlign: "right" }}
            className="input-style"
            rows="4"
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: "1",
          backgroundColor: "#161616",
          margin: "0.2rem  0.2rem 5px",
          justifyContent: "center",
          maxHeight: "46.02px",
        }}
      >
        {page === 1 && (
          <div className="btn-back" onClick={() => setPage(0)}>
            الرجوع
          </div>
        )}
        {page === 1 && (
          <div
            style={{ marginRight: "5px" }}
            className={
              programType !== null &&
              sexe !== null &&
              ((programType === 0 && metabolicRate !== null) ||
                programType === 1) &&
              weight !== "" &&
              plan !== ""
                ? "btn-save"
                : "btn-save-disabled"
            }
            onClick={() => {
              if (
                programType !== null &&
                sexe !== null &&
                ((programType === 0 && metabolicRate !== null) ||
                  programType === 1) &&
                weight !== "" &&
                plan !== ""
              ) {
                ipcRenderer.send("send_data", {
                  type: "save_file",
                  data: meal,
                  message,
                  customerData: {
                    height,
                    age,
                    weight,
                    plan,
                    name,
                    goal: programType,
                    sexe,
                    bodyFat,
                    total,
                  },
                });
              }
            }}
          >
            {"حفظ ملف PDF"}
          </div>
        )}
        {page === 0 && (
          <div
            className={
              programType !== null &&
              sexe !== null &&
              ((programType === 0 && metabolicRate !== null) ||
                programType === 1) &&
              weight !== "" &&
              plan !== ""
                ? "btn-save"
                : "btn-save-disabled"
            }
            onClick={() => {
              if (
                programType !== null &&
                sexe !== null &&
                ((programType === 0 && metabolicRate !== null) ||
                  programType === 1) &&
                weight !== "" &&
                plan !== ""
              ) {
                setPage(1);
              }
            }}
          >
            التالي
          </div>
        )}
      </div>
    </div>
  );
}
