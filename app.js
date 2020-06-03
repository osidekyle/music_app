window.addEventListener('load',()=>{
    const sounds= document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["#60e394",
                    "#d36060" ,
                    "#c060d3",
                    "#d3d160",
                    "#6860d3",
                    "#60b2d3"]


    //Sounds
    pads.forEach((pad,index) =>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
        });
    });
});