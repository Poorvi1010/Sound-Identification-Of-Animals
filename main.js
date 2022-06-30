dog=0;
cat=0;
function start_identifying(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/h8bkEELQP/model.json",modelReady);
}
function modelReady()
{
   classifier.classify(gotResults) 
}
function gotResults(error,results)
{
    if (error){
        console.log(error);
    }
    else
    {
        console.log(results)
        document.getElementById("result_label").innerHTML="I'm Hearing "+results[0].label;
        img=document.getElementById("image");
        if(results[0].label=="Barking")
        {
          img.src="Dog_Gif.gif"
        }
        else if(results[0].label=="Meow")
        {
            img.src="Cat_Gif.gif";
        }
        else
        {
            img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }

    
}