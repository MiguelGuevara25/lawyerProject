document.addEventListener('DOMContentLoaded', function () {
    starApp();
});

function starApp() {
    createGalery();
    scrollNav();
    menuMobile();
}

//!Se configura el scroll
function scrollNav() {
    const links = document.querySelectorAll('.bar-navegation a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {

            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

function createGalery() {
    const galery = document.querySelector('.services');

    for (let i = 1; i <= 9; i++) {
        const image = document.querySelector(`.service_${i}`);

        image.onclick = function () {
            showImage(i);
        }
    }
}

function showImage(id) {

    //!Se crea la imagen que saldrá después del click
    const image = document.createElement('DIV');
    image.classList.add('overlay__image__service');
    image.innerHTML = `<img loading="lazy" width="200" height="300" src="img/${id}.png" alt="prueba">`;

    const titleOverlay = document.createElement('H2');
    titleOverlay.classList.add('overlay_title_service');

    const parraf = document.createElement('P');
    parraf.classList.add('overlay__text__service');

    //!Creamos una condicional para que salga un texto dependiendo que servicio escoja ver
    function prueba() {
        switch (id) {
            case 1:
                titleOverlay.textContent = 'Alimentos';
                parraf.innerHTML = `Los alimentos no solo es un derecho que le corresponde a los niños menores de edad, sino también a los hijos mayores de edad que desean seguir estudios superiores o aquellos padres que es estén en situación de necesidad.`;
                break;
            case 2:
                titleOverlay.textContent = 'Régimen de visitas o Tenencia';
                parraf.innerHTML = `Nuestro principal objetivo es velar por el derecho de los niños y de aquellos padres que se les impide participar activamente de la vida de sus hijos o se les niega compartir tiempo con sus hijos. `;
                break;
            case 3:
                titleOverlay.textContent = 'Obligación de dar suma de dinero';
                parraf.innerHTML = `Ofrecemos una representación judicial para llevar todos lo pasos necesarios para recuperar tu dinero producto de un préstamo, un servicio brindado, letras o pagarés.`;
                break;
            case 4:
                titleOverlay.textContent = 'Divorcio municipal, notarial y/o judicial';
                parraf.innerHTML = `Permítenos acompañarte en este proceso para realizarlo de una manera ágil y con el profesionalismo que nos caracteriza`;
                break;
            case 5:
                titleOverlay.textContent = 'Desalojo';
                parraf.innerHTML = `Desde que llegó el covid -19 se ha incrementado el número de inquilinos morosos o precarios. Pon en nuestras manos la recuperación de tu propiedad.`;
                break;
            case 6:
                titleOverlay.textContent = 'Constitución de empresas e inscripción de tu marca';
                parraf.innerHTML = `¿Quieres emprender tu propio negocio o inscribir tu marca? Asesórate de los mejores profesionales para iniciar de manera correcta tu emprendimiento.`;
                break;
            case 7:
                titleOverlay.textContent = 'Testamento y Sucesión intestada';
                parraf.innerHTML = `Nuestra amplia experiencia nos permite realizar estos documentos con la mayor diligencia.`;
                break;
            case 8:
                titleOverlay.textContent = 'INDECOPI';
                parraf.innerHTML = `Hacemos respetar tus derechos como consumidor. Somos especialistas en los tramites de los reclamos, quejas o inicio del procedimiento administrativo`;
                break;
            case 9:
                titleOverlay.textContent = 'Derecho Laboral';
                parraf.innerHTML = `Defendemos tus derechos laborales, despido arbitrario, revisión  de contratos laborales.`;
                break;
            default:
                break;
        }
    }

    //!Acá se creará un contenedor dentro del overlay
    const contentOverlay = document.createElement('DIV');
    contentOverlay.classList.add('content__overlay');
    contentOverlay.appendChild(image);
    contentOverlay.appendChild(titleOverlay);
    contentOverlay.appendChild(parraf);

    //!Ponemos adentro del overlay la imagen que se creo con el click
    const overlay = document.createElement('DIV');
    prueba();
    overlay.appendChild(contentOverlay);
    overlay.classList.add('overlay');

    //!Esto sirve para fijar la imagen que se generó con el click
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fixed_body');

    //!Creamos un botón para que la imagen que se crea se pueda eliminar
    const closeModel = document.createElement('P');
    closeModel.textContent = 'X';
    closeModel.classList.add('btn-cerrar');
    closeModel.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fixed_body');
        overlay.remove();
    }
    overlay.appendChild(closeModel);
}

function menuMobile() {
    const menu = document.querySelector('.mobile-menu');

    menu.addEventListener('click', navResponsive);
}

function navResponsive() {
    const nav = document.querySelector('.bar-navegation');

    if (nav.classList.contains('show_nav')) {
        nav.classList.remove('show_nav');
    } else {
        nav.classList.add('show_nav');
    }

    //!Para perfeccionar código => nav.classList.toggle('show_nav');
}