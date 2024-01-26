
difference= 0;
rightWristX = 0;
leftWristX= 0;
function setup()
{
    canvas = createCanvas(600,500)
    canvas.position(560,165)
    video = createCapture(VIDEO)
    video.size(450,450)

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses) 
}
function modelLoaded() {
    console.log('PoseNet Is Intialized')
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference)
    }

}
function draw() {
    background('#969A97')

    document.getElementById("font_size").innerHTML = "Font size will be = "+ difference +"px"
    fill('#F90093')
    textSize(difference)
    text('Daksh',50,400)
}


