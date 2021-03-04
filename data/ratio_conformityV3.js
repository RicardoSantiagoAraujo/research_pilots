const selectedNumber = 15;
let ratios = [];


Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

var freq_replicate = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
const Ratios = [
        [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 1 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 1 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 10 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 10 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 11 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 11 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 12 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 12 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 13 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 13 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 14 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 14 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 15 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 15 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 16 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 16 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 17 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 17 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 18 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 18 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 19 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 19 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 2 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 2 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 20 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 20 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 21 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 21 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 22 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 22 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 23 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 23 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 24 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 24 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 25 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 25 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 26 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 26 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 27 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 27 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 28 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 28 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 29 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 29 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 3 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 3 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 30 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 30 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 31 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 31 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 32 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 32 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 33 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 33 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 34 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 34 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 35 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 35 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 36 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 36 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 37 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 37 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 38 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 38 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 39 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 39 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 4 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 4 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 40 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 40 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 41 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 41 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 42 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 42 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 43 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 43 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 44 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 44 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 45 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 45 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 46 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 46 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 47 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 47 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 48 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 48 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 49 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 49 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 5 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 5 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 50 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 50 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 6 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 6 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 7 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 7 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 8 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 8 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
                [
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '10%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '20%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '30%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '40%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '50%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '60%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '70%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '80%',
                        },
                {
                        "ratio": `<img src='img/Conformity.in.ration.estimation(all50-50)/Rplot 9 .jpg'  class = 'ratio' >
                        <div  class='socialScale' ><br><br><br>
                        Please estimate the proportion of BLUE to ORANGE dots on the screen to the left?<br> <strong>Drag the slider to respond. </strong><br><br>
                        <strong>Estimation from other users:</strong>
                      <input type="range" class=socialSlider value=${Math.round(Math.random() * 100)} min=0 max=100 step=0.01 disabled= true style="width: 100%;"></input>
                            <div class="scaleValues"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                      </div>
                      </div>`,
                            "id": 'Rplot 9 .jpg',
                            "Social_Estimation": '90%',
                        },
                ],
]

for (let index = 0; index < selectedNumber; index++) {
        const randomLength = Ratios.sampleNumber();
    
        const randomPair = Ratios[randomLength].sample();
    
        ratios.push(randomPair);
        Ratios.splice(randomLength, 1);
    

   // To remove every ratio wit the same partner
  //let partnerToRemove = randomPair.idPartner;
  //for (let i = 0; i < retifiedPairs.length; i++) {
  //retifiedPairs[i] = retifiedPairs[i].filter(obj => obj.idPartner !== partnerToRemove)       
   //}

   // randomPair["idPartner"]
   // if (randomPair.)
   // retifiedPairsV2.splice()
}

