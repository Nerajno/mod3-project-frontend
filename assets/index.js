document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('.current_pic')
    
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
        // pictureFrame.setAttribute('data-vote-id1', 0)
        // pictureFrame.setAttribute('data-vote-id2', 2)
        pictureFrame.setAttribute('caption', "")

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
        let btn = document.querySelector('#get-started')

        //create form and first field
        if(e.target.innerText === "Let's Get Started"){
            e.preventDefault()
            let firstComment = document.createElement('form')
            firstComment.setAttribute('class', 'form')
           

            btn.innerText = 'add another comment'
          

            let labelComment1 = document.createElement('label')
            labelComment1.innerText = 'Caption: '
            firstComment.appendChild(labelComment1)
            

            let input = document.createElement('input')
            input.id = 'comment1'
            input.name = 'comment1'
            input.type = 'textarea'
            input.setAttribute('data-votes', 0)
            input.setAttribute('caption', "")
            firstComment.appendChild(input)


            let commentBtn = document.createElement('button')
            commentBtn.innerText = 'vote for 1'
            commentBtn.addEventListener('click', voteFor1)
            commentBtn.setAttribute('id', 'like1')
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
            labelComment2.innerText = 'Caption: '
            anotherComment.appendChild(labelComment2)

            let input = document.createElement('input')
            input.id = 'comment2'
            input.name = 'comment2'
            input.type = 'textarea'
            input.setAttribute('data-votes', 0)
            input.setAttribute('caption', "")
            anotherComment.appendChild(input)


            // input.setAttribute('data-id', )
            const commentBtn2 = document.createElement('button')
            commentBtn2.innerText = 'vote for 2'
            commentBtn2.setAttribute('id', 'like2')
            commentBtn2.addEventListener('click', voteFor2)
            anotherComment.appendChild(commentBtn2)


            let breakComments = document.createElement('br')
            anotherComment.prepend(breakComments)
            anotherComment.appendChild(breakComments)

            let btn = document.querySelector('#get-started')
            btn.innerText = "okay thats enough"

            let submitBox = document.createElement('input')
            submitBox.setAttribute('type', 'submit')
            submitBox.setAttribute('value', 'Tally the Votes!')
            let formSub = document.querySelector('.form')
            formSub.addEventListener('submit', handleVotes)
            formSub.appendChild(submitBox)
            

        } else if (e.target.innerText === "okay thats enough"){
            function stop() {
                alert("Alright man, I said thats enough");
            }
            stop()
        }    
    }

    // function increaseVote(e){

    //     let comment1Votes = document.querySelector('#comment1').dataset.votes
    //     let votesForComment1 = parseInt(comment1Votes)

    //     let comment2Votes = document.querySelector('#comment2').dataset.votes
    //     let votesForComment2 = parseInt(comment2Votes)

    //     if(e.target.innerText === 'vote for 1'){
    //         let btn1 = document.querySelector('#like1')
    //         btn1.addEventListener('click', voteFor1)
            
    //     }
    //     if(e.target.innerText === 'vote for 2'){
    //         let btn2 = document.querySelector('#like2')
    //         btn2.addEventListener('click', voteFor2)
    //     }
    
    // }

    function voteFor1(e){
        e.preventDefault()
        let comment1Votes = document.querySelector('#comment1').dataset.votes
        let votesForComment1 = parseInt(comment1Votes)
        votesForComment1 += 1
        let first = document.querySelector('#comment1')
        first.dataset.votes = votesForComment1
    }

    function voteFor2(e){
        e.preventDefault()
        let comment2Votes = document.querySelector('#comment2').dataset.votes
        let votesForComment2 = parseInt(comment2Votes)
        votesForComment2 += 1
        let second = document.querySelector('#comment2')
        second.dataset.votes = votesForComment2
    }

    function handleVotes(e){

        let comment1Votes = document.querySelector('#comment1').dataset.votes
        let votesForCommentOne = parseInt(comment1Votes)

        let comment2Votes = document.querySelector('#comment2').dataset.votes
        let votesForCommentTwo = parseInt(comment2Votes)
        
        if(votesForCommentOne + votesForCommentTwo === 10){
            alert('Alright Polls are closed, Calculating....!')
            // let getWinner = document.createElement('button')
            // getWinner.setAttribute('id', 'getWinner')
            // getWinner.setAttribute('name', 'getWinner')
            // getWinner.innerText = 'Pick The Winner!'
            // let formSub = document.querySelector('.form')
            // formSub.appendChild(getWinner)
            // getWinner.addEventListener('click', pickTheWinner)
            if(votesForCommentOne > votesForCommentTwo){
                document.
                console.log('1 winner')           
                alert('Vote 1, wins!!')
            } else if (votesForCommentOne < votesForCommentTwo){
                console.log('2 winner')
                alert('Vote 2, wins!!')
            // } else if (votesForComment1 === votesForComment2){
            //     console.log('1 winer')
            }
        } 
        


    }

    // function tallyVotes(){

    // }

    // function pickTheWinner(){
        
    //     let comment1Votes = document.querySelector('#comment1').dataset.votes
    //     let votesForComment1 = parseInt(comment1Votes)

    //     let comment2Votes = document.querySelector('#comment2').dataset.votes
    //     let votesForComment2 = parseInt(comment2Votes)

    // }

    


    init()

})










