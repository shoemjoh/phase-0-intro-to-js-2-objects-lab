// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "165 W 20th",
};

//Update employee info with a new object, function.
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}

//Second function in lab.
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

//Third function in lab.
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

//Fouth function in lab.
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}