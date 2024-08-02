let hindustaniSelect, carnaticSelect, languageSelect;
let ragaDatabase;
let selectedHindustaniRaga = null;
let selectedCarnaticRaga = null;
let selectedLanguage = 'en';

function setup() {
  createCanvas(1200, 700);
  
  // Language selection prompt
  textAlign(CENTER);
  textSize(17);
  text("Please select a language / कृपया एक भाषा चुनें", 90,17);
  
  languageSelect = createSelect();
  languageSelect.position(218, 30);
  languageSelect.option('Choose / चुनें', '');
  languageSelect.option('English', 'en');
  languageSelect.option('हिंदी', 'hi');
  languageSelect.changed(updateLanguage);
  
  hindustaniSelect = createSelect();
  hindustaniSelect.position(20, 100);
  hindustaniSelect.option('Select a Hindustani Raga');
  hindustaniSelect.changed(updateHindustaniInfo);
  
  carnaticSelect = createSelect();
  carnaticSelect.position(345, 100);
  carnaticSelect.option('Select a Carnatic Raga');
  carnaticSelect.changed(updateCarnaticInfo);
  
  initializeRagaDatabase();
}

function draw() {
  background(240);
  
  // Redraw the language selection prompt
  textAlign(LEFT);
  textSize(17);
  fill(0);
  text("Please select a language / कृपया एक भाषा चुनें",90, 17);
  
  if (selectedLanguage) {
    displayRagaInfo();
  } else {
    textSize(17);
    text("Please select a language to continue", width/2, height/2);
    text("जारी रखने के लिए कृपया एक भाषा चुनें", width/2, height/2 + 30);
  }
}

function updateLanguage() {
  selectedLanguage = languageSelect.value();
  if (selectedLanguage) {
    updateSelectLabels();
    populateRagaLists();
  }
}

