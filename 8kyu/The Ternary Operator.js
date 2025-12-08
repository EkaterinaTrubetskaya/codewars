// ❓ DESCRIPTION
// You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

//     If the age is 12 or lower, it return "You're a(n) kid"
//     If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
//     If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
//     If the age is 65 or above, it return "You're a(n) elderly"

// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.



// ✅ SOLUTION

function describeAge(age) {
    let a = "You're a(n)"
    if (age <= 12) {
        return `${a} kid`;
    } else if (age >= 13 && age <= 17) {
        return `${a} teenager`;
    } else if (age >= 18 && age <= 64) {
        return `${a} adult`;
    } else {
        return `${a} elderly`;
    }
}

function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}

