var $ = require('jquery')

class Profile {
	constructor() {

	}

	render(cont = '.content') {
		let tmp = `
			<h1> Perfil </h1>
			`
		$(cont).html(tmp)
	}
}

app.myprofile = new Profile()