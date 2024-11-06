const gallery = document.getElementById("gallery");
const fullView = document.getElementById("fullView");
const fullViewImage = document.getElementById("fullViewImage");
const fullViewButtonClose = document.getElementById("fullViewButtonClose");

const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
];

images.forEach((imgSrc) => {
    const image = document.createElement("img");
    image.className = "gallery__image";
    image.src = imgSrc;
    image.alt = "Gallery Image";
    image.width = 200;
    image.height = 350;

    image.addEventListener("click", () => {
        fullViewImage.src = imgSrc;
        fullView.style.display = "flex";
    });

    gallery.appendChild(image);
});

fullViewButtonClose.addEventListener("click", () => {
    fullView.style.display = "none";
});

fullView.addEventListener("click", (e) => {
    if (e.target === fullView) {
        fullView.style.display = "none";
    }
});
