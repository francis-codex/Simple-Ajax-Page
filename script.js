function Cname(params) {
    return document.getElementsByClassName(params)
}

links = Cname('link')
progress = Cname('progress')
contents = Cname('contents')

num = 0
xhr = new XMLHttpRequest
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        main_text = links[i].innerText
        interval = setInterval(() => {
            counter = num++
            progress[0].style = 'background:rgb(5, 183, 196); width:' + counter + '%; height:5px;';
            if (num == 100) {
                xhr.open('GET', 'server.php?request_type='+main_text, true)
                xhr.onreadystatechange = (e)=>{
                    if (e.target.status==200 && e.target.readyState==4) {
                      response = JSON.parse(e.target.response) 
                      contents[0].innerHTML=response
                    }
                }
                xhr.send()

                num = 0
                clearInterval(interval)
                progress[0].style = ' height:0px;';

            }
        }, 20)
    }
}