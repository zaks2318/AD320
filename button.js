
function changeColor() {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    var redDiv = document.getElementById("changeable");
    redDiv.style.backgroundColor = "#" + color;
}

function replaceWord() {
    var wordable = document.getElementById('wordable');
    
    fetch("https://covid-19-data.p.rapidapi.com/totals", {
	method: "GET",
	headers: {
		"x-rapidapi-key": "API Key",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then((response) => {
	console.log(response);
	response.json().then(json=> wordable.innerText = json.word);
})
.catch(err => {
	console.error(err);
});

}