
let isModalOpen = false;
let darkMode = false
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_boy0ktj",
      "template_j8czcu2",
      event.target,
      "mqApoBt_d546pmUv8"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is Temporarily unavailable. Please contact me directly at Isaiahbrodrguez13@gmail.com"
      );
    });
}
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true
  document.body.classList += " modal--open";
}

function toggleDark(){
  darkMode = !darkMode
  if(darkMode){
    document.body.classList += " dark-theme"
  }else{
    document.body.classList.remove("dark-theme")
  }
}