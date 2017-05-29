function solve(input) {

    let day = input[0];
    let month = input[1];
    let year = input[2];

    let date = new Date(year , month -1 , day);

    let previousMonth = month - 1;

    if (month == 12 ){
        previousMonth = 1;
    }
    let finalDate = new Date(year, previousMonth , 0).getDate();



    console.log(finalDate);

}

solve([17, 3, 2002]);