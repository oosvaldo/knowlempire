window.app = {}

require('./map/build.js')
require('./map/map.js')
require('./ranking/rank.js')

var $ = require('jquery')

$(document).ready(function() { 
	app.my_map.render()
	$('.menu-rank').on('click', function() {
		app.my_rank.render()
	})
	$('.menu-map').on('click', function() {
		app.my_map.render()
	})
})

