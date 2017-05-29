function solve(input) {

    let p = input[0];
    var i = input[1]/100;
    var n = input[2];
    var t = input[3];

    var nt = n * t;

    var result = (1 + i / n);
    var lastresult = result ** nt;

    var F = p * lastresult;

    console.log(F);

}
solve([100000, 5, 12, 25]);