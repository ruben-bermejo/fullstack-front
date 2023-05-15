/*jshint esversion: 6 */

const homeLink = document.querySelector('#home');
const aboutLink = document.querySelector('#about');
const contactLink = document.querySelector('#contact');
const content = document.querySelector('#content');

// Función para cambiar el contenido dinámico de la página
function changeContent(title, text) {
  document.title = title;
  content.innerHTML = text;
}

// Función para actualizar la URL
function updateURL(stateObject, title, url) {
  history.pushState(stateObject, title, url);
}

// Función para manejar el evento PopState
function handlePopState(event) {
  const state = event.state;
  if (state) {
    changeContent(state.title, state.content);
  }
}

// Manejadores de eventos para los tres links
homeLink.addEventListener('click', function(event) {
  event.preventDefault();
  changeContent('Home', '<p>Aquí va el contenido de la página de inicio.</p>');
  updateURL({ page: 'home' }, 'Home', 'home');
});

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  changeContent('Acerca de', '<p>Aquí va el contenido de la página acerca de.</p>');
  updateURL({ page: 'about' }, 'Acerca de', 'about');
});

contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  changeContent('Contacto', '<p>Aquí va el contenido de la página de contacto.</p>');
  updateURL({ page: 'contact' }, 'Contacto', 'contact');
});

// Manejador de eventos para el evento PopState
window.addEventListener('popstate', handlePopState);
