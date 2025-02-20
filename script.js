let image =[
    "rose.jpg",
    "rara.jpg",
    "rara2.jpg",
    "rara3.jpg",
    "rara4.jpg",
    "rara5.jpg",
    "r1.jpg",
    "r2.jpg",
    "r3.jpg",
    "r4.jpg",
    "r5.jpg",
    "r6.jpg",
    "r7.jpg",
    "r8.jpg",
    "r9.jpg",
    "r10.jpg",
    "r12.jpg",
    "r13.jpg",
    "r14.jpg",
    "r15.jpg",   
]
let play = document.getElementById("play");
clek.onclick = function(){
    play.play();
    this.hidden = true;
    bak.style.display = "inline-block";
    nex.style.display = "inline-block";
    document.getElementById("rose").style.display = "inline-block";
}
let cindex = Math.floor(Math.random()*20);
nex.onclick = function(){
    let rose = document.getElementById("rose");
    rose.src = image[cindex];
    rose.style.width = "250px";
    cindex = Math.floor(Math.random()*20);
}
bak.onclick = function(){
    let rose = document.getElementById("rose");
    rose.src = image[cindex];
    rose.style.width = "250px";
    cindex = Math.floor(Math.random()*20);
}

window.addEventListener('keydown', (event)=>{
    if(event.key == "Enter"){
        document.getElementById("rose").style.display = "inline-block";
        clek.hidden = true;
        play.play();
        bak.style.display = "inline-block";
        nex.style.display = "inline-block";
    }else if(event.key == "ArrowRight"){
        cindex = Math.floor(Math.random()*20);
        let rose = document.getElementById("rose");
        rose.src = image[cindex];
        rose.style.width = "250px";
        
    }else if(event.key == "ArrowLeft"){
        cindex = Math.floor(Math.random()*20);
        let rose = document.getElementById("rose");
        rose.style.width = "250px";
        rose.src = image[cindex];

    }
})
