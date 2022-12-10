// /***
//  * 미세먼지 PM10 기준표
//  * 0~30 -> 좋음
//  * 31~80 -> 보통
//  * 81~150 -> 나쁨
//  * 151~ -> 매우나쁨
//  */

// const dustApiKey =
//   "bra6GIn9evo8KNRaoTYLdAKen1zmc1FHpzv67R2nZcTrb3p7lqtAs9nVqbfm3qM%2Biac6Fo18hq75HN7DvPg8TQ%3D%3D";
// const getDustUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2022-12-10&returnType=json&serviceKey=${dustApiKey}&numOfRows=1&pageNo=1`;

// const baseUrl = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=강남대로&dataTerm=month&pageNo=1&numOfRows=1&returnType=json&serviceKey=${dustApiKey}&dataTerm=DAILY`;

// let concentration = 0; // 미세먼지 농도를 저장시키기 위한 변수.

// fetch(baseUrl)
//   .then((responses) => responses.json())
//   .then((data) => {
//     console.log(` data ->${data}`);
//     console.log(` data ->${JSON.stringify(data)}`);
//     const nData = data;
//     console.log(nData.response["body"].items[0].pm10Value);
//     concentration = nData.response["body"].items[0].pm10Value;
//     res(concentration);
//   })
//   .catch((error) => {
//     console.log(`error -> ${error}`);
//   });



//   // 미세먼지 농도에 따른 background opcity 값 조정.
// function res(now) {
//   let background = document.querySelector(".background");
//   if (now <= 30 && now > 0) {
//     return (background.style.opacity = 1);
//   } else if (now <= 80 && now > 30) {
//     console.log("미세먼지 보통");
//     return (background.style.opacity = 0.8);
//   } else if (now <= 150 && now > 81) {
//     console.log("미세먼지 나쁨");
//     return (background.style.opacity = 0.5);
//   } else if (now > 150) {
//     console.log("미세먼지 매우나쁨");
//     return (background.style.opacity = 0.2);
//   }
// }

