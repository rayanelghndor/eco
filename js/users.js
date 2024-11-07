
//  https://fakestoreapi.com/products >> Api Products 


let productsContainer = document.querySelector('#all-products');


let getProcuts = async function () {
  let temp = "";;
  let response = await fetch(`https://fakestoreapi.com/users`);
  let products = await response.json();

  for (product of products) {
    temp += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5><span class="badge text-bg-success">${product.email}</span>

    <p class="card-text">${product.username}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}
`

    productsContainer.innerHTML = temp;

  }
}
getProcuts();

