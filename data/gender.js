const urlParams = new URLSearchParams(window.location.search);
const FEMALE = 'female';
const MALE = 'male';

const gender = urlParams.get('gender');
const oppositeGender = gender === FEMALE ? MALE : FEMALE;
const genderKey = gender === FEMALE ? 'F' : '';

const eyeColour = gender === FEMALE ? '3.54-WF-246' : '3.5-WM-253';
const age = gender === FEMALE ? '3.54-WF-246' : '3.5-WM-253';
const attentionCheck = gender === FEMALE ? '3.32-WF-038' : '3.51-WM-015';
const secondAge = gender === FEMALE ? '3.32-WF-038' : '3.51-WM-015';