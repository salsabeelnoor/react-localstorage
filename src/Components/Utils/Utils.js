// use local storage to store cart data

const addToLocalStorage = (id) => {
    let shoppingCart = {};
    
    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    else{
        shoppingCart = {};
    }



    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
        // localStorage.setItem(id, newQuantity)
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1) 
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const removeFromLocalStorage = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in storedCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }

    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToLocalStorage, removeFromLocalStorage, deleteShoppingCart}