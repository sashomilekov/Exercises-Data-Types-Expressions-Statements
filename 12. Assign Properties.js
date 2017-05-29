function solve(input) {
    let name = input[0];
    let age = input[2];
    let gender = input[4];



    let person = {};
    person[name] = input[1];
    person[age] = input[3];
    person[gender] = input[5];


    console.log(person);

}
solve(['bbb', 'Pesho', 'age', '23', 'gender', 'male'])