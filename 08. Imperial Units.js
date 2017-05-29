function solve(n) {

    let feet = Math.floor( n/12  ) ;
    let inches = n % 12;

    console.log(`${feet}'-${inches}"`)

}
solve(11)
