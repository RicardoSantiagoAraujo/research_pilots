const selectedNumber = 10;
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
            "freqGreen": freq_replicate[109],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 110 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 110,
            "freqGreen": freq_replicate[109],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "freqGreen": freq_replicate[110],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 111 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 111,
            "freqGreen": freq_replicate[110],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "freqGreen": freq_replicate[111],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 112 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 112,
            "freqGreen": freq_replicate[111],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "freqGreen": freq_replicate[112],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 113 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 113,
            "freqGreen": freq_replicate[112],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "freqGreen": freq_replicate[113],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 114 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 114,
            "freqGreen": freq_replicate[113],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "freqGreen": freq_replicate[114],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 115 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 115,
            "freqGreen": freq_replicate[114],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "freqGreen": freq_replicate[115],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 116 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 116,
            "freqGreen": freq_replicate[115],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "freqGreen": freq_replicate[116],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 117 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 117,
            "freqGreen": freq_replicate[116],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "freqGreen": freq_replicate[117],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 118 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 118,
            "freqGreen": freq_replicate[117],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "freqGreen": freq_replicate[118],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 119 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 119,
            "freqGreen": freq_replicate[118],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "freqGreen": freq_replicate[119],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 120 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 120,
            "freqGreen": freq_replicate[119],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "freqGreen": freq_replicate[120],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 121 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 121,
            "freqGreen": freq_replicate[120],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "freqGreen": freq_replicate[121],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 122 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 122,
            "freqGreen": freq_replicate[121],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "freqGreen": freq_replicate[122],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 123 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 123,
            "freqGreen": freq_replicate[122],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "freqGreen": freq_replicate[123],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 124 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 124,
            "freqGreen": freq_replicate[123],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "freqGreen": freq_replicate[124],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 125 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 125,
            "freqGreen": freq_replicate[124],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "freqGreen": freq_replicate[125],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 126 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 126,
            "freqGreen": freq_replicate[125],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "freqGreen": freq_replicate[126],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 127 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 127,
            "freqGreen": freq_replicate[126],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "freqGreen": freq_replicate[127],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 128 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 128,
            "freqGreen": freq_replicate[127],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "freqGreen": freq_replicate[128],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 129 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 129,
            "freqGreen": freq_replicate[128],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "freqGreen": freq_replicate[129],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 130 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 130,
            "freqGreen": freq_replicate[129],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "freqGreen": freq_replicate[130],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 131 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 131,
            "freqGreen": freq_replicate[130],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "freqGreen": freq_replicate[131],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 132 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 132,
            "freqGreen": freq_replicate[131],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "freqGreen": freq_replicate[132],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 133 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 133,
            "freqGreen": freq_replicate[132],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "freqGreen": freq_replicate[133],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 134 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 134,
            "freqGreen": freq_replicate[133],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "freqGreen": freq_replicate[134],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 135 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 135,
            "freqGreen": freq_replicate[134],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "freqGreen": freq_replicate[135],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 136 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 136,
            "freqGreen": freq_replicate[135],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "freqGreen": freq_replicate[136],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 137 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 137,
            "freqGreen": freq_replicate[136],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "freqGreen": freq_replicate[137],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 138 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 138,
            "freqGreen": freq_replicate[137],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "freqGreen": freq_replicate[138],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 139 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 139,
            "freqGreen": freq_replicate[138],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "freqGreen": freq_replicate[139],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 140 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 140,
            "freqGreen": freq_replicate[139],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "freqGreen": freq_replicate[140],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 141 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 141,
            "freqGreen": freq_replicate[140],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "freqGreen": freq_replicate[141],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 142 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 142,
            "freqGreen": freq_replicate[141],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "freqGreen": freq_replicate[142],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 143 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 143,
            "freqGreen": freq_replicate[142],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "freqGreen": freq_replicate[143],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 144 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 144,
            "freqGreen": freq_replicate[143],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "freqGreen": freq_replicate[144],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 145 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 145,
            "freqGreen": freq_replicate[144],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "freqGreen": freq_replicate[145],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 146 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 146,
            "freqGreen": freq_replicate[145],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "freqGreen": freq_replicate[146],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 147 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 147,
            "freqGreen": freq_replicate[146],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "freqGreen": freq_replicate[147],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 148 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 148,
            "freqGreen": freq_replicate[147],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "freqGreen": freq_replicate[148],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 149 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 149,
            "freqGreen": freq_replicate[148],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "freqGreen": freq_replicate[149],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 150 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 150,
            "freqGreen": freq_replicate[149],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "freqGreen": freq_replicate[150],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 151 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 151,
            "freqGreen": freq_replicate[150],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "freqGreen": freq_replicate[151],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 152 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 152,
            "freqGreen": freq_replicate[151],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "freqGreen": freq_replicate[152],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 153 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 153,
            "freqGreen": freq_replicate[152],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "freqGreen": freq_replicate[153],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 154 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 154,
            "freqGreen": freq_replicate[153],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "freqGreen": freq_replicate[154],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 155 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 155,
            "freqGreen": freq_replicate[154],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "freqGreen": freq_replicate[155],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 156 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 156,
            "freqGreen": freq_replicate[155],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "freqGreen": freq_replicate[156],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 157 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 157,
            "freqGreen": freq_replicate[156],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "freqGreen": freq_replicate[157],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 158 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 158,
            "freqGreen": freq_replicate[157],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "freqGreen": freq_replicate[158],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 159 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 159,
            "freqGreen": freq_replicate[158],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "freqGreen": freq_replicate[159],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 160 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 160,
            "freqGreen": freq_replicate[159],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "freqGreen": freq_replicate[160],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 161 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 161,
            "freqGreen": freq_replicate[160],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "freqGreen": freq_replicate[161],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 162 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 162,
            "freqGreen": freq_replicate[161],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "freqGreen": freq_replicate[162],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 163 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 163,
            "freqGreen": freq_replicate[162],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "freqGreen": freq_replicate[163],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 164 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 164,
            "freqGreen": freq_replicate[163],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "freqGreen": freq_replicate[164],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 165 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 165,
            "freqGreen": freq_replicate[164],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "freqGreen": freq_replicate[165],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 166 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 166,
            "freqGreen": freq_replicate[165],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "freqGreen": freq_replicate[166],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 167 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 167,
            "freqGreen": freq_replicate[166],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "freqGreen": freq_replicate[167],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 168 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 168,
            "freqGreen": freq_replicate[167],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "freqGreen": freq_replicate[168],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 169 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 169,
            "freqGreen": freq_replicate[168],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "freqGreen": freq_replicate[169],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 170 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 170,
            "freqGreen": freq_replicate[169],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "freqGreen": freq_replicate[170],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 171 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 171,
            "freqGreen": freq_replicate[170],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "freqGreen": freq_replicate[171],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 172 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 172,
            "freqGreen": freq_replicate[171],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "freqGreen": freq_replicate[172],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 173 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 173,
            "freqGreen": freq_replicate[172],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "freqGreen": freq_replicate[173],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 174 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 174,
            "freqGreen": freq_replicate[173],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "freqGreen": freq_replicate[174],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 175 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 175,
            "freqGreen": freq_replicate[174],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "freqGreen": freq_replicate[175],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 176 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 176,
            "freqGreen": freq_replicate[175],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "freqGreen": freq_replicate[176],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 177 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 177,
            "freqGreen": freq_replicate[176],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "freqGreen": freq_replicate[177],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 178 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 178,
            "freqGreen": freq_replicate[177],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "freqGreen": freq_replicate[178],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 179 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 179,
            "freqGreen": freq_replicate[178],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "freqGreen": freq_replicate[179],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 180 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 180,
            "freqGreen": freq_replicate[179],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "freqGreen": freq_replicate[180],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 181 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 181,
            "freqGreen": freq_replicate[180],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "freqGreen": freq_replicate[181],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 182 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 182,
            "freqGreen": freq_replicate[181],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "freqGreen": freq_replicate[182],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 183 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 183,
            "freqGreen": freq_replicate[182],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "freqGreen": freq_replicate[183],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 184 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 184,
            "freqGreen": freq_replicate[183],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "freqGreen": freq_replicate[184],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 185 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 185,
            "freqGreen": freq_replicate[184],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "freqGreen": freq_replicate[185],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 186 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 186,
            "freqGreen": freq_replicate[185],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "freqGreen": freq_replicate[186],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 187 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 187,
            "freqGreen": freq_replicate[186],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "freqGreen": freq_replicate[187],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 188 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 188,
            "freqGreen": freq_replicate[187],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "freqGreen": freq_replicate[188],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 189 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 189,
            "freqGreen": freq_replicate[188],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "freqGreen": freq_replicate[189],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 190 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 190,
            "freqGreen": freq_replicate[189],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "freqGreen": freq_replicate[190],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 191 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 191,
            "freqGreen": freq_replicate[190],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "freqGreen": freq_replicate[191],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 192 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 192,
            "freqGreen": freq_replicate[191],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "freqGreen": freq_replicate[192],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 193 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 193,
            "freqGreen": freq_replicate[192],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "freqGreen": freq_replicate[193],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 194 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 194,
            "freqGreen": freq_replicate[193],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "freqGreen": freq_replicate[194],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 195 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 195,
            "freqGreen": freq_replicate[194],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "freqGreen": freq_replicate[195],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 196 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 196,
            "freqGreen": freq_replicate[195],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "freqGreen": freq_replicate[196],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 197 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 197,
            "freqGreen": freq_replicate[196],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "freqGreen": freq_replicate[197],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 198 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 198,
            "freqGreen": freq_replicate[197],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 199 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 199,
            "freqGreen": freq_replicate[198],
            "colorAsked": "green",
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
            "freqGreen": freq_replicate[209],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 210 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 210,
            "freqGreen": freq_replicate[209],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 211 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 211,
            "freqGreen": freq_replicate[210],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 211 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 211,
            "freqGreen": freq_replicate[210],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 212 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 212,
            "freqGreen": freq_replicate[211],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 212 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 212,
            "freqGreen": freq_replicate[211],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 213 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 213,
            "freqGreen": freq_replicate[212],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 213 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 213,
            "freqGreen": freq_replicate[212],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 214 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 214,
            "freqGreen": freq_replicate[213],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 214 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 214,
            "freqGreen": freq_replicate[213],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 215 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 215,
            "freqGreen": freq_replicate[214],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 215 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 215,
            "freqGreen": freq_replicate[214],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 216 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 216,
            "freqGreen": freq_replicate[215],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 216 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 216,
            "freqGreen": freq_replicate[215],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 217 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 217,
            "freqGreen": freq_replicate[216],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 217 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 217,
            "freqGreen": freq_replicate[216],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 218 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 218,
            "freqGreen": freq_replicate[217],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 218 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 218,
            "freqGreen": freq_replicate[217],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 219 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 219,
            "freqGreen": freq_replicate[218],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 219 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 219,
            "freqGreen": freq_replicate[218],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 220 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 220,
            "freqGreen": freq_replicate[219],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 220 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 220,
            "freqGreen": freq_replicate[219],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 221 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 221,
            "freqGreen": freq_replicate[220],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 221 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 221,
            "freqGreen": freq_replicate[220],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 222 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 222,
            "freqGreen": freq_replicate[221],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 222 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 222,
            "freqGreen": freq_replicate[221],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 223 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 223,
            "freqGreen": freq_replicate[222],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 223 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 223,
            "freqGreen": freq_replicate[222],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 224 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 224,
            "freqGreen": freq_replicate[223],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 224 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 224,
            "freqGreen": freq_replicate[223],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 225 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 225,
            "freqGreen": freq_replicate[224],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 225 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 225,
            "freqGreen": freq_replicate[224],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 226 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 226,
            "freqGreen": freq_replicate[225],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 226 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 226,
            "freqGreen": freq_replicate[225],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 227 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 227,
            "freqGreen": freq_replicate[226],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 227 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 227,
            "freqGreen": freq_replicate[226],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 228 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 228,
            "freqGreen": freq_replicate[227],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 228 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 228,
            "freqGreen": freq_replicate[227],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 229 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 229,
            "freqGreen": freq_replicate[228],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 229 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 229,
            "freqGreen": freq_replicate[228],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 230 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 230,
            "freqGreen": freq_replicate[229],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 230 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 230,
            "freqGreen": freq_replicate[229],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 231 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 231,
            "freqGreen": freq_replicate[230],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 231 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 231,
            "freqGreen": freq_replicate[230],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 232 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 232,
            "freqGreen": freq_replicate[231],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 232 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 232,
            "freqGreen": freq_replicate[231],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 233 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 233,
            "freqGreen": freq_replicate[232],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 233 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 233,
            "freqGreen": freq_replicate[232],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 234 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 234,
            "freqGreen": freq_replicate[233],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 234 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 234,
            "freqGreen": freq_replicate[233],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 235 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 235,
            "freqGreen": freq_replicate[234],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 235 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 235,
            "freqGreen": freq_replicate[234],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 236 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 236,
            "freqGreen": freq_replicate[235],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 236 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 236,
            "freqGreen": freq_replicate[235],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 237 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 237,
            "freqGreen": freq_replicate[236],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 237 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 237,
            "freqGreen": freq_replicate[236],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 238 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 238,
            "freqGreen": freq_replicate[237],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 238 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 238,
            "freqGreen": freq_replicate[237],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 239 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 239,
            "freqGreen": freq_replicate[238],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 239 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 239,
            "freqGreen": freq_replicate[238],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 240 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 240,
            "freqGreen": freq_replicate[239],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 240 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 240,
            "freqGreen": freq_replicate[239],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 241 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 241,
            "freqGreen": freq_replicate[240],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 241 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 241,
            "freqGreen": freq_replicate[240],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 242 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 242,
            "freqGreen": freq_replicate[241],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 242 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 242,
            "freqGreen": freq_replicate[241],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 243 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 243,
            "freqGreen": freq_replicate[242],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 243 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 243,
            "freqGreen": freq_replicate[242],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 244 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 244,
            "freqGreen": freq_replicate[243],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 244 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 244,
            "freqGreen": freq_replicate[243],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 245 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 245,
            "freqGreen": freq_replicate[244],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 245 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 245,
            "freqGreen": freq_replicate[244],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 246 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 246,
            "freqGreen": freq_replicate[245],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 246 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 246,
            "freqGreen": freq_replicate[245],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 247 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 247,
            "freqGreen": freq_replicate[246],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 247 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 247,
            "freqGreen": freq_replicate[246],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 248 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 248,
            "freqGreen": freq_replicate[247],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 248 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 248,
            "freqGreen": freq_replicate[247],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 249 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 249,
            "freqGreen": freq_replicate[248],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 249 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 249,
            "freqGreen": freq_replicate[248],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 250 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 250,
            "freqGreen": freq_replicate[249],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 250 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 250,
            "freqGreen": freq_replicate[249],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 251 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 251,
            "freqGreen": freq_replicate[250],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 251 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 251,
            "freqGreen": freq_replicate[250],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 252 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 252,
            "freqGreen": freq_replicate[251],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 252 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 252,
            "freqGreen": freq_replicate[251],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 253 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 253,
            "freqGreen": freq_replicate[252],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 253 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 253,
            "freqGreen": freq_replicate[252],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 254 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 254,
            "freqGreen": freq_replicate[253],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 254 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 254,
            "freqGreen": freq_replicate[253],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 255 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 255,
            "freqGreen": freq_replicate[254],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 255 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 255,
            "freqGreen": freq_replicate[254],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 256 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 256,
            "freqGreen": freq_replicate[255],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 256 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 256,
            "freqGreen": freq_replicate[255],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 257 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 257,
            "freqGreen": freq_replicate[256],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 257 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 257,
            "freqGreen": freq_replicate[256],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 258 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 258,
            "freqGreen": freq_replicate[257],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 258 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 258,
            "freqGreen": freq_replicate[257],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 259 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 259,
            "freqGreen": freq_replicate[258],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 259 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 259,
            "freqGreen": freq_replicate[258],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 260 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 260,
            "freqGreen": freq_replicate[259],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 260 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 260,
            "freqGreen": freq_replicate[259],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 261 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 261,
            "freqGreen": freq_replicate[260],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 261 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 261,
            "freqGreen": freq_replicate[260],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 262 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 262,
            "freqGreen": freq_replicate[261],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 262 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 262,
            "freqGreen": freq_replicate[261],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 263 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 263,
            "freqGreen": freq_replicate[262],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 263 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 263,
            "freqGreen": freq_replicate[262],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 264 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 264,
            "freqGreen": freq_replicate[263],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 264 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 264,
            "freqGreen": freq_replicate[263],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 265 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 265,
            "freqGreen": freq_replicate[264],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 265 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 265,
            "freqGreen": freq_replicate[264],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 266 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 266,
            "freqGreen": freq_replicate[265],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 266 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 266,
            "freqGreen": freq_replicate[265],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 267 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 267,
            "freqGreen": freq_replicate[266],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 267 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 267,
            "freqGreen": freq_replicate[266],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 268 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 268,
            "freqGreen": freq_replicate[267],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 268 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 268,
            "freqGreen": freq_replicate[267],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 269 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 269,
            "freqGreen": freq_replicate[268],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 269 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 269,
            "freqGreen": freq_replicate[268],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 270 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 270,
            "freqGreen": freq_replicate[269],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 270 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 270,
            "freqGreen": freq_replicate[269],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 271 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 271,
            "freqGreen": freq_replicate[270],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 271 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 271,
            "freqGreen": freq_replicate[270],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 272 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 272,
            "freqGreen": freq_replicate[271],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 272 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 272,
            "freqGreen": freq_replicate[271],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 273 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 273,
            "freqGreen": freq_replicate[272],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 273 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 273,
            "freqGreen": freq_replicate[272],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 274 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 274,
            "freqGreen": freq_replicate[273],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 274 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 274,
            "freqGreen": freq_replicate[273],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 275 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 275,
            "freqGreen": freq_replicate[274],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 275 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 275,
            "freqGreen": freq_replicate[274],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 276 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 276,
            "freqGreen": freq_replicate[275],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 276 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 276,
            "freqGreen": freq_replicate[275],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 277 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 277,
            "freqGreen": freq_replicate[276],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 277 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 277,
            "freqGreen": freq_replicate[276],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 278 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 278,
            "freqGreen": freq_replicate[277],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 278 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 278,
            "freqGreen": freq_replicate[277],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 279 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 279,
            "freqGreen": freq_replicate[278],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 279 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 279,
            "freqGreen": freq_replicate[278],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 280 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 280,
            "freqGreen": freq_replicate[279],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 280 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 280,
            "freqGreen": freq_replicate[279],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 281 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 281,
            "freqGreen": freq_replicate[280],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 281 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 281,
            "freqGreen": freq_replicate[280],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 282 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 282,
            "freqGreen": freq_replicate[281],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 282 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 282,
            "freqGreen": freq_replicate[281],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 283 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 283,
            "freqGreen": freq_replicate[282],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 283 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 283,
            "freqGreen": freq_replicate[282],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 284 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 284,
            "freqGreen": freq_replicate[283],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 284 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 284,
            "freqGreen": freq_replicate[283],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 285 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 285,
            "freqGreen": freq_replicate[284],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 285 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 285,
            "freqGreen": freq_replicate[284],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 286 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 286,
            "freqGreen": freq_replicate[285],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 286 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 286,
            "freqGreen": freq_replicate[285],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 287 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 287,
            "freqGreen": freq_replicate[286],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 287 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 287,
            "freqGreen": freq_replicate[286],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 288 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 288,
            "freqGreen": freq_replicate[287],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 288 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 288,
            "freqGreen": freq_replicate[287],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 289 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 289,
            "freqGreen": freq_replicate[288],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 289 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 289,
            "freqGreen": freq_replicate[288],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 290 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 290,
            "freqGreen": freq_replicate[289],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 290 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 290,
            "freqGreen": freq_replicate[289],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 291 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 291,
            "freqGreen": freq_replicate[290],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 291 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 291,
            "freqGreen": freq_replicate[290],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 292 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 292,
            "freqGreen": freq_replicate[291],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 292 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 292,
            "freqGreen": freq_replicate[291],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 293 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 293,
            "freqGreen": freq_replicate[292],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 293 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 293,
            "freqGreen": freq_replicate[292],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 294 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 294,
            "freqGreen": freq_replicate[293],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 294 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 294,
            "freqGreen": freq_replicate[293],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 295 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 295,
            "freqGreen": freq_replicate[294],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 295 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 295,
            "freqGreen": freq_replicate[294],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 296 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 296,
            "freqGreen": freq_replicate[295],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 296 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 296,
            "freqGreen": freq_replicate[295],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 297 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 297,
            "freqGreen": freq_replicate[296],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 297 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 297,
            "freqGreen": freq_replicate[296],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 298 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 298,
            "freqGreen": freq_replicate[297],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 298 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 298,
            "freqGreen": freq_replicate[297],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 299 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 299,
            "freqGreen": freq_replicate[298],
            "colorAsked": "green",
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
            "freqGreen": freq_replicate[309],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 310 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 310,
            "freqGreen": freq_replicate[309],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 311 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 311,
            "freqGreen": freq_replicate[310],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 311 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 311,
            "freqGreen": freq_replicate[310],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 312 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 312,
            "freqGreen": freq_replicate[311],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 312 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 312,
            "freqGreen": freq_replicate[311],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 313 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 313,
            "freqGreen": freq_replicate[312],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 313 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 313,
            "freqGreen": freq_replicate[312],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 314 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 314,
            "freqGreen": freq_replicate[313],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 314 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 314,
            "freqGreen": freq_replicate[313],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 315 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 315,
            "freqGreen": freq_replicate[314],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 315 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 315,
            "freqGreen": freq_replicate[314],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 316 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 316,
            "freqGreen": freq_replicate[315],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 316 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 316,
            "freqGreen": freq_replicate[315],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 317 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 317,
            "freqGreen": freq_replicate[316],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 317 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 317,
            "freqGreen": freq_replicate[316],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 318 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 318,
            "freqGreen": freq_replicate[317],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 318 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 318,
            "freqGreen": freq_replicate[317],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 319 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 319,
            "freqGreen": freq_replicate[318],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 319 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 319,
            "freqGreen": freq_replicate[318],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 320 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 320,
            "freqGreen": freq_replicate[319],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 320 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 320,
            "freqGreen": freq_replicate[319],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 321 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 321,
            "freqGreen": freq_replicate[320],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 321 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 321,
            "freqGreen": freq_replicate[320],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 322 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 322,
            "freqGreen": freq_replicate[321],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 322 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 322,
            "freqGreen": freq_replicate[321],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 323 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 323,
            "freqGreen": freq_replicate[322],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 323 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 323,
            "freqGreen": freq_replicate[322],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 324 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 324,
            "freqGreen": freq_replicate[323],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 324 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 324,
            "freqGreen": freq_replicate[323],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 325 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 325,
            "freqGreen": freq_replicate[324],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 325 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 325,
            "freqGreen": freq_replicate[324],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 326 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 326,
            "freqGreen": freq_replicate[325],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 326 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 326,
            "freqGreen": freq_replicate[325],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 327 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 327,
            "freqGreen": freq_replicate[326],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 327 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 327,
            "freqGreen": freq_replicate[326],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 328 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 328,
            "freqGreen": freq_replicate[327],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 328 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 328,
            "freqGreen": freq_replicate[327],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 329 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 329,
            "freqGreen": freq_replicate[328],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 329 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 329,
            "freqGreen": freq_replicate[328],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 330 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 330,
            "freqGreen": freq_replicate[329],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 330 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 330,
            "freqGreen": freq_replicate[329],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 331 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 331,
            "freqGreen": freq_replicate[330],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 331 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 331,
            "freqGreen": freq_replicate[330],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 332 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 332,
            "freqGreen": freq_replicate[331],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 332 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 332,
            "freqGreen": freq_replicate[331],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 333 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 333,
            "freqGreen": freq_replicate[332],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 333 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 333,
            "freqGreen": freq_replicate[332],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 334 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 334,
            "freqGreen": freq_replicate[333],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 334 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 334,
            "freqGreen": freq_replicate[333],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 335 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 335,
            "freqGreen": freq_replicate[334],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 335 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 335,
            "freqGreen": freq_replicate[334],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 336 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 336,
            "freqGreen": freq_replicate[335],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 336 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 336,
            "freqGreen": freq_replicate[335],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 337 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 337,
            "freqGreen": freq_replicate[336],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 337 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 337,
            "freqGreen": freq_replicate[336],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 338 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 338,
            "freqGreen": freq_replicate[337],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 338 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 338,
            "freqGreen": freq_replicate[337],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 339 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 339,
            "freqGreen": freq_replicate[338],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 339 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 339,
            "freqGreen": freq_replicate[338],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 340 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 340,
            "freqGreen": freq_replicate[339],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 340 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 340,
            "freqGreen": freq_replicate[339],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 341 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 341,
            "freqGreen": freq_replicate[340],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 341 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 341,
            "freqGreen": freq_replicate[340],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 342 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 342,
            "freqGreen": freq_replicate[341],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 342 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 342,
            "freqGreen": freq_replicate[341],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 343 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 343,
            "freqGreen": freq_replicate[342],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 343 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 343,
            "freqGreen": freq_replicate[342],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 344 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 344,
            "freqGreen": freq_replicate[343],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 344 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 344,
            "freqGreen": freq_replicate[343],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 345 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 345,
            "freqGreen": freq_replicate[344],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 345 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 345,
            "freqGreen": freq_replicate[344],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 346 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 346,
            "freqGreen": freq_replicate[345],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 346 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 346,
            "freqGreen": freq_replicate[345],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 347 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 347,
            "freqGreen": freq_replicate[346],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 347 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 347,
            "freqGreen": freq_replicate[346],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 348 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 348,
            "freqGreen": freq_replicate[347],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 348 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 348,
            "freqGreen": freq_replicate[347],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 349 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 349,
            "freqGreen": freq_replicate[348],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 349 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 349,
            "freqGreen": freq_replicate[348],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 350 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 350,
            "freqGreen": freq_replicate[349],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 350 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 350,
            "freqGreen": freq_replicate[349],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 351 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 351,
            "freqGreen": freq_replicate[350],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 351 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 351,
            "freqGreen": freq_replicate[350],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 352 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 352,
            "freqGreen": freq_replicate[351],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 352 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 352,
            "freqGreen": freq_replicate[351],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 353 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 353,
            "freqGreen": freq_replicate[352],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 353 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 353,
            "freqGreen": freq_replicate[352],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 354 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 354,
            "freqGreen": freq_replicate[353],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 354 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 354,
            "freqGreen": freq_replicate[353],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 355 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 355,
            "freqGreen": freq_replicate[354],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 355 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 355,
            "freqGreen": freq_replicate[354],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 356 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 356,
            "freqGreen": freq_replicate[355],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 356 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 356,
            "freqGreen": freq_replicate[355],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 357 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 357,
            "freqGreen": freq_replicate[356],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 357 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 357,
            "freqGreen": freq_replicate[356],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 358 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 358,
            "freqGreen": freq_replicate[357],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 358 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 358,
            "freqGreen": freq_replicate[357],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 359 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 359,
            "freqGreen": freq_replicate[358],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 359 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 359,
            "freqGreen": freq_replicate[358],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 360 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 360,
            "freqGreen": freq_replicate[359],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 360 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 360,
            "freqGreen": freq_replicate[359],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 361 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 361,
            "freqGreen": freq_replicate[360],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 361 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 361,
            "freqGreen": freq_replicate[360],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 362 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 362,
            "freqGreen": freq_replicate[361],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 362 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 362,
            "freqGreen": freq_replicate[361],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 363 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 363,
            "freqGreen": freq_replicate[362],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 363 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 363,
            "freqGreen": freq_replicate[362],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 364 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 364,
            "freqGreen": freq_replicate[363],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 364 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 364,
            "freqGreen": freq_replicate[363],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 365 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 365,
            "freqGreen": freq_replicate[364],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 365 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 365,
            "freqGreen": freq_replicate[364],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 366 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 366,
            "freqGreen": freq_replicate[365],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 366 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 366,
            "freqGreen": freq_replicate[365],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 367 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 367,
            "freqGreen": freq_replicate[366],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 367 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 367,
            "freqGreen": freq_replicate[366],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 368 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 368,
            "freqGreen": freq_replicate[367],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 368 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 368,
            "freqGreen": freq_replicate[367],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 369 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 369,
            "freqGreen": freq_replicate[368],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 369 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 369,
            "freqGreen": freq_replicate[368],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 370 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 370,
            "freqGreen": freq_replicate[369],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 370 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 370,
            "freqGreen": freq_replicate[369],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 371 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 371,
            "freqGreen": freq_replicate[370],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 371 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 371,
            "freqGreen": freq_replicate[370],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 372 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 372,
            "freqGreen": freq_replicate[371],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 372 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 372,
            "freqGreen": freq_replicate[371],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 373 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 373,
            "freqGreen": freq_replicate[372],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 373 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 373,
            "freqGreen": freq_replicate[372],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 374 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 374,
            "freqGreen": freq_replicate[373],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 374 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 374,
            "freqGreen": freq_replicate[373],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 375 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 375,
            "freqGreen": freq_replicate[374],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 375 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 375,
            "freqGreen": freq_replicate[374],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 376 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 376,
            "freqGreen": freq_replicate[375],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 376 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 376,
            "freqGreen": freq_replicate[375],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 377 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 377,
            "freqGreen": freq_replicate[376],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 377 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 377,
            "freqGreen": freq_replicate[376],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 378 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 378,
            "freqGreen": freq_replicate[377],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 378 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 378,
            "freqGreen": freq_replicate[377],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 379 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 379,
            "freqGreen": freq_replicate[378],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 379 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 379,
            "freqGreen": freq_replicate[378],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 380 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 380,
            "freqGreen": freq_replicate[379],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 380 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 380,
            "freqGreen": freq_replicate[379],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 381 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 381,
            "freqGreen": freq_replicate[380],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 381 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 381,
            "freqGreen": freq_replicate[380],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 382 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 382,
            "freqGreen": freq_replicate[381],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 382 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 382,
            "freqGreen": freq_replicate[381],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 383 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 383,
            "freqGreen": freq_replicate[382],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 383 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 383,
            "freqGreen": freq_replicate[382],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 384 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 384,
            "freqGreen": freq_replicate[383],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 384 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 384,
            "freqGreen": freq_replicate[383],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 385 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 385,
            "freqGreen": freq_replicate[384],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 385 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 385,
            "freqGreen": freq_replicate[384],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 386 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 386,
            "freqGreen": freq_replicate[385],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 386 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 386,
            "freqGreen": freq_replicate[385],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 387 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 387,
            "freqGreen": freq_replicate[386],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 387 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 387,
            "freqGreen": freq_replicate[386],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 388 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 388,
            "freqGreen": freq_replicate[387],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 388 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 388,
            "freqGreen": freq_replicate[387],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 389 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 389,
            "freqGreen": freq_replicate[388],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 389 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 389,
            "freqGreen": freq_replicate[388],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 390 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 390,
            "freqGreen": freq_replicate[389],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 390 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 390,
            "freqGreen": freq_replicate[389],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 391 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 391,
            "freqGreen": freq_replicate[390],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 391 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 391,
            "freqGreen": freq_replicate[390],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 392 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 392,
            "freqGreen": freq_replicate[391],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 392 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 392,
            "freqGreen": freq_replicate[391],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 393 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 393,
            "freqGreen": freq_replicate[392],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 393 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 393,
            "freqGreen": freq_replicate[392],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 394 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 394,
            "freqGreen": freq_replicate[393],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 394 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 394,
            "freqGreen": freq_replicate[393],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 395 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 395,
            "freqGreen": freq_replicate[394],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 395 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 395,
            "freqGreen": freq_replicate[394],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 396 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 396,
            "freqGreen": freq_replicate[395],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 396 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 396,
            "freqGreen": freq_replicate[395],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 397 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 397,
            "freqGreen": freq_replicate[396],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 397 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 397,
            "freqGreen": freq_replicate[396],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 398 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 398,
            "freqGreen": freq_replicate[397],
            "colorAsked": "green",
        },

        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="reddot">yellow dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 398 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 398,
            "freqGreen": freq_replicate[397],
            "colorAsked": "red",
        },

    ],
    [
        {
            "ratioplot": ` <div> <strong> Use the slider below to estimate the percentage of <span class="greendot">blue dots</span> and then click 'Continue'. </strong> <br> <img src='img/ratio estimation/Rplot 399 .jpg' class="img"></img> <br> <video src='vid/countdown15s.mp4' class="vid" autoplay = true></vid> </div> `,
            "plotID": 399,
            "freqGreen": freq_replicate[398],
            "colorAsked": "green",
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

