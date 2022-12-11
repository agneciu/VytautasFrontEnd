
function calcBMR() {
    //reikia duomenu ugis,svoris, metai,lytis, aktyvumas
    //reikia pasiimti inputus ir issaugoti juos kaip kintamuosius
    const heightEl = document.querySelector("#height");
    console.log(heightEl);
  
    const weightEl = document.querySelector("#weight");
    console.log(weightEl);
  
    const ageEl = document.querySelector("#age");
    console.log(ageEl);
  
    const height = Number(heightEl.value);
    console.log(height);
  
    const weight = Number(weightEl.value);
    console.log(weight);
  
    const age = Number(ageEl.value);
    console.log(age);

  
    //  console.log(document.querySelector('input[name="gender"]:checked'));
  
    //  const gender = document.querySelector('input[name="gender"]:checked').value;
  
    const genderEl = document.querySelector('input[name="gender"]:checked');
  
    let gender;
  
    if (genderEl) {
      // alert("error");
      const gender = genderEl.value;
      console.log(gender);
    }
  
    const activityEl = document.querySelector('input[name="activity"]:checked');
  
    let activity;
  
    if (activityEl) {
      // alert("error");
      const activity = activityEl.value;
      console.log(activity);
    }
  
    const isHeightValid = height > 0;
    const isWeightValid = weight > 0;
    const isAgeValid = age > 0;
    const isGenderValid = "man" === gender || "female" === gender;
    console.log(isGenderValid);
  
    const isActivityValid = "sedentary" === activity || "light" === activity || "moderately" === activity || "very" === activity || "extra" === activity;
    console.log(isActivityValid);
  
    if (isWeightValid && isHeightValid && isAgeValid && isGenderValid && isActivityValid) {
      if (gender === "man") {
        const BMR = 66.5 + 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    } else {
      const BMR 
    }
  }