//Preview Reference Image
function previewReferenceImg() {
  const preview = document.querySelector("#referenceImgPreview");
  const files = document.querySelector("#formReferenceImg").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const pickerRef = document.querySelector("#formReferenceImg");
pickerRef.addEventListener("change", previewReferenceImg);

//Preview Placement Image
function previewPlacementImg() {
  const preview = document.querySelector("#placementImgPreview");
  const files = document.querySelector("#formPlacementImg").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const pickerPlacement = document.querySelector("#formPlacementImg");
pickerPlacement.addEventListener("change", previewPlacementImg);

//Preview Correction Image
function previewCorrectionImg() {
  const preview = document.querySelector("#correctionImgPreview");
  const files = document.querySelector("#formCorrectionImg").files;

  function readAndPreview(file) {
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    Array.prototype.forEach.call(files, readAndPreview);
  }
}

const pickerCorrection = document.querySelector("#formCorrectionImg");
pickerCorrection.addEventListener("change", previewCorrectionImg);
