import testHttpRequest from "./httpClient.js";


const testBtn = document.getElementById("buttonRequest");
const testArea = document.getElementById("textArea1");

function testFunction() {
    let test = new testHttpRequest("http://www.asdf.com");
    let testText = test.request().toString();
    console.log("testFuncLog: "+testText);
    testArea.textContent = testText;
}

testBtn.addEventListener("click",testFunction);

