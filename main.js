nose_x = 0;
nose_y = 0;

function preload()
{
    lips_image = loadImage("lips.png");
}

function setup()
{
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("noes y =" + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x-20;
        nose_y = results[0].pose.nose.y+10;
    }
}

function draw()
{
    image(video, 0, 0, 350, 300);
    image(lips_image, nose_x, nose_y, 40, 30);
}

function take_Snapshot()
{
    save("myFilterLipstick.png")
}