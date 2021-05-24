function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".palm-preview img");

    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const largeSrc = smallSrc.replace("small", "large");
            previews.forEach(preview => preview.classList.remove("palm-active"));
            highlight.src = largeSrc;
            preview.classList.add("palm-active");
        });
    });
}

imageGallery();