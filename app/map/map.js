var $ = require('jquery')
require('jquery-ui/draggable')
require('jquery-ui/droppable')

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

	render(cont = '.content') {
		var tmp =`
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
				<div class="map-area">

				</div>
		</section>`

		$(cont).html(tmp)
		this.__initEvents()
	}
}

app.my_map = new Map(10,15,20)
//app.my_map.render('.content')