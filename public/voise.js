

// звук сторінка де треба писати
let but = document.querySelector("#button")
if (but) {
  but.addEventListener("click", () => {
    let text = document.querySelector("#text").value;
    let speech = new SpeechSynthesisUtterance(text);
    let voices = [];
  
    speech.lang = "en";
    speech.rate = 0.8
    speech.volume = 1
    speech.pitch = 1
    voices = window.speechSynthesis.getVoices();
    speech.voice =  voices[1] 
    speech.text = text;
    speechSynthesis.speak(speech);
        
    });
}else {
  console.log('перейдіть на іншу сторінку');
}

// звук головна сторінка
   let nevBut = document.querySelectorAll('.newBut')
   if (nevBut) {
      for (let i = 0; i < nevBut.length; i++) {
        nevBut[i].addEventListener('click', (e)=>{
          let alt = e.altKey
          if (alt == false) {
            let a = nevBut[i].firstElementChild         
            let speech = new SpeechSynthesisUtterance();
            let voices = [];
        
            speech.lang = "en";
            speech.rate = 0.8
            speech.volume = 1
            speech.pitch = 1
            voices = window.speechSynthesis.getVoices();
            speech.voice =  voices[1] 
            speech.text =  a.innerHTML;
            speechSynthesis.speak(speech);
            console.log( a);
          }
         
          
        })
        nevBut[i].addEventListener('mouseover', (e)=>{
               let alt = e.altKey
               if (alt) {
                nevBut[i].classList.add("upsize")
               }
             })
             nevBut[i].addEventListener('mouseout', (e)=>{
              let alt = e.altKey
              if (alt) {
                nevBut[i].classList.remove("upsize")
              }else if (alt == false){
                nevBut[i].classList.remove("upsize")
              }
            })
            //видалення
            nevBut[i].addEventListener('click', async(e)=>{
              let alt = e.altKey
              if (alt) {
                let last = nevBut[i].lastElementChild.innerHTML
                console.log(last);
                let body = {
                  "logo": last
                }

                const xhr = new XMLHttpRequest();
                
                xhr.open("POST", "/delete");
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                xhr.send(last ); 
                location.reload();
               
              }
            })
            
        }
      }else {
        console.log('перейдіть на іншу сторінку');
      }














    //   function removeFriend(id){

    //     let dataId = `${id}`
    
    //     $.ajax({
    //         type: 'POST',
    //         url: `/delete`,
    //         data: {
    //             friend_id: `${id}`,
    //             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
    //             action: 'post'
    //         },
    //         success: function(json){
    //             let tbody = document.querySelector('newBut');
    //             let row = tbody.querySelector(`tr[data-id="${id}"]`);
    //             console.log(row);
    //             row.remove();
    //             alert('friend has been deleted')
    //         },
    //         error: function(xhr, errmsg, err) {
    //             console.log(error)
    //         }
    //     })
    // }
     




 
       
        
     
  
  

