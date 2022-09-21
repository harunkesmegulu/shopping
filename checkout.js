const taxRate = 0.18;
const shippingPrice =15;
const shippingFreePrice =300;

window.addEventListener("load",()=>{
    //set items to local storege//
    localStorege.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("shippingFreePrice", shippingFreePrice);


    //set items to session storege//
    sessionStorege.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("shippingFreePrice", shippingFreePrice);

})