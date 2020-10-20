const selectedNumber = 10;
let ratios = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
//var freq_replicate = [0.584, 0.636, 0.452, 0.396, 0.44, 0.568, 0.264, 0.22, 0.356, 0.488, 0.376, 0.112, 0.604, 0.496, 0.324, 0.36, 0.176, 0.38, 0.38, 0.172, 0.28, 0.388, 0.656, 0.188, 0.2, 0.552, 0.448, 0.788, 0.356, 0.548, 0.52, 0.652, 0.544, 0.432, 0.34, 0.736, 0.416, 0.416, 0.484, 0.524, 0.252, 0.508, 0.676, 0.472, 0.376, 0.048, 0.532, 0.376, 0.516, 0.508, 0.432, 0.752, 0.556, 0.692, 0.212, 0.364, 0.76, 0.724, 0.536, 0.436, 0.464, 0.624, 0.328, 0.524, 0.252, 0.336, 0.228, 0.184, 0.364, 0.444, 0.612, 0.348, 0.792, 0.44, 0.572, 0.608, 0.2, 0.184, 0.744, 0.568, 0.464, 0.336, 0.556, 0.772, 0.392, 0.648, 0.668, 0.648, 0.476, 0.536, 0.804, 0.512, 0.676, 0.508, 0.38, 0.416, 0.464, 0.44, 0.556, 0.352]


const Ratios = [
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 1,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 1 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 2,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 2 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 3,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 3 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 4,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 4 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 5,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 5 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 6,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 6 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 7,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 7 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 8,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 8 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 9,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 9 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 10 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 11 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 12 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 13 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 14 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 15 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 16 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 17 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 18 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 19 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 20 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 21 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 22 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 23 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 24 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 25 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 26 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 27 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 28 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 29 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 30 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 31 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 32 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 33 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 34 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 35 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 36 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 37 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 38 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/20 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/19 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/18 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/17 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/16 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/15 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/14 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/13 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/12 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/11 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/10 male icons - video.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/9 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/8 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/7 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/6 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/5 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/4 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/3 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/2 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/1 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/ratio estimation/Rplot 39 .jpg'  width="35%"></img><br><video src='vid/votes/0 male icons - video.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
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

