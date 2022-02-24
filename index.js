// detects the buttons on the drum kit

var n= document.querySelectorAll(".drum").length;
for (var i=0; i<n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var ButInnerHTML = this.innerHTML;
        music (ButInnerHTML); 
    });
}

// detects the buttons pressed on the piano

var k= document.querySelectorAll (".bk").length;
for (i=0;i<k;i++){
        document.querySelectorAll(".bk")[i].addEventListener("click", function(){
                var black=this.innerHTML;
                music (black);
        });

}

var k= document.querySelectorAll (".wk").length;
for (i=0;i<k;i++){
        document.querySelectorAll(".wk")[i].addEventListener("click", function(){
                var white=this.innerHTML;
                music (white);
        });

}

//detects the key pressed on the keyboard

document.addEventListener("keydown",function (event){
        var keyPressed = event.key;
        music (keyPressed);
});


//function to play the drum and piano sound

function music (key) {
        
        switch (key) {
                // drum keys
                case "z":var audio= new Audio ('sounds/tom-1.mp3');
                        audio.play();
                        break;
                case "x":var audio= new Audio ('sounds/tom-2.mp3');
                        audio.play();
                        break;
                case "c":var audio= new Audio ('sounds/tom-3.mp3');
                        audio.play();
                        break;
                case "v":var audio= new Audio ('sounds/tom-4.mp3');
                        audio.play();
                        break;
                case "b":var audio= new Audio ('sounds/crash.mp3');
                        audio.play();
                        break;
                case "n":var audio= new Audio ('sounds/kick-bass.mp3');
                        audio.play();
                        break;
                case "m":var audio= new Audio ('sounds/snare.mp3');
                        audio.play();
                        break;
                //piano black keys 
                case "1":var audio= new Audio ('piano/key15.mp3');
                        audio.play();
                        break;
                case "2":var audio= new Audio ('piano/key16.mp3');
                        audio.play();
                        break;
                case "3":var audio= new Audio ('piano/key17.mp3');
                        audio.play();
                        break;
                case "4":var audio= new Audio ('piano/key18.mp3');
                        audio.play();
                        break;
                case "5":var audio= new Audio ('piano/key19.mp3');
                        audio.play();
                        break;
                case "6":var audio= new Audio ('piano/key20.mp3');
                        audio.play();
                        break;
                case "7":var audio= new Audio ('piano/key21.mp3');
                        audio.play();
                        break;
                case "8":var audio= new Audio ('piano/key22.mp3');
                        audio.play();
                        break;
                case "9":var audio= new Audio ('piano/key23.mp3');
                        audio.play();
                        break;
                case "0":var audio= new Audio ('piano/key24.mp3');
                        audio.play();
                        break;

                //piano white keys 
                case "q":var audio= new Audio ('piano/key01.mp3');
                        audio.play();
                        break;
                case "w":var audio= new Audio ('piano/key02.mp3');
                        audio.play();
                        break;
                case "e":var audio= new Audio ('piano/key03.mp3');
                        audio.play();
                        break;
                case "r":var audio= new Audio ('piano/key04.mp3');
                        audio.play();
                        break;
                case "t":var audio= new Audio ('piano/key05.mp3');
                        audio.play();
                        break;
                case "y":var audio= new Audio ('piano/key06.mp3');
                        audio.play();
                        break;
                case "u":var audio= new Audio ('piano/key07.mp3');
                        audio.play();
                        break;
                case "i":var audio= new Audio ('piano/key08.mp3');
                        audio.play();
                        break;
                case "o":var audio= new Audio ('piano/key09.mp3');
                        audio.play();
                        break;
                case "p":var audio= new Audio ('piano/key10.mp3');
                        audio.play();
                        break;
                case "f":var audio= new Audio ('piano/key11.mp3');
                        audio.play();
                        break;
                case "g":var audio= new Audio ('piano/key12.mp3');
                        audio.play();
                        break;
                case "h":var audio= new Audio ('piano/key13.mp3');
                        audio.play();
                        break;
                case "j":var audio= new Audio ('piano/key14.mp3');
                        audio.play();
                        break;
                default:
                    break;
            }
}