let yr = {
	days : [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
	months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}

let page = {
	todaysDate : document.getElementById('todaysDate'),
	chores : document.getElementById('chores'),
	activities : document.getElementById('activities'),
}

let f = {
	addChores : () => {
		let x = `<ul>`

		weekly[today.day.toLowerCase()].chores.forEach((y) => {
			x += `<li>${y}</li>`
		})
		x += '</ul>'

		page.chores.innerHTML = x
	},
	addActivities : () => {
		let x = `<ul>`

		weekly[today.day.toLowerCase()].activities.forEach((y) => {
			x += `<li>${y}</li>`
		})
		x += '</ul>'

		page.activities.innerHTML = x
	}
}

let d = new Date()

let today = {
	day : yr.days[d.getDay()],
	date : d.getDate(),
	month : d.getMonth()+1,
	year : d.getFullYear(),
}



console.log(today)
console.log(today.day)

let handlers = {
	todaysDate : page.todaysDate.innerHTML = `${today.day} ${yr.months[today.month-1]} ${today.date}, ${today.year}`,
	todaysChores : f.addChores(),
	todaysActivities : f.addActivities()




}