var btns = document.querySelectorAll(".drum");
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function (){
        var curr = this.innerHTML;

        makeSound(curr);
});}

document.addEventListener("keydown",function(evt){
    makeSound(evt.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            buttonAnimation(key);
            break;
    
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key){
    var activebtn = document.querySelector(`.${key}`);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}





