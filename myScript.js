
let movStyle = 0;
let scene = 0;

let changeCnt = 0;
let cntNum = 0;
let isBounce = false;
let isDirection = true;

let myVideo = document.querySelector('.video');

let myAni;

let videoSrc = ['videos/trump.mp4', 'videos/tom.mp4'];


let myScrollVal;
let totalScrollVal;

function myScroll(e)
{
    myScrollVal =  window.scrollY + window.innerHeight;
    totalScrollVal = document.body.scrollHeight;

    if(myScrollVal >= totalScrollVal && !isBounce)
    {
        isBounce = true;
        if(scene == 0)
        {
            scene =1;
            myVideo.currentTime = 7;
        }
        else
        {
            scene =0;
            myVideo.currentTime = 0;
        }
        changeCnt ++;

        if(changeCnt == 4)
        {
            if(movStyle == 0)
            {
                movStyle = 1;
                chageMovSrc(1);
            }
            else
            {
                movStyle = 0;
                chageMovSrc(0);
            }
            changeCnt = 0;
        }

    } 

    if((totalScrollVal - myScrollVal) > 100)
    {
        isBounce = false;
    }
}

function frameRender()
{
    //console.log(myVideo.currentTime);
        if(scene == 0)
        {
            if( myVideo.currentTime > 6)
            {
                myVideo.currentTime = 0;
            }
        }
        else{
            if( myVideo.currentTime > 14.8)
            {
                myVideo.currentTime = 7;
            }
        }

    
    requestAnimationFrame(frameRender);
     
}


function chageMovSrc(num)
{
    myVideo.src = videoSrc[num];
    myVideo.play();
}

function init()
{
    myVideo.play();
    window.addEventListener('scroll', myScroll);
    myAni = requestAnimationFrame(frameRender);
}

init();


