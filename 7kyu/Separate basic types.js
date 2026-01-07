// ❓ DESCRIPTION
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

//     keep order of values like in input array
//     if type is not presented in input, no corresponding property are expected

// So, for this input:

// ['a', 1, 2, false, 'b']

// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }





// ✅ SOLUTION

function separateTypes(input) {
    const result = {
        number: [],
        string: [],
        boolean: []
    }

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
            result.number.push(input[i])
        } else if (typeof input[i] === 'string') {
            result.string.push(input[i])
        } else if (typeof input[i] === 'boolean') {
            result.boolean.push(input[i])
        }
    }

    const finalResult = {};
    if (result.number.length > 0) {
        finalResult.number = result.number;
    }
    if (result.string.length > 0) {
        finalResult.string = result.string;
    }
    if (result.boolean.length > 0) {
        finalResult.boolean = result.boolean;
    }

    return finalResult;
}


