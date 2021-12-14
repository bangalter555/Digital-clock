//IMPORTS

//DOCUMENT
const $D = document;

//DOCUMENT HEAD
const $documentHead = document.head;

//Links
const $linkToStyles = document.createElement("link");
$linkToStyles.rel = "stylesheet";
$linkToStyles.href = "/DIST/main.css";
$documentHead.insertAdjacentElement("afterbegin", $linkToStyles);

//DOCUMENT BODY
const $documentBody = document.body;
$documentBody.classList.add("body");

//BODY
const $appTitle = document.createElement("h1");
$appTitle.classList.add("page-title");
$appTitle.innerText = `What Time Is It?`;

const $main = document.createElement("div");
$main.classList.add("main");

$documentBody.insertAdjacentElement("afterbegin", $appTitle);
$appTitle.insertAdjacentElement("afterend", $main);

//Fragmento
const $fragmentButtons = document.createDocumentFragment();

//BUTTONS
for (let i = 0; i < 2; i++) {
  const $button = document.createElement("button");
  $button.id = `button-${i + 1}`;
  $button.classList.add("buttons");
  $fragmentButtons.appendChild($button);
}
$main.appendChild($fragmentButtons);

const $showTimeButton = document.getElementById("button-1");
$showTimeButton.innerHTML = `<h4>Show Time</h4>`;
$showTimeButton.children[0].className = `show-time`;

const $reloj = document.createElement("div");
$reloj.id = "clock";
$showTimeButton.insertAdjacentElement("afterend", $reloj);

const $hideTimeButton = document.getElementById("button-2");
$hideTimeButton.innerHTML = `<h4>Hide Time</h4>`;
$hideTimeButton.children[0].className = `hide-time`;

//EXPORTS
export { $D };
