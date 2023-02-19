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
