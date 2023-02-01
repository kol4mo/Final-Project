

fetch("http://quotes.rest/qod.json")
    //convert response to json
    .then((response) => response.json())
    //display our data
    .then((data) => {
        console.log(data)
        var Quote = document.querySelector("#Quote")
        Quote.textContent = data.Quote;     
    }
)