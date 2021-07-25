function cardioPlan(type) {
  if (type === 1) {
    //تضخيم
    return `
        <table class="bold">
        <tbody>
          <tr>
            <td class="arabe-table">ايام الراحة اجري صباحا</td>
            <td>20MIN / 3 TIMES</td>
          </tr>
        </tbody>
      </table>
        `;
  } else if (type === 0) {
    return `
      <table class="bold">
          <tbody>
            <tr>
              <td>
                Bike POST WORKOUT
                <span class="arabe-table color-red">اسبوع 1</span>
              </td>
              <td>20MIN / 3 TIMES</td>
            </tr>
            <tr>
              <td>
                Bike POST WORKOUT
                <span class="arabe-table color-red">اسبوع 1 و 2</span>
              </td>
              <td>30MIN / 4 TIMES</td>
            </tr>
            <tr>
              <td>
                Bike POST WORKOUT
                <span class="arabe-table color-red">اسبوع 3 و 4</span>
              </td>
              <td>35MIN / 4 TIMES</td>
            </tr>
            <tr>
              <td>
                Bike POST WORKOUT
                <span class="arabe-table color-red">اسبوع 5</span>
              </td>
              <td>45MIN / 4 TIMES</td>
            </tr>
            <tr>
              <td>
                Bike + ROPE JUMPING
                <span class="arabe-table color-red">اسبوع 6</span>
              </td>
              <td>BOTH 4 TIMES - BIKE 30min / ROPE 10MIN</td>
            </tr>
            <tr>
              <td>
                Bike + ROPE JUMPING
                <span class="arabe-table color-red">اسبوع 7 و 8</span>
              </td>
              <td>BOTH 4 TIMES - BIKE 35min / ROPE 15MIN</td>
            </tr>
            <tr>
              <td>
                Bike + ROPE JUMPING
                <span class="arabe-table color-red">اسبوع 9</span>
              </td>
              <td>BOTH 4 TIMES - BIKE 40min / ROPE 20MIN</td>
            </tr>
            <tr>
              <td>
                Bike + ROPE JUMPING
                <span class="arabe-table color-red">اسبوع 10 و 11 و 12</span>
              </td>
              <td>BOTH 4 TIMES - BIKE 45min / ROPE 35MIN</td>
            </tr>
          </tbody>
        </table>
      `;
  }
}

