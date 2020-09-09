
var condition="negatie";
var promise=new Promise(function(resolve,reject){
    if(condition=='positive'){
        resolve("I am good");
    }
    else{
      reject("error");  
    }
});
promise.then(function(response){
 console.log("positive response")
}).catch(function(errorResponse){
  console.log("negative response")
});