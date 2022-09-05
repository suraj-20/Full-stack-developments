
function validateCard(card){
    const newPromise = new Promise((resolve, reject) => {
        if(card){
            setTimeout(() => {
                resolve("Card is valid");
            }, 2000);
        }else{
            reject("Card is invalid");
        }
    });
    return newPromise;
}

async function getCardDetails(card){
    try{
        var x = await validateCard("dummy");
    }catch(reject){
        console.log(reject);
    }
    console.log(x);
    if(x){
        deductAmount(x);
        printData();
    }
}

function deductAmount(amount){
    console.log("Amount is deducted ")
}

function printData(){
    console.log("Printing Data");
}

getCardDetails();