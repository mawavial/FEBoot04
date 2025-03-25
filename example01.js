const s = new Date().getSeconds();
setTimeout(function(){ 
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 2000)


while(true) { 
  if(new Date().getSeconds() - s >= 2) { 
    console.log("Good, looped for 2 seconds");
    break;
  }
}


const when = ()=>{
setTimeout(function(){
  console.log("Past");

}, 400) 
};


when();