const headerNav = document.querySelector('.headers');
const popUpMessage = document.createElement('div');
popUpMessage.classList.add('pop-up-message');
popUpMessage.innerHTML = `<div class="div-child"><form class="js_form">
    <h3>Login</h3>
    <div class="formOneJs">
        <input type="text" name="fname" id="name" placeholder="Enter Email" required>
    </div>
    <div class="formTwoJs">
    <input type="email" name="email" id="email" placeholder="Enter Password" required>
    </div>
    <p class="js-p">or</p>
    <div class="buttons">
        <button class="facebook">facebook</button>
        <button class="gmail">Gmail</button>
        <button class="instagram">Instagram</button>
    </div>
    <div class="btn-loginn">
        <button class="btn btn-primary">Login</button>
    <div>
    <button class="btn--close-cookie btn-close"></button>
    </form>
    </div>
    `


popUpMessage.style.display = "flex";
popUpMessage.style.justifyContent = "center";
popUpMessage.style.alignItems = "center";
headerNav.append(popUpMessage);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    // popUpMessage.parentElement.removeChild(popUpMessage)
    popUpMessage.remove();
})




// add to cart 

// const product = [
//     {
//         id: 0,
//         image: 'assets/python.jpg',
//         title: 'Python for beginners',
//         price: 120,
//     },
//     {
//         id: 1,
//         image: 'assets/javascript-meta-1652702081069.jpg',
//         title: 'Javascript algorithm',
//         price: 120,
//     },
//     {
//         id: 2,
//         image: 'assets/mern.png',
//         title: 'Learn MERN stack',
//         price: 120,
//     },
//     {
//         id: 3,
//         image: 'assets/unreal-blog2.png',
//         title: 'Unreal game development',
//         price: 120,
//     }
// ];

// const categories  = [...new Set(product.map((item) => {
//     return item
// }))]

//     let i = 0;
//     document.getElementById('root').innerHTML = categories.map((item) => {
//         var {image, title, price} = item; 
//         return(
//             `div class='box'>
//                 <div class='img-box'>
//                     <img class='images' src=${image}>
//                 </div>
//                 <div class='bottom'>
//                 <p>${title}<p>
//                 <h2>php ${price}.00</h2>`+
//                 "<button class='buttonCart' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
//                 `</div>
//                 </div>`
//         )
//     }).join('') 