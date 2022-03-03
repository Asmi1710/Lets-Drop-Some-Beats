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
                case "z":var audio= new Audio ('DrumSounds/tom-1.mp3');
                        audio.play();
                        break;
                case "x":var audio= new Audio ('DrumSounds/tom-2.mp3');
                        audio.play();
                        break;
                case "c":var audio= new Audio ('DrumSounds/tom-3.mp3');
                        audio.play();
                        break;
                case "v":var audio= new Audio ('DrumSounds/tom-4.mp3');
                        audio.play();
                        break;
                case "b":var audio= new Audio ('DrumSounds/crash.mp3');
                        audio.play();
                        break;
                case "n":var audio= new Audio ('DrumSounds/kick-bass.mp3');
                        audio.play();
                        break;
                case "m":var audio= new Audio ('DrumSounds/snare.mp3');
                        audio.play();
                        break;
                //piano black keys 
                case "1":var audio= new Audio ('PianoKeys/key15.mp3');
                        audio.play();
                        break;
                case "2":var audio= new Audio ('PianoKeys/key16.mp3');
                        audio.play();
                        break;
                case "3":var audio= new Audio ('PianoKeys/key17.mp3');
                        audio.play();
                        break;
                case "4":var audio= new Audio ('PianoKeys/key18.mp3');
                        audio.play();
                        break;
                case "5":var audio= new Audio ('PianoKeys/key19.mp3');
                        audio.play();
                        break;
                case "6":var audio= new Audio ('PianoKeys/key20.mp3');
                        audio.play();
                        break;
                case "7":var audio= new Audio ('PianoKeys/key21.mp3');
                        audio.play();
                        break;
                case "8":var audio= new Audio ('PianoKeys/key22.mp3');
                        audio.play();
                        break;
                case "9":var audio= new Audio ('PianoKeys/key23.mp3');
                        audio.play();
                        break;
                case "0":var audio= new Audio ('PianoKeys/key24.mp3');
                        audio.play();
                        break;

                //piano white keys 
                case "q":var audio= new Audio ('PianoKeys/key01.mp3');
                        audio.play();
                        break;
                case "w":var audio= new Audio ('PianoKeys/key02.mp3');
                        audio.play();
                        break;
                case "e":var audio= new Audio ('PianoKeys/key03.mp3');
                        audio.play();
                        break;
                case "r":var audio= new Audio ('PianoKeys/key04.mp3');
                        audio.play();
                        break;
                case "t":var audio= new Audio ('PianoKeys/key05.mp3');
                        audio.play();
                        break;
                case "y":var audio= new Audio ('PianoKeys/key06.mp3');
                        audio.play();
                        break;
                case "u":var audio= new Audio ('PianoKeys/key07.mp3');
                        audio.play();
                        break;
                case "i":var audio= new Audio ('PianoKeys/key08.mp3');
                        audio.play();
                        break;
                case "o":var audio= new Audio ('PianoKeys/key09.mp3');
                        audio.play();
                        break;
                case "p":var audio= new Audio ('PianoKeys/key10.mp3');
                        audio.play();
                        break;
                case "f":var audio= new Audio ('PianoKeys/key11.mp3');
                        audio.play();
                        break;
                case "g":var audio= new Audio ('PianoKeys/key12.mp3');
                        audio.play();
                        break;
                case "h":var audio= new Audio ('PianoKeys/key13.mp3');
                        audio.play();
                        break;
                case "j":var audio= new Audio ('PianoKeys/key14.mp3');
                        audio.play();
                        break;
                default:
                    break;
            }
}
