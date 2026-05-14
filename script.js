// Function to switch pages
function showPage(pageId){

    // Select all pages
    let pages =
    document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page){

        page.style.display = "none";

    });

    // Show selected page
    document.getElementById(pageId)
    .style.display = "block";
}

// BMI Calculator Function
function calculateBMI(){

    // Gets height input
    let height =
    document.getElementById("height").value;

    // Gets weight input
    let weight =
    document.getElementById("weight").value;

    // Validation
    if(height === "" ||
       weight === "" ||
       height <= 0 ||
       weight <= 0){

        alert("Please enter valid height and weight.");

        return;
    }

    // BMI Formula
    let bmi =
    weight / (height * height);

    // Result Message
    let message = "";

    // BMI Conditions
    if(bmi < 18.5){

        message = "Underweight";
    }

    else if(bmi >= 18.5 && bmi < 25){

        message = "Normal Weight";
    }

    else if(bmi >= 25 && bmi < 30){

        message = "Overweight";
    }

    else{

        message = "Obese";
    }

    // Display BMI Result
    document.getElementById("result")
    .innerHTML =

    "Your BMI is " +
    bmi.toFixed(2) +
    " (" + message + ")";
}

// Weight Gain Function
function weightGain(){

    // Gets weight
    let weight =
    document.getElementById("weight").value;

    // Validation
    if(weight === "" || weight <= 0){

        alert("Please enter valid weight.");

        return;
    }

    // Calories for weight gain
    let calories =
    weight * 40;

    // Display Result
    document.getElementById("calorie-result")
    .innerHTML =

    "For Weight Gain you need approximately " +
    calories +
    " calories per day.";
}

// Weight Loss Function
function weightLoss(){

    // Gets weight
    let weight =
    document.getElementById("weight").value;

    // Validation
    if(weight === "" || weight <= 0){

        alert("Please enter valid weight.");

        return;
    }

    // Calories for weight loss
    let calories =
    weight * 25;

    // Display Result
    document.getElementById("calorie-result")
    .innerHTML =

    "For Weight Loss you need approximately " +
    calories +
    " calories per day.";
}

// Workout Plan Function
function showWorkout(day){

    // Variable for workout
    let workout = "";

    // Workout Plans
    if(day === "monday"){

        workout =
        "Monday - Chest Day: Bench Press, Push-ups, Incline Press";
    }

    else if(day === "tuesday"){

        workout =
        "Tuesday - Back Day: Pull-ups, Deadlift, Barbell Rows";
    }

    else if(day === "wednesday"){

        workout =
        "Wednesday - Shoulder Day: Shoulder Press, Lateral Raises";
    }

    else if(day === "thursday"){

        workout =
        "Thursday - Arm Day: Bicep Curls, Tricep Pushdown";
    }

    else if(day === "friday"){

        workout =
        "Friday - Leg Day: Squats, Lunges, Leg Press";
    }

    else if(day === "saturday"){

        workout =
        "Saturday - Abs and Cardio: Crunches, Planks, Running";
    }

    else{

        workout =
        "Sunday - Rest Day for Muscle Recovery";
    }

    // Display Workout
    document.getElementById("workout-plan")
    .innerHTML =

    "<h3>" + workout + "</h3>";
}

// Contact Form Function
function sendMessage(){

    // Gets values
    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    // Validation
    if(name.trim() === "" ||
       email.trim() === "" ||
       message.trim()  === ""){

        alert("Please fill all fields.");

        return;
    }

    // Success Popup
    alert("Your message has been sent successfully!");

    // Clear Inputs
    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";
}