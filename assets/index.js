document.addEventListener('DOMContentLoaded', () => {
  // 'use strict';

  // }
  function init() {
    fetch("https://www.newyorker.com/cartoons/random/randomAPI")
      .then(r => r.json())
      .then(pageSetup)
  }

  function pageSetup(data) {
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

  function handleNewBtn(e) {
    init(e)

  }

  function startAForm(e) {
    console.log(e);
    let pic = document.querySelector('.current_pic')
    var firstComment = document.createElement("FORM")
    firstComment.innerHTML = `<label for= "comment">Comment:</label>
      <input type= "text" id= "comment" name= "name">
      <button  class = "button" type = "submit"> Vote for this Comment</button>
      </form>`

    // form.setAttribute("id", picId)
    var x = document.querySelector("#comment")
    x.appendChild(firstComment);
  }

  init()

})
