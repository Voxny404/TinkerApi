const audio = document.getElementById('notifier');
//message to dom
function outputMessage(message){

  const div = document.createElement('div')
  div.classList.add('message');
  const a = document.createElement('a')
  a.classList.add('text');
  const img = document.createElement('img')
  img.classList.add('imageChat');

  //checks name
  if(!message.user){ message.user = ""; }

  //creates div element with text and timestamp
   div.innerHTML = `<p class="meta"><a class="name">${message.user}</a> <span class="time">${message.time}</span></p>`

  if(message.msg.length < 5000){
    //looks for img and hyper link
    let reg_exUrl = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;
    if(message.msg.match(reg_exUrl)){

      message.msg.replace(reg_exUrl, (url)=>{
        //checks if img is real
        let imageLoader = new Image();
        imageLoader.src = url
        imageLoader.onload = () =>{
          if (imageLoader.width > 0) {
            img.src = url

            //sepatates the text from the img url
            let fixedMsg = message.msg.replace(reg_exUrl,'')
            a.innerText = `${fixedMsg}\n`
          }
        }
        imageLoader.onerror = () =>{
          a.href = url
          a.style.textDecoration = 'none'
          a.id = 'urlLink'
          a.target = '_blank'
          a.innerText = `${message.msg}`
        }
      })
    }
    //checks if message is no img or hyperlink
    if(message.msg.match(reg_exUrl)){} else {
      a.innerText = `${message.msg}`
    }

  } else {
    a.innerText = `My message was too long !`
  }
  //adds the whole package
  document.getElementById('chat-messages').appendChild(div);
  document.getElementById('chat-messages').appendChild(a);
  document.getElementById('chat-messages').appendChild(img);
}
