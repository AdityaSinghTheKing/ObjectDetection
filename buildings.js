img=""
status_model=""
objects=[]
function preload(){
    img=loadImage("buildings.jpeg")
}
function setup(){
    canvas=createCanvas(640 , 420)
    canvas.center()
    objectdetector=ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}
function draw(){
    image(img , 0 , 0 , 640 , 420);
    if(status_model!=""){
        objectdetector.detect(img , gotresult);
        for(i=0 ; i < objects.length ; i++){

            r=random(255);
    
            g=random(255);
    
            b=random(255);
    
    
            document.getElementById("status").innerHTML="Objects detected";
            document.getElementById("n.o.objects").innerHTML=objects.length;
            percent=floor(objects[i].confidence * 100);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15 , objects[i].y + 15 )
            stroke(r,g,b)
            fill(r,g,b)
            noFill();
        }
    }
}
function modelLoaded(){
    console.log("MODEL IS NOT LOADED!!!!!!!");
    status_model=true;
}

function gotresult(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results
    }
}