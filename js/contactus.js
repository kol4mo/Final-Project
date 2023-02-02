

fetch("http://quotes.rest/qod.json")
    //convert response to json
    .then((response) => response.json())
    //display our data
    .then((data) => {
        console.log(data)
        var Quote = document.querySelector("#Quote")
        Quote.textContent = data.contents.quotes[0].quote;
        document.body.style.backgroundImage = data.contents.quotes[0].background;

    }
)