import testHttpRequest from "./httpClient.js";


const testBtn = document.getElementById("buttonRequest");
const testArea = document.getElementById("textArea1");

function testFunction() {
    let test = new testHttpRequest("asdf");
    let respText = JSON.stringify(test.request());
    testArea.textContent = respText;
}

testBtn.addEventListener("click",testFunction);

