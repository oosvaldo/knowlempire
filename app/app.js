window.app = {}

require('./map/build.js')
require('./map/map.js')
require('./ranking/rank.js')
require('./status/status.js')
require('./profile/profile.js')

var $ = require('jquery')

$(document).ready(function() { 
	app.mymap.render()
	$('.menu-rank').on('click', function() {
		app.myrank.render()
	})
	$('.menu-map').on('click', function() {
		app.mymap.render()
	})
	$('.menu-status').on('click', function() {
		app.mystatus.render()
	})
	$('.menu-profile').on('click', function() {
		app.myprofile.render()
	})
})

