//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = "Kurt"
me.age = 42
me["hair color"] = "blond";

//console.log (me);

//2. Iterate over the object to console.log the propery or key names. 
for(var propt in me) {
      //console.log(propt);
       console.log(propt + ":" + " " + me[propt]);
    }