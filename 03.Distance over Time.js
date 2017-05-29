function solve(input) {

    let firstObjectSpeed = input[0];
    let secondObjectSpeed = Number(input[1]);
    let time = Number(input[2]);

    let firstObjectDistance = firstObjectSpeed * (time / 60 / 60);
    let secondObjectDistance = secondObjectSpeed * (time / 60 /60);

    let distance = (Math.abs(firstObjectDistance - secondObjectDistance))* 1000;

    console.log(distance);

}
solve([11, 10, 120]);
