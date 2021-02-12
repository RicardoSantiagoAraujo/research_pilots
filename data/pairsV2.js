const selectedNumber = 10;
let pairsV2 = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

const retifiedPairs = [
    [
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/1.73-WM-201-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/1.89-WM-215-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/1.61-WF-002-Trans.png'  class = 'partnerL'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 1,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/1.73-WM-201-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/1.89-WM-215-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/1.61-WF-002-Trans.png'  class = 'partnerR'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 0,
            "right": 1
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/4.66-WM-004-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/4.59-WM-029-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/2.33-WF-239-Trans.png'  class = 'partnerL'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 1,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/4.66-WM-004-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/4.59-WM-029-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/2.33-WF-239-Trans.png'  class = 'partnerR'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 0,
            "right": 1
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/4.13-WM-207-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/4.12-WM-250-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/3.82-WF-244-Trans.png'  class = 'partnerL'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 1,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/4.13-WM-207-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/4.12-WM-250-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/3.82-WF-244-Trans.png'  class = 'partnerR'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 0,
            "right": 1
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/1.89-WM-228-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/2.04-WM-236-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/4.76-WF-220-Trans.png'  class = 'partnerL'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 1,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/1.89-WM-228-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/2.04-WM-236-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/2.33-WF-239-Trans.png'  class = 'partnerR'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 0,
            "right": 1
        }
    ],
    [
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/2.6-WM-251-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/2.12-WM-233-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/4.89-WF-003-Trans.png'  class = 'partnerL'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 1,
            "right": 0
        },
        {
            "pair": `<div class='bgImgCenter'>
              <img src='../img/transparentFaces/transparent${genderKey}/2.6-WM-251-Trans.png'  class = 'picpair' > 
              <img src='../img/transparentFaces/transparent${genderKey}/2.12-WM-233-Trans.png'  class = 'picpair' ></img>
              <img src='../img/transparentFaces/transparent${genderOppositeKey}/2.33-WF-239-Trans.png'  class = 'partnerR'>  </img> 
              <div class ='whiterec'></div>
              </div>`,
            "id": 1,
            "left": 0,
            "right": 1
        }
    ],
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = retifiedPairs.sampleNumber();

    const randomPair = retifiedPairs[randomLength].sample();

    pairsV2.push(randomPair);
    retifiedPairs.splice(randomLength, 1);
}

