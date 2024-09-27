document.addEventListener('DOMContentLoaded', function() {
    const callNowBtn = document.getElementById('callNowBtn');
    const popup = document.getElementById('popup');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    callNowBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    yesBtn.addEventListener('click', function() {
        // Replace with your actual phone number
        window.location.href = 'tel:+1234567890';
        popup.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
