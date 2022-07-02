var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
        speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    speak_data = "Taking selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
setTimeout(function(){

var imgId = selfie1;
take_Snapshot();
speak_data = "Taking your selfie in 10 seconds"
utterThis = SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis)
} , 10000)
    

setTimeout(function(){

    var imgId = selfie2;
    take_Snapshot();
    speak_data = "Next selfie will be taken in 5 seconds"
    utterThis = SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    } , 5000)
 
    setTimeout(function(){

        var imgId = selfie3;
        take_Snapshot();
        speak_data = "Third selfie will be taken in 5 seconds"
        utterThis = SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis)
        } , 5000)
}




function take_snapshot(){

console.log(img_id)


    Webcam.snap(function(data_uri){
    
        if(imgId == "selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data+uri+'"> '
        }

        if(imgId == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data+uri+'"> '
            }

            if(imgId == "selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data+uri+'"> '
                }
            


    })
    }


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});