function trainingPlan(sexe, type) {
  if (sexe === 0) {
    //خطة رجال
    if (type === 0) {
      return `
        <div class="break">
        <div class="bold" style="margin: 10px 0">DAY1: LEGS AND CALVES</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Legs extensions</td>
              <td>4 sets (20-15-15-12)</td>
            </tr>
            <tr>
              <td>Hack squats</td>
              <td>4 sets (20-15-12-10)</td>
            </tr>
            <tr>
              <td>Leg press</td>
              <td>4 sets (20-15-15-15)</td>
            </tr>
            <tr>
              <td>Lying Leg curls</td>
              <td>(15-12-12-12)</td>
            </tr>
            <tr>
              <td>Standing calves raises</td>
              <td>(20-15-12-10-10)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY2: SHOULDERS AND BICEP</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cables side raises</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>seated Rear db raises</td>
              <td>4 sets (15-12-10-08)</td>
            </tr>
            <tr>
              <td>reverse peck deck</td>
              <td>3 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>Front Machine press</td>
              <td>3 sets (12-10-08)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY3: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY4: BACK</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cable pull over</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>T bar row</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>db row</td>
              <td>3 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>lat pull down</td>
              <td>4 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>hyper extension</td>
              <td>3 sets (15-12-12)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY5: CHEST AND TRICEPS</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cable flies</td>
              <td>5 sets (25-20-15-15-12)</td>
            </tr>
            <tr>
              <td>Incline smith machine press</td>
              <td>4 sets (15-12-12-10)</td>
            </tr>
            <tr>
              <td>Flat smith machine press</td>
              <td>4 sets (15-12-12-10)</td>
            </tr>
            <tr>
              <td>Peck deck</td>
              <td>3 sets (20-15-12)</td>
            </tr>
            <tr>
              <td>Decline bb press</td>
              <td>3 sets (15-12-12)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY6: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY7: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>
        `;
    } else if (type === 1) {
      //رجال متوسط
      return `<div class="break">
        <div class="bold" style="margin: 10px 0">DAY1: LEGS AND CALVES</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Legs extensions</td>
              <td>4 sets (20-15-15-12)</td>
            </tr>
            <tr>
              <td>Hack squats</td>
              <td>4 sets (20-15-12-10)</td>
            </tr>
            <tr>
              <td>Leg press</td>
              <td>4 sets (20-15-15-15)</td>
            </tr>
            <tr>
              <td>Adductor machine</td>
              <td>3 sets (20-15-15) or Jefferson squat</td>
            </tr>
            <tr>
              <td>Lying Leg curls</td>
              <td>(15-12-12-12)</td>
            </tr>
            <tr>
              <td>Standing calves raises</td>
              <td>(20-15-12-10-10)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY2: SHOULDERS AND BICEP</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cables side raises</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>seated Rear db raises</td>
              <td>4 sets (15-12-10-08)</td>
            </tr>
            <tr>
              <td>reverse peck deck</td>
              <td>3 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>Front Machine press</td>
              <td>3 sets (12-10-08)</td>
            </tr>
            <tr>
              <td>
                Front ez bar raises superset with standing db side raises.
              </td>
              <td>3 sets (12-10-08)</td>
            </tr>
            <tr>
              <td>HEAVY EZ BAR CURL</td>
              <td>4 sets (15-12-10-08)</td>
            </tr>
            <tr>
              <td>INCLINE DB CURLS</td>
              <td>3 sets (15-12-12)</td>
            </tr>
            <tr>
              <td>REVERSE BAR CURL</td>
              <td>3 sets (15-12-12)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY3: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY4: BACK</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cable pull over</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>T bar row</td>
              <td>4 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>db row</td>
              <td>3 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>lat pull down</td>
              <td>4 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>hyper extension SUPERSET with DEADLIFT</td>
              <td>3 sets (15-12-12)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY5: CHEST AND TRICEPS</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Cable flies</td>
              <td>5 sets (25-20-15-15-12)</td>
            </tr>
            <tr>
              <td>Incline smith machine press</td>
              <td>4 sets (15-12-12-10)</td>
            </tr>
            <tr>
              <td>Flat smith machine press</td>
              <td>4 sets (15-12-12-10)</td>
            </tr>
            <tr>
              <td>Peck deck</td>
              <td>3 sets (20-15-12-12)</td>
            </tr>
            <tr>
              <td>Incline machine press</td>
              <td>3 sets (15-12-10)</td>
            </tr>
            <tr>
              <td>Decline bb press</td>
              <td>3 sets (15-12-12)</td>
            </tr>
            <tr>
              <td>Rope pushdowns</td>
              <td>4 sets (12-12-12-10)</td>
            </tr>
            <tr>
              <td>Ez PUSHDOWNS</td>
              <td>3 sets (12-10-10)</td>
            </tr>
            <tr>
              <td>Over head db extension</td>
              <td>4 sets (12-12-10-08)</td>
            </tr>
            <tr>
              <td>REVERSE PUSHDOWN</td>
              <td>3 SETS (15-12-10)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY6: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY7: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>`;
    } else if (type === 2) {
      //رجال متقدم
      return `
        <div class="break">
        <div class="bold" style="margin: 10px 0">DAY1: LEGS AND CALVES</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Legs extensions</td>
              <td>
                8 sets, 15, 12, 12, 10, 10, 8, 8 ,8,8
                <span class="color-red">Max weight 75%</span>
              </td>
            </tr>
            <tr>
              <td>SQUAT OR HACK SQUAT</td>
              <td>
                4 sets 15, 12, 12, 10
                <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
            <tr>
              <td>LYING LEG CURLS</td>
              <td>
                5 sets 20,15, 12, 12, 10
                <span class="color-red">Max weight 80%</span>
              </td>
            </tr>
            <tr>
              <td>DB LEG DEADLIFT</td>
              <td>Only 2 sets <span class="color-red">Max weight 70%</span></td>
            </tr>
            <tr>
              <td>JEFFERSON SQUAT</td>
              <td>
                3 SETS 15, 12, 12 <span class="color-red">Max weight 70%</span>
              </td>
            </tr>
            <tr>
              <td>CALVE RAISES</td>
              <td>
                5 sets 25,20,15,12,10
                <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY2: Back &amp; Biceps</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>T BAR ROWS OR BARBELL ROWS</td>
              <td>
                4 sets 15, 12, 12, 10
                <span class="color-red">Max weight 80%</span>
              </td>
            </tr>
            <tr>
              <td>DUMBBELL ROWS</td>
              <td>
                3 sets 15, 12, 10 <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>PULL OVER</td>
              <td>
                3 sets 20, 15 , 15<
                <span class="color-red">Max weight 75%</span>
              </td>
            </tr>

            <tr>
              <td>LAT PULLDOWNS</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>V-GRIP PULLDOWNS</td>
              <td>
                3 sets 20, 15 , 12 <span class="color-red">Max weight 75%</span>
              </td>
            </tr>
            <tr>
              <td>REAR PECK DECK</td>
              <td>
                3 sets 15, 12 , 10 <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
            <tr>
              <td>HYPER EXTENSION WITH WEIGHTS OR DEADLIFT</td>
              <td>
                3 sets 15, 12 , 10 <span class="color-red">Max weight 80%</span>
              </td>
            </tr>
            <tr>
              <td>DB SHRUGS</td>
              <td>
                3 sets 15, 12 , 10 <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
            <tr>
              <td>DB CONCENTRATION CURL</td>
              <td>
                4 sets 20, 15 , 15, 12
                <span class="color-red">Max weight 75%</span>
              </td>
            </tr>
            <tr>
              <td>STANDING CABLE EZ CURL</td>
              <td>
                3 sets 15, 12 , 10 <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>INCLINE DB CURL + REVERSE BAR CURL</td>
              <td>
                3 sets 15, 12 , 10 <span class="color-red">Max weight 80%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY3: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY4: CHEST AND TRICEPS</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>FLAT CHEST PRESS MACHINE</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 75%</span>
              </td>
            </tr>
            <tr>
              <td>INCLINE BB PRESS</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>CABLE FLIES</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 80%</span>
              </td>
            </tr>
            <tr>
              <td>DECLINE PRESS</td>
              <td>
                3 sets 20, 15, 10
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>INCLINE DB PRESS + FLAT DB PRESS</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 75%</span>
              </td>
            </tr>
            <tr>
              <td>EZ BAR PUSHDOWN</td>
              <td>
                3 sets 25, 20, 15
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>SINGLE ARM EXTENSION</td>
              <td>
                3 sets 25, 20, 15
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>CABLE KICK BACK</td>
              <td>
                3 sets 25, 20, 15
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY5: SHOULDERS AND BICEPS
        </div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>SINGLE LATERAL RAISES WITH CABLE</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 70%</span>
              </td>
            </tr>
            <tr>
              <td>SHOULDER PRESS, EITHER DUMBBELL OR BAR</td>
              <td>
                4 sets 20, 15, 12, 10
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>DUMBBELL LATERAL RAISE</td>
              <td>
                3 sets 20, 15, 12
                <span class="color-red"
                  >Max weight 80% + 3 Drop sets here on the last max set</span
                >
              </td>
            </tr>
            <tr>
              <td>BENT OVER DUMBBELL RAISES</td>
              <td>
                4 sets 20, 15, 10, 08
                <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
            <tr>
              <td>FRONT CABLE EZ RAISES</td>
              <td>
                4 sets 20, 15, 12, 12
                <span class="color-red">Max weight 85%</span>
              </td>
            </tr>
            <tr>
              <td>REVERSE FLIES WITH MACHINE</td>
              <td>
                4 sets 20, 15, 10, 08
                <span class="color-red">Max weight 90%</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY6: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY7: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>
        `;
    } else if (type === 3) {
      // رجال خطة منزلية
      return `
        <div
        class="bold"
        style="font-size: 12pt; text-align: center; text-transform: uppercase"
      >
        <div>6 Days split</div>
        <div>(Start low intensity then every week add sets and reps)</div>
        <div>
          Push-pull-leg-<span class="color-red">rest day</span>-push-pull-legs
        </div>
      </div>
      <div class="break">
        <div class="bold" style="margin: 10px 0">PUSH</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">1.PUSH UPS 8X 35 , rest 30 sec</div>
          <div style="margin: 0 0 5pt 0">
            2.BANDED PUSH UPS 8 X 25 , rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            3.BANDED CHEST FLIES 6 X 30 , rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            4. BANDED FRONT SHOULDER press 5x 25 , rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            5.BANDED SHOULDER SIDE RAISES 6X 25, rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            6.BANDED TRICEPS PUSHDOWNS 8 X 35 , rest 30 sec
          </div>
        </div>
      </div>

      <div
        class="break"
        style="
          background-color: #f7c4c4;
          padding: 10pt 10pt;
          width: fit-content;
        "
      >
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">PULL</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">
            1.BANDED LAT PULLDOWN 8X 25, rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            2.BANDED ROW OVERHAND 6X 35, rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            3.BANDED ROW UNDERHAND 6X 35 , rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            4.BENT OVER BANDED REAR RAISES 6X25, rest 30 sec
          </div>
          <div style="margin: 0 0 5pt 0">
            5.BICEP BANDED CURLS 8X30 , rest 30 sec
          </div>
        </div>
      </div>

      <div
        class="break"
        style="
          background-color: #f7c4c4;
          padding: 10pt 10pt;
          width: fit-content;
        "
      >
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">LEGS</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">
            1.close stance squats 8 x 35reps , rest 30 sec.
          </div>
          <div style="margin: 0 0 5pt 0">
            2. front squat with bands 8 x 30-30-25-25-20-20-25 , rest 30 sec .
          </div>
          <div style="margin: 0 0 5pt 0">
            3. pistol squat 6 x 25-25-20-20-20-15, rest 30 sec.
          </div>
          <div style="margin: 0 0 5pt 0">
            4. lying leg curl with a band 5 x 25-25-20-20-15, rest 30 sec.
          </div>
          <div style="margin: 0 0 5pt 0">
            5.band claves raises 5 x 30-25-25-20-20 , rest 30 sec
          </div>
        </div>
      </div>
        `;
    }
  } else if (sexe === 1) {
    // خطة نساء
    if (type === 0) {
      // مبتدأ
      return `
        <div class="break">
        <div class="bold" style="margin: 10px 0">SAMEDI: LEGS AND CALVES</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>lying hamstring curl</td>
              <td>4 sets of 25-20-15-12</td>
            </tr>
            <tr>
              <td>Hack squat Machine</td>
              <td>4 sets 25-20-15-12</td>
            </tr>
            <tr>
              <td>Leg extension</td>
              <td>3 sets of 20-15-12</td>
            </tr>
            <tr>
              <td>abductor machine</td>
              <td>3 sets of 15–20</td>
            </tr>
            <tr>
              <td>ADDUCTOR MACHINE</td>
              <td>3 sets 15-20</td>
            </tr>
            <tr>
              <td>Glute kick back machine</td>
              <td>3 sets of 15–20 (Glutes)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          Dimanche: SHOULDERS, CHEST &amp;TRICEPS
        </div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Pushups on knees</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Bench press with dumbbells</td>
              <td>3 sets 25-20-18</td>
            </tr>
            <tr>
              <td>Incline bench press with dumbbells</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Triceps kickback with dumbbells</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Triceps cable push down</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Alternating front deltoid raises</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Pec Deck Machine – Reverse Flyes</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Seated lateral raise with dumbbells</td>
              <td>3 sets of 25-20-18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          LUNDI: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          MARDI: BACK, BICEPS, and ABS
        </div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Lat Pull down</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Seated Machine row</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Seated cable row</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Hyperextension</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Hammer curl with dumbbells</td>
              <td>3 sets of 25-20-18</td>
            </tr>
            <tr>
              <td>Alternate dumbbell curl</td>
              <td>3 sets of 25-20-18</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          MERCREDI: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          JEUDI: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          VENDREDI: <span class="color-red">REPEAT THE WEEK</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • End with 5–10 minutes of stretching
        </div>
      </div>

        `;
    } else if (type === 1) {
      //متوسط خطة
      return `
      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY1: LOWER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>squats</td>
              <td>6 sets of 12 reps</td>
            </tr>
            <tr>
              <td>Single leg extensions</td>
              <td>3x25 squeeze hard on each rep</td>
            </tr>
            <tr>
              <td>
                Wide stance leg press superset with close stance leg press
              </td>
              <td>20 reps each for 4 sets</td>
            </tr>
            <tr>
              <td>Dumbbell walking lunges</td>
              <td>4x15 each leg</td>
            </tr>
            <tr>
              <td>Seated calf raises</td>
              <td>8x25</td>
            </tr>
            <tr>
              <td>Standing calf raises</td>
              <td>4x25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY2: HIGHER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>dumbbell side lateral raises</td>
              <td>7x12</td>
            </tr>
            <tr>
              <td>Plate front raises</td>
              <td>5x10</td>
            </tr>
            <tr>
              <td>Incline dumbbell curl</td>
              <td>4x16</td>
            </tr>
            <tr>
              <td>Rope pushdown</td>
              <td>4x16</td>
            </tr>
            <tr>
              <td>Dumbbell hammer curl</td>
              <td>4x16</td>
            </tr>
            <tr>
              <td>Leg raises</td>
              <td>4x25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY3: LOWER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>laying leg curl( single leg)</td>
              <td>4x14</td>
            </tr>
            <tr>
              <td>Hack squats</td>
              <td>6x14</td>
            </tr>
            <tr>
              <td>Barbell front squats</td>
              <td>5x10</td>
            </tr>
            <tr>
              <td>Leg extension</td>
              <td>4x12</td>
            </tr>
            <tr>
              <td>Glute kickback</td>
              <td>7x20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY4: HIGHER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>lat pull down</td>
              <td>4x15</td>
            </tr>
            <tr>
              <td>Two arm dumbbell row</td>
              <td>4x12</td>
            </tr>
            <tr>
              <td>Dumbbell rear delts raises</td>
              <td>6x15</td>
            </tr>
            <tr>
              <td>Barbell deadlift</td>
              <td>6x12</td>
            </tr>
            <tr>
              <td>Back hyperextensions</td>
              <td>3x25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY5: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY6: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • End with 5–10 minutes of stretching
        </div>
      </div>
      `;
    } else if (type === 2) {
      // متقدم
      return `
      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY1: LOWER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>laying leg curl</td>
              <td>4 sets of 16-14-12-12</td>
            </tr>
            <tr>
              <td>Reverse lunges</td>
              <td>4 sets of 16-14-12-10</td>
            </tr>
            <tr>
              <td>Barbell front squats</td>
              <td>5 sets of 14-12-12-10-10</td>
            </tr>
            <tr>
              <td>Leg extensions</td>
              <td>5 sets of 14-12-12-10-10</td>
            </tr>
            <tr>
              <td>Leg press (close feet)</td>
              <td>5 sets of 14-12-12-10-10</td>
            </tr>
            <tr>
              <td>Seated calf raises</td>
              <td>6 sets of 25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY2: HIGHER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>lat pull down</td>
              <td>4 sets of 15-12-12-12</td>
            </tr>
            <tr>
              <td>Underhand seated cable row (shoulder width)</td>
              <td>5 sets of 16-14-12-12-10</td>
            </tr>
            <tr>
              <td>Barbell deadlift</td>
              <td>4 sets of 16-14-12-12</td>
            </tr>
            <tr>
              <td>Dumbbell rear delt raises</td>
              <td>4 sets of 16-14-12-12</td>
            </tr>
            <tr>
              <td>Dumbbell side lateral raises</td>
              <td>4 sets of 4 sets of 16-14-12-12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY3: LOWER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Front squats</td>
              <td>4 sets 15-12-12-12</td>
            </tr>
            <tr>
              <td>Leg press</td>
              <td>5 sets 15-12-12-12-10</td>
            </tr>
            <tr>
              <td>Leg extensions</td>
              <td>3x25 squeeze at the top for 2 seconds</td>
            </tr>
            <tr>
              <td>Hack squats</td>
              <td>4x20</td>
            </tr>
            <tr>
              <td>Seated calve raises</td>
              <td>4x25</td>
            </tr>
            <tr>
              <td>Leg raises</td>
              <td>4x25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">DAY4: HIGHER BODY</div>
        <table class="bold">
          <tbody>
            <tr>
              <td>Exercise Name</td>
              <td>N° of sets – reps + notes</td>
            </tr>
            <tr>
              <td>Dumbbell chest press</td>
              <td>4 sets 15-12-12-12</td>
            </tr>
            <tr>
              <td>standing cable curl</td>
              <td>4 sets 15-12-12-12</td>
            </tr>
            <tr>
              <td>Rope triceps pushdown</td>
              <td>4 sets 15-12-12-12</td>
            </tr>
            <tr>
              <td>Dumbbell hammer curl</td>
              <td>4 sets 15-12-12-10</td>
            </tr>
            <tr>
              <td>Rope crunches</td>
              <td>3x20</td>
            </tr>
            <tr>
              <td>Arnold press</td>
              <td>4x25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY5: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">
          DAY6: <span class="color-red">REST DAY</span>
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 16pt 0">
          ABS/ 4 Times a week except for leg day
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • leg raises: 2 sets of 20 (abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • End with 5–10 minutes of stretching
        </div>
      </div>
      `;
    } else if (type === 3) {
      // منزلي
      return `
      
      <div class="break">
        <div class="bold" style="margin: 10px 0">PUSH</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">1. PUSH UPS (on your knees) 4X 35</div>
          <div style="margin: 0 0 5pt 0">
            2. BANDED CHEST FLIES 5 X 30
          </div>
          <div style="margin: 0 0 5pt 0">
            3. BANDED FRONT SHOULDER press 4x 25
          </div>
          <div style="margin: 0 0 5pt 0">
            4. BANDED SHOULDER SIDE RAISES 4X 25
          </div>
          <div style="margin: 0 0 5pt 0">
            5. BANDED TRICEPS PUSHDOWNS 6 X 35
          </div>
         
        </div>
      </div>

      <div
        class="break"
        style="
          background-color: #f7c4c4;
          padding: 10pt 10pt;
          width: fit-content;
        "
      >
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">PULL</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">
            1. BANDED LAT PULLDOWN 4X 35
          </div>
          <div style="margin: 0 0 5pt 0">
            2. BANDED ROW OVERHAND 4X 35
          </div>
          <div style="margin: 0 0 5pt 0">
            3. BANDED ROW UNDERHAND 4X 35
          </div>
          <div style="margin: 0 0 5pt 0">
            4. BENT OVER BANDED REAR RAISES 3X 20
          </div>
          <div style="margin: 0 0 5pt 0">
            5. BICEP BANDED CURLS 6X 30
          </div>
        </div>
      </div>

      <div
        class="break"
        style="
          background-color: #f7c4c4;
          padding: 10pt 10pt;
          width: fit-content;
        "
      >
        <div class="bold" style="margin: 0 0 5pt 0">
          • Crunches on floor: 2 sets of 30 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • abs machine : 2 sets of 20 (Abs)
        </div>
        <div class="bold" style="margin: 0 0 5pt 0">
          • Plank: 3 sets of 20 seconds (timed) (Abs)
        </div>
      </div>

      <div class="break">
        <div class="bold" style="margin: 10px 0">LEGS</div>
        <div class="bold" style="font-size: 10pt">
          <div style="margin: 0 0 5pt 0">
            1.close stance squats 6 x 35reps
          </div>
          <div style="margin: 0 0 5pt 0">
            2. front squat with bands 8 x 30-30-25-25-20-20-25
          </div>
          <div style="margin: 0 0 5pt 0">
            3. pistol squat or lunges with a weight on your hand 6 x 25-25-20-20-20-15.
          </div>
          <div style="margin: 0 0 5pt 0">
            4. lying leg curl with a band 5 x 25-25-20-20-15
          </div>
          <div style="margin: 0 0 5pt 0">
            5. band claves raises 5 x 30-25-25-20-20
          </div>
        </div>
      </div>
      `;
    }
  }
}

