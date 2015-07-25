var $ = require('jquery')

var my_rank = {}

class Rank {
	constructor() {
		this.friends = []
	}
	render(cont = '.content') {
		var friend = {name: 'Fulano', photo : 'public/img/logo.png', level : 20, happy : 40, power : 100, builds : 10}
		let tmp = `
		<section class="rank">
			<ul class="rank-friends">
				<li class="rank-friend">
					<img src="${friend.photo}" alt="" class="friend-photo">
					<span class="friend-name">${friend.name}</span>
					<strong class="friend-level">${friend.level}</strong>
					<ul>
						<li class="friend-happy">$Happy : {friend.happy}</li>
						<li class="friend-power">$Power : {friend.power}</li>
						<li class="friend-buildings">$Builds : {friend.builds}</li>
					</ul>
				</li>
			</ul>
		</section>`
		$(cont).html(tmp)
	}
}

my_rank = new Rank()
//my_rank.render()
$(document).ready(function() { 
	//var template = require('./knowl.jade');
	$('.menu-knowl').on('click', function() {
		my_rank.render()
		//$('body').html('template')
	})
	
})