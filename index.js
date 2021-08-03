let secretMessage = ['learning','is','not','about','what','you','get','easily','the','first','time','it','is','about','you','can','figure', 'out','-2015.','Chris','Pine','Learn','JavaScript'];

//remving the last element from the array
secretMessage.pop();

//checking the length of the array
console.log(secretMessage.length);

//adding words to te end of an array
secretMessage.push('to','program');

//finds the index of a word
console.log(secretMessage.indexOf('easily'));

//changing a word in the array
secretMessage[7] = 'right';

//removing the first element in the array
secretMessage.shift();

//add an item at the beginning of an array
secretMessage.unshift('Programming');

secretMessage.splice(5,10, 'know');

//print the whole sentence
console.log(secretMessage.join(""));