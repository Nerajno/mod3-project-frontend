document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //const imageUrl = 'https://picsum.photos/id/222/200/300'
    const getImgBtn = document.querySelector(".get-image")
    const imageContainer = document.getElementById("show-me")

    // getImages(){}

    // getImages()
    getImgBtn.addEventListener("click", addImage)

    function addImage() {
        console.log("this clicked")
        location.reload();//added image
    }
    
})