const checkBtn = document.querySelector("input[type='submit']");
const fullName = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

checkBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // Check Name With regex in Name Input
    if (!/^[a-zA-Z\s]+$/.test(fullName.value.trim())) {
        document.querySelector('.nameError').textContent = 'نام کامل را به درستی وارد کنید.';
    } else {
        document.querySelector('.nameError').style.display = 'none';
    }
    // Check Email With regex in Email Input
    if (!/^(\S+@\S+\.\S+)$/.test(email.value.trim())) {
        document.querySelector('.emailError').textContent = 'ایمیل را به درستی وارد کنید.';
    } else {
        document.querySelector('.emailError').style.display = 'none';
    }
    // Check Password With regex in Password Input
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password.value.trim())) {
        document.querySelector('.passwordError').textContent = 'رمز عبور باید شامل حداقل 8 کاراکتر باشد و شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد';
    } else {
        document.querySelector('.passwordError').style.display = 'none';
    }
});
