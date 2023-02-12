function start() {
  let click = document.querySelector('#click');
  click.addEventListener('click', toggle);  
};

function toggle() {
    let color = document.querySelector('#bus');
    color.classList.toggle('body')
}

start();