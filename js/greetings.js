
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clocks = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");
const todoContainer = document.querySelector("#todo-container");
const todoList = document.querySelector("#todo-list");
const quote = document.querySelector("#quote");
const weather = document.querySelector("#weather");
const music = document.querySelector("#music");


const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

// 로그인 제출 이벤트 핸들러 함수
function onLoginSubmit(event){
    // event.preventDefault(); // 폼 제출 기본 동작 방지
    const username = loginInput.value; // 입력된 유저명 가져오기
    localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 유저명 저장
    paintGreeting(username); // 환영 문구 출력 함수 호출
}

// 환영 문구를 출력하는 함수
function paintGreeting(username){
    greeting.innerText = `Hello! ${username}`; // 환영 문구 설정
    greeting.classList.remove(HIDDEN_CLASSNAME); // 환영 문구 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 유저명 가져오기

// 로컬 스토리지에 유저명이 없을 경우 로그인 폼 표시하고 이벤트 리스너 추가
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 표시
    loginForm.addEventListener("submit", onLoginSubmit); // 로그인 제출 이벤트 리스너 추가

    // 로그인 폼 이외의 모든 요소 숨기기
    clocks.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoContainer.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
    quote.classList.add(HIDDEN_CLASSNAME);
    weather.classList.add(HIDDEN_CLASSNAME);
    music.classList.add(HIDDEN_CLASSNAME);

} else {
    paintGreeting(savedUsername); // 로컬 스토리지에 저장된 유저명이 있을 경우 환영 문구 출력 함수 호출

    // 환영 문구 출력 후 로그인 폼 이외의 모든 요소 표시
    clocks.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    quote.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    music.classList.remove(HIDDEN_CLASSNAME);

}
