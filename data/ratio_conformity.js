const selectedNumber = 15;
let ratios = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

//Freq of green for each plot, copied from R script. Needs to be updated whenever plots are changed.
var freq_replicate = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
const Ratios = [
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 1,
            "freqGreen": freq_replicate[1-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 2,
            "freqGreen": freq_replicate[2-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 3,
            "freqGreen": freq_replicate[3-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 4,
            "freqGreen": freq_replicate[4-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 5,
            "freqGreen": freq_replicate[5-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 6,
            "freqGreen": freq_replicate[6-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 7,
            "freqGreen": freq_replicate[7-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 8,
            "freqGreen": freq_replicate[8-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video></div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 9,
            "freqGreen": freq_replicate[9-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 10,
            "freqGreen": freq_replicate[10-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 11,
            "freqGreen": freq_replicate[11-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 12,
            "freqGreen": freq_replicate[12-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 13,
            "freqGreen": freq_replicate[13-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 14,
            "freqGreen": freq_replicate[14-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 15,
            "freqGreen": freq_replicate[15-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 16,
            "freqGreen": freq_replicate[16-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 17,
            "freqGreen": freq_replicate[17-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 18,
            "freqGreen": freq_replicate[18-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 19,
            "freqGreen": freq_replicate[19-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 20,
            "freqGreen": freq_replicate[20-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 21,
            "freqGreen": freq_replicate[21-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 22,
            "freqGreen": freq_replicate[22-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 23,
            "freqGreen": freq_replicate[23-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 24,
            "freqGreen": freq_replicate[24-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 25,
            "freqGreen": freq_replicate[25-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 26,
            "freqGreen": freq_replicate[26-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 27,
            "freqGreen": freq_replicate[27-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 28,
            "freqGreen": freq_replicate[28-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 29,
            "freqGreen": freq_replicate[29-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 30,
            "freqGreen": freq_replicate[30-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 31,
            "freqGreen": freq_replicate[31-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 32,
            "freqGreen": freq_replicate[32-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 33,
            "freqGreen": freq_replicate[33-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 34,
            "freqGreen": freq_replicate[34-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 35,
            "freqGreen": freq_replicate[35-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 36,
            "freqGreen": freq_replicate[36-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 37,
            "freqGreen": freq_replicate[37-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 38,
            "freqGreen": freq_replicate[38-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 39,
            "freqGreen": freq_replicate[39-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 40,
            "freqGreen": freq_replicate[40-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 41,
            "freqGreen": freq_replicate[41-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 42,
            "freqGreen": freq_replicate[42-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 43,
            "freqGreen": freq_replicate[43-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 44,
            "freqGreen": freq_replicate[44-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 45,
            "freqGreen": freq_replicate[45-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 46,
            "freqGreen": freq_replicate[46-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 47,
            "freqGreen": freq_replicate[47-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 48,
            "freqGreen": freq_replicate[48-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 49,
            "freqGreen": freq_replicate[49-1],
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/20 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/0 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 20,
            "right": 0
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/19 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/1 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 19,
            "right": 1
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/18 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/2 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 18,
            "right": 2
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/17 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/3 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 17,
            "right": 3
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/16 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/4 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 16,
            "right": 4
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/15 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/5 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 15,
            "right": 5
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/14 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/6 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 14,
            "right": 6
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/13 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/7 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 13,
            "right": 7
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/12 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/8 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 12,
            "right": 8
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/11 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/9 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 11,
            "right": 9
        },
        {
            "ratio": `<div class='bgImgCenter'>   <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/10 male icons - video GREY.mp4' autoplay = true class = 'votesG'>  </video>  <video src='vid/votes/10 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 10,
            "right": 10
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/9 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/11 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 9,
            "right": 11
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/8 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/12 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 8,
            "right": 12
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/7 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/13 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 7,
            "right": 13
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/6 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/14 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 6,
            "right": 14
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/5 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/15 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 5,
            "right": 15
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/4 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/16 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 4,
            "right": 16
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/3 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/17 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 3,
            "right": 17
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/2 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/18 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 2,
            "right": 18
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/1 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/19 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
            "left": 1,
            "right": 19
        },
        {
            "ratio": `<div class='bgImgCenter'>  <img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  width="50%"></img><br><video src='vid/votes/0 male icons - video GREY.mp4' autoplay = true class = 'votesG'></video>  <video src='vid/votes/20 male icons - video GREY.mp4'  autoplay = true class = 'votesR'>  </video> </div>`,
            "id": 50,
            "freqGreen": freq_replicate[50-1],
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

