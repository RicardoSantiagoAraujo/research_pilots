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
var freq_replicate = [0.528, 0.616, 0.46, 0.488, 0.296, 0.332, 0.436, 0.42, 0.284, 0.464, 0.416, 0.48, 0.372, 0.296, 0.628, 0.472, 0.536, 0.628, 0.592, 0.42, 0.64, 0.332, 0.5, 0.268, 0.552, 0.704, 0, 0.448, 0.308, 0.508, 0.652, 0.276, 0.448, 0.54, 0.612, 0.556, 0.284, 0.376, 0.492, 0.34, 0.524, 0.308, 0.496, 0.488, 0.552, 0.468, 0.6, 0.548, 0.268, 0.648, 0.52, 0.544, 0.196, 0.736, 0.52, 0.496, 0.74, 0.636, 0.336, 0.58, 0.22, 0.504, 0.644, 0.248, 0.644, 0.536, 0.484, 0.552, 0.588, 0.612, 0.492, 0.404, 0.448, 0.652, 0.728, 0.932, 0.56, 0.704, 0.632, 0.608, 0.54, 0.292, 0.456, 0.44, 0.5, 0.74, 0.34, 0.508, 0.46, 0.612, 0.584, 0.38, 0.444, 0.488, 0.44, 0.636, 0.264, 0.756, 0.432, 0.452, 0.908, 0.392, 0.188, 0.488, 0.492, 0.516, 0.52, 0.4, 0.46, 0.416, 0.416, 0.64, 0.74, 0.616, 0.552, 0.568, 0.216, 0.368, 0.508, 0.544, 0.472, 0.272, 0.56, 0.66, 0.368, 0.472, 0.492, 0.652, 0.42, 0.464, 0.468, 0.696, 0.328, 0.504, 0.412, 0.508, 0.404, 0.528, 0.728, 0.404, 0.664, 0.66, 0.524, 0.344, 0.408, 0.392, 0.656, 0.804, 0.228, 0.412, 0.544, 0.472, 0.488, 0.516, 0.392, 0.532, 0.72, 0.548, 0.292, 0.624, 0.388, 0.3, 0.652, 0.576, 0.432, 0.36, 0.572, 0.508, 0.744, 0.384, 0.32, 0.6, 0.532, 0.364, 0.576, 0.696, 0.464, 0.42, 0.436, 0.252, 0.256, 0.244, 0.636, 0.428, 0.432, 0.364, 0.576, 0.508, 0.584, 0.58, 0.292, 0.588, 0.48, 0.572, 0.532, 0.504, 0.596, 0.496, 0.456, 0.548]
const RatioPlots = [
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": 'red',
        },

          
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 199,
            "FreqGreen": freq_replicate[198],
            "colorAske1d": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 199,
            "freqGreen": freq_replicate[918],
            "colorAsked": 'red',
        },
        
    ],
    [
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'greendot'>green dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
            "plotID": 200,
            "freqGreen": freq_replicate[199],
            "colorAsked": 'green',
        },
        
        {
            "ratioplot": ` <strong> Use the slider below to estimate the percentage of <span class = 'reddot'>red dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' height = 350vh></img> <br> <video src='vid/countdown15s.mp4' width = 50vw autoplay = true></vid> `,
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

