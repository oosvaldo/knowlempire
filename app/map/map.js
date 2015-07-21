window.$ = require('jquery')
require('jquery-ui/draggable')
require('jquery-ui/droppable')
console.log($.ui)

$( document ).ready(function() { 
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
	
})
console.log('HEIT')