document.addEventListener('DOMContentLoaded', () => {
    const pic = document.querySelector('.current_pic')
    // const post = 'http://localhost:3000/api/v1/photos/'
    const post = 'http://localhost:3000/api/v1/photos'
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
        pictureFrame.setAttribute('data-newcap', "")
        console.log(firstPic)

        let newBtn = document.querySelector('#next-pic')
        newBtn.addEventListener('click', handleNewBtn)
        

        let startBtn = document.querySelector('#get-started')
        startBtn.addEventListener('click', (e)=>{
            formHandler(e, data)
        })


    }

    function handleNewBtn(e){
        init(e)

    }

    function formHandler(e, data){
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
            commentBtn.addEventListener('click', (e)=>{
                voteFor(e, data)
            })
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

            const commentBtn2 = document.createElement('button')
            commentBtn2.innerText = 'vote for 2'
            commentBtn2.setAttribute('id', 'like2')
            commentBtn2.addEventListener('click', (e)=>{
                voteFor(e, data)
            })
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
            formSub.addEventListener('submit', (e)=>{
                handleVotes(e, data)
            })
            formSub.appendChild(submitBox)
            
        } else if (e.target.innerText === "okay thats enough"){
            function stop() {
                alert("Alright man, I said thats enough");
            }
            stop()
        }    
    }



    function voteFor(e, data){
        e.preventDefault()
        // console.log(e.target)
        if(e.target.innerText === 'vote for 1'){
        let comment1Votes = document.querySelector('#comment1').dataset.votes
        let votesForComment1 = parseInt(comment1Votes)
        votesForComment1 += 1
        let first = document.querySelector('#comment1')
        first.dataset.votes = votesForComment1
    }else if(e.target.innerText === 'vote for 2 '){
        e.preventDefault()
        // console.log(e.target)
        let comment2Votes = document.querySelector('#comment2').dataset.votes
        let votesForComment2 = parseInt(comment2Votes)
        votesForComment2 += 1
        let second = document.querySelector('#comment2')
        second.dataset.votes = votesForComment2
    }
    
}

    function handleVotes(e, data){
    
        e.preventDefault()

        let comment1Votes = document.querySelector('#comment1').dataset.votes
        let votesForCommentOne = parseInt(comment1Votes)

        let comment2Votes = document.querySelector('#comment2').dataset.votes
        let votesForCommentTwo = parseInt(comment2Votes)
        
        
        const thisPic = data[0].src
            
            if(votesForCommentOne > votesForCommentTwo){
                e.preventDefault()
                let  cap1 = document.querySelector('#comment1').value
                document.querySelector('.current_pic').dataset.newCap = cap1
                fetch(post, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        caption: cap1,
                        img: thisPic,
                        vote: comment1Votes,
                        gallery_id: 1
                    }) 
                })
                .then(r => r.json())
                .then((data)=>{
                    let thumbArea = document.querySelector('#thumbnails')
                    let thumby = document.createElement('img')
                    thumby.src = data.img
                    let winnerCap = document.createElement('p')
                    winnerCap.innerText = data.caption
                    thumbArea.appendChild(thumby)
                    thumbArea.appendChild(winnerCap)

                })

            } else if (votesForCommentOne < votesForCommentTwo){
                // console.log('incom2')
                e.preventDefault()
                let cap2 = document.querySelector('#comment2').value
                console.log(cap2)
                document.querySelector('.current_pic').dataset.newCap = cap2
                fetch(post, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        caption: cap2,
                        img: thisPic,
                        vote: comment2Votes,
                        gallery_id: 1
                    })
                })
                    .then(r => r.json())
                    .then((data) => {
                        let thumbArea = document.querySelector('#thumbnails')
                        let thumby = document.createElement('img')
                        thumby.src = data.img
                        let winnerCap = document.createElement('p')
                        winnerCap.innerText = data.caption
                        thumbArea.appendChild(thumby)
                        thumbArea.appendChild(winnerCap)

                    })
            } else if (votesForCommentOne === votesForCommentTwo){
                e.preventDefault()
                let cap1 = document.querySelector('#comment1').value
                document.querySelector('.current_pic').dataset.newCap = cap1
                fetch(post, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        caption: cap1,
                        img: thisPic,
                        vote: comment1Votes,
                        gallery_id: 1
                    })
                })
                    .then(r => r.json())
                    .then((data) => {
                        let thumbArea = document.querySelector('#thumbnails')
                        let thumby = document.createElement('img')
                        thumby.src = data.img
                        let winnerCap = document.createElement('p')
                        winnerCap.innerText = data.caption
                        thumbArea.appendChild(thumby)
                        thumbArea.appendChild(winnerCap)

                    })

            }
        // console.log(cap1, 'outside sconta')
    
    }

    init()


})










