// js file

const contForm = document.querySelector(".cont-inp");
const btnExc = contForm.querySelector(".btn-exc");
const resultSection = document.querySelector("#section-result");
const loadingSection = document.querySelector(".section-loading");

let caltime;
const HIDDEN = "hidden";

contForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loading();
  const txtWannabeInp = document.querySelector(".txt-wannabe input");
  const txtTimeInp = document.querySelector(".txt-time input");
  const wannabe = txtWannabeInp.value;
  caltime = txtTimeInp.value;
  caltime = calculatorTime(caltime);

  // 값 비우기
  // txtTimeInp.value = "";
  // txtWannabeInp.value = "";

  const resultwannabe = resultSection.querySelector(".result-wannabe");
  const resultTime = resultSection.querySelector(".result-time");
  resultwannabe.innerText = wannabe;
  resultTime.innerText = caltime;
});

function calculatorTime(time) {
  // 정수형으로 변환
  return parseInt(10000 / time);
}

function loading() {
  resultSection.classList.add(HIDDEN);
  loadingSection.classList.remove(HIDDEN);
  loadingSection.classList.add("rotate");
  // 3초후 실행
  setTimeout(() => {
    loadingSection.classList.add(HIDDEN);
    loadingSection.classList.remove("rotate");
    resultSection.classList.remove(HIDDEN);
  }, 3000);
}
