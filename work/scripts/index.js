                        //veriables
const popupOpenButton = document.querySelector("#resume")
const popupwork = document.querySelector(".popup_type_work");
const popupSubmitButten = document.querySelector(".popup__button_type_work")


                        //functions
//open generic popup
function OpenPopup(popup){
    popup.classList.add("popup_opened")
    popup.addEventListener("click", handleOverlayClick)
    document.addEventListener("keydown", handleClosePopupOnEsc)
}

//close popup
function closePopup(popup){
    popup.classList.remove("popup_opened")
    popup.removeEventListener("click", handleOverlayClick)
    document.removeEventListener("keydown", handleClosePopupOnEsc)
}

//close popup when clicking outside
function handleOverlayClick(event) {
    closePopup(event.target);
}
//close pop up on Esc
function handleClosePopupOnEsc(event){
    const popup = document.querySelector(".popup_opened");
    if(event.key === "Escape"){
        closePopup(popup);
    }
}

                        //event listeners
// open resume popup
popupOpenButton.addEventListener("click", () => OpenPopup(popupwork)
);

function SubmitResumeForm(evt) {
    evt.preventDefault();
    //need to submit the email to somewhere;
    closePopup(popupwork);
}

popupSubmitButten.addEventListener("click", SubmitResumeForm);