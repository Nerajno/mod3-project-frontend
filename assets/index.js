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
        // console.log(data[0])


        let firstPic = data[0].src
        let pictureFrame = document.querySelector('img')
        pictureFrame.src = firstPic
        pictureFrame.id = data[0].id

        let newBtn = document.querySelector('button')
        newBtn.addEventListener('click', handleNewBtn)
        let startBtn = document.querySelector('#get-started')
        startBtn.addEventListener('click', startAForm)


    }

    function handleNewBtn(e){
        init(e)

    }

    function startAForm(e){
      let pic = document.querySelector('.current_pic')
      // console.log(pic.id)
      // console.log('click')
      // let pic = document.querySelector('form')
      var firstComment = document.createElement("FORM")
      firstComment.innerHTML = `<label for= "comment">Comment:</label>
      <input type= "text" id= "comment" name= "name">
      <div class = "button">
      <button type = "submit"> Vote for this Comment</button>
      </div>
      </form>`

      // form.setAttribute("id", picId)
      var x = document.querySelector("#comment")
      x.appendChild(firstComment);
    }


    init()

})
