let product = document.getElementById('product_value');
let productValue = parseInt(product.value);

let discount = document.getElementById('discount_value');
let discountValue = parseInt(discount.value);

let tax = document.getElementById('tax_value');
let taxValue = parseInt(tax.value);

let membership = document.getElementById('membership_value');
let membershipValue = parseInt(membership.value);

let priceResult = document.querySelector('.results__price-value');


window.onload = function () { 
    calculateFinalPrice()
}


// Updating product
product.addEventListener('input', ()=>{
    productValue = parseFloat(product.value);
    calculateFinalPrice()
});

// Updating discount
discount.addEventListener('input', ()=>{
    discountValue = parseFloat(discount.value);
    document.getElementById('discount_lbl').innerHTML = "Discount "+discountValue+"%";
    calculateFinalPrice()
});

// Updating tax
tax.addEventListener('input', ()=>{
    taxValue = parseFloat(tax.value);
    document.getElementById('tax_lbl').innerHTML = "Tax "+taxValue+"%";
    calculateFinalPrice()
});

// Updating product
membership.addEventListener('input', ()=>{
    membershipValue = parseFloat(membership.value);
    document.getElementById('membership_lbl').innerHTML = "Membership discount "+membershipValue+"%";
    calculateFinalPrice()
});


// Reset
let resetBtn = document.querySelector('.result-section__reset');
resetBtn.addEventListener('click', ()=>{
    product.value = 0;
    productValue = 0;
    discount.value = 0;
    discountValue = 0;
    document.getElementById('discount_lbl').innerHTML = "Discount "+discountValue+"%";
    tax.value = 0;
    taxValue = 0;
    document.getElementById('tax_lbl').innerHTML = "Tax "+taxValue+"%";
    membership.value = 0;
    membershipValue = 0;
    document.getElementById('membership_lbl').innerHTML = "Membership discount "+membershipValue+"%";
    calculateFinalPrice();
});

function calculateFinalPrice(){
    let finalPrice = productValue;

    // Discount first
    finalPrice = finalPrice*(100-discountValue)/100

    // Then membership
    finalPrice = finalPrice*(100-membershipValue)/100

    //Then tax
    finalPrice = finalPrice*(100+taxValue)/100


    priceResult.innerText = Math.round(finalPrice)+"$";

}


