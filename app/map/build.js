var $ = require('jquery')

class Build {

	getMyBuilds() {
		this.elem 		= '.map .map-area > img'
		this.container 	= '.map .map-area'

		this.builds 	= [
			{name : 'Museo', img : 'public/img/logo.png', cat : 'math', happy : 50, level : 2, power : -20, pos : {x : 0, y : 135}},
			{name : 'Hospital', img : 'public/img/logo.png', cat : 'math', happy : 250, level : 2, power : -20, pos : {x : 300, y : 245}},
			{name : 'Estadio', img : 'public/img/logo.png', cat : 'math', happy : 350, level : 2, power : -20, pos : {x : 600, y : 100}},
			{name : 'Cine', img : 'public/img/logo.png', cat : 'math', happy : 50, level : 2, power : -20, pos : {x : 400, y : 300}},
			{name : 'Escuela', img : 'public/img/logo.png', cat : 'all', happy : 30, level : 2, power : -20, pos : {x : 100, y : 200}},
			{name : 'Zoo', img : 'public/img/logo.png', cat : 'zoo', happy : 50, level : 2, power : -20, pos : {x : 500, y : 0}}
		]
	}

	__initEvents() {
		let self = this 
		$(self.elem).draggable({
			start : function(){
				console.log('start')
			},
			stop  : function(){
				console.log('Stop')
			},
			containment : "parent"
		})
		$(self.elem).on('click', function(){
			self.renderBuild($(this).attr('data-name'))
		})
	}

	__getBuildByName(name = null) {
		let build = this.builds.filter( function(data) {
				return (data.name === name)
			})
		return  (build.length > 0) ? build[0] : null
	}

	renderBuilds(cont = this.container) {
		let tmp = ''
		$.each(this.builds, function(index, build) {
			tmp += `<img src="${build.img}" data-name="${build.name}" style='left:${build.pos.x}px;top:${build.pos.y}px'>`
		})
		$(cont).html(tmp)
		this.__initEvents()
	}

	renderBuild(name, cont = '.content') {
		let build = this.__getBuildByName(name)
		if(!build) return 
		let tmp = `
			<section class="build">
				<div class="build-name"><span class="build-cat"></span>${build.name}</div>
				<img src="#" alt="">
				<div class="build-bonus">
					<span class="build-hapy">Satisfacsión : ${build.happy}</span>
					<span class="build-power">Poder : ${build.power}</span>	
					<hr>
					<div class="build-quest">
						<div></div>
					</div>
				</div>
			</section>`
		$(cont).html(tmp)
	}

	constructor() {
		this.getMyBuilds()
	}
}

app.my_build = new Build()




