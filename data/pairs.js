const selectedNumber = 10;
let pairs = [];

Array.prototype.sample = function(){
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function(){
    return Math.floor(Math.random() * this.length);
}

const retifiedPairs = [
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_1.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_2.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_3.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_4.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_5.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_6.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_7.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_8.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_9.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_10.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_11.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_12.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_13.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_14.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_15.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_16.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_17.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_18.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_19.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_20.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_21.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_22.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_23.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_24.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_25.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_26.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_27.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_28.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_29.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_30.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_31.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_32.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_33.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_34.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_35.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_36.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_37.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_38.PNG'  class = 'picpair' ></img> </div>"
        }   
    ],
    [
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/20 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/0 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/19 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/1 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/18 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/2 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/17 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/3 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/16 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/4 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/15 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/5 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/14 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/6 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/13 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/7 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/12 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/8 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/11 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/9 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/10 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/10 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/9 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/11 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/8 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/12 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/7 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/13 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/6 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/14 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/5 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/15 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/4 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/16 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/3 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/17 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/2 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/18 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/1 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/19 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        },
        { 
            "pair": "<div class='bgImgCenter'> <video src='vid/votes/0 female icons - video.mp4' autoplay = true class = 'votes'>  </video>  <video src='vid/votes/20 female icons - video.mp4'  autoplay = true class = 'votes'>  </video> <br> <img src='img/stimuli2/pairID_39.PNG'  class = 'picpair' ></img> </div>"
        }   
    ]
]

for (let index = 0; index <= selectedNumber; index++) {
    const randomLength = retifiedPairs.sampleNumber();

    const randomPair = retifiedPairs[randomLength].sample();
    
    pairs.push(randomPair);
    retifiedPairs.splice(randomLength, 1);
}

