const selectedNumber = 50;
let ratioplots = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//var div = document.getElementsByClassName("heightvid")[0].style.height = 1;


//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
var freq_replicate = [0.76, 0.376, 0.256, 0.312, 0.508, 0.536, 0.552, 0.332, 0.472, 0.816, 0.592, 0.664, 0.472, 0.704, 0.188, 0.332, 0.484, 0.2, 0.32, 0.52, 0.704, 0.74, 0.456, 0.684, 0.604, 0.44, 0.28, 0.392, 0.392, 0.54, 0.08, 0.352, 0.636, 0.412, 0.244, 0.244, 0.672, 0.508, 0.736, 0.22, 0.76, 0.444, 0.316, 0.316, 0.504, 0.548, 0.448, 0.576, 0.58, 0.58, 0.364, 0.296, 0.42, 0.524, 0.696, 0.724, 0.504, 0.384, 0.512, 0.736, 0.448, 0.468, 0.388, 0.504, 0.46, 0.364, 0.788, 0.44, 0.568, 0.412, 0.556, 0.712, 0.48, 0.54, 0.38, 0.504, 0.52, 0.6, 0.612, 0.448, 0.516, 0.24, 0.504, 0.088, 0.604, 0.456, 0.528, 0.572, 0.432, 0.576, 0.576, 0.656, 0.324, 0.712, 0.492, 0.516, 0.624, 0.576, 0.62, 0.472, 0.412, 0.284, 0.292, 0.568, 0.344, 0.54, 0.444, 0.732, 0.516, 0.544, 0.428, 0.388, 0.312, 0.364, 0.556, 0.788, 0.52, 0.484, 0.34, 0.728, 0.604, 0.432, 0.188, 0.552, 0.292, 0.52, 0.612, 0.284, 0.348, 0.524, 0.484, 0.396, 0.76, 0.508, 0.356, 0.476, 0.536, 0.512, 0.308, 0.968, 0.352, 0.464, 0.376, 0.616, 0.516, 0.376, 0.664, 0.788, 0.336, 0.408, 0.432, 0.612, 0.528, 0.32, 0.44, 0.432, 0.516, 0.66, 0.708, 0.26, 0.268, 0.248, 0.572, 0.424, 0.352, 0.456, 0.284, 0.3, 0.496, 0.384, 0.188, 0.444, 0.576, 0.292, 0.36, 0.364, 0.444, 0.464, 0.344, 0.328, 0.484, 0.496, 0.688, 0.532, 0.2, 0.64, 0.78, 0.5, 0.704, 0.316, 0.528, 0.528, 0.56, 0.48, 0.544, 0.528, 0.124, 0.404, 0.324, 0.652]
const RatioPlots = [
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": 'red',
        },

          
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 199,
            "FreqGreen": freq_replicate[198],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 199,
            "freqGreen": freq_replicate[918],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 200,
            "freqGreen": freq_replicate[199],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 200,
            "freqGreen": freq_replicate[199],
            "colorAsked": 'red',
        },

        

        
        
    ]
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = RatioPlots.sampleNumber();

    const randomPair = RatioPlots[randomLength].sample();

    ratioplots.push(randomPair);
    RatioPlots.splice(randomLength, 1);
}

