const burger = document.getElementById("burger");
const $faqButtons = document.getElementsByClassName("faq-button") || null;

const showFAQ = (e) => {
  // Gets the containing div from the id attribute of the button and applies active styling
  const targetElement = e.target.id.split('-')[0];
  const $highlightedDiv = document.getElementById(targetElement);
  $highlightedDiv.classList.toggle('is-clicked');

  const $patronFAQs = document.getElementById("patrons");
  const $patronButton = document.getElementById("patron-faq");

  const $libraryFAQs = document.getElementById("libraries");
  const $libraryButton = document.getElementById("library-faq");
  // If the patron button is hit...
  if (e.target.id === "patron-faq") {
    $patronFAQs.classList.toggle("is-hidden");
    // Changes text of button based on whether it is currently active
    $patronFAQs.classList.contains("is-hidden")
      ? ($patronButton.innerText = "Show me patron FAQs")
      : ($patronButton.innerText = "Hide patron FAQs");
    $libraryFAQs.classList.add("is-hidden");
    $libraryButton.innerText = "Show me library FAQs";
  // Or if the library button is hit...
  
  } else if (e.target.id === "library-faq") {
    $libraryFAQs.classList.toggle("is-hidden");
    $patronFAQs.classList.add("is-hidden");
    $libraryFAQs.classList.contains("is-hidden")
      ? ($libraryButton.innerText = "Show me library FAQs")
      : ($libraryButton.innerText = "Hide library FAQs");
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
