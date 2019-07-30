document.addEventListener('DOMContentLoaded', () => {
    // 'use strict';

    // //const imageUrl = 'https://picsum.photos/id/222/200/300'
    // const getImgBtn = document.querySelector(".get-image")
    // const imageContainer = document.getElementById("show-me")

    // // getImages(){}

    // // getImages()
    // getImgBtn.addEventListener("click", addImage)

    // function addImage() {
    //     console.log("this clicked")
    //     location.reload();//added image
    // }
    function init(){
        fetch("https://www.newyorker.com/cartoons/random/randomAPI")
        .then(r=>r.json())
        .then(pageSetup)
    }

    function pageSetup(data){
        console.log(data[0])


        let firstPic = data[0].src
        let pictureFrame = document.querySelector('img')
        pictureFrame.src = firstPic

        let newBtn = document.querySelector('button')
        newBtn.addEventListener('click', handleNewBtn)

        
    }

    function handleNewBtn(e){
        init(e)
        
    }


    init()
    
})