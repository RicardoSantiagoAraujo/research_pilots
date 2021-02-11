const selectedNumber = 10;
let pairs = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

const retifiedPairs = [
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 1,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_1.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 1,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 2,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_2.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 2,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 3,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_3.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 3,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 4,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_4.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 4,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 5,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_5.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 5,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 6,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_6.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 6,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 7,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_7.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 7,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 8,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_8.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 8,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video></div>`,
            "id": 9,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_9.PNG'  class = 'picpair' ></img> <video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 9,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_10.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 10,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_11.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 11,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_12.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 12,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_13.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 13,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_14.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 14,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_15.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 15,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_16.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 16,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_17.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 17,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_18.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 18,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_19.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 19,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_20.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 20,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_21.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 21,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_22.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 22,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_23.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 23,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_24.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 24,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_25.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 25,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_26.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 26,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_27.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 27,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_28.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 28,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_29.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 29,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_30.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 30,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_31.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 31,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_32.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 32,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_33.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 33,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_34.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 34,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_35.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 35,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_36.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 36,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_37.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 37,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_38.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 38,
            "left": 0,
            "right": 20
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/20 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/0 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 20,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/19 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/1 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 19,
            "right": 1
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/18 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/2 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 18,
            "right": 2
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/17 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/3 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 17,
            "right": 3
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/16 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/4 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 16,
            "right": 4
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/15 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/5 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 15,
            "right": 5
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/14 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/6 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 14,
            "right": 6
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/13 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/7 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 13,
            "right": 7
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/12 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/8 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 12,
            "right": 8
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/11 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/9 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 11,
            "right": 9
        },
        {
            "pair": `<div class='bgImgCenter'>   <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/10 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/10 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 10,
            "right": 10
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/9 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/11 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 9,
            "right": 11
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/8 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/12 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 8,
            "right": 12
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/7 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/13 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 7,
            "right": 13
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/6 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/14 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 6,
            "right": 14
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/5 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/15 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 5,
            "right": 15
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/4 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/16 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 4,
            "right": 16
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/3 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/17 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 3,
            "right": 17
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/2 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/18 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 2,
            "right": 18
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/1 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/19 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 1,
            "right": 19
        },
        {
            "pair": `<div class='bgImgCenter'>  <img src='../img/stimuli2${genderKey}/pairID_39.PNG'  class = 'picpair' ></img><video src='../vid/votes/0 ${gender} icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='../vid/votes/20 ${gender} icons - video.mp4'  autoplay = true class = 'votes'>  </video> </div>`,
            "id": 39,
            "left": 0,
            "right": 20
        }
    ]
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = retifiedPairs.sampleNumber();

    const randomPair = retifiedPairs[randomLength].sample();

    pairs.push(randomPair);
    retifiedPairs.splice(randomLength, 1);
}

