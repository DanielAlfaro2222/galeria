import { Gallery } from "./gallery.js";

// Galerias
const galeria1 = new Gallery(
    document.getElementById("container-images1"),
    document.querySelector(".btn-prev1"),
    document.querySelector(".btn-next1"),
    350
);

const galeria2 = new Gallery(
    document.getElementById("container-images2"),
    document.querySelector(".btn-prev2"),
    document.querySelector(".btn-next2"),
    350
);
