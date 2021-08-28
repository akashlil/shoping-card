
// function InncreaseDercres(productId,inndres,priceProduct) {
//     let productQunticetext = document.getElementById(productId+"-number");
//     let productQuntice = productQunticetext.value;
//     if (inndres==true) {
//          productQuntice = parseInt(productQuntice) + 1;
//     } else if (parseInt(productQuntice) > 0) {
//          productQuntice = parseInt(productQuntice) - 1;
//     }
//     productQunticetext.value = productQuntice;
//     let productAmount =  productQuntice* priceProduct;
//     document.getElementById(productId + "-price").innerText = productAmount;
//     sumCalcutor()
// }

// function productQunticeAmount(productId,priceProduct) {
//     let productQunticeText = document.getElementById(productId + "-number");
//     let productQunticeNumber = parseInt(productQunticeText.value);
//     let result = productQunticeNumber * priceProduct;
//     return result;
//   }
// function sumCalcutor() {
//     let sumsubTotal = productQunticeAmount("phone",1219) + productQunticeAmount("case",59);
//     document.getElementById("sub-amount-id").innerText = sumsubTotal;
// }

// document.getElementById("phone-btn-plus").addEventListener("click", function () {
//     InncreaseDercres('phone',true,1219)
// })
// document.getElementById("phone-btn-minus").addEventListener("click", function () {
//     InncreaseDercres('phone',false,1219)
// })



// document.getElementById("case-btn-plus").addEventListener("click", function () {
//     InncreaseDercres('case',true,59)
// })
    
// document.getElementById("case-btn-minus").addEventListener("click", function () {
//     InncreaseDercres('case',false,59)
// })
    

function incresdecres(increse,priceOnePices,idBand) {
    const allinput = document.getElementById(idBand + "-number");
    let countNumber = allinput.value;

    if (increse == true) {
        countNumber=parseInt(countNumber) + 1;
    } else if(countNumber > 0) {
        countNumber =parseInt(countNumber) - 1;
    }
    allinput.value = countNumber ;
        // phone price total
    const onePice = document.getElementById(idBand + "-price");
    const totalPrice = countNumber * priceOnePices;
    onePice.innerText = totalPrice;
    allbuysamount();
}
function allbuy(product){
    let caseprice = document.getElementById(product+"-price").innerText;
    let price = parseInt(caseprice)
    return price;
}
function allbuysamount() {
    let totalSubamount = allbuy("case") + allbuy("phone");
    let taxAmount = totalSubamount / 10;
    let buyAllProduct = totalSubamount + taxAmount;

    document.getElementById("sub-amount-id").innerText = totalSubamount;
    document.getElementById("tax-id").innerText = taxAmount;
    document.getElementById("total-amount").innerText = buyAllProduct;
}
// case
document.getElementById("case-btn-plus").addEventListener("click", function () {
    incresdecres(true,59,"case")
})
document.getElementById("case-btn-minus").addEventListener("click", function () {
    incresdecres(false,59,"case")
})

// phone
document.getElementById("phone-btn-plus").addEventListener("click", function () {
    incresdecres(true,1219,"phone")
})

document.getElementById("phone-btn-minus").addEventListener("click", function () {
    incresdecres(false,1219,"phone")
})