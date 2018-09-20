var handleCounter = function(result){
    console.log('The callback count is ' + result);
}

var count = 0
var callBackLoop = function(count, handleCounter){
    for(i = 0; i <=result; i++){
        console.log()
        if(count == handleCounter){
            console.log('*** exiting callbackLoop *****')
        }
    }
}

callBackLoop(5, handleCounter);
callBackLoop(1, handleCounter);
callBackLoop(7, handleCounter); 

/*
var count = 0
var callBackLoop = function(count, handleCounter){
    for(i = 0; i <=count; i++){
        console.log(handleCounter + count);
        if(count == handleCounter){
            console.log('*** exiting callbackLoop *****')
        }
    }
}
*/