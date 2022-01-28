//veriables
const popupOpenButton = document.querySelector("#resume");
const popupwork = document.querySelector(".popup_type_work");
const popupSubmitButten = document.querySelector(".popup__button_type_work");
const buttons = document.querySelectorAll(".button");
const entryTag = document.querySelectorAll(".entry__tag");
//functions
//open generic popup
function OpenPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleClosePopupOnEsc);
}

//close popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown", handleClosePopupOnEsc);
}

//close popup when clicking outside
function handleOverlayClick(event) {
  closePopup(event.target);
}
//close pop up on Esc
function handleClosePopupOnEsc(event) {
  const popup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
    closePopup(popup);
  }
}

//event listeners
// open resume popup
popupOpenButton.addEventListener("click", () => OpenPopup(popupwork));

function SubmitResumeForm(evt) {
  evt.preventDefault();
  //need to submit the email to somewhere;
  closePopup(popupwork);
}

popupSubmitButten.addEventListener("click", SubmitResumeForm);

const toggleButtonState = (evt) => {
  if (evt.target.classList.contains("button_active")) {
    evt.target.classList.remove("button_active");
    entryTag.forEach((tag) => {
      tag.closest("ul > li").style.display = "";
    });
  } else {
    evt.target.classList.add("button_active");
    buttons.forEach((button) => {
      if (button.id !== evt.target.id) {
        button.classList.remove("button_active");
      }
    });
    entryTag.forEach((tag) => {
      if (tag.textContent !== evt.target.id) {
        tag.closest("ul > li").style.display = "none";
      } else {
        tag.closest("ul > li").style.display = "";
      }
    });
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    toggleButtonState(evt);
  });
});
