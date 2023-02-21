let c = 15


ftoc(c)

function ftoc(c){
   if(typeof c =='number'){
     console.log((c-32)*5/9)
   }else{
    console.log("false")
   }
    
    
}