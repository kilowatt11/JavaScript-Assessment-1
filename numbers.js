//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
console.log(num10 + parseInt(string8,10) + one);



//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (var index =20; index < 100; index++) {
    if(index % 3==0)
    console.log(index);
    
}


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var total = 0;
for(var i in scores) { total += scores[i];}
console.log(total / scores.length);
