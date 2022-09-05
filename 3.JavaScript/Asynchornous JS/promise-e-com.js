
// Creating promise for third party API.

function validateCard(card){
    const newPromise = new Promise((resolve, reject) => {
        if(card){
            setTimeout(() => {
                resolve("Card is Valid");
            }, 2000);
        }else{
            reject("Card is invalid");
        }
    });
    return newPromise;
}

function getCardDetails(card){
    validateCard(card)
    .then(
        (resolve)=>{
            console.log(resolve);
            deductAmount();
        },  // Called when promise is resolved.
        (reject)=>{
            console.log(reject);
        },  // Called when promise is rejected.
        ()=>{
            console.log("Completed");
        }  // Called when promise is completed.
    )
}

// Using Promise Chaning.
function getCardDetails(card){
    validateCard(card)
    .then(
        (resolve)=>{
            console.log(resolve);
            return resolve;
        }
    )
    .then(
        ()=>{
            deductAmount();
            return;
        }
    ).catch(
        (reject)=>{
            console.log(reject);
        }
    )
}

function deductAmount(amount){
    console.log("Amount is deducted")
}

getCardDetails("2015 2016 2017");