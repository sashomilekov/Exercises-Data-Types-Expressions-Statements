function solve(input) {
    let number = Number(input[0]);
    let index = Number(input[1]);

  //  let result =Math.round(number * 100)/100;

    let result = number.toFixed(index);

    console.log(result);
}
solve([3.144447567, 2]);