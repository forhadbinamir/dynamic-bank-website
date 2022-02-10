
document.getElementById('submit-button').addEventListener('click', function () {
    const inputMail = document.getElementById('input-mail');
    const inputPassword = document.getElementById('input-password');

    if (inputMail.value == 'forhad@gmail.com' && inputPassword.value == 'forhad') {
        window.location.href = 'banking.html';
    }
})



