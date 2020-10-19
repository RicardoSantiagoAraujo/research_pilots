const selectedNumber = 10;
let ratioplots = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
var freq_replicate = [0.432, 0.740, 0.204, 0.224, 0.028, 0.464, 0.972, 0.468, 0.536, 0.556]

const RatioPlots = [
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'red',
        },
        
    ],
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = RatioPlots.sampleNumber();

    const randomPair = RatioPlots[randomLength].sample();

    ratioplots.push(randomPair);
    RatioPlots.splice(randomLength, 1);
}

