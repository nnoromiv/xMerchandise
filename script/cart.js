// const { ready } = require("jquery")

// var carts = document.querySelectorAll('.btn-1');

// var product = [
//     {
//         name:"Efo riro with semo",
//         tag:"eforiro",
//         price:50,
//         inCart:"0"
//     }
// ];




// for (var i=0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers(product[i]);
//     })
// }



if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-2')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', function(event) {
            var input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1
            }
              updateCartTotal()
        })        
    }
    
    var addToCartButtons = document.getElementsByClassName('btn-1')
     for (var i = 0; i < addToCartButtons.length; i++){
         var button = addToCartButtons[i]
         button.addEventListener('click', addToCartClicked)
    }

    //  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function purchaseClicked() {
    alert('Thanks for your purchase')
}



// function onLoadCartNumbers() {
//      var productNumbers = localStorage.getItem('cartNumbers');

//      if (productNumbers) {
//           document.querySelector('.header__img span').textContent = productNumbers;
//      }
// }

// function cartNumbers(product) {
//     console.log("the product is ", product)
//     var productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//    if (productNumbers) {
//        localStorage.setItem('cartNumbers', productNumbers + 1);
//        document.querySelector('.header__img span').textContent = productNumbers + 1;
//    } else {
//        localStorage.setItem('cartNumbers', 1);
//        document.querySelector('.header__img span').textContent = 1;
//    }
//     setItems(product);
// }



// function setItems(product) {
//     var cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
    
//     //console.log("my cartItems are", cartItems);

//     if (cartItems != null) {
//         if (cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]:product
//             }
//         } 
//         cartItems[product.toLocaleString].inCart += 1; 
//     } else {
//         product.inCart = 1;
//         //products.inCart = 1;
//         cartItems = {
//             [product.tag]:product
//             //[products.tag]:product
//         }   
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }



// onLoadCartNumbers();


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
     var cartRow = document.createElement('div')
     cartRow.classList.add('listing-grid') //cart-row
    //  cartRow.innerText = title
     var cartItems = document.getElementsByClassName('listing-grid-element')[0] // cart-item
    //  var cartItemNames = cartItems.getElementsByClassName('cart-item-title') // cart-item-title
    //  for (var i = 0; i < cartItemNames.length; i++) {
    //      if (cartItemNames[i].innerText == title) {
    //          alert('This item is already added to the cart')
    //          return
    //      }
    //  }
    // var cartRowContentso = `
    //  <div class="cart-item cart-column">
    //           <img class="cart-item-image" src="${imageSrc}" >
    //           <span class="cart-item-title">${title}</span>
    //         </div>
    //         <span class="cart-price cart-column">${price}</span>
    //         <div class="cart-quantity cart-column">
    //           <input class="cart-quantity-input" type="number" value="1" min="0"/>
    //               <span><button class="btn-2" type="button">Remove</button></span>
    //         </div>`
    var cartRowContents = `<div class="listing-grid-element">
            <img class="shop-item-image" src="${imageSrc}"/>
              <h3 class="shop-item-title">${title}</h3>
                <span class="shop-item-price">${price}</span>
                <input class="cart-quantity-input" type="number" value="1" min="0"/>
                <button class="btn-1" type="button"><i class="bx bx-x nav__icon"></button>
        </div>`
    // innerHTML.src = "./cart.html"
    // cartRow.innerHTML = cartRowContentso
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-1')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('listing-grid-element') [0]
    var cartRows = cartItemContainer.getElementsByClassName('listing-grid')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('shop-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
