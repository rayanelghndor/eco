
//  https://fakestoreapi.com/products >> Api Products 


let productsContainer = document.querySelector('#all-products');


let getProcuts = async function () {
  let temp = "";;
  let response = await fetch(`https://fakestoreapi.com/products `);
  let products = await response.json();

  for (product of products) {
    temp += `
        
<div class="card" class="m-5" style="width: 18rem;">
<img src="${product.image}" class="card-img-top" alt="...">
  <a (${product.id})>  <p class="card-text"></p></a>
<h5 class="card-title">${product.title}</h5>
<p class="card-text"><span class="badge text-bg-success">${product.price}</span></p>
<p class="card-text">${product.description}</p>
<p class="card-text">${product.category}</p>


  

<p class="card-text">${product.rating.rate}</p>
<p class="card-text">${product.rating.count}</p>

<d
<a onclick="addtocart(${product.id})" href="#" class="btn btn-primary">Button</a>
</div>

`


    productsContainer.innerHTML = temp;

  }
}

getProcuts();



function addtocart(index) {
  localStorage.setItem("clickproduct", index);
  location.href = "../datels.html";
  alert('hi')
}

