async function loadRoll () {
	let initiativeModifier = localStorage.getItem("initiativeModifier");
	let characterName = localStorage.getItem("characterName");
	let playerId = localStorage.getItem("playerId");
	let response = await fetch(`http://localhost:3000/roll?characterName=${characterName}&initiativeModifier=${initiativeModifier}&playerId=${playerId}`);
	let data = await response.text();
	document.getElementById("rollResult").innerHTML = data;
}

function store(elementsId){
	elementsId.forEach((elementId)=>{
		let valueToStore = document.getElementById(elementId);
		localStorage.setItem(elementId, valueToStore.value);
	});
	displayStoredValues();
}

function displayStoredValues () {
	document.getElementById("storedName").innerHTML = localStorage.getItem("characterName");
	document.getElementById("storedInitiative").innerHTML = localStorage.getItem("initiativeModifier");
}

displayStoredValues();

function makeId(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
	}
	return result;
}

function setPlayerId () {
	let playerId = localStorage.getItem("playerId");
	if (playerId === null) {
		let newPlayerId = makeId(32);
		localStorage.setItem("playerId", newPlayerId);
	}
}

setPlayerId();

function generateListItems(arg){
        let items = "";
        for(let i = 0;i<arg.length;i++){
        items += `<li>${arg[i]}</li>`;
        }
        return items;
}

function shortPolling() {
        setInterval(async()=>{
                let response = await fetch("http://localhost:3000/rolls_history");
                let data = await response.json()
                document.getElementById("previousRolls").innerHTML = generateListItems(data);
        },5000);
}

shortPolling();

function openForm(){
	document.getElementById("myForm").style.display = "block";
}

function closeForm(){
	document.getElementById("myForm").style.display = "none";
}

let inputName = document.getElementById("characterName");
inputName.addEventListener("keypress", function(event){
	if(event.key === "Enter"){
		event.preventDefault();
		document.getElementById("submitNameButton").click();
	}
});

document.getElementById("initiativeModifier").oninput = function(){document.getElementById("sliderValue").innerHTML = this.value;
}
	
