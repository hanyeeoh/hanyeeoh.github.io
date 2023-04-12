const txtElement = ['Hanny`s World', 'My First Website'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function efekngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efekngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();