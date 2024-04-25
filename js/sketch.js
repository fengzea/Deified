let vid; 

function setup() {
    // 
createCanvas(480, 720, document.getElementById('canvas-ar'))
pixelDensity(1)
    
    // 加载视频文件，确保视频在同一目录下
    vid = createVideo('Poster.mp4', vidLoad); 
    vid.size(480, 720); 
    vid.hide(); // 如果不需要在canvas外显示视频控件
}

function vidLoad() {
    vid.loop(); // 设置视频循环播放
    vid.volume(0); // 静音，有助于处理自动播放策略
    vid.play(); // 自动开始播放
}

function draw() {
    background(200);
    image(vid, 0, 0); // 在canvas上显示视频
}

function mouseClicked() {
    if (vid.isPlaying()) {
        vid.pause(); // 如果视频正在播放，点击则暂停
        noLoop(); // 停止draw()函数的循环
    } else {
        vid.play(); // 如果视频暂停，点击则播放
        loop(); // 重新启动draw()函数的循环
    }
}
