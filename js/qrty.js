var plusBT = document.querySelectorAll(".plus");
var minusBT = document.querySelectorAll(".minus");
var span = document.querySelectorAll(".span");
var confirmBT = document.querySelectorAll('.confirm');
var priceArr = document.querySelectorAll('.price ');
var pName = document.querySelectorAll(".name");
console.log(span.length);
localStorage.clear();
var prodArr=[i]


for (let i = 0; i < plusBT.length; i++) {
  plusBT[i].addEventListener('click', () => {
    var value = parseInt(span[i].textContent);
    value++;
    span[i].textContent = value;
    var prod = {
      name: pName[i].textContent,
      price: parseInt(priceArr[i].textContent),
      quantity: value
    }
    prodArr[i] = JSON.stringify(prod);
    localStorage.setItem("cart", JSON.stringify(prodArr));
  });
}

for (let i = 0; i < confirmBT.length; i++) {
  confirmBT[i].addEventListener('click', () => {
    var value = parseInt(span[i].textContent);
    var price = parseInt(priceArr[i].textContent);
    var total = value * price;
    alert("Total Price: " + total);
  });
}

var x = document.getElementById('total');
x.addEventListener('click', () => {
  window.location.href = "cart.html"
});

for (let i = 0; i < minusBT.length; i++) {
  minusBT[i].addEventListener('click', () => {
    var value = parseInt(span[i].textContent);
    if (value > 0) {
      value--;
      span[i].textContent = value;
      var prod = {
        name: pName[i].textContent,
        price: parseInt(priceArr[i].textContent),
        quantity: value
      }
      if (value == 0) {
        prodArr.splice(i, 1);
      } else {
        prodArr[i] = JSON.stringify(prod);
      }
      localStorage.setItem("cart", JSON.stringify(prodArr));
    }
  });
}