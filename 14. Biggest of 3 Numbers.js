function solve(input) {

    let max = -1111111111111111;

    for ( let i = 0; i < input.length ; i++ ){
        if (input[i] > max ){
            max = input[i];
        }

    }

    console.log(max);
}

solve([130, 5 ,99]);