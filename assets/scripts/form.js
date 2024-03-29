"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    formData.append("image", formReferenceImg.files[0]);

    if (error === 0) {
      form.classList.add("._sending");
      let response = await fetch("sendemail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formReferenceImg.innerHTML = "";
        form.reset();
      } else {
        alert("Error");
      }
    } else {
      alert("Please fill in the required fields");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains("_date")) {
        if (dateTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  //email validation
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  //date validation
  function dateTest(input) {
    return !/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/.test(input.value);
  }

  //img preview
  // const formReferenceImg = document.getElementById("formReferenceImg");
  // const referenceImgPreview = document.getElementById("referenceImgPreview");

  // formReferenceImg.addEventListener("change", () => {
  //   uploadFile(formReferenceImg.files[0]);
  // });

  // function uploadFile(file) {
  //   if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
  //     alert("Please upload .img, .png, .gif files");
  //     formReferenceImg.value = "";
  //     return;
  //   }
  //   if (file.size > 2 * 1024 * 1024) {
  //     alert("The file should not exceed 2MB");
  //     return;
  //   }
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //     referenceImgPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
  //   };
  //   reader.onerror = function (e) {
  //     alert("Error");
  //   };
  //   reader.readAsDataURL(file);
  // }
});
