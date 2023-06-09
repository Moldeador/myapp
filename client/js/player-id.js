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
	document.getElementById("playerId").innerHTML = localStorage.getItem("playerId");
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