function updateSelectLabels() {
  if (hindustaniSelect && carnaticSelect) {
    hindustaniSelect.elt.options[0].text = selectedLanguage === 'en' ? 'Select a Hindustani Raga' : 'हिंदुस्तानी राग चुनें';
    carnaticSelect.elt.options[0].text = selectedLanguage === 'en' ? 'Select a Carnatic Raga' : 'कर्नाटक राग चुनें';
  }
}
function initializeRagaDatabase() {
  ragaDatabase = {
    "Ahir Bhairav": {
    hindiName: "अहीर भैरव",
    carnatic: "Chakravakam",
    carnaticHindi: "चक्रवाकम",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bhairav", hi: "भैरव"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "1st prahar (6 AM - 9 AM)", hi: "प्रथम प्रहर (सुबह 6 - सुबह 9)"},
    aroha: {en: "S r G M P D n S'", hi: "स रे ग म प ध नि सं"},
    avroha: {en: "S' n D P M G r S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "S r G M G, r S n S", hi: "स रे ग म ग, रे स नि स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Alhaiya Bilawal": {
    hindiName: "अलैया बिलावल",
    carnatic: "Sankarabharanam",
    carnaticHindi: "शंकराभरणम्",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bilawal", hi: "बिलावल"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ga", hi: "ग"},
    samvadi: {en: "Ni", hi: "नि"},
    prahar: {en: "2nd prahar (9 AM - 12 PM)", hi: "द्वितीय प्रहर (सुबह 9 - दोपहर 12)"},
    aroha: {en: "S G m P N S'", hi: "स ग म प नि सं"},
    avroha: {en: "S' N D P m G R S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "G m P G, G m R S", hi: "ग म प ग, ग म रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Asavari": {
    hindiName: "आसावरी",
    carnatic: "Natabhairavi",
    carnaticHindi: "नटभैरवी",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Asavari", hi: "आसावरी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "3rd prahar (12 PM - 3 PM)", hi: "तृतीय प्रहर (दोपहर 12 - दोपहर 3)"},
    aroha: {en: "S R m P d S'", hi: "स रे म प ध सं"},
    avroha: {en: "S' n d P m g R S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "d n S, R m P, m g R S", hi: "ध नि स, रे म प, म ग रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bageshree": {
    hindiName: "बागेश्री",
    carnatic: "Chandrajyoti",
    carnaticHindi: "चंद्रज्योति",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Kafi", hi: "काफी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "3rd prahar (12 PM - 3 PM)", hi: "तृतीय प्रहर (दोपहर 12 - दोपहर 3)"},
    aroha: {en: "S g M D n S'", hi: "स ग म ध नि सं"},
    avroha: {en: "S' n D M P g M g R S", hi: "सं नि ध म प ग म ग रे स"},
    pakad: {en: "M g R S, n S, D M g", hi: "म ग रे स, नि स, ध म ग"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Basant": {
    hindiName: "बसंत",
    carnatic: "Vasanta",
    carnaticHindi: "वसंत",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Poorvi", hi: "पूर्वी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "4th prahar (3 PM - 6 PM)", hi: "चतुर्थ प्रहर (दोपहर 3 - शाम 6)"},
    aroha: {en: "S G M D N S'", hi: "स ग म ध नि सं"},
    avroha: {en: "S' N D M G m G S", hi: "सं नि ध म ग म ग स"},
    pakad: {en: "M G, m G, S G m G", hi: "म ग, म ग, स ग म ग"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},
    "Bhairav": {
      hindiName: "भैरव",
      carnatic: "Mayamalavagowla",
      carnaticHindi: "मायामालवगौला",
      type: {en: "Hindustani", hi: "हिंदुस्तानी"},
      thaat: {en: "Bhairav", hi: "भैरव"},
      taal: {en: "Teentaal", hi: "तीनताल"},
      vadi: {en: "Dha", hi: "ध"},
      samvadi: {en: "Re", hi: "रे"},
      prahar: {en: "1st prahar (6 AM - 9 AM)", hi: "प्रथम प्रहर (सुबह 6 - सुबह 9)"},
      aroha: {en: "S r G M P d N S'", hi: "स रे ग म प ध नि सं"},
      avroha: {en: "S' N d P M G r S", hi: "सं नि ध प म ग रे स"},
      pakad: {en: "S r S, d N S r G M d P, M G r S", hi: "स रे स, ध नि स रे ग म ध प, म ग रे स"},
      tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
    },
    "Bhairavi": {
    hindiName: "भैरवी",
    carnatic: "Sindhu Bhairavi",
    carnaticHindi: "सिंधु भैरवी",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bhairavi", hi: "भैरवी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "4th prahar (3 PM - 6 PM)", hi: "चतुर्थ प्रहर (दोपहर 3 - शाम 6)"},
    aroha: {en: "S r g M P d n S'", hi: "स रे ग म प ध नि सं"},
    avroha: {en: "S' n d P M g r S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "S g M d n S, M g, r S", hi: "स ग म ध नि स, म ग, रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bhimpalasi": {
    hindiName: "भीमपलासी",
    carnatic: "Abheri",
    carnaticHindi: "आभेरी",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Kafi", hi: "काफी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ma", hi: "म"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "3rd prahar (12 PM - 3 PM)", hi: "तृतीय प्रहर (दोपहर 12 - दोपहर 3)"},
    aroha: {en: "S g M P n S'", hi: "स ग म प नि सं"},
    avroha: {en: "S' n D P M g R S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "M P n D P, M g R S", hi: "म प नि ध प, म ग रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bhoopali": {
    hindiName: "भूपाली",
    carnatic: "Mohanam",
    carnaticHindi: "मोहनम्",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Kalyan", hi: "कल्याण"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ga", hi: "ग"},
    samvadi: {en: "Dha", hi: "ध"},
    prahar: {en: "2nd prahar (9 AM - 12 PM)", hi: "द्वितीय प्रहर (सुबह 9 - दोपहर 12)"},
    aroha: {en: "S G P D S'", hi: "स ग प ध सं"},
    avroha: {en: "S' D P G S", hi: "सं ध प ग स"},
    pakad: {en: "G P G, D P G, G S", hi: "ग प ग, ध प ग, ग स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bihag": {
    hindiName: "बिहाग",
    carnatic: "Hamsanandi",
    carnaticHindi: "हंसानंदी",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bilawal", hi: "बिलावल"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Ga", hi: "ग"},
    samvadi: {en: "Ni", hi: "नि"},
    prahar: {en: "1st prahar (6 PM - 9 PM)", hi: "प्रथम प्रहर (शाम 6 - रात 9)"},
    aroha: {en: "N S G M P N S'", hi: "नि स ग म प नि सं"},
    avroha: {en: "S' N D P M G R S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "N S G M G, M P N S'", hi: "नि स ग म ग, म प नि सं"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bilaskhani Todi": {
    hindiName: "बिलासखानी तोड़ी",
    carnatic: "Chenchukamboji",
    carnaticHindi: "चेंचुकाम्भोजी",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bhairavi", hi: "भैरवी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Dha", hi: "ध"},
    samvadi: {en: "Ga", hi: "ग"},
    prahar: {en: "1st prahar (6 AM - 9 AM)", hi: "प्रथम प्रहर (सुबह 6 - सुबह 9)"},
    aroha: {en: "S r g M d N S'", hi: "स रे ग म ध नि सं"},
    avroha: {en: "S' N d M g r S", hi: "सं नि ध म ग रे स"},
    pakad: {en: "d M g r, g M d N r S", hi: "ध म ग रे, ग म ध नि रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Bilawal": {
    hindiName: "बिलावल",
    carnatic: "Shankarabharanam",
    carnaticHindi: "शंकराभरणम्",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Bilawal", hi: "बिलावल"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Dha", hi: "ध"},
    samvadi: {en: "Ga", hi: "ग"},
    prahar: {en: "2nd prahar (9 AM - 12 PM)", hi: "द्वितीय प्रहर (सुबह 9 - दोपहर 12)"},
    aroha: {en: "S R G M P D N S'", hi: "स रे ग म प ध नि सं"},
    avroha: {en: "S' N D P M G R S", hi: "सं नि ध प म ग रे स"},
    pakad: {en: "G M P D N D, P M G R S", hi: "ग म प ध नि ध, प म ग रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},

"Brindavani Sarang": {
    hindiName: "बृंदावनी सारंग",
    carnatic: "Chandrakauns",
    carnaticHindi: "चंद्रकौंस",
    type: {en: "Hindustani", hi: "हिंदुस्तानी"},
    thaat: {en: "Kafi", hi: "काफी"},
    taal: {en: "Teentaal", hi: "तीनताल"},
    vadi: {en: "Pa", hi: "प"},
    samvadi: {en: "Sa", hi: "स"},
    prahar: {en: "2nd prahar (9 AM - 12 PM)", hi: "द्वितीय प्रहर (सुबह 9 - दोपहर 12)"},
    aroha: {en: "S R M P N S'", hi: "स रे म प नि सं"},
    avroha: {en: "S' N P M R S", hi: "सं नि प म रे स"},
    pakad: {en: "R M P, N S' N P, M R S", hi: "रे म प, नि सं नि प, म रे स"},
    tune: {en: "Sa Re Ga Ma Pa Dha Ni Sa", hi: "सा रे गा मा पा धा नी सा"}
},
    
    "Yaman": {
      hindiName: "यमन",
      carnatic: "Kalyani",
      carnaticHindi: "कल्याणी",
      type: {en: "Hindustani", hi: "हिंदुस्तानी"},
      thaat: {en: "Kalyan", hi: "कल्याण"},
      taal: {en: "Ektal", hi: "एकताल"},
      vadi: {en: "Ga", hi: "ग"},
      samvadi: {en: "Ni", hi: "नि"},
      prahar: {en: "1st prahar of night (6 PM - 9 PM)", hi: "रात का पहला प्रहर (शाम 6 - रात 9)"},
      aroha: {en: "N R G M' D N S'", hi: "नि रे ग म' ध नि सं"},
      avroha: {en: "S' N D P M' G R S", hi: "सं नि ध प म' ग रे स"},
      pakad: {en: "N R G R, G M' D N R S", hi: "नि रे ग रे, ग म' ध नि रे स"},
      tune: {en: "Ni Re Ga Ma Pa Dha Ni Sa", hi: "नी रे गा मा पा धा नी सा"}
    },
    "Mayamalavagowla": {
      hindiName: "मायामालवगौला",
      hindustani: "Bhairav",
      hindustaniHindi: "भैरव",
      type: {en: "Carnatic", hi: "कर्नाटक"},
      melakarta: "15",
      taalam: {en: "Adi", hi: "आदि"},
      aroha: {en: "S R1 G3 M1 P D1 N3 S", hi: "स र१ ग३ म१ प द१ नि३ सं"},
      avroha: {en: "S N3 D1 P M1 G3 R1 S", hi: "सं नि३ द१ प म१ ग३ र१ स"},
      tune: {en: "Sa Ri Ga Ma Pa Dha Ni Sa", hi: "सा री गा मा पा धा नी सा"}
    },
    "Abheri": {
    hindiName: "आभेरी",
    hindustani: "Bhimpalasi",
    hindustaniHindi: "भीमपलासी",
    type: {en: "Carnatic", hi: "कर्नाटक"},
    melakarta: "22",
    taalam: {en: "Adi", hi: "आदि"},
    aroha: {en: "S R2 G2 M1 P D2 S", hi: "स र२ ग२ म१ प द२ सं"},
    avroha: {en: "S N2 D2 P M1 G2 R2 S", hi: "सं नि२ द२ प म१ ग२ र२ स"},
    tune: {en: "Sa Ri Ga Ma Pa Dha Ni Sa", hi: "सा री गा मा पा धा नी सा"}
},

"Chakravakam": {
    hindiName: "चक्रवाकम्",
    hindustani: "Ahir Bhairav",
    hindustaniHindi: "अहीर भैरव",
    type: {en: "Carnatic", hi: "कर्नाटक"},
    melakarta: "16",
    taalam: {en: "Adi", hi: "आदि"},
    aroha: {en: "S R1 G3 M1 P D2 N2 S", hi: "स र१ ग३ म१ प द२ नि२ सं"},
    avroha: {en: "S N2 D2 P M1 G3 R1 S", hi: "सं नि२ द२ प म१ ग३ र१ स"},
    tune: {en: "Sa Ri Ga Ma Pa Dha Ni Sa", hi: "सा री गा मा पा धा नी सा"}
},

"Chandrajyoti": {
    hindiName: "चंद्रज्योति",
    hindustani: "Bageshree",
    hindustaniHindi: "बागेश्री",
    type: {en: "Carnatic", hi: "कर्नाटक"},
    melakarta: "56",
    taalam: {en: "Adi", hi: "आदि"},
    aroha: {en: "S R2 G2 M2 P D1 N2 S", hi: "स र२ ग२ म२ प द१ नि२ सं"},
    avroha: {en: "S N2 D1 P M2 G2 R2 S", hi: "सं नि२ द१ प म२ ग२ र२ स"},
    tune: {en: "Sa Ri Ga Ma Pa Dha Ni Sa", hi: "सा री गा मा पा धा नी सा"}
},
    "Kalyani": {
      hindiName: "कल्याणी",
      hindustani: "Yaman",
      hindustaniHindi: "यमन",
      type: {en: "Carnatic", hi: "कर्नाटक"},
      melakarta: "65",
      taalam: {en: "Rupaka", hi: "रूपक"},
      aroha: {en: "S R2 G3 P D2 N3 S", hi: "स र२ ग३ प द२ नि३ सं"},
      avroha: {en: "S N3 D2 P M2 G3 R2 S", hi: "सं नि३ द२ प म२ ग३ र२ स"},
      tune: {en: "Sa Ri Ga Ma Pa Dha Ni Sa", hi: "सा री गा मा पा धा नी सा"}
    },
      
  };
}
function populateRagaLists() {
  if (hindustaniSelect && carnaticSelect) {
    hindustaniSelect.elt.options.length = 1;
    carnaticSelect.elt.options.length = 1;
    
    for (let raga in ragaDatabase) {
      if (ragaDatabase[raga].type.en === "Hindustani") {
        let optionText = selectedLanguage === 'en' ? raga : ragaDatabase[raga].hindiName;
        hindustaniSelect.option(optionText, raga);
      } else if (ragaDatabase[raga].type.en === "Carnatic") {
        let optionText = selectedLanguage === 'en' ? raga : ragaDatabase[raga].hindiName;
        carnaticSelect.option(optionText, raga);
      }
    }
  }
}
function updateHindustaniInfo() {
  selectedHindustaniRaga = hindustaniSelect.value();
  selectedCarnaticRaga = null;
  carnaticSelect.value(carnaticSelect.elt.options[0].value);
}

function updateCarnaticInfo() {
  selectedCarnaticRaga = carnaticSelect.value();
  selectedHindustaniRaga = null;
  hindustaniSelect.value(hindustaniSelect.elt.options[0].value);
}

function displayRagaInfo() {
  textSize(17);
  fill(0);
  
  if (selectedHindustaniRaga && selectedHindustaniRaga !== hindustaniSelect.elt.options[0].value) {
    displayHindustaniInfo(selectedHindustaniRaga, 420, 150);
    let correspondingCarnatic = ragaDatabase[selectedHindustaniRaga].carnatic;
    displayCarnaticInfo(correspondingCarnatic, 345, 150);
  } else if (selectedCarnaticRaga && selectedCarnaticRaga !== carnaticSelect.elt.options[0].value) {
    displayCarnaticInfo(selectedCarnaticRaga, 345, 150);
    let correspondingHindustani = ragaDatabase[selectedCarnaticRaga].hindustani;
    displayHindustaniInfo(correspondingHindustani,20, 150);
  }
}

function displayHindustaniInfo(raga, x, y) {
  let info = ragaDatabase[raga];
  let lang = selectedLanguage;
  
  text(lang === 'en' ? `Hindustani Raga: ${raga}` : `हिंदुस्तानी राग: ${info.hindiName}`, 20,y);
 y += 30;
  text(`${lang === 'en' ? 'Type' : 'प्रकार'}: ${info.type[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Thaat' : 'थाट'}: ${info.thaat[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Taal' : 'ताल'}: ${info.taal[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Vadi' : 'वादी'}: ${info.vadi[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Samvadi' : 'संवादी'}: ${info.samvadi[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Prahar' : 'प्रहर'}: ${info.prahar[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Aroha' : 'आरोह'}: ${info.aroha[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Avroha' : 'अवरोह'}: ${info.avroha[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Pakad' : 'पकड़'}: ${info.pakad[lang]}`, 20, y);
  y += 30;
  text(`${lang === 'en' ? 'Tune' : 'स्वर'}: ${info.tune[lang]}`, 20, y);
}

function displayCarnaticInfo(raga, x, y) {
  let info = ragaDatabase[raga];
  let lang = selectedLanguage;
  
  text(lang === 'en' ? `Carnatic Raga: ${raga}` : `कर्नाटक राग: ${info.hindiName}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Type' : 'प्रकार'}: ${info.type[lang]}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Melakarta' : 'मेलकर्ता'}: ${info.melakarta}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Taalam' : 'ताल'}: ${info.taalam[lang]}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Aroha' : 'आरोह'}: ${info.aroha[lang]}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Avroha' : 'अवरोह'}: ${info.avroha[lang]}`, x, y);
  y += 30;
  text(`${lang === 'en' ? 'Tune' : 'स्वर'}: ${info.tune[lang]}`, x, y);
}