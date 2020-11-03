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
var freq_replicate = [0.708, 0.532, 0.46, 0.408, 0.656, 0.412, 0.468, 0.524, 0.648, 0.488, 0.684, 0.36, 0.628, 0.228, 0.508, 0.62, 0.404, 0.548, 0.576, 0.628, 0.324, 0.372, 0.432, 0.772, 0.4, 0.48, 0.596, 0.536, 0.724, 0.548, 0.648, 0.496, 0.36, 0.532, 0.468, 0.472, 0.456, 0.484, 0.372, 0.324, 0.48, 0.508, 0.668, 0.54, 0.408, 0.18, 0.488, 0.508, 0.164, 0.468, 0.704, 0.504, 0.46, 0.568, 0.316, 0.168, 0.504, 0.568, 0.652, 0.352, 0.376, 0.744, 0.344, 0.56, 0.808, 0.664, 0.732, 0.572, 0.584, 0.596, 0.824, 0.22, 0.648, 0.472, 0.808, 0.616, 0.468, 0.468, 0.648, 0.56, 0.52, 0.476, 0.376, 0.6, 0.712, 0.208, 0.436, 0.756, 0.436, 0.404, 0.448, 0.508, 0.432, 0.432, 0.52, 0.66, 0.344, 0.264, 0.4, 0.344, 0.296, 0.476, 0.46, 0.352, 0.38, 0.54, 0.22, 0.324, 0.088, 0.348, 0.4, 0.256, 0.496, 0.504, 0.296, 0.624, 0.392, 0.616, 0.64, 0.46, 0.204, 0.336, 0.3, 0.352, 0.488, 0.364, 0.532, 0.276, 0.712, 0.54, 0.392, 0.608, 0.608, 0.52, 0.72, 0.516, 0.56, 0.432, 0.7, 0.328, 0.46, 0.6, 0.424, 0.532, 0.648, 0.556, 0.564, 0.496, 0.732, 0.548, 0.408, 0.56, 0.568, 0.328, 0.36, 0.652, 0.176, 0.58, 0.612, 0.556, 0.352, 0.488, 0.54, 0.684, 0.524, 0.564, 0.608, 0.704, 0.196, 0.336, 0.532, 0.508, 0.48, 0.392, 0.448, 0.308, 0.584, 0.552, 0.552, 0.508, 0.484, 0.62, 0.356, 0.476, 0.592, 0.548, 0.468, 0.896, 0.416, 0.46, 0.392, 0.58, 0.592, 0.384, 0.54, 0.548, 0.508, 0.476, 0.716, 0.468, 0.56, 0.392, 0.904, 0.7, 0.404, 0.248, 0.664, 0.3, 0.432, 0.528, 0.748, 0.536, 0.392, 0.332, 0.468, 0.508, 0.696, 0.436, 0.576, 0.46, 0.412, 0.556, 0.548, 0.672, 0.404, 0.18, 0.736, 0.4, 0.532, 0.636, 0.792, 0.58, 0.768, 0.716, 0.356, 0.656, 0.376, 0.552, 0.328, 0.484, 0.68, 0.58, 0.792, 0.432, 0.348, 0.472, 0.504, 0.572, 0.648, 0.404, 0.52, 0.492, 0.6, 0.3, 0.36, 0.46, 0.448, 0.308, 0.668, 0.368, 0.472, 0.432, 0.52, 0.388, 0.392, 0.592, 0.248, 0.504, 0.464, 0.236, 0.572, 0.56, 0.568, 0.744, 0.548, 0.488, 0.488, 0.304, 0.572, 0.724, 0.584, 0.42, 0.72, 0.46, 0.544, 0.844, 0.476, 0.292, 0.352, 0.356, 0.66, 0.54, 0.54, 0.656, 0.528, 0.296, 0.248, 0.844, 0.496, 0.412, 0.692, 0.42, 0.408, 0.72, 0.512, 0.308, 0.572, 0.728, 0.716, 0.296, 0.8, 0.58, 0.536, 0.492, 0.384, 0.528, 0.672, 0.436, 0.688, 0.296, 0.652, 0.532, 0.34, 0.54, 0.552, 0.484, 0.388, 0.56, 0.232, 0.5, 0.596, 0.288, 0.272, 0.416, 0.74, 0.392, 0.216, 0.376, 0.64, 0.564, 0.62, 0.476, 0.656, 0.388, 0.448, 0.748, 0.6, 0.652, 0.572, 0.688, 0.544, 0.284, 0.168, 0.38, 0.516, 0.404, 0.496, 0.56, 0.608, 0.516, 0.328, 0.468, 0.548, 0.496, 0.36, 0.548, 0.292, 0.712, 0.348, 0.568, 0.296, 0.86, 0.6, 0.712, 0.448, 0.716, 0.308, 0.476, 0.236, 0.516, 0.708, 0.572, 0.544, 0.44, 0.248, 0.24, 0.62, 0.652, 0.56, 0.576, 0.492, 0.476, 0.672, 0.416, 0.66, 0.692, 0.616, 0.288, 0.496, 0.764]
const RatioPlots = [
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 1 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 1,
            "freqGreen": freq_replicate[0],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 2 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 2,
            "freqGreen": freq_replicate[1],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 3 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 3,
            "freqGreen": freq_replicate[2],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 4 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 4,
            "freqGreen": freq_replicate[3],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 5 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 5,
            "freqGreen": freq_replicate[4],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 6 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 6,
            "freqGreen": freq_replicate[5],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 7 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 7,
            "freqGreen": freq_replicate[6],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 8 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 8,
            "freqGreen": freq_replicate[7],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 9 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 9,
            "freqGreen": freq_replicate[8],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 10 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 10,
            "freqGreen": freq_replicate[9],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 11 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 11,
            "freqGreen": freq_replicate[10],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 12 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 12,
            "freqGreen": freq_replicate[11],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 13 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 13,
            "freqGreen": freq_replicate[12],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 14 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 14,
            "freqGreen": freq_replicate[13],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 15 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 15,
            "freqGreen": freq_replicate[14],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 16 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 16,
            "freqGreen": freq_replicate[15],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 17 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 17,
            "freqGreen": freq_replicate[16],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 18 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 18,
            "freqGreen": freq_replicate[17],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 19 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 19,
            "freqGreen": freq_replicate[18],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 20 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 20,
            "freqGreen": freq_replicate[19],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 21 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 21,
            "freqGreen": freq_replicate[20],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 22 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 22,
            "freqGreen": freq_replicate[21],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 23 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 23,
            "freqGreen": freq_replicate[22],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 24 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 24,
            "freqGreen": freq_replicate[23],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 25 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 25,
            "freqGreen": freq_replicate[24],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 26 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 26,
            "freqGreen": freq_replicate[25],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 27 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 27,
            "freqGreen": freq_replicate[26],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 28 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 28,
            "freqGreen": freq_replicate[27],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 29 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 29,
            "freqGreen": freq_replicate[28],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 30 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 30,
            "freqGreen": freq_replicate[29],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 31 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 31,
            "freqGreen": freq_replicate[30],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 32 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 32,
            "freqGreen": freq_replicate[31],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 33 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 33,
            "freqGreen": freq_replicate[32],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 34 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 34,
            "freqGreen": freq_replicate[33],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 35 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 35,
            "freqGreen": freq_replicate[34],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 36 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 36,
            "freqGreen": freq_replicate[35],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 37 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 37,
            "freqGreen": freq_replicate[36],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 38 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 38,
            "freqGreen": freq_replicate[37],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 39 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 39,
            "freqGreen": freq_replicate[38],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 40 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 40,
            "freqGreen": freq_replicate[39],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 41 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 41,
            "freqGreen": freq_replicate[40],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 42 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 42,
            "freqGreen": freq_replicate[41],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 43 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 43,
            "freqGreen": freq_replicate[42],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 44 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 44,
            "freqGreen": freq_replicate[43],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 45 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 45,
            "freqGreen": freq_replicate[44],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 46 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 46,
            "freqGreen": freq_replicate[45],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 47 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 47,
            "freqGreen": freq_replicate[46],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 48 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 48,
            "freqGreen": freq_replicate[47],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 49 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 49,
            "freqGreen": freq_replicate[48],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 50 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 50,
            "freqGreen": freq_replicate[49],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 51 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 51,
            "freqGreen": freq_replicate[50],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 52 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 52,
            "freqGreen": freq_replicate[51],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 53 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 53,
            "freqGreen": freq_replicate[52],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 54 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 54,
            "freqGreen": freq_replicate[53],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 55 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 55,
            "freqGreen": freq_replicate[54],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 56 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 56,
            "freqGreen": freq_replicate[55],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 57 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 57,
            "freqGreen": freq_replicate[56],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 58 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 58,
            "freqGreen": freq_replicate[57],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 59 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 59,
            "freqGreen": freq_replicate[58],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 60 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 60,
            "freqGreen": freq_replicate[59],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 61 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 61,
            "freqGreen": freq_replicate[60],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 62 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 62,
            "freqGreen": freq_replicate[61],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 63 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 63,
            "freqGreen": freq_replicate[62],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 64 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 64,
            "freqGreen": freq_replicate[63],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 65 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 65,
            "freqGreen": freq_replicate[64],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 66 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 66,
            "freqGreen": freq_replicate[65],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 67 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 67,
            "freqGreen": freq_replicate[66],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 68 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 68,
            "freqGreen": freq_replicate[67],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 69 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 69,
            "freqGreen": freq_replicate[68],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 70 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 70,
            "freqGreen": freq_replicate[69],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 71 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 71,
            "freqGreen": freq_replicate[70],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 72 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 72,
            "freqGreen": freq_replicate[71],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 73 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 73,
            "freqGreen": freq_replicate[72],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 74 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 74,
            "freqGreen": freq_replicate[73],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 75 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 75,
            "freqGreen": freq_replicate[74],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 76 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 76,
            "freqGreen": freq_replicate[75],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 77 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 77,
            "freqGreen": freq_replicate[76],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 78 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 78,
            "freqGreen": freq_replicate[77],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 79 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 79,
            "freqGreen": freq_replicate[78],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 80 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 80,
            "freqGreen": freq_replicate[79],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 81 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 81,
            "freqGreen": freq_replicate[80],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 82 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 82,
            "freqGreen": freq_replicate[81],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 83 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 83,
            "freqGreen": freq_replicate[82],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 84 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 84,
            "freqGreen": freq_replicate[83],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 85 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 85,
            "freqGreen": freq_replicate[84],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 86 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 86,
            "freqGreen": freq_replicate[85],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 87 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 87,
            "freqGreen": freq_replicate[86],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 88 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 88,
            "freqGreen": freq_replicate[87],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 89 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 89,
            "freqGreen": freq_replicate[88],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 90 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 90,
            "freqGreen": freq_replicate[89],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 91 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 91,
            "freqGreen": freq_replicate[90],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 92 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 92,
            "freqGreen": freq_replicate[91],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 93 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 93,
            "freqGreen": freq_replicate[92],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 94 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 94,
            "freqGreen": freq_replicate[93],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 95 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 95,
            "freqGreen": freq_replicate[94],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 96 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 96,
            "freqGreen": freq_replicate[95],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 97 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 97,
            "freqGreen": freq_replicate[96],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 98 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 98,
            "freqGreen": freq_replicate[97],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 99 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 99,
            "freqGreen": freq_replicate[98],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 100 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 100,
            "freqGreen": freq_replicate[99],
            "colorAsked": "red",
        },


    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 101 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 101,
            "freqGreen": freq_replicate[100],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 102 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 102,
            "freqGreen": freq_replicate[101],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 103 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 103,
            "freqGreen": freq_replicate[102],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 104 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 104,
            "freqGreen": freq_replicate[103],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 105 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 105,
            "freqGreen": freq_replicate[104],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 106 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 106,
            "freqGreen": freq_replicate[105],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 107 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 107,
            "freqGreen": freq_replicate[106],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 108 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 108,
            "freqGreen": freq_replicate[107],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 109 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 109,
            "freqGreen": freq_replicate[108],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 110,
            "FreqGreen": freq_replicate[109],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "FreqGreen": freq_replicate[110],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "FreqGreen": freq_replicate[111],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "FreqGreen": freq_replicate[112],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "FreqGreen": freq_replicate[113],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "FreqGreen": freq_replicate[114],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "FreqGreen": freq_replicate[115],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "FreqGreen": freq_replicate[116],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "FreqGreen": freq_replicate[117],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "FreqGreen": freq_replicate[118],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "FreqGreen": freq_replicate[119],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "FreqGreen": freq_replicate[120],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "FreqGreen": freq_replicate[121],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "FreqGreen": freq_replicate[122],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "FreqGreen": freq_replicate[123],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "FreqGreen": freq_replicate[124],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "FreqGreen": freq_replicate[125],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "FreqGreen": freq_replicate[126],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "FreqGreen": freq_replicate[127],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "FreqGreen": freq_replicate[128],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "FreqGreen": freq_replicate[129],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "FreqGreen": freq_replicate[130],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "FreqGreen": freq_replicate[131],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "FreqGreen": freq_replicate[132],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "FreqGreen": freq_replicate[133],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "FreqGreen": freq_replicate[134],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "FreqGreen": freq_replicate[135],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "FreqGreen": freq_replicate[136],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "FreqGreen": freq_replicate[137],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "FreqGreen": freq_replicate[138],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "FreqGreen": freq_replicate[139],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "FreqGreen": freq_replicate[140],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "FreqGreen": freq_replicate[141],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "FreqGreen": freq_replicate[142],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "FreqGreen": freq_replicate[143],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "FreqGreen": freq_replicate[144],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "FreqGreen": freq_replicate[145],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "FreqGreen": freq_replicate[146],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "FreqGreen": freq_replicate[147],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "FreqGreen": freq_replicate[148],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "FreqGreen": freq_replicate[149],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "FreqGreen": freq_replicate[150],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "FreqGreen": freq_replicate[151],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "FreqGreen": freq_replicate[152],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "FreqGreen": freq_replicate[153],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "FreqGreen": freq_replicate[154],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "FreqGreen": freq_replicate[155],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "FreqGreen": freq_replicate[156],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "FreqGreen": freq_replicate[157],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "FreqGreen": freq_replicate[158],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "FreqGreen": freq_replicate[159],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "FreqGreen": freq_replicate[160],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "FreqGreen": freq_replicate[161],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "FreqGreen": freq_replicate[162],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "FreqGreen": freq_replicate[163],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "FreqGreen": freq_replicate[164],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "FreqGreen": freq_replicate[165],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "FreqGreen": freq_replicate[166],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "FreqGreen": freq_replicate[167],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "FreqGreen": freq_replicate[168],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "FreqGreen": freq_replicate[169],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "FreqGreen": freq_replicate[170],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "FreqGreen": freq_replicate[171],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "FreqGreen": freq_replicate[172],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "FreqGreen": freq_replicate[173],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "FreqGreen": freq_replicate[174],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "FreqGreen": freq_replicate[175],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "FreqGreen": freq_replicate[176],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "FreqGreen": freq_replicate[177],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "FreqGreen": freq_replicate[178],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "FreqGreen": freq_replicate[179],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "FreqGreen": freq_replicate[180],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "FreqGreen": freq_replicate[181],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "FreqGreen": freq_replicate[182],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "FreqGreen": freq_replicate[183],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "FreqGreen": freq_replicate[184],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "FreqGreen": freq_replicate[185],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "FreqGreen": freq_replicate[186],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "FreqGreen": freq_replicate[187],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "FreqGreen": freq_replicate[188],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "FreqGreen": freq_replicate[189],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "FreqGreen": freq_replicate[190],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "FreqGreen": freq_replicate[191],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "FreqGreen": freq_replicate[192],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "FreqGreen": freq_replicate[193],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "FreqGreen": freq_replicate[194],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "FreqGreen": freq_replicate[195],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "FreqGreen": freq_replicate[196],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "FreqGreen": freq_replicate[197],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 199,
            "FreqGreen": freq_replicate[198],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 199,
            "freqGreen": freq_replicate[918],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 200,
            "freqGreen": freq_replicate[199],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 200 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 200,
            "freqGreen": freq_replicate[199],
            "colorAsked": "red",
        },
    ],


    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 201 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 201,
            "freqGreen": freq_replicate[200],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 201 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 201,
            "freqGreen": freq_replicate[200],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 202 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 202,
            "freqGreen": freq_replicate[201],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 202 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 202,
            "freqGreen": freq_replicate[201],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 203 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 203,
            "freqGreen": freq_replicate[202],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 203 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 203,
            "freqGreen": freq_replicate[202],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 204 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 204,
            "freqGreen": freq_replicate[203],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 204 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 204,
            "freqGreen": freq_replicate[203],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 205 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 205,
            "freqGreen": freq_replicate[204],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 205 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 205,
            "freqGreen": freq_replicate[204],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 206 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 206,
            "freqGreen": freq_replicate[205],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 206 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 206,
            "freqGreen": freq_replicate[205],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 207 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 207,
            "freqGreen": freq_replicate[206],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 207 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 207,
            "freqGreen": freq_replicate[206],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 208 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 208,
            "freqGreen": freq_replicate[207],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 208 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 208,
            "freqGreen": freq_replicate[207],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 209 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 209,
            "freqGreen": freq_replicate[208],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 209 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 209,
            "freqGreen": freq_replicate[208],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 210 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 210,
            "FreqGreen": freq_replicate[209],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 210 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 210,
            "FreqGreen": freq_replicate[209],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 211 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 211,
            "FreqGreen": freq_replicate[210],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 211 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 211,
            "FreqGreen": freq_replicate[210],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 212 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 212,
            "FreqGreen": freq_replicate[211],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 212 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 212,
            "FreqGreen": freq_replicate[211],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 213 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 213,
            "FreqGreen": freq_replicate[212],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 213 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 213,
            "FreqGreen": freq_replicate[212],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 214 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 214,
            "FreqGreen": freq_replicate[213],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 214 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 214,
            "FreqGreen": freq_replicate[213],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 215 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 215,
            "FreqGreen": freq_replicate[214],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 215 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 215,
            "FreqGreen": freq_replicate[214],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 216 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 216,
            "FreqGreen": freq_replicate[215],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 216 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 216,
            "FreqGreen": freq_replicate[215],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 217 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 217,
            "FreqGreen": freq_replicate[216],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 217 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 217,
            "FreqGreen": freq_replicate[216],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 218 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 218,
            "FreqGreen": freq_replicate[217],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 218 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 218,
            "FreqGreen": freq_replicate[217],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 219 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 219,
            "FreqGreen": freq_replicate[218],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 219 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 219,
            "FreqGreen": freq_replicate[218],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 220 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 220,
            "FreqGreen": freq_replicate[219],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 220 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 220,
            "FreqGreen": freq_replicate[219],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 221 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 221,
            "FreqGreen": freq_replicate[220],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 221 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 221,
            "FreqGreen": freq_replicate[220],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 222 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 222,
            "FreqGreen": freq_replicate[221],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 222 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 222,
            "FreqGreen": freq_replicate[221],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 223 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 223,
            "FreqGreen": freq_replicate[222],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 223 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 223,
            "FreqGreen": freq_replicate[222],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 224 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 224,
            "FreqGreen": freq_replicate[223],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 224 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 224,
            "FreqGreen": freq_replicate[223],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 225 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 225,
            "FreqGreen": freq_replicate[224],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 225 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 225,
            "FreqGreen": freq_replicate[224],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 226 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 226,
            "FreqGreen": freq_replicate[225],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 226 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 226,
            "FreqGreen": freq_replicate[225],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 227 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 227,
            "FreqGreen": freq_replicate[226],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 227 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 227,
            "FreqGreen": freq_replicate[226],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 228 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 228,
            "FreqGreen": freq_replicate[227],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 228 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 228,
            "FreqGreen": freq_replicate[227],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 229 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 229,
            "FreqGreen": freq_replicate[228],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 229 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 229,
            "FreqGreen": freq_replicate[228],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 230 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 230,
            "FreqGreen": freq_replicate[229],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 230 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 230,
            "FreqGreen": freq_replicate[229],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 231 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 231,
            "FreqGreen": freq_replicate[230],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 231 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 231,
            "FreqGreen": freq_replicate[230],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 232 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 232,
            "FreqGreen": freq_replicate[231],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 232 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 232,
            "FreqGreen": freq_replicate[231],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 233 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 233,
            "FreqGreen": freq_replicate[232],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 233 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 233,
            "FreqGreen": freq_replicate[232],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 234 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 234,
            "FreqGreen": freq_replicate[233],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 234 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 234,
            "FreqGreen": freq_replicate[233],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 235 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 235,
            "FreqGreen": freq_replicate[234],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 235 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 235,
            "FreqGreen": freq_replicate[234],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 236 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 236,
            "FreqGreen": freq_replicate[235],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 236 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 236,
            "FreqGreen": freq_replicate[235],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 237 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 237,
            "FreqGreen": freq_replicate[236],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 237 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 237,
            "FreqGreen": freq_replicate[236],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 238 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 238,
            "FreqGreen": freq_replicate[237],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 238 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 238,
            "FreqGreen": freq_replicate[237],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 239 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 239,
            "FreqGreen": freq_replicate[238],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 239 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 239,
            "FreqGreen": freq_replicate[238],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 240 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 240,
            "FreqGreen": freq_replicate[239],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 240 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 240,
            "FreqGreen": freq_replicate[239],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 241 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 241,
            "FreqGreen": freq_replicate[240],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 241 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 241,
            "FreqGreen": freq_replicate[240],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 242 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 242,
            "FreqGreen": freq_replicate[241],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 242 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 242,
            "FreqGreen": freq_replicate[241],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 243 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 243,
            "FreqGreen": freq_replicate[242],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 243 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 243,
            "FreqGreen": freq_replicate[242],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 244 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 244,
            "FreqGreen": freq_replicate[243],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 244 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 244,
            "FreqGreen": freq_replicate[243],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 245 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 245,
            "FreqGreen": freq_replicate[244],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 245 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 245,
            "FreqGreen": freq_replicate[244],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 246 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 246,
            "FreqGreen": freq_replicate[245],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 246 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 246,
            "FreqGreen": freq_replicate[245],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 247 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 247,
            "FreqGreen": freq_replicate[246],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 247 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 247,
            "FreqGreen": freq_replicate[246],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 248 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 248,
            "FreqGreen": freq_replicate[247],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 248 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 248,
            "FreqGreen": freq_replicate[247],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 249 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 249,
            "FreqGreen": freq_replicate[248],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 249 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 249,
            "FreqGreen": freq_replicate[248],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 250 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 250,
            "FreqGreen": freq_replicate[249],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 250 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 250,
            "FreqGreen": freq_replicate[249],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 251 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 251,
            "FreqGreen": freq_replicate[250],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 251 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 251,
            "FreqGreen": freq_replicate[250],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 252 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 252,
            "FreqGreen": freq_replicate[251],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 252 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 252,
            "FreqGreen": freq_replicate[251],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 253 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 253,
            "FreqGreen": freq_replicate[252],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 253 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 253,
            "FreqGreen": freq_replicate[252],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 254 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 254,
            "FreqGreen": freq_replicate[253],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 254 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 254,
            "FreqGreen": freq_replicate[253],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 255 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 255,
            "FreqGreen": freq_replicate[254],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 255 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 255,
            "FreqGreen": freq_replicate[254],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 256 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 256,
            "FreqGreen": freq_replicate[255],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 256 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 256,
            "FreqGreen": freq_replicate[255],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 257 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 257,
            "FreqGreen": freq_replicate[256],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 257 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 257,
            "FreqGreen": freq_replicate[256],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 258 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 258,
            "FreqGreen": freq_replicate[257],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 258 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 258,
            "FreqGreen": freq_replicate[257],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 259 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 259,
            "FreqGreen": freq_replicate[258],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 259 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 259,
            "FreqGreen": freq_replicate[258],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 260 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 260,
            "FreqGreen": freq_replicate[259],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 260 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 260,
            "FreqGreen": freq_replicate[259],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 261 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 261,
            "FreqGreen": freq_replicate[260],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 261 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 261,
            "FreqGreen": freq_replicate[260],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 262 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 262,
            "FreqGreen": freq_replicate[261],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 262 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 262,
            "FreqGreen": freq_replicate[261],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 263 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 263,
            "FreqGreen": freq_replicate[262],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 263 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 263,
            "FreqGreen": freq_replicate[262],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 264 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 264,
            "FreqGreen": freq_replicate[263],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 264 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 264,
            "FreqGreen": freq_replicate[263],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 265 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 265,
            "FreqGreen": freq_replicate[264],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 265 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 265,
            "FreqGreen": freq_replicate[264],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 266 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 266,
            "FreqGreen": freq_replicate[265],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 266 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 266,
            "FreqGreen": freq_replicate[265],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 267 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 267,
            "FreqGreen": freq_replicate[266],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 267 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 267,
            "FreqGreen": freq_replicate[266],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 268 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 268,
            "FreqGreen": freq_replicate[267],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 268 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 268,
            "FreqGreen": freq_replicate[267],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 269 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 269,
            "FreqGreen": freq_replicate[268],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 269 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 269,
            "FreqGreen": freq_replicate[268],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 270 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 270,
            "FreqGreen": freq_replicate[269],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 270 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 270,
            "FreqGreen": freq_replicate[269],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 271 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 271,
            "FreqGreen": freq_replicate[270],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 271 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 271,
            "FreqGreen": freq_replicate[270],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 272 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 272,
            "FreqGreen": freq_replicate[271],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 272 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 272,
            "FreqGreen": freq_replicate[271],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 273 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 273,
            "FreqGreen": freq_replicate[272],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 273 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 273,
            "FreqGreen": freq_replicate[272],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 274 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 274,
            "FreqGreen": freq_replicate[273],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 274 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 274,
            "FreqGreen": freq_replicate[273],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 275 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 275,
            "FreqGreen": freq_replicate[274],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 275 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 275,
            "FreqGreen": freq_replicate[274],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 276 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 276,
            "FreqGreen": freq_replicate[275],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 276 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 276,
            "FreqGreen": freq_replicate[275],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 277 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 277,
            "FreqGreen": freq_replicate[276],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 277 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 277,
            "FreqGreen": freq_replicate[276],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 278 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 278,
            "FreqGreen": freq_replicate[277],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 278 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 278,
            "FreqGreen": freq_replicate[277],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 279 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 279,
            "FreqGreen": freq_replicate[278],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 279 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 279,
            "FreqGreen": freq_replicate[278],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 280 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 280,
            "FreqGreen": freq_replicate[279],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 280 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 280,
            "FreqGreen": freq_replicate[279],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 281 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 281,
            "FreqGreen": freq_replicate[280],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 281 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 281,
            "FreqGreen": freq_replicate[280],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 282 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 282,
            "FreqGreen": freq_replicate[281],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 282 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 282,
            "FreqGreen": freq_replicate[281],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 283 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 283,
            "FreqGreen": freq_replicate[282],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 283 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 283,
            "FreqGreen": freq_replicate[282],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 284 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 284,
            "FreqGreen": freq_replicate[283],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 284 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 284,
            "FreqGreen": freq_replicate[283],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 285 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 285,
            "FreqGreen": freq_replicate[284],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 285 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 285,
            "FreqGreen": freq_replicate[284],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 286 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 286,
            "FreqGreen": freq_replicate[285],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 286 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 286,
            "FreqGreen": freq_replicate[285],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 287 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 287,
            "FreqGreen": freq_replicate[286],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 287 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 287,
            "FreqGreen": freq_replicate[286],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 288 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 288,
            "FreqGreen": freq_replicate[287],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 288 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 288,
            "FreqGreen": freq_replicate[287],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 289 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 289,
            "FreqGreen": freq_replicate[288],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 289 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 289,
            "FreqGreen": freq_replicate[288],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 290 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 290,
            "FreqGreen": freq_replicate[289],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 290 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 290,
            "FreqGreen": freq_replicate[289],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 291 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 291,
            "FreqGreen": freq_replicate[290],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 291 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 291,
            "FreqGreen": freq_replicate[290],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 292 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 292,
            "FreqGreen": freq_replicate[291],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 292 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 292,
            "FreqGreen": freq_replicate[291],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 293 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 293,
            "FreqGreen": freq_replicate[292],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 293 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 293,
            "FreqGreen": freq_replicate[292],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 294 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 294,
            "FreqGreen": freq_replicate[293],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 294 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 294,
            "FreqGreen": freq_replicate[293],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 295 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 295,
            "FreqGreen": freq_replicate[294],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 295 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 295,
            "FreqGreen": freq_replicate[294],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 296 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 296,
            "FreqGreen": freq_replicate[295],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 296 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 296,
            "FreqGreen": freq_replicate[295],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 297 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 297,
            "FreqGreen": freq_replicate[296],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 297 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 297,
            "FreqGreen": freq_replicate[296],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 298 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 298,
            "FreqGreen": freq_replicate[297],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 298 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 298,
            "FreqGreen": freq_replicate[297],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 299 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 299,
            "FreqGreen": freq_replicate[298],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 299 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 299,
            "freqGreen": freq_replicate[298],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 300 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 300,
            "freqGreen": freq_replicate[299],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 300 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 300,
            "freqGreen": freq_replicate[299],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 301 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 301,
            "freqGreen": freq_replicate[300],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 301 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 301,
            "freqGreen": freq_replicate[300],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 302 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 302,
            "freqGreen": freq_replicate[301],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 302 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 302,
            "freqGreen": freq_replicate[301],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 303 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 303,
            "freqGreen": freq_replicate[302],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 303 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 303,
            "freqGreen": freq_replicate[302],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 304 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 304,
            "freqGreen": freq_replicate[303],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 304 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 304,
            "freqGreen": freq_replicate[303],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 305 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 305,
            "freqGreen": freq_replicate[304],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 305 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 305,
            "freqGreen": freq_replicate[304],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 306 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 306,
            "freqGreen": freq_replicate[305],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 306 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 306,
            "freqGreen": freq_replicate[305],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 307 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 307,
            "freqGreen": freq_replicate[306],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 307 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 307,
            "freqGreen": freq_replicate[306],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 308 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 308,
            "freqGreen": freq_replicate[307],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 308 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 308,
            "freqGreen": freq_replicate[307],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 309 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 309,
            "freqGreen": freq_replicate[308],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 309 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 309,
            "freqGreen": freq_replicate[308],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 310 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 310,
            "FreqGreen": freq_replicate[309],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 310 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 310,
            "FreqGreen": freq_replicate[309],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 311 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 311,
            "FreqGreen": freq_replicate[310],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 311 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 311,
            "FreqGreen": freq_replicate[310],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 312 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 312,
            "FreqGreen": freq_replicate[311],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 312 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 312,
            "FreqGreen": freq_replicate[311],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 313 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 313,
            "FreqGreen": freq_replicate[312],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 313 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 313,
            "FreqGreen": freq_replicate[312],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 314 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 314,
            "FreqGreen": freq_replicate[313],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 314 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 314,
            "FreqGreen": freq_replicate[313],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 315 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 315,
            "FreqGreen": freq_replicate[314],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 315 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 315,
            "FreqGreen": freq_replicate[314],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 316 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 316,
            "FreqGreen": freq_replicate[315],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 316 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 316,
            "FreqGreen": freq_replicate[315],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 317 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 317,
            "FreqGreen": freq_replicate[316],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 317 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 317,
            "FreqGreen": freq_replicate[316],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 318 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 318,
            "FreqGreen": freq_replicate[317],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 318 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 318,
            "FreqGreen": freq_replicate[317],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 319 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 319,
            "FreqGreen": freq_replicate[318],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 319 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 319,
            "FreqGreen": freq_replicate[318],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 320 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 320,
            "FreqGreen": freq_replicate[319],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 320 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 320,
            "FreqGreen": freq_replicate[319],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 321 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 321,
            "FreqGreen": freq_replicate[320],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 321 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 321,
            "FreqGreen": freq_replicate[320],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 322 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 322,
            "FreqGreen": freq_replicate[321],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 322 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 322,
            "FreqGreen": freq_replicate[321],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 323 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 323,
            "FreqGreen": freq_replicate[322],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 323 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 323,
            "FreqGreen": freq_replicate[322],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 324 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 324,
            "FreqGreen": freq_replicate[323],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 324 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 324,
            "FreqGreen": freq_replicate[323],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 325 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 325,
            "FreqGreen": freq_replicate[324],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 325 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 325,
            "FreqGreen": freq_replicate[324],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 326 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 326,
            "FreqGreen": freq_replicate[325],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 326 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 326,
            "FreqGreen": freq_replicate[325],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 327 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 327,
            "FreqGreen": freq_replicate[326],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 327 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 327,
            "FreqGreen": freq_replicate[326],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 328 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 328,
            "FreqGreen": freq_replicate[327],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 328 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 328,
            "FreqGreen": freq_replicate[327],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 329 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 329,
            "FreqGreen": freq_replicate[328],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 329 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 329,
            "FreqGreen": freq_replicate[328],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 330 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 330,
            "FreqGreen": freq_replicate[329],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 330 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 330,
            "FreqGreen": freq_replicate[329],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 331 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 331,
            "FreqGreen": freq_replicate[330],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 331 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 331,
            "FreqGreen": freq_replicate[330],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 332 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 332,
            "FreqGreen": freq_replicate[331],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 332 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 332,
            "FreqGreen": freq_replicate[331],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 333 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 333,
            "FreqGreen": freq_replicate[332],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 333 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 333,
            "FreqGreen": freq_replicate[332],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 334 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 334,
            "FreqGreen": freq_replicate[333],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 334 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 334,
            "FreqGreen": freq_replicate[333],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 335 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 335,
            "FreqGreen": freq_replicate[334],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 335 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 335,
            "FreqGreen": freq_replicate[334],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 336 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 336,
            "FreqGreen": freq_replicate[335],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 336 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 336,
            "FreqGreen": freq_replicate[335],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 337 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 337,
            "FreqGreen": freq_replicate[336],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 337 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 337,
            "FreqGreen": freq_replicate[336],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 338 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 338,
            "FreqGreen": freq_replicate[337],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 338 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 338,
            "FreqGreen": freq_replicate[337],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 339 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 339,
            "FreqGreen": freq_replicate[338],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 339 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 339,
            "FreqGreen": freq_replicate[338],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 340 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 340,
            "FreqGreen": freq_replicate[339],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 340 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 340,
            "FreqGreen": freq_replicate[339],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 341 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 341,
            "FreqGreen": freq_replicate[340],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 341 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 341,
            "FreqGreen": freq_replicate[340],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 342 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 342,
            "FreqGreen": freq_replicate[341],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 342 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 342,
            "FreqGreen": freq_replicate[341],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 343 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 343,
            "FreqGreen": freq_replicate[342],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 343 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 343,
            "FreqGreen": freq_replicate[342],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 344 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 344,
            "FreqGreen": freq_replicate[343],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 344 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 344,
            "FreqGreen": freq_replicate[343],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 345 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 345,
            "FreqGreen": freq_replicate[344],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 345 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 345,
            "FreqGreen": freq_replicate[344],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 346 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 346,
            "FreqGreen": freq_replicate[345],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 346 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 346,
            "FreqGreen": freq_replicate[345],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 347 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 347,
            "FreqGreen": freq_replicate[346],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 347 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 347,
            "FreqGreen": freq_replicate[346],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 348 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 348,
            "FreqGreen": freq_replicate[347],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 348 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 348,
            "FreqGreen": freq_replicate[347],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 349 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 349,
            "FreqGreen": freq_replicate[348],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 349 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 349,
            "FreqGreen": freq_replicate[348],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 350 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 350,
            "FreqGreen": freq_replicate[349],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 350 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 350,
            "FreqGreen": freq_replicate[349],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 351 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 351,
            "FreqGreen": freq_replicate[350],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 351 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 351,
            "FreqGreen": freq_replicate[350],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 352 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 352,
            "FreqGreen": freq_replicate[351],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 352 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 352,
            "FreqGreen": freq_replicate[351],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 353 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 353,
            "FreqGreen": freq_replicate[352],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 353 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 353,
            "FreqGreen": freq_replicate[352],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 354 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 354,
            "FreqGreen": freq_replicate[353],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 354 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 354,
            "FreqGreen": freq_replicate[353],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 355 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 355,
            "FreqGreen": freq_replicate[354],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 355 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 355,
            "FreqGreen": freq_replicate[354],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 356 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 356,
            "FreqGreen": freq_replicate[355],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 356 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 356,
            "FreqGreen": freq_replicate[355],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 357 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 357,
            "FreqGreen": freq_replicate[356],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 357 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 357,
            "FreqGreen": freq_replicate[356],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 358 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 358,
            "FreqGreen": freq_replicate[357],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 358 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 358,
            "FreqGreen": freq_replicate[357],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 359 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 359,
            "FreqGreen": freq_replicate[358],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 359 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 359,
            "FreqGreen": freq_replicate[358],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 360 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 360,
            "FreqGreen": freq_replicate[359],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 360 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 360,
            "FreqGreen": freq_replicate[359],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 361 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 361,
            "FreqGreen": freq_replicate[360],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 361 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 361,
            "FreqGreen": freq_replicate[360],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 362 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 362,
            "FreqGreen": freq_replicate[361],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 362 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 362,
            "FreqGreen": freq_replicate[361],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 363 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 363,
            "FreqGreen": freq_replicate[362],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 363 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 363,
            "FreqGreen": freq_replicate[362],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 364 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 364,
            "FreqGreen": freq_replicate[363],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 364 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 364,
            "FreqGreen": freq_replicate[363],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 365 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 365,
            "FreqGreen": freq_replicate[364],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 365 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 365,
            "FreqGreen": freq_replicate[364],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 366 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 366,
            "FreqGreen": freq_replicate[365],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 366 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 366,
            "FreqGreen": freq_replicate[365],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 367 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 367,
            "FreqGreen": freq_replicate[366],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 367 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 367,
            "FreqGreen": freq_replicate[366],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 368 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 368,
            "FreqGreen": freq_replicate[367],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 368 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 368,
            "FreqGreen": freq_replicate[367],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 369 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 369,
            "FreqGreen": freq_replicate[368],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 369 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 369,
            "FreqGreen": freq_replicate[368],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 370 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 370,
            "FreqGreen": freq_replicate[369],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 370 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 370,
            "FreqGreen": freq_replicate[369],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 371 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 371,
            "FreqGreen": freq_replicate[370],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 371 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 371,
            "FreqGreen": freq_replicate[370],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 372 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 372,
            "FreqGreen": freq_replicate[371],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 372 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 372,
            "FreqGreen": freq_replicate[371],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 373 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 373,
            "FreqGreen": freq_replicate[372],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 373 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 373,
            "FreqGreen": freq_replicate[372],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 374 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 374,
            "FreqGreen": freq_replicate[373],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 374 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 374,
            "FreqGreen": freq_replicate[373],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 375 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 375,
            "FreqGreen": freq_replicate[374],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 375 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 375,
            "FreqGreen": freq_replicate[374],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 376 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 376,
            "FreqGreen": freq_replicate[375],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 376 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 376,
            "FreqGreen": freq_replicate[375],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 377 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 377,
            "FreqGreen": freq_replicate[376],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 377 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 377,
            "FreqGreen": freq_replicate[376],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 378 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 378,
            "FreqGreen": freq_replicate[377],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 378 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 378,
            "FreqGreen": freq_replicate[377],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 379 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 379,
            "FreqGreen": freq_replicate[378],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 379 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 379,
            "FreqGreen": freq_replicate[378],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 380 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 380,
            "FreqGreen": freq_replicate[379],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 380 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 380,
            "FreqGreen": freq_replicate[379],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 381 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 381,
            "FreqGreen": freq_replicate[380],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 381 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 381,
            "FreqGreen": freq_replicate[380],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 382 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 382,
            "FreqGreen": freq_replicate[381],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 382 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 382,
            "FreqGreen": freq_replicate[381],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 383 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 383,
            "FreqGreen": freq_replicate[382],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 383 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 383,
            "FreqGreen": freq_replicate[382],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 384 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 384,
            "FreqGreen": freq_replicate[383],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 384 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 384,
            "FreqGreen": freq_replicate[383],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 385 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 385,
            "FreqGreen": freq_replicate[384],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 385 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 385,
            "FreqGreen": freq_replicate[384],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 386 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 386,
            "FreqGreen": freq_replicate[385],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 386 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 386,
            "FreqGreen": freq_replicate[385],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 387 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 387,
            "FreqGreen": freq_replicate[386],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 387 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 387,
            "FreqGreen": freq_replicate[386],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 388 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 388,
            "FreqGreen": freq_replicate[387],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 388 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 388,
            "FreqGreen": freq_replicate[387],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 389 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 389,
            "FreqGreen": freq_replicate[388],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 389 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 389,
            "FreqGreen": freq_replicate[388],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 390 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 390,
            "FreqGreen": freq_replicate[389],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 390 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 390,
            "FreqGreen": freq_replicate[389],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 391 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 391,
            "FreqGreen": freq_replicate[390],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 391 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 391,
            "FreqGreen": freq_replicate[390],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 392 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 392,
            "FreqGreen": freq_replicate[391],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 392 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 392,
            "FreqGreen": freq_replicate[391],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 393 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 393,
            "FreqGreen": freq_replicate[392],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 393 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 393,
            "FreqGreen": freq_replicate[392],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 394 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 394,
            "FreqGreen": freq_replicate[393],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 394 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 394,
            "FreqGreen": freq_replicate[393],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 395 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 395,
            "FreqGreen": freq_replicate[394],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 395 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 395,
            "FreqGreen": freq_replicate[394],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 396 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 396,
            "FreqGreen": freq_replicate[395],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 396 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 396,
            "FreqGreen": freq_replicate[395],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 397 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 397,
            "FreqGreen": freq_replicate[396],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 397 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 397,
            "FreqGreen": freq_replicate[396],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 398 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 398,
            "FreqGreen": freq_replicate[397],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 398 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 398,
            "FreqGreen": freq_replicate[397],
            "colorAske1d": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 399 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 399,
            "FreqGreen": freq_replicate[398],
            "colorAske1d": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 399 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 399,
            "freqGreen": freq_replicate[398],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 400 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 400,
            "freqGreen": freq_replicate[399],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 400 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 400,
            "freqGreen": freq_replicate[399],
            "colorAsked": "red",
        },

    ]
]


for (let index = 0; index < selectedNumber; index++) {
    const randomLength = RatioPlots.sampleNumber();

    const randomPair = RatioPlots[randomLength].sample();

    ratioplots.push(randomPair);
    RatioPlots.splice(randomLength, 1);
}

