//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    return Math.max(num1, num2)

}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    x = ((100 / possible) * score)
    if (x >= 89) {
        return "A"
    }
    else if (x >= 79) {
        return "B"
    }
    else if (x >= 69) {
        return "C"
    }
    else if (x >= 59) {
        return "D"
    }
    else {
        return "F"
    }


}


// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
    if (hour >= 22 || hour <= 4) {
        return "Good Night"
    }
    else if (hour >= 5 && hour <= 11) {
        return "Good Morning"
    }

    else if (hour >= 12 && hour <= 17) {
        return "Good Afternoon"
    }

    else if (hour >= 18 && hour <= 21) {
        return "Good Evening"
    }


}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {
    let low = "no fever";
    let high = "fever";
    let danger = " go to hospital";
    if (temp <= 98.6) {
        return low
    }
    else if (temp > 98.6 && temp < 103) {
        return high

    } else if (temp >= 103) {
        return high + danger

    }
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
    if (car.moving) {
        return false
    }
    return true
}



//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
    if (dish.yourDish && dish.isDirty) {
        return true
    }
    else {
        return false
    }

}