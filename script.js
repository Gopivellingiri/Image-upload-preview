

const defaultBtn = document.querySelector("#default_btn");
const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file_name");
const cancelBtn = document.querySelector("#cancel_btn");
const img = document.querySelector("img");
const regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\_]+$/;

function dafaultBtnActive() {
  defaultBtn.click();
}

defaultBtn.addEventListener("change", handleFileSelect);

function handleFileSelect() {
  const file = this.files[0];

  if (file) {
    readFile(file);
    setupCancelButton();
  }

  updateFileName(this.value);
}

function readFile(file) {
  const reader = new FileReader();
  reader.onload = function () {
    img.src = reader.result;
    wrapper.classList.add("active");
  };
  reader.readAsDataURL(file);
}

function setupCancelButton() {
  cancelBtn.addEventListener("click", function () {
    img.src = "";
    wrapper.classList.remove("active");
  });
}

function updateFileName(value) {
  const valueStore = value.match(regExp);
  fileName.textContent = valueStore;
}

