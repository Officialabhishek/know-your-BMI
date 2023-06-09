function computeBMI() {
    var inputWeight = parseFloat(document.querySelector("#weight").value);
    var inputHeight = parseFloat(document.querySelector("#height").value);

    var age = document.querySelector("#age").value;
    // var gender = document.querySelectorAll(".form-check-input");

    // if ( gender.value == "Male") {
    //     gender.value = gender[0].value;
    // } else if ( gender.value == "Female") {
    //     gender.value = gender[1].value;
    // } else {
    //     gender.value = gender[2].value;
    // }



    // var selectOption1 = document.querySelectorAll(".optionValue1");
    // console.log(selectOption1);

    // if (selectOption1 == "cm") {
    //     inputHeight = ( inputHeight / 100 );
    // } else {
    //     inputHeight = inputHeight;
    // }

    // var selectOption2 = document.querySelectorAll(".optionValue2").value;

    // if (selectOption2 == "lbs") {
    //     inputWeight = ( inputWeight / 2.205 );
    // } else {
    //     inputWeight = inputWeight;
    // }


    // console.log(inputHeight);
    // console.log(inputWeight);

    var score = document.querySelectorAll("h1")[1];
    var category = document.querySelector("h4");


    var genNew = document.querySelector("#displayGender");
    var ageNew = document.querySelector("#displayAge");
    var heightNew = document.querySelector("#displayHeight");
    var weightNew = document.querySelector("#displayWeight");



    var result = document.querySelector("#result");

    if (inputWeight === "" || isNaN(inputWeight)) {
        result.innerHTML = "Please provide a valid weight!";
    }
    else if (inputHeight === "" || isNaN(inputHeight)) {
        result.innerHTML = "Please provide a valid height!";
    }
    else {
        let bmi = (inputWeight / Math.pow(inputHeight / 100, 2)).toFixed(2);

        score.innerHTML = bmi;

        if (bmi <= 18.5) {
            category.innerHTML = "Under Weight <p>POV: You need to gain weight!</p>";
        } else if (bmi <= 24.9 && bmi > 18.5) {
            category.innerHTML = "Normal Weight <p>POV: Badhai ho!!🎉</p>";
        } else if (bmi <= 29.9 && bmi >= 25) {
            category.innerHTML = "Over Weight <p>POV: You need to lose weight!</p>";
        } else {
            category.innerHTML = "Obesity <p>POV: No words to motivate you!";
        }

        // genNew.innerHTML = "Gender : " + gender.value;
        ageNew.innerHTML = "Age : " + age;
        heightNew.innerHTML = "Height : " + inputHeight;
        weightNew.innerHTML = "Weight : " + inputWeight;

        console.log(heightNew.innerHTML
        );

    }
}