
const themeBtn = document.getElementById('theme');


const colors = ['#4ae7c5','#F4F7FF','#F8F9FA', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#FCE4EC'];
let currentIndex = 0;

if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = colors[currentIndex];
         currentIndex = (currentIndex + 1) % colors.length;
        // currentIndex++;
    });
}
