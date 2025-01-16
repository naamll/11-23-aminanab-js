let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function showModal() {
    document.getElementById("phoneModal").style.display = "block";
}

function closeModal() {
    document.getElementById("phoneModal").style.display = "none";
}

function makeCall() {
    window.location.href = "tel:+71234567890";
}

function toggleAnswer(element) {
    const body = element.nextElementSibling;
    body.style.display = body.style.display === "none" || body.style.display === "" ? "block" : "none";
}
document.getElementById('burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Переключение класса для отображения меню
});
