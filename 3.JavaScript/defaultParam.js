// Default Parameter.
// You can use default value if value is not passed.

// Total Price = Cost of food + Dilivery Charge + Taxes.

function calculteTotalPrice(costOfFood, Taxes, diliveryCharges=10){
    const result = costOfFood + Taxes + diliveryCharges;
    console.log(result);
}

// For General MemberShip.
calculteTotalPrice(400, 20, 30);  // 450

// For Pro MemberShip.
calculteTotalPrice(400, 20);  // 430