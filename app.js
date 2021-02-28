const burger = document.getElementById("burger");
const $faqButtons = document.getElementsByClassName("faq-button") || null;
const $form = document.getElementsByTagName('form')[0] || null;

const handleSubmit = e => {
  e.preventDefault();
  localStorage.clear();
  const requestDetails = {
    'barcode': e.target.barcode.value,
    'name': e.target.name.value,
    'phone': e.target.phone.value,
    'email': e.target.email.value,
    'location': e.target["location-select"].value,
    'title': e.target.title.value,
    'author': e.target.author.value,
    'isbn': e.target.isbn.value,
    'year': e.target.year.value,
    'details': e.target.details.value
  }
  localStorage.setItem('requestDetails', JSON.stringify(requestDetails))
}

const showFAQ = (e) => {
  for (let i = 0; i < $faqButtons.length; i++) {
    // If the button clicked matches the one in the HTML collection
    if ($faqButtons[i].id === e.target.id) {
      // Change the text to reflect its current state
      $faqButtons[i].innerText.includes("Show")
        ? ($faqButtons[i].innerText =
            "Hide" + $faqButtons[i].innerText.slice(4))
        : ($faqButtons[i].innerText =
            "Show" + $faqButtons[i].innerText.slice(4));
      // Show or Hide the div containing the corresponding information
      const FAQs = document.getElementById($faqButtons[i].dataset.target);
      FAQs.classList.toggle("is-hidden");
      // Extracts id of parent card div and toggles active styling
      const $targetDiv = document.getElementById(
        $faqButtons[i].id.split("-")[0]
      );
      $targetDiv.classList.toggle("is-clicked");
    }
    // If it doesn't match
    else {
      // Reset its text to initial value
      $faqButtons[i].innerText = "Show" + $faqButtons[i].innerText.slice(4);
      // Makes sure the corresponding FAQ is not displayed
      const FAQs = document.getElementById($faqButtons[i].dataset.target);
      FAQs.classList.add("is-hidden");
      // Extracts id of parent card div and removes any active styling
      const $targetDiv = document.getElementById(
        $faqButtons[i].id.split("-")[0]
      );
      $targetDiv.classList.remove("is-clicked");
    }
  }
};

const showMenu = () => {
  const $menu = document.getElementById("navbarContent");
  burger.classList.toggle("is-active");
  $menu.classList.toggle("is-active");
};

burger.addEventListener("click", showMenu);

if ($faqButtons) {
  for (button of $faqButtons) {
    button.addEventListener("click", showFAQ);
  }
}

if ($form){
  $form.addEventListener('submit', handleSubmit);
}
