window.$ = require('jquery')
require('jquery-ui/draggable')
require('jquery-ui/droppable')

var my_map = null 

class Map {
	constructor(gold, power, happy) {
		this.gold 		= gold
		this.power 		= power
		this.happy 		= happy
	}
	
	__initEvents() {
		$('.map > img').draggable({
			start : function(){
				console.log('start')
			},
			stop  : function(){
				console.log('Stop')
			},
			containment : "parent"
		})
		$('.map > img').on('click', function(){
			console.log($(this).attr('src'))
		})
	}

	render(container) {
		var template =`
			<section class="map">
				<button>Buildings</button>
				<h3>LEVEL 3</h3>
				<button>Stadistics</button>
				<div class="map-status">
					<ul>
						<li>gold : ${this.gold}</li>
						<li>happines: ${this.happy}</li>
						<li>power: ${this.power}</li>
					</ul>
				</div>
				<img src="public/img/logo.png">	
				<img src="public/img/logo.png">	
				<img src="public/img/logo.png">	
				<img src="public/img/logo.png">	
				<img src="public/img/logo.png">	
				<img src="public/img/logo.png">	
		</section>`

		$(container).html(template)
		this.__initEvents()
	}
}

var my_map = new Map(10,15,20)
my_map.render('.content')