function supplement(type) {
  if (type === 1)
    // تضخيم
    return `
    <table class="bold">
          <tbody>
            <tr>
              <td>The supplement</td>
              <td>Timing</td>
            </tr>
            <tr>
              <td>2g Omega3 – Multivitamin vitamine c 1g - Probiotics</td>
              <td class="arabe-table">الوجبة الاولى</td>
            </tr>
            <tr>
              <td>Pre workout – vitamine c 1g</td>
              <td class="arabe-table">قبل التدريب ب 30 دقيقة</td>
            </tr>
            <tr>
              <td>10g of creatine – glutamine / 10g of bcaa – 25g whey iso</td>
              <td class="arabe-table">بعد الكارديو مباشرة</td>
            </tr>
            <tr>
              <td>Vitamine d3 3000iu – magnesium 500mg – cla 2g</td>
              <td class="arabe-table">قبل النوم</td>
            </tr>
          </tbody>
        </table>
    `;
  else if (type === 0)
    //تنشيف
    return `
        <table class="bold">
          <tbody>
            <tr>
              <td>The supplement</td>
              <td>Timing</td>
            </tr>
            <tr>
              <td>CLA 2G – PROBIOTICS</td>
              <td class="arabe-table">المشروب الصباحي</td>
            </tr>
            <tr>
              <td>2g Omega3 – Multivitamin- vitamine c 1g – test booster</td>
              <td class="arabe-table">الوجبة الاولى</td>
            </tr>
            <tr>
              <td>
                Pre workout – cla 2g – carnitine acytyle 2g – vitamine c 1g
              </td>
              <td class="arabe-table">قبل التدريب ب 30دقيقة</td>
            </tr>
            <tr>
              <td>10g of creatine – glutamine / 10g of bcaa – 25g whey iso</td>
              <td class="arabe-table">بعد الكارديو مباشرة</td>
            </tr>
            <tr>
              <td>Vitamine d3 3000iu – magnesium 500mg – cla 2g</td>
              <td class="arabe-table">قبل النوم</td>
            </tr>
          </tbody>
        </table>
    `;
}

module.exports = {
  cardioPlan,
  trainingPlan,
  supplement,
};
