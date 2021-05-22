function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".palm-preview img");

    previews.forEach(preview =>{
        preview.addEventListener('click', function(){
            console.log(preview)
        })
    })
}