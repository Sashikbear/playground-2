//form data
const formData = {
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: 'popup_error_active'
};
//variables
const formEmailElement = document.querySelector('.popup__form');

//functions
const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formData.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(formData.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(inputElement);
    console.log(errorElement);
    inputElement.classList.remove(formData.inputErrorClass);
    errorElement.classList.remove(formData.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement);
    }
};

const isInvalidInput = (inputElement) => {
    return !inputElement.validity.valid;
};

const toggleButtonState = (inputElement, buttonElement) => {
    if (isInvalidInput(inputElement)) {
        buttonElement.classList.add(formData.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(formData.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement) => {
    const inputElement = formElement.querySelector('.popup__input');
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputElement, buttonElement);
    inputElement.addEventListener("input", function() {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputElement, buttonElement);
    });
};

function enableValidation(formElement) {
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });
    setEventListeners(formElement);
};

enableValidation(formEmailElement);