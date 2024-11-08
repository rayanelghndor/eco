

var prodDiv = document.getElementById("prodDiv");

var prodArr = JSON.parse(localStorage.getItem("cart"));

prodArr.forEach(item => {
    item = JSON.parse(item);
    if (item != null) {
        var productTotalPrice = item.price * item.quantity;

        var newProduct = document.createElement("div");
        newProduct.classList.add("new-product");
        newProduct.innerHTML = `
            <h3>Name: ${item.name}</h3>
            <h4>Price: ${item.price}$</h4>
            <h5>Quantity:${item.quantity}</h5>
            
            <p>Total Price ${productTotalPrice}$:</p>
    
        `;
        prodDiv.appendChild(newProduct);
    }
});
