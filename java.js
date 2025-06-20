// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the lightbox elements
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0, 0, 0, 0.8)";
    lightbox.style.display = "flex";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "999";
    lightbox.style.display = "none";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    img.style.maxWidth = "80%";
    img.style.maxHeight = "80%";
    img.style.borderRadius = "10px";
    lightbox.appendChild(img);

    // Close lightbox on click
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Attach click event to all gallery images
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            img.src = image.src;
            lightbox.style.display = "flex";
        });
    });
});

 