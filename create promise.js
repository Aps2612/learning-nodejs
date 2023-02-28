const cart = ["shoes", "pants","car"];



const promise = createOrder(cart);


// promise
// .then((NUM)=> proceedtoPayment(NUM))
// .catch(function (err){
//     console.log(err)
// }); 


// promise.then(function(orderID){
//     proceedtoPayment(orderID);
// });


//PROMISE CHAINING

createOrder(cart)
.then(function (orderID){
     console.log(orderID);
     return proceedtoPayment(orderID);
})
.then(function proceedtoPayment(paymentinfo){
    console.log(paymentinfo);
    return showOrderSummary(paymentinfo);
})
.then(function showOrderSummary(wallet){
    console.log(wallet);
})
.catch(function (err){
    alert(err.message);
});   









// chart.forEach((item)=>console.log(item));


////PRoducer

//  1 step
/*function createOrder(cart){
      
    const pr = ...;

    return pr;
    
}*/

//2 step

function createOrder(cart){
      
    const pr = new Promise(function(resolve,reject){
        // console.log(pr);
        //logic to handle reject case
        //suppose the cart is not valid we will throw an error
        //how to do that
        if(!validatedCart(cart)){
          const err = new Error("cart is not validated");
          reject(err);
        }
        //above part shoes how to handle reject case of promise
        //reject will throw an error
        else{
            const orderID="a4d4";
            if(validorderID(orderID)){
                setTimeout(()=>{
                    resolve(orderID);
                },5000);
            }

        }
        //else part shows resolve case of promise
        //resolve will return an order id here
    });

    return pr;
    
}


function proceedtoPayment(orderID){
    const pr = new Promise(function(resolve,reject){

        if(!validpaymentID(orderID)){
            const err = new Error('proceed to payment was not successful');
            reject(err);
        }
        else{
            const paymentinfo = 500;
            setTimeout(()=>{
                resolve(paymentinfo);
            },5000);
        }
    });
    return pr;
};

function showOrderSummary(paymentinfo){

    const pr=new Promise(function(resolve,reject){
        if(!validordersummary(paymentinfo)){
           const err = new Error("not able to provide ordersummary");
           reject(err);
        }
        else{
            const wallet = 1000;
            setTimeout(()=>{
               resolve(wallet);
            },5000);
            // resolve(wallet);
        }
    })

    return pr;

}

function validatedCart(cart){
    return true;
}

function validorderID(orderID){
    return true;
}

function validpaymentID(orderID){
    //write logic for valid payment id
    return true;
}

function validordersummary(wallet){
    return false;
}

