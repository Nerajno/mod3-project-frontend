document.addEventListener('DOMContentLoaded', () => {

    function init(){
        fetch("https://www.newyorker.com/cartoons/random/randomAPI")
        .then(r=>r.json())
        .then(pageSetup)
    }

    function pageSetup(data){
        let firstPic = data[0].src
        let pictureFrame = document.querySelector('img')
        pictureFrame.src = firstPic
        pictureFrame.id = data[0].id
        pictureFrame.setAttribute('data-vote-id1', 0)
        pictureFrame.setAttribute('data-vote-id2', 2)

        let newBtn = document.querySelector('#next-pic')
        newBtn.addEventListener('click', handleNewBtn)
        

        let startBtn = document.querySelector('#get-started')
        startBtn.addEventListener('click', formHandler)


    }

    function handleNewBtn(e){
        init(e)

    }

    function formHandler(e){
        e.preventDefault()
        const pic = document.querySelector('.current_pic')
        let btn = document.querySelector('#get-started')

        //create form and first field
        if(e.target.innerText === "Let's Get Started"){
            e.preventDefault()
            let firstComment = document.createElement('form')
            firstComment.setAttribute('class', 'form')

            btn.innerText = 'add another comment'

            let labelComment1 = document.createElement('label')
            labelComment1.innerText = 'Comment:'
            firstComment.appendChild(labelComment1)

            let input = document.createElement('input')
            input.id = 'comment'
            input.name = 'comment'
            input.type = 'text'
            input.setAttribute('data-votes', 0)
            firstComment.appendChild(input)


            let commentBtn = document.createElement('button')
            commentBtn.innerText = 'vote for 1'
            // commentBtn.setAttribute('data-votes', 0)
            commentBtn.addEventListener('click', increaseVote)
            firstComment.appendChild(commentBtn)

            let breakFirstComment = document.createElement('br')
            firstComment.appendChild(breakFirstComment)

            var x = document.querySelector("#btn_holder")
            x.appendChild(firstComment);

            //create second field
        } else if (e.target.innerText === "add another comment"){
            e.preventDefault()


            let anotherComment = document.querySelector('.form')

            const labelComment2 = document.createElement('label')
            labelComment2.innerText = 'Comment:'
            anotherComment.appendChild(labelComment2)

            let input = document.createElement('input')
            input.id = 'comment'
            input.name = 'comment'
            input.type = 'text'
            input.setAttribute('data-votes', 0)
            anotherComment.appendChild(input)


            // input.setAttribute('data-id', )
            const commentBtn2 = document.createElement('button')
            commentBtn2.innerText = 'vote for 2'
            // commentBtn2.setAttribute('data-votes', 0)
            commentBtn2.addEventListener('click', increaseVote)
            anotherComment.appendChild(commentBtn2)


            let breakComments = document.createElement('br')
            anotherComment.prepend(breakComments)
            anotherComment.appendChild(breakComments)

            let btn = document.querySelector('#get-started')
            btn.innerText = "okay thats enough"
            
        } else if (e.target.innerText === "okay thats enough"){
            function stop() {
                alert("Alright man, I said thats enough");
            }
            stop()
        }

        
    }

    function increaseVote(e){
        // let voteCount = e.target.dataset.votes
        // let newVoteCount = parseInt(voteCount) + 1
        // voteCount = newVoteCount
        // console.log(e.target.innerText)

        if(e.target.innerText === 'vote for 1'){

            let votes = document.querySelector('.current_pic')
            console.log(votes.dataset.voteId1, 'votes1')
        }
        if(e.target.innerText === 'vote for 2'){
            let votes2 = document.querySelector('.current_pic')
            console.log(votes2.dataset.voteId2, 'votes2')
        }
        
        console.log(e.target)


    }


    


    init()

})
