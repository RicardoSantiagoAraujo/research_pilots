const selectedNumber = 10;
let prof = [];

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.sampleNumber = function () {
    return Math.floor(Math.random() * this.length);
}

const pixels = [`../img/pixelate2/CFD-WM-001-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-001-011-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-001-014-N-pixel.jpg`, `../img/pixelate2/CFD-WM-002-007-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-002-008-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-002-009-N-pixel.jpg`, `../img/pixelate2/CFD-WM-002-017-A-pixel.jpg`, `../img/pixelate2/CFD-WM-003-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-003-003-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-003-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-003-008-A-pixel.jpg`, `../img/pixelate2/CFD-WM-004-002-F-pixel.jpg`, `../img/pixelate2/CFD-WM-004-005-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-004-006-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-004-010-N-pixel.jpg`, `../img/pixelate2/CFD-WM-004-011-A-pixel.jpg`, `../img/pixelate2/CFD-WM-006-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-006-010-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-006-013-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-006-022-A-pixel.jpg`, `../img/pixelate2/CFD-WM-006-039-F-pixel.jpg`, `../img/pixelate2/CFD-WM-009-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-009-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-009-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-009-009-A-pixel.jpg`, `../img/pixelate2/CFD-WM-009-014-F-pixel.jpg`, `../img/pixelate2/CFD-WM-010-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-010-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-010-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-010-016-A-pixel.jpg`, `../img/pixelate2/CFD-WM-010-020-F-pixel.jpg`, `../img/pixelate2/CFD-WM-011-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-011-003-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-011-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-011-011-A-pixel.jpg`, `../img/pixelate2/CFD-WM-011-019-F-pixel.jpg`, `../img/pixelate2/CFD-WM-012-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-012-005-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-012-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-012-015-A-pixel.jpg`, `../img/pixelate2/CFD-WM-012-026-F-pixel.jpg`, `../img/pixelate2/CFD-WM-013-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-013-006-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-013-008-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-013-015-A-pixel.jpg`, `../img/pixelate2/CFD-WM-013-019-F-pixel.jpg`, `../img/pixelate2/CFD-WM-014-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-014-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-014-008-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-014-013-A-pixel.jpg`, `../img/pixelate2/CFD-WM-014-024-F-pixel.jpg`, `../img/pixelate2/CFD-WM-015-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-015-005-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-015-009-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-015-017-A-pixel.jpg`, `../img/pixelate2/CFD-WM-015-023-F-pixel.jpg`, `../img/pixelate2/CFD-WM-016-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-016-002-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-016-005-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-016-008-A-pixel.jpg`, `../img/pixelate2/CFD-WM-017-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-017-003-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-017-005-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-017-011-A-pixel.jpg`, `../img/pixelate2/CFD-WM-017-019-F-pixel.jpg`, `../img/pixelate2/CFD-WM-018-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-018-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-018-005-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-018-007-A-pixel.jpg`, `../img/pixelate2/CFD-WM-019-003-N-pixel.jpg`, `../img/pixelate2/CFD-WM-019-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-019-009-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-019-013-A-pixel.jpg`, `../img/pixelate2/CFD-WM-019-017-F-pixel.jpg`, `../img/pixelate2/CFD-WM-020-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-020-003-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-020-005-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-020-008-A-pixel.jpg`, `../img/pixelate2/CFD-WM-020-012-F-pixel.jpg`, `../img/pixelate2/CFD-WM-021-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-021-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-021-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-021-009-A-pixel.jpg`, `../img/pixelate2/CFD-WM-022-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-022-003-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-022-005-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-022-008-A-pixel.jpg`, `../img/pixelate2/CFD-WM-022-012-F-pixel.jpg`, `../img/pixelate2/CFD-WM-023-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-023-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-023-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-023-012-A-pixel.jpg`, `../img/pixelate2/CFD-WM-023-015-F-pixel.jpg`, `../img/pixelate2/CFD-WM-024-003-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-024-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-024-010-A-pixel.jpg`, `../img/pixelate2/CFD-WM-024-015-N-pixel.jpg`, `../img/pixelate2/CFD-WM-024-019-F-pixel.jpg`, `../img/pixelate2/CFD-WM-025-002-N-pixel.jpg`, `../img/pixelate2/CFD-WM-025-008-A-pixel.jpg`, `../img/pixelate2/CFD-WM-025-018-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-025-019-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-025-022-F-pixel.jpg`, `../img/pixelate2/CFD-WM-026-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-026-004-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-026-006-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-026-013-F-pixel.jpg`, `../img/pixelate2/CFD-WM-026-019-A-pixel.jpg`, `../img/pixelate2/CFD-WM-028-003-N-pixel.jpg`, `../img/pixelate2/CFD-WM-028-005-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-028-007-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-028-019-F-pixel.jpg`, `../img/pixelate2/CFD-WM-028-029-A-pixel.jpg`, `../img/pixelate2/CFD-WM-029-009-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-029-014-A-pixel.jpg`, `../img/pixelate2/CFD-WM-029-020-F-pixel.jpg`, `../img/pixelate2/CFD-WM-029-023-N-pixel.jpg`, `../img/pixelate2/CFD-WM-029-029-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-031-003-N-pixel.jpg`, `../img/pixelate2/CFD-WM-031-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-031-032-F-pixel.jpg`, `../img/pixelate2/CFD-WM-031-038-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-031-045-A-pixel.jpg`, `../img/pixelate2/CFD-WM-032-001-N-pixel.jpg`, `../img/pixelate2/CFD-WM-032-004-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-032-008-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-032-014-A-pixel.jpg`, `../img/pixelate2/CFD-WM-032-021-F-pixel.jpg`, `../img/pixelate2/CFD-WM-033-006-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-033-007-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-033-014-A-pixel.jpg`, `../img/pixelate2/CFD-WM-033-025-N-pixel.jpg`, `../img/pixelate2/CFD-WM-033-053-F-pixel.jpg`, `../img/pixelate2/CFD-WM-034-027-F-pixel.jpg`, `../img/pixelate2/CFD-WM-034-030-N-pixel.jpg`, `../img/pixelate2/CFD-WM-034-032-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-034-035-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-034-040-A-pixel.jpg`, `../img/pixelate2/CFD-WM-035-018-A-pixel.jpg`, `../img/pixelate2/CFD-WM-035-028-F-pixel.jpg`, `../img/pixelate2/CFD-WM-035-032-N-pixel.jpg`, `../img/pixelate2/CFD-WM-035-033-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-035-036-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-036-018-A-pixel.jpg`, `../img/pixelate2/CFD-WM-036-031-N-pixel.jpg`, `../img/pixelate2/CFD-WM-036-034-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-036-037-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-036-047-F-pixel.jpg`, `../img/pixelate2/CFD-WM-037-025-N-pixel.jpg`, `../img/pixelate2/CFD-WM-037-033-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-037-034-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-037-060-A-pixel.jpg`, `../img/pixelate2/CFD-WM-037-063-F-pixel.jpg`, `../img/pixelate2/CFD-WM-038-003-N-pixel.jpg`, `../img/pixelate2/CFD-WM-038-005-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-038-007-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-038-011-A-pixel.jpg`, `../img/pixelate2/CFD-WM-038-018-F-pixel.jpg`, `../img/pixelate2/CFD-WM-039-004-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-039-008-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-039-010-A-pixel.jpg`, `../img/pixelate2/CFD-WM-039-018-N-pixel.jpg`, `../img/pixelate2/CFD-WM-039-028-F-pixel.jpg`, `../img/pixelate2/CFD-WM-040-007-A-pixel.jpg`, `../img/pixelate2/CFD-WM-040-022-N-pixel.jpg`, `../img/pixelate2/CFD-WM-040-023-HO-pixel.jpg`, `../img/pixelate2/CFD-WM-040-025-HC-pixel.jpg`, `../img/pixelate2/CFD-WM-040-033-F-pixel.jpg`, `../img/pixelate2/CFD-WM-041-009-A-pixel.jpg`, `../img/pixelate2/CFD-WM-041-021-N-pixel.jpg`, `../img/pixelate2/CFD-WM-041-023-HC-pixel.jpg`];
const names = [`Jacob`, `Michael`, `Matthew`, `Joshua`, `Christopher`, `Nicholas`, `Andrew`, `Joseph`, `Daniel`, `Tyler`, `William`, `Brandon`, `Ryan`, `John`, `Zachary`, `David`, `Anthony`, `James`, `Justin`, `Alexander`, `Jonathan`, `Christian`, `Austin`, `Dylan`, `Ethan`, `Benjamin`, `Noah`, `Samuel`, `Robert`, `Nathan`, `Cameron`, `Kevin`, `Thomas`, `Jose`, `Hunter`, `Jordan`, `Kyle`, `Caleb`, `Jason`, `Logan`, `Aaron`, `Eric`, `Brian`, `Gabriel`, `Adam`, `Jack`, `Isaiah`, `Juan`, `Luis`, `Connor`]
const namesF = [`Emily`, `Hannah`, `Madison`, `Ashley`, `Sarah`, `Alexis`, `Samantha`, `Jessica`, `Elizabeth`, `Taylor`, `Lauren`, `Alyssa`, `Kayla`, `Abigail`, `Brianna`, `Olivia`, `Emma`, `Megan`, `Grace`, `Victoria`, `Rachel`, `Anna`, `Sydney`, `Destiny`, `Morgan`, `Jennifer`, `Jasmine`, `Haley`, `Julia`, `Kaitlyn`, `Nicole`, `Amanda`, `Katherine`, `Natalie`, `Hailey`, `Alexandra`, `Savannah`, `Chloe`, `Rebecca`, `Stephanie`, `Maria`, `Sophia`, `Mackenzie`, `Allison`, `Isabella`, `Mary`, `Amber`, `Danielle`, `Gabrielle`, `Jordan`]
const surnames = [`Smith`, `Johnson`, `Williams`, `Brown`, `Jones`, `Miller`, `Davis`, `Wilson`, `Anderson`, `Taylor`, `Thomas`, `Moore`, `Martin`, `Jackson`, `Thompson`, `White`, `Lee`, `Harris`, `Clark`, `Lewis`, `Robinson`, `Walker`, `Hall`, `Allen`, `Wright`, `King`, `Scott`, `Green`, `Baker`, `Adams`, `Nelson`, `Hill`, `Campbell`, `Mitchell`, `Roberts`, `Carter`, `Phillips`, `Evans`, `Turner`, `Parker`, `Collins`, `Edwards`, `Stewart`, `Morris`, `Murphy`, `Cook`, `Rogers`, `Morgan`, `Peterson`, `Cooper`]
const weight = [`80 kg (176 lbs)`, `80.1 kg (176.22 lbs)`, `80.2 kg (176.44 lbs)`, `80.3 kg (176.66 lbs)`, `80.4 kg (176.88 lbs)`, `80.5 kg (177.1 lbs)`, `80.6 kg (177.32 lbs)`, `80.7 kg (177.54 lbs)`, `80.8 kg (177.76 lbs)`, `80.9 kg (177.98 lbs)`, `81 kg (178.2 lbs)`, `81.1 kg (178.42 lbs)`, `81.2 kg (178.64 lbs)`, `81.3 kg (178.86 lbs)`, `81.4 kg (179.08 lbs)`, `81.5 kg (179.3 lbs)`, `81.6 kg (179.52 lbs)`, `81.7 kg (179.74 lbs)`, `81.8 kg (179.96 lbs)`, `81.9 kg (180.18 lbs)`, `82 kg (180.4 lbs)`, `82.1 kg (180.62 lbs)`, `82.2 kg (180.84 lbs)`, `82.3 kg (181.06 lbs)`, `82.4 kg (181.28 lbs)`, `82.5 kg (181.5 lbs)`, `82.6 kg (181.72 lbs)`, `82.7 kg (181.94 lbs)`, `82.8 kg (182.16 lbs)`, `82.9 kg (182.38 lbs)`, `83 kg (182.6 lbs)`, `83.1 kg (182.82 lbs)`, `83.2 kg (183.04 lbs)`, `83.3 kg (183.26 lbs)`, `83.4 kg (183.48 lbs)`, `83.5 kg (183.7 lbs)`, `83.6 kg (183.92 lbs)`, `83.7 kg (184.14 lbs)`, `83.8 kg (184.36 lbs)`, `83.9 kg (184.58 lbs)`, `84 kg (184.8 lbs)`, `84.1 kg (185.02 lbs)`, `84.2 kg (185.24 lbs)`, `84.3 kg (185.46 lbs)`, `84.4 kg (185.68 lbs)`, `84.5 kg (185.9 lbs)`, `84.6 kg (186.12 lbs)`, `84.7 kg (186.34 lbs)`, `84.8 kg (186.56 lbs)`, `84.9 kg (186.78 lbs)`, `85 kg (187 lbs)`]
const height = [`180 cm (70.2 inches)`, `180.1 cm (70.2 inches)`, `180.2 cm (70.3 inches)`, `180.3 cm (70.3 inches)`, `180.4 cm (70.4 inches)`, `180.5 cm (70.4 inches)`, `180.6 cm (70.4 inches)`, `180.7 cm (70.5 inches)`, `180.8 cm (70.5 inches)`, `180.9 cm (70.6 inches)`, `181 cm (70.6 inches)`, `181.1 cm (70.6 inches)`, `181.2 cm (70.7 inches)`, `181.3 cm (70.7 inches)`, `181.4 cm (70.7 inches)`, `181.5 cm (70.8 inches)`, `181.6 cm (70.8 inches)`, `181.7 cm (70.9 inches)`, `181.8 cm (70.9 inches)`, `181.9 cm (70.9 inches)`, `182 cm (71 inches)`, `182.1 cm (71 inches)`, `182.2 cm (71.1 inches)`, `182.3 cm (71.1 inches)`, `182.4 cm (71.1 inches)`, `182.5 cm (71.2 inches)`, `182.6 cm (71.2 inches)`, `182.7 cm (71.3 inches)`, `182.8 cm (71.3 inches)`, `182.9 cm (71.3 inches)`, `183 cm (71.4 inches)`, `183.1 cm (71.4 inches)`, `183.2 cm (71.4 inches)`, `183.3 cm (71.5 inches)`, `183.4 cm (71.5 inches)`, `183.5 cm (71.6 inches)`, `183.6 cm (71.6 inches)`, `183.7 cm (71.6 inches)`, `183.8 cm (71.7 inches)`, `183.9 cm (71.7 inches)`, `184 cm (71.8 inches)`, `184.1 cm (71.8 inches)`, `184.2 cm (71.8 inches)`, `184.3 cm (71.9 inches)`, `184.4 cm (71.9 inches)`, `184.5 cm (72 inches)`, `184.6 cm (72 inches)`, `184.7 cm (72 inches)`, `184.8 cm (72.1 inches)`, `184.9 cm (72.1 inches)`, `185 cm (72.2 inches)`]
const age = [28, 29, 30, 31, 32,33]
const plusminus = [-1,1]
const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const likes = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`, `45`, `46`, `47`, `48`, `49`, `50`, `51`, `52`, `53`, `54`, `55`, `56`, `57`, `58`, `59`, `60`, `61`, `62`, `63`, `64`, `65`, `66`, `67`, `68`, `69`, `70`, `71`, `72`, `73`, `74`, `75`, `76`, `77`, `78`, `79`, `80`, `81`, `82`, `83`, `84`, `85`, `86`, `87`, `88`, `89`, `90`, `91`, `92`, `93`, `94`, `95`, `96`, `97`, `98`, `99`, `100`, `101`, `102`, `103`, `104`, `105`, `106`, `107`, `108`, `109`, `110`, `111`, `112`, `113`, `114`, `115`, `116`, `117`, `118`, `119`, `120`, `121`, `122`, `123`, `124`, `125`, `126`, `127`, `128`, `129`, `130`, `131`, `132`, `133`, `134`, `135`, `136`, `137`, `138`, `139`, `140`, `141`, `142`, `143`, `144`, `145`, `146`, `147`, `148`, `149`, `150`, `151`, `152`, `153`, `154`, `155`, `156`, `157`, `158`, `159`, `160`, `161`, `162`, `163`, `164`, `165`, `166`, `167`, `168`, `169`, `170`, `171`, `172`, `173`, `174`, `175`, `176`, `177`, `178`, `179`, `180`, `181`, `182`, `183`, `184`, `185`, `186`, `187`, `188`, `189`, `190`, `191`, `192`, `193`, `194`, `195`, `196`, `197`, `198`, `199`, `200`]

const profiles = [
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ],
    [
        {
            "ratio":`<div class ='whole'>
            <div class = 'OptionA'>  <strong>Option A</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name: ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>

            <div class = 'OptionB'>  <strong>Option B</strong>
            <br><img src=${pixels[Math.floor(Math.random() * pixels.length)]} class='pixelated'></img>
            <ul>
            <li> Name : ${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}</li>
            <li> Age : ${age[Math.floor(Math.random() * age.length)]} </li>
            <li> Birthday : ${day[Math.floor(Math.random() * day.length)]} ${month[Math.floor(Math.random() * month.length)]}</li>
            <li> Weight : ${weight[Math.floor(Math.random() * weight.length)]} </li>
            <li> Height : ${height[Math.floor(Math.random() * height.length)]}</li>
            </ul>
            <div class='rightallign'>Likes  : <strong>${likes[Math.floor(Math.random() * likes.length)]}</strong></div>
            </div>
        
            </div>`,
            

            "id": 1,
            "left": 20,
            "right": 0
        },
    ]
]

for (let index = 0; index < selectedNumber; index++) {
    const randomLength = profiles.sampleNumber();

    const randomPair = profiles[randomLength].sample();

    prof.push(randomPair);
    profiles.splice(randomLength, 1);
}

