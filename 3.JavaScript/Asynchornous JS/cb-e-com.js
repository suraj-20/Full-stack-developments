
function getCardDetails(card){
    validateCard(card, deductAmount, handleError);
}

function deductAmount(amount){
    console.log("Amount is deducted")
}

function handleError(err){
    console.log("Some error occours "+err);
}

function validateCard(card, deductAmount, errorCB){
    setTimeout(() => {
        console.log("Validating");
        deductAmount();
        deductAmount();
        try{
            throw new Error("Error");
        }catch(err){
            errorCB(err);
        }
    }, 2000);
}

getCardDetails();