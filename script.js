let nav = document.querySelector(".nav");
let link = document.querySelectorAll(".link");
link.forEach(function (a) {
    a.addEventListener("click", function () {
        nav.querySelector(".active").classList.remove("active");
        a.classList.add("active");
    })
})

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}