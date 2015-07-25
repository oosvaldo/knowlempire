var $ = require('jquery')

class Build {

	getMyBuilds() {
		this.builds = [
			{name : 'Museo', img : 'public/img/logo.png', cat : 'math', happy : 50, level : 2, power : -20, pos : {x : 10, y : 20}},
			{name : 'Hospital', img : 'public/img/logo.png', cat : 'math', happy : 250, level : 2, power : -20, pos : {x : 10, y : 20}},
			{name : 'Estadio', img : 'public/img/logo.png', cat : 'math', happy : 350, level : 2, power : -20, pos : {x : 10, y : 20}},
			{name : 'Cine', img : 'public/img/logo.png', cat : 'math', happy : 50, level : 2, power : -20, pos : {x : 10, y : 20}},
			{name : 'Escuela', img : 'public/img/logo.png', cat : 'all', happy : 30, level : 2, power : -20, pos : {x : 10, y : 20}},
			{name : 'Zoo', img : 'public/img/logo.png', cat : 'zoo', happy : 50, level : 2, power : -20, pos : {x : 10, y : 20}}
		]
		this.elem = '.map .map-area > img'
		this.container = '.map .map-area'
	}

	__initEvents() {
		$(this.elem).draggable({
			start : function(){
				console.log('start')
			},
			stop  : function(){
				console.log('Stop')
			},
			containment : "parent"
		})
		$(this.elem).on('click', function(){
			console.log($(this).attr('src'))
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
			tmp += `<img src="${build.img}" style='left:${build.pos.x}px;top:${build.pos.y}px'>`
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




