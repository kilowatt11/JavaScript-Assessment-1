//1. What is the lenth of the following contacts array?

var contacts = [];

console.log(contacts.length);
//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};
contacts.push(jake,matt,chris,tony,andrew,stefan);
console.log(contacts);
//3. Woops after adding all of those people to the same contacts list you realized you need a list just the mentors. Create a new variable named mentors populate it using contacts array. 
var mentors = [];

for (var index = 0; index < contacts.length; index++) {
    if(contacts[index].title == 'mentor'){
        mentors.push(contacts[index]);
    }
    
}
console.log(mentors);
