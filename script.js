let days= document.getElementById('days');
let hours= document.getElementById('hours');
let minutes= document.getElementById('minutes');
let seconds= document.getElementById('seconds');


function countDown(){
    const eventTime= new Date('1 August 2021 09:10:00');
    const currentTime= new Date();
    const totalTime= eventTime-currentTime;



    let totalSeconds= Math.floor(totalTime/1000);
    let totalMinutes= Math.floor(totalSeconds/60);
    let totalHours= Math.floor(totalMinutes/60);



    let dayRemain= Math.floor(totalHours/24);
    let hourRemain= totalHours%24;
    let minuteRemain= totalMinutes%60;
    let secondRemain= totalSeconds%60;



    days.innerHTML= dayRemain;
    hours.innerHTML= hourRemain;
    minutes.innerHTML= minuteRemain;
    seconds.innerHTML= secondRemain;

    
    console.log(dayRemain, hourRemain, minuteRemain, secondRemain);
}

countDown();
setInterval(countDown,1000)