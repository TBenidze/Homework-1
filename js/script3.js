let a1 = 20
let b1 = 8
let c1 = "+"

calculate(a1,b1,c1)


function calculate(a1,b1,c1){
    if(typeof a1 != 'number' || typeof b1 != 'number'){
        console.log('false')
    }else if (c1 == "+"){
    console.log(a1+b1)
    } else if(c1 == "-"){
        console.log(a1-b1)
    }else if(c1 == "*"){
        console.log(a1*b1)
    }else if(c1 == "/"){
        console.log(a1/b1)
    }
}