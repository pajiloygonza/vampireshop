document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("331-LAj0HseSGiu4l");

  const form = document.getElementById("contact-form");
  const popup = document.getElementById("popup-message");
  const popupText = document.getElementById("popup-text");

  function showPopup(message) {
    popupText.textContent = message;
    popup.classList.remove("hidden");
    popup.classList.add("visible");

    setTimeout(() => {
      popup.classList.remove("visible");
      popup.classList.add("hidden");
    }, 3000); // Скрыть через 3 секунды
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_p5iuj6o", "template_4okeoyp", form)
      .then(() => {
        showPopup("Сообщение успешно отправлено!");
        form.reset();
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
        showPopup("Произошла ошибка. Попробуйте позже.");
      });
  });
});
  