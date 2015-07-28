var $ = require('jquery')

class Status {
	constructor() {

	}

	render(cont = '.content') {
		let tmp = `
			<h1> Estadisticas </h1>
			`
		$(cont).html(tmp)
	}
}

app.mystatus = new Status()