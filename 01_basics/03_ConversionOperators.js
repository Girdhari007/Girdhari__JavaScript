let score = "33"
console.log(typeof score);
console.log(typeof (score));

let value = Number(score)
console.log(typeof value);

score = "33abc"
value = Number(score)
console.log(value)

//"33" => 33
//"33abs" => NaN
//true => 1; false => 0
let sc = "girdh"
let boolsc = Boolean(sc)
console.log(boolsc);

// "hitesh" => true; "" => false
