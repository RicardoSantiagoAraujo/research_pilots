const selectedNumber = 100;
let ratioplots = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
var freq_replicate = [0.584, 0.636, 0.452, 0.396, 0.44, 0.568, 0.264, 0.22, 0.356, 0.488, 0.376, 0.112, 0.604, 0.496, 0.324, 0.36, 0.176, 0.38, 0.38, 0.172, 0.28, 0.388, 0.656, 0.188, 0.2, 0.552, 0.448, 0.788, 0.356, 0.548, 0.52, 0.652, 0.544, 0.432, 0.34, 0.736, 0.416, 0.416, 0.484, 0.524, 0.252, 0.508, 0.676, 0.472, 0.376, 0.048, 0.532, 0.376, 0.516, 0.508, 0.432, 0.752, 0.556, 0.692, 0.212, 0.364, 0.76, 0.724, 0.536, 0.436, 0.464, 0.624, 0.328, 0.524, 0.252, 0.336, 0.228, 0.184, 0.364, 0.444, 0.612, 0.348, 0.792, 0.44, 0.572, 0.608, 0.2, 0.184, 0.744, 0.568, 0.464, 0.336, 0.556, 0.772, 0.392, 0.648, 0.668, 0.648, 0.476, 0.536, 0.804, 0.512, 0.676, 0.508, 0.38, 0.416, 0.464, 0.44, 0.556, 0.352]

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
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": `<div class='bgImgCenter'> <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' width= 35%></img> <br> <video src='vid/countdown15s.mp4' height= 45 autoplay = true></vid> </div>`,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
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

