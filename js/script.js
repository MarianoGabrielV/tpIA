// Agrega un scroll suave para los enlaces de la navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const text = "Clasificación No Supervisada";
    const typingElement = document.getElementById("typing-effect");
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 100); // Velocidad de escritura (100 ms por letra)
        }
    }

    typeLetter();
});