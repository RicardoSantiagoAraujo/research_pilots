const selectedNumber = 10;
let ratios = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
var freq_replicate = [0.452, 0.34, 0.348, 0.316, 0.38, 0.58, 0.816, 0.508, 0.712, 0.32, 0.4, 0.452, 0.532, 0.336, 0.536, 0.464, 0.58, 0.32, 0.34, 0.564, 0.432, 0.4, 0.68, 0.564, 0.46, 0.312, 0.576, 0.188, 0.544, 0.436, 0.912, 0.324, 0.608, 0.46, 0.568, 0.48, 0.404, 0.492, 0.46, 0.224, 0.584, 0.66, 0.508, 0.328, 0.668, 0.296, 0.5, 0.284, 0.372, 0.408, 0.804, 0.268, 0.276, 0.424, 0.432, 0.664, 0.472, 0.612, 0.556, 0.82, 0.588, 0.704, 0.372, 0.74, 0.252, 0.68, 0.788, 0.608, 0.452, 0.644, 0.544, 0.4, 0.424, 0.6, 0.692, 0.612, 0.396, 0.712, 0.564, 0.428, 0.144, 0.732, 0.728, 0.452, 0.208, 0.464, 0.372, 0.604, 0.36, 0.268, 0.812, 0.612, 0.276, 0.616, 0.52, 0.432, 0.472, 0.444, 0.768, 0.852, 0.624, 0.388, 0.272, 0.568, 0.264, 0.624, 0.388, 0.268, 0.612, 0.368, 0.664, 0.552, 0.388, 0.248, 0.568, 0.452, 0.392, 0.396, 0.636, 0.388, 0.672, 0.412, 0.368, 0.556, 0.36, 0.624, 0.384, 0.46, 0.432, 0.668, 0.792, 0.32, 0.2, 0.348, 0.288, 0.54, 0.784, 0.352, 0.48, 0.488, 0.456, 0.564, 0.496, 0.4, 0.548, 0.572, 0.376, 0.428, 0.344, 0.352, 0.46, 0.708, 0.532, 0.448, 0.464, 0.604, 0.38, 0.728, 0.576, 0.628, 0.172, 0.548, 0.652, 0.408, 0.516, 0.528, 0.472, 0.344, 0.616, 0.544, 0.552, 0.48, 0.16, 0.548, 0.424, 0.404, 0.236, 0.624, 0.736, 0.308, 0.512, 0.756, 0.42, 0.408, 0.436, 0.824, 0.428, 0.42, 0.54, 0.592, 0.612, 0.584, 0.812, 0.432, 0.26, 0.344, 0.412, 0.3, 0.592, 0.476]

const Ratios = [
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 0,
            "right": 20
        }
    ]
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = Ratios.sampleNumber();

    const randomPair = Ratios[randomLength].sample();

    ratios.push(randomPair);
    Ratios.splice(randomLength, 1);
}

