
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


// form validation

