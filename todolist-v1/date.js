// Using js version 6

module.exports.getDate = getDate;

function getDate(){
    const d = new Date();

	let options = { 
		weekday: 'long',
		year: 'numeric', 
		month: 'long', 
		day: 'numeric' 
    };

	let today  = d.toLocaleDateString("en-US", options);

    return today;
}

module.exports.getDay = getDay;

function getDay(){
    const d = new Date();

	let options = { 
		weekday: 'long',
    };

	let today  = d.toLocaleDateString("en-US", options);

    return today;
}

