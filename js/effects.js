
window.addEventListener('DOMContentLoaded', event => {

//
// Função para simplificar a seleção de elementos
// So existe dentro desse escopo
  const select = (elemento, todos_os_elementos = false) => {
    elemento = elemento.trim()
    if (todos_os_elementos) {
      return [...document.querySelectorAll(elemento)]
    } else {
      return document.querySelector(elemento)
    }
  }


//
// Efeito de escrita usado em index.html
const typed = select('.typed')

  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


});
