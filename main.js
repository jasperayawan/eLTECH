const headerNav = document.querySelector('.header');
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




const clickBtn = document.querySelector(".svg-chat");
const chatBox = document.querySelector(".chat-box")
const chatClose = document.getElementById('close-chat')

clickBtn.addEventListener('click', function(){
    document.querySelector('.chat-box').style.display = "block"
})

chatClose.addEventListener('click', function(){
    document.querySelector('.chat-box').style.display = "none"
})