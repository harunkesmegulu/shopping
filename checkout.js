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

});
const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event)=>{
    // console.log(event.target);//
    if(event.target.className == "fa-solid fa-minus"){
        // console.log("minus btn is click!");//
        if(event.target.parentElement.querySelector(".quantity").innerText > 1){
            event.target.parentElement.querySelector(".quantity").innerText--;

        }
        else{
            if(confirm("Product will be removed!")){
                //remove//
            }
        }
        
    }
    else if(event.target.classList.contains("fa-plus")){
        // console.log("plus btn is clicked!")
    }
    else if(event.target.className == "remove-product"){
        // console.log("remove btn is clicked!");
    }
    else{
        // console.log("other element is clicked!");
    }
})