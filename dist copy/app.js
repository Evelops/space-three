let img = document.querySelector("#nasa-api");
let ttsBtn = document.querySelector("#test");
let selectDate = document.querySelector("#date");

const date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate() - 1;

console.log(
  `나사 API에서 가져오는 날짜:${year}-${month}-${day} 날짜는 하루전의 데이터를 받아와야 안전함. update 주기가 오후 6~7시 이후이기 때문.`
);

const nowDay = `${year}-${month}-${day}`;

// NASA API KEY & URL
const apiKey = "6bsRgazqRdpkZKFOo1LmtFFND9QQFWZLxdc331y1v";
let url = `https://api.nasa.gov/planetary/apod?date=${nowDay}&api_key=6bsRgazqRdpkZKFOo1LmtFFND9QQFWZLxdc331y1`;

// get API data
let getImg = "";
let getText = "";

//Get NASA API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    img.src = data.url;
    getText = data.explanation;
    console.log(`나사 API에서 가져온 이미지- > ${data.url}`);
  })
  .catch((error) => {
    console.log(`실패 ${error}`);
  });

// tts API eventListener
ttsBtn.addEventListener("click", (e) => {
  console.log(`TTS API 실행.`);
  responsiveVoice.speak(getText);
});


// 날짜 선택에 따른 배경화면 변경되는 eventListener
selectDate.addEventListener("change", (e) => {
  console.log(e.target.value);
  let nDate = e.target.value;
  url = `https://api.nasa.gov/planetary/apod?date=${nDate}&api_key=6bsRgazqRdpkZKFOo1LmtFFND9QQFWZLxdc331y1`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.url;
      getText = data.explanation;
      console.log(`나사 API에서 가져온 이미지 -> ${data.url}`);
    })
    .catch((error) => {
      console.log(`실패 ${error}`);
    });
});




// // 날짜 변경시 실행하는 함수.
// function handler(e) {
//   let nDate = e.target.value;
//   console.log(nDate);
//   //   const nUrl = `https://api.nasa.gov/planetary/apod?date=${nDate}&api_key=6bsRgazqRdpkZKFOo1LmtFFND9QQFWZLxdc331y1`;

//   //   fetch(url)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //         nImg.src = data.url;
//   //         nTTS = data.explanation;
//   //       console.log(`나사 API에서 가져온 이미지- > ${data.url}`);
//   //     })
//   //     .catch((error) => {
//   //       console.log(`실패 ${error}`);
//   //     });
// }
