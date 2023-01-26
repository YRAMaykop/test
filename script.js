
const weight = +prompt('What is your weight in kilo?');
// if (isNan(weight)) {alert('test')}; 
const height = +prompt("Wat is your height in metrs?");
// if isNaN(height);
const biw = (weight / Math.pow(height, 2)).toFixed(1);

if (biw <=25) {
   alert('Your BMI'+ ': ' + biw + ' ' + 'Your weight is Normal!');
} 
else  {
   alert('Your BMI'+ ' : ' + biw + ' ' + 'Your weight is Not Normal!');
};


