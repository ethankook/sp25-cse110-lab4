function logTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalIID = setInterval(logTime, 1000);