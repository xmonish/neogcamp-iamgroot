var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
} 

function errorHandler(error){
    console.log("Error occured", error)
    alert("Maximum requests limit exceeded. Please try again after an hour.")
}


function clickHandler(){
    var inputText = txtInput.value //taking input

    //processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText  //output
        })

        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

