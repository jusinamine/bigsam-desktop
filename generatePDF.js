const { cardioPlan, trainingPlan, supplement } = require("./pdfComponants");

function generatepdf(
  client,
  programType,
  trainingType,
  message,
  totalClients,
  experience,
  mealsValues,
  mealsdata,
  GYM_INSTRUCTION,
  MEAL_INSTRUCTION
) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap"
      rel="stylesheet"
    />
    <style>
      @import url("http://fonts.cdnfonts.com/css/aller");
      @import url(https://fonts.googleapis.com/earlyaccess/droidarabicnaskh.css);
      /* font-family:'Droid Arabic Naskh', serif;*/
      body {
        font-family: "Aller", sans-serif;
        margin: 16pt
      }
      #home {
        color: #214b5d;
      }
      #info {
        text-transform: uppercase;
        font-size: 8pt;
        font-weight: bold;
      }
      #header {
        display: flex;
        justify-content: space-between;
      }
      #image-header img {
        width: 80;
        height: 80;
      }
      #client-info {
        display: flex;
        margin: 16pt 0;
        text-transform: uppercase;
        font-size: 8pt;
        font-weight: bold;
      }
      #client-info > div {
        flex: 1;
      }
      #home-title {
        margin-top: 50%;
        font-size: 28pt;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        color: black;
      }
      .title {
        font-size: 16pt;
        font-weight: bold;
        text-align: center;
        margin: 16pt 0;
      }
      .arabe {
        direction: rtl;
        font-family: "Droid Arabic Naskh", serif;
      }
      .arabe-table {
        font-family: "Droid Arabic Naskh", serif;
      }
      .bold {
        font-weight: bold;
      }
      .color-red {
        color: #ff5757;
      }
      .list div {
        line-height: 1.5;
        margin-top: 6pt;
        font-size: 10pt;
      }
      table {
        border-collapse: collapse;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        font-size: 10pt;
      }

      td,
      th {
        width: 50%;
        border: 1px solid #f7f7f7;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #f7f7f7;
      }
      @media print {
        #home {
          page-break-inside: avoid;
        }
        #gym-instruction {
          page-break-inside: avoid;
        }
        .break {
          page-break-inside: avoid;
        }
        .break-after {
          page-break-after: always;
        }
      }
    </style>
  </head>
  <body>
    <div id="home">
      <!-- header here -->
      <div id="header">
        <div id="info">
          <div style="font-family: 'ALLER', sans-serif">
            Email: samibahous619@gmail.com
          </div>
          <div>Insta: @bigg__sam</div>
        </div>
        <div id="image-header">
          <img width="60" src="https://i.ibb.co/8rm0QCT/BIG-SAM.png" alt="ss" />
        </div>
      </div>
      <!-- client info here -->
      <div id="client-info">
        <div>
          <div>Client full name: ${client?.name}</div>
          <div>Client age: ${client?.age}</div>
          <div>Client height: ${client?.height}</div>
          <div>client bodyfats: ${client?.bodyfat}</div>
          <div>goal: ${programType === 1 ? "تضخيم" : "تنشيف"}</div>
        </div>
        <div>
          
          <div>total protiens: ${client?.training?.protiens}g</div>
          <div>total carbs: ${client?.training?.carbs}g</div>
          <div>total fats: ${client?.training?.fats}g</div>
          <div>total calories: ${client?.training?.calories}kal</div>
        </div>
        <div>
          <div>total protiens (rest days): ${client?.relax?.protiens}g</div>
          <div>total carbs (rest days): ${client?.relax?.carbs}g</div>
          <div>total fats (rest days): ${client?.relax?.fats}g</div>
          <div>total calories (rest days): ${client?.relax?.calories}kal</div>
        </div>
      </div>
      <!-- title big -->
      <div id="home-title">
        <div>BIGSAM</div>
        <div>برنامج رياضي مخصص</div>
      </div>
    </div>
    <div id="gym-instruction">
      <!-- gym instructions -->
      <div>
        <div class="title">GYM INSTRUCTIONS</div>
        <div class="list arabe bold">
          ${GYM_INSTRUCTION}
        </div>
      </div>
      <!-- cardio plan -->
      <div>
        <div class="title">CARDIO PLAN</div>
        ${cardioPlan(programType)}
      </div>
      <!-- training plan -->
      <div class="title">TRAINING PLAN</div>
      ${trainingPlan(client?.sexe, trainingType)}

      <div class="break">
        <div class="title">PS</div>
        <div class="list arabe bold">
          <div>
            - لا يكمن تحديد ميزانية مخصصة للبرامج الغذائية لأنه يؤثر مباشرة على
            مدى فعالية البرامج و يمكن أن يؤذي عملي , لهذا فعندما أصمم برنامج
            أصممه بناءا على هدف الزبون و لهذا أصممه ليأتي بالنتيجة لان غالبا
            الزبائن لا يربطون بين أهدافهم و ميزانيتهم و لذلك أعطيهم مايجلب لهم
            النتيجة
          </div>
          <div>- اما في خصوص الميزانية فالزبائن الحرية المطلقة في برنامجهم</div>
          <div>
            - في خصوص بعض الجمل باللغة الانجليزية , الامر سهل فقط اعمل لها ترجمة
            , اللغة الانجليزية هي لغتي التي درست بها علوم التغذية مرات يصعب علي
            الامر كتابة كل شيء بالعربية.
          </div>
        </div>
      </div>

      <div class="break">
        <div class="title">MY MESSAGE TO YOU</div>
        <div class="list arabe bold">${message}</div>
      </div>

      <div class="break">
        <div class="title">DEIT</div>
        <table class="bold arabe">
          <tbody>
            <tr>
              <td style="width: 20%; text-align: center">الوجبات</td>
              <td style="width: 40%; text-align: center">أيام التدريب</td>
              <td style="width: 40%; text-align: center">أيام الراحة</td>
            </tr>
            <tr>
              <td style="width: 20%; text-align: center">1</td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.sportDays?.firstMeal?.protien +
                  " " +
                  mealsdata?.meal1?.protien
                } </div>
                <div>${
                  mealsValues?.sportDays?.firstMeal?.carbs +
                  " " +
                  mealsdata?.meal1?.carbs
                }</div>
                <div>${
                  mealsValues?.sportDays?.firstMeal?.fats +
                  " " +
                  mealsdata?.meal1?.fats
                }</div>
              </td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.relaxDays?.firstMeal?.protien +
                  " " +
                  mealsdata?.meal1?.protien
                }</div>
                <div>${
                  mealsValues?.relaxDays?.firstMeal?.carbs +
                  " " +
                  mealsdata?.meal1?.carbs
                }</div>
                <div>${
                  mealsValues?.relaxDays?.firstMeal?.fats +
                  " " +
                  mealsdata?.meal1?.fats
                }</div>
              </td>
            </tr>
            <tr>
              <td style="width: 20%; text-align: center">2</td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.sportDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal2?.protien
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal2?.carbs
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal2?.fats
                }</div>
              </td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal2?.protien
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal2?.carbs
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal2?.fats
                }</div>
              </td>
            </tr>
            <tr>
              <td style="width: 20%; text-align: center">3</td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.sportDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal3?.protien
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal3?.carbs
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal3?.fats
                }</div>
              </td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal3?.protien
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal3?.carbs
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal3?.fats
                }</div>
              </td>
            </tr>
            <tr>
              <td style="width: 20%; text-align: center">4</td>
              <td style="width: 40%; text-align: center">  
                <div>${
                  mealsValues?.sportDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal4?.protien
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal4?.carbs
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal4?.fats
                }</div>
              </td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal4?.protien
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal4?.carbs
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal4?.fats
                }</div>
              </td>
            </tr>
            <tr>
              <td style="width: 20%; text-align: center">5</td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.sportDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal5?.protien
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal5?.carbs
                }</div>
                <div>${
                  mealsValues?.sportDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal5?.fats
                }</div>
              </td>
              <td style="width: 40%; text-align: center">
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.protien +
                  " " +
                  mealsdata?.meal5?.protien
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.carbs +
                  " " +
                  mealsdata?.meal5?.carbs
                }</div>
                <div>${
                  mealsValues?.relaxDays?.otherMeals?.fats +
                  " " +
                  mealsdata?.meal5?.fats
                }</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="title">SUPPLEMENTS PLAN</div>
        ${supplement(programType)}
      </div>

      <div class="break">
        <div class="title arabe">إرشادات غذائية</div>
        <div class="list arabe bold">
          ${MEAL_INSTRUCTION}
        </div>
      </div>

      <div class="break">
        <div class="title">LIST OF ALLOWED VS DISALLOWED FOODS</div>
        <table class="bold">
          <tbody>
            <tr>
              <td class="arabe-table">كاتشوب دون سكر - خردل - كوكاكولا</td>
              <td>ALLOWED</td>
            </tr>
            <tr>
              <td class="arabe-table">
                اي شيئ غير مكتوب في البرنامج او جدول البدائل الغذائية
              </td>
              <td>DISALLOWED</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="title">MEAL SUBTITUTES</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>PROTEIN</td>
              <td>CARBS</td>
              <td>FAT</td>
            </tr>
            <tr>
              <td>Chicken breast</td>
              <td>Whole wheat pasta</td>
              <td>Egg yolks</td>
            </tr>
            <tr>
              <td>Faux merlon</td>
              <td>Whole wheat bread</td>
              <td>Chia seeds</td>
            </tr>
            <tr>
              <td>Tuna ( natural )</td>
              <td>Whole wheat tortillas</td>
              <td>Coconut oil</td>
            </tr>
            <tr>
              <td>Salmon ( natural )</td>
              <td>Jasmine rice</td>
              <td>Avocado</td>
            </tr>
            <tr>
              <td>Egg whites</td>
              <td>Sweet potato</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Otats</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>rice cakes</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break bold break-after">
        <div
          style="
            margin: 16pt;
            padding: 6pt;
            text-align: center;
            background-color: #ffb6b6;
            border: 1px solid #ff5757;
            color: #d62a2a;
          "
        >
          The program is fully customized by Coach Sam every item is selected by
          the coach there were no generic applications used in this program
        </div>
      </div>
    </div>

    <div
      style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      "
    >
      <img
        width="150"
        src="https://i.ibb.co/8rm0QCT/BIG-SAM.png"
        alt="BIGSAM"
      />
      <div class="bold;" style="font-size: 28pt">BIG SAM</div>
      <div class="bold">THE KING OF CUSTOM PROGS</div>
      <div style="padding: 16pt 0">
        <div>
          - <span class="color-red">+${totalClients}</span> PROGRAMS HAVE BEEN MADE SINCE
          2017
        </div>
        <div>- <span class="color-red">+${experience}</span>YEARS REASERCH EXP</div>
        <div>- CERTIFIED NUTRITIONIST</div>
      </div>
    </div>
  </body>
</html>
    `;
}

module.exports = { generatepdf };
