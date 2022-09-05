
function writeFile(cb ,cb2, err){
    setTimeout(() => {
        console.log("Writing Data");
        cb(cb2);
        console.error("Error");
    }, 10000);
}

// CallBack -> A function passed as a parameter to asynchronours function which is executed by asynchronous function after async tasks are completed.

function ack(cb){
    console.log("Data is written");
    cb();
}

function readFile(){
    setTimeout(() => {
        console.log("Reading file");
        printData();
    }, 2000);
}

function printData(){
    console.log("Printing Data");
}

function handleError(err){
    console.log(err);
}

writeFile(ack, readFile, handleError);
