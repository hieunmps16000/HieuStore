const modal = document.querySelector('.modal')
const authForm = document.querySelector('.auth-form')
const RegisterForm = document.querySelector('.register-form')
const loginForm = document.querySelector('.login-form')
const registerBtn = document.querySelector('.js-register-btn')
const loginBtn = document.querySelector('.js-login-btn')
const returnBtns = document.querySelectorAll('.js-return-btn')

const onRegisterForm = () => {
    modal.classList.add('open-modal')
    RegisterForm.classList.add('js-register-form')
}

const onLoginForm = () => {
    modal.classList.add('open-modal')
    loginForm.classList.add('js-login-form')
}

const offAuthenForm = () => {
    modal.classList.remove('open-modal')
    RegisterForm.classList.remove('js-register-form')
    loginForm.classList.remove('js-login-form')
}

registerBtn.addEventListener('click', onRegisterForm)

loginBtn.addEventListener('click', onLoginForm)

// modal.addEventListener('click', offAuthenForm)

RegisterForm ? RegisterForm.addEventListener('click', (e) => {
    e.stopPropagation();
}) : {}

loginForm ? loginForm.addEventListener('click', (e) => {
    e.stopPropagation();
}) : {}

// turn off form when click return button
for (let returnBtn of returnBtns) {
    returnBtn.addEventListener('click', offAuthenForm)
}

// format currency
function formatCurrency(value) {
    return value.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}

// prevent default header__search-history
var ulHistorySearch = document.querySelector('.header__search-history-list')
ulHistorySearch.onmousedown = function(e) {
    e.preventDefault()
}
ulHistorySearch.onclick = function(e) {
    e.preventDefault()
    console.log(e.target);
}