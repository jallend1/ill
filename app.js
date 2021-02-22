const burger = document.getElementById("burger");
const $buttons = document.getElementsByClassName('faq-button') || null;

const showFAQ = e => {
  const $patronButton = document.getElementById('patrons');
  const $librariesButton = document.getElementById('libraries')
  if(e.target.id === 'patron-faq'){
    $patronButton.classList.toggle('is-hidden');
    $librariesButton.classList.add('is-hidden');
  }
  else if(e.target.id === 'library-faq'){
    $librariesButton.classList.toggle('is-hidden');
    $patronButton.classList.add('is-hidden');
  }
}

const showMenu = () => {
  const $menu = document.getElementById("navbarContent");
  burger.classList.toggle("is-active");
  $menu.classList.toggle("is-active");
};

burger.addEventListener("click", showMenu);

if ($buttons){
  for(button of $buttons){
    button.addEventListener('click', showFAQ);
  }
}

console.log($buttons);