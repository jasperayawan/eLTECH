
// /* ---------------------------- For header -------------------*/

// let prevScrollPosition = window.pageYOffset;

// window.onscroll = function () {

//     let currentScrollPosition = window.pageYOffset;

//     if(prevScrollPosition > currentScrollPosition){
//         document.querySelector("#header").style.top = "0";
//     }else {
//         document.querySelector("#header").style.top = "-80px";
//     }

//     prevScrollPosition = currentScrollPosition;
// }



/*------------------------------------add to cart---------------------------- */





/*------------------------------------modal-----------------------------*/

// let modalContainer = document.getElementById("modal-container")
// let closeBtn = document.querySelectorAll(".close-btn")
// let openModal = document.querySelectorAll('.courses-item').forEach(e => {
//     e.addEventListener('click', function(){
//             modalContainer.style.display = 'block';
        
//     })
// })

// window.addEventListener('click', function(e) {
//     if(e.target === modalContainer) {
//         modalContainer.style.display = 'none';
//     }
// })

// // closeBtn.addEventListener('click', function(){
// //     modalContainer.style.display = "none";
// // })

// closeBtn.forEach(e => {
//     e.addEventListener('click', function(){
//         modalContainer.style.display = 'none';
//     })
// })

// const showMoreBtn = document.querySelector('.show-more');
// const hiddenCourse = document.querySelector('.hidden-course');

// function revealContent(){
//     if(hiddenCourse.classList.contains('show-more')){
//         hiddenCourse.classList.remove('show-more')
//     }else{
//         hiddenCourse.classList.add('show-more')
//     }
// }

// showMoreBtn.addEventListener('click', revealContent);




// var noti = document.querySelector('.cart_counter')
// var select = document.querySelector('.select');
let counter = 0;

const addBtn = document.querySelectorAll('.addToCart').forEach(e => {
    e.addEventListener('click', () => {
        counter += 1;
        document.getElementById("total__counter").innerHTML = counter;
        document.getElementById("total__counter").style.color = "white";
        document.getElementById("total__counter").style.background = "red";
        document.getElementById("total__counter").style.borderRadius = "50%";
        document.getElementById("total__counter").style.visibility = "visible";
        document.getElementById("total__counter").style.padding = "0 3px";
    })
})


// Practice Javascript

//Creating and inserting elements
// const header = document.querySelector('header')
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML = 'We use cookied for improved functionality and anylytics. <button class="btn btn--close-cookie" onclick="hbutton()">Got it!</button>';
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.append(message)
// function hbutton(){
//     alert("hello!")
// }

    // Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//     message.parentElement.removeChild(message);
// })


const header = document.querySelector('header');
const popUpMessage = document.createElement('div');
popUpMessage.classList.add('pop-up-message');
popUpMessage.innerHTML = `<div class="div-child"><form class="form-control js_form">
    <h3>Login</h3>
    <input type="text" name="fname" class="form-control" id="name" placeholder="Enter Email" required>
    <input type="email" name="email" class="form-control" id="email" placeholder="Enter Password" required>
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
header.append(popUpMessage);

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    popUpMessage.parentElement.removeChild(popUpMessage)
})
