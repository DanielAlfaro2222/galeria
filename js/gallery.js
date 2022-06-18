export { Gallery };

class Gallery {
    constructor(gallery, previousButton, nextButton, widthImage = 350) {
        this.gallery = gallery;
        this.images = [...this.gallery.querySelectorAll("img")];
        this.previousButton = previousButton;
        this.nextButton = nextButton;
        this.currentImage = 0;
        this.quantityImages = this.images.length;
        this.imagesToShow = 4;
        this.widthImage = widthImage;

        this.previousButton.addEventListener("click", () => {
            this.previousImage();
        });

        this.nextButton.addEventListener("click", () => {
            this.nextImage();
        });
    }

    previousImage() {
        this.currentImage -= 1;
        this.gallery.style.transform = `translateX(-${this.currentImage * this.widthImage
            }px)`;

        if (this.currentImage !== this.quantityImages - this.imagesToShow) {
            this.nextButton.classList.remove("desactivar-boton");
        }

        if (this.currentImage === 0) {
            this.previousButton.classList.add("desactivar-boton");
        }
    }

    nextImage() {
        this.currentImage += 1;
        this.gallery.style.transform = `translateX(-${this.currentImage * this.widthImage
            }px)`;

        if (this.currentImage === this.quantityImages - this.imagesToShow) {
            this.nextButton.classList.add("desactivar-boton");
        }

        if (this.currentImage !== 0) {
            this.previousButton.classList.remove("desactivar-boton");
        }
    }
}
