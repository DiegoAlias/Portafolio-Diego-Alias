// INDEX GRID

const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName('blocks');

for (var i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay = `${i * 0.05}s`;
}

// AOS

AOS.init();

// HOME

document.getElementById("home-h3-1").style.opacity = "0";
document.getElementById("home-h3").style.opacity = "0";
document.querySelector(".perfil-2 h4").style.opacity = "0";

setTimeout(function () {

    // Mostrar los elementos h3 y h4 con animación
    document.getElementById("home-h3-1").style.opacity = "1";
    document.getElementById("home-h3").style.opacity = "1";
    document.querySelector(".perfil-2 h4").style.opacity = "1";
}, 11500);


// CLOSE MENU

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('.navigation__checkbox');
    var navigationLinks = document.querySelectorAll('.navigation__link');

    // Cerrar el menú al hacer clic en un enlace
    navigationLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            checkbox.checked = false;
        });
    });
});

// jQuery Ripples JS

$(document).ready(function () {
    $(".body").ripples({
        resolution: 600,
        perturbance: .0002,
    });
});

// ACHIEVEMENTS

function showImageOverlay(event, element) {
    event.preventDefault();
    var imageSrc = element.getAttribute('href');
    var overlayImage = document.getElementById('overlay-image');
    overlayImage.setAttribute('src', imageSrc);
    document.getElementById('image-overlay').style.display = 'block';
}

function hideImageOverlay() {
    document.getElementById('image-overlay').style.display = 'none';
}

function showImageOverlay(event, element) {
    event.preventDefault(); // Evita que se abra el enlace directamente

    // Obtiene la URL de la imagen del atributo href
    var imageUrl = element.getAttribute('href');

    // Actualiza la imagen del overlay
    var overlayImage = document.getElementById('overlay-image');
    overlayImage.src = imageUrl;

    // Muestra el overlay
    var imageOverlay = document.getElementById('image-overlay');
    imageOverlay.style.display = 'flex';
}

function hideImageOverlay() {
    // Oculta el overlay
    var imageOverlay = document.getElementById('image-overlay');
    imageOverlay.style.display = 'none';
}

// CONTACT VALIDATE

const $submit = document.getElementById("submit");
const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $mensaje = document.getElementById("mensaje");

function validateInputs() {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mensajeRegex = /^[a-zA-Z0-9.,!?¡¿'"():;\-_\s]{1,255}$/;

    if ($nombre.value === "") {
        alert("Complete el campo nombre");
        return false;
    }
    if ($email.value === "") {
        alert("Complete el campo email");
        return false;
    }
    if ($mensaje.value === "") {
        alert("Complete el campo mensaje");
        return false;
    }

    if (!nombreRegex.test($nombre.value)) {
        alert("Ingrese el formato correcto en el nombre");
        $nombre.style.border = "1px solid red";

    }
    if (!emailRegex.test($email.value)) {
        alert("Ingrese el formato correcto en el email");
        $email.style.border = "1px solid red";

    }
    if (!mensajeRegex.test($mensaje.value)) {
        alert("Ingrese el formato correcto en el mensaje");
        $mensaje.style.border = "1px solid red";

    }
    //return true;
}

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        e.preventDefault();
        validateInputs();
    }
});

export default