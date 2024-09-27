const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('privacy-checkbox');
const errorMessage = document.getElementById('error-message');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    if (!checkbox.checked) {
        console.log("Checked"); 
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        // Normally, here you would submit the form
        // document.getElementById('application-form').submit();
    }
});
