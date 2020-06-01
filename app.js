window.addEventListener('load',()=>{
    const sounds= document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");



    //Sounds
    pads.forEach((pad,index) =>{
        pad.addEventListener('click',function(){
            sounds[index].play();
        })
    })
});