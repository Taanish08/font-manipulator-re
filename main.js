left_wrist_x = 0;
right_wrist_x = 0;
diff = 0;
nose_x = 0;
nose_y =0;

function setup() {
    canvas = createCanvas(550, 500 );
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background ('#969A97');
    textSize(diff);
    fill('#FFE787');
    text('Taanish', nose_x, nose_y );
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0) {

        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose_x = " + nose_x + " nose_y =" + nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        diff = floor (left_wrist_x - right_wrist_x);
    }
}