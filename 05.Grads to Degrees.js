function solve(grads) {

    let fullgrads = grads % 400;

    let degrees = fullgrads * 0.9;

    if(degrees < 0 ){
        console.log((360 + degrees) % 360);
    }
    else{
        console.log(degrees % 360);
    }


}

solve(400);