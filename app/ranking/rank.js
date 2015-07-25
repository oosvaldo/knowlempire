var $ = require('jquery')

var my_rank = {}

class Rank {
	constructor() {
		this.friends = []
	}
	__getFriendsInfo() {
		this.friends = [
			{name: 'Fulano', photo : 'public/img/logo.png', level : 20, happy : 40, power : 40, builds : 10},
			{name: 'Sutano', photo : 'public/img/logo.png', level : 42, happy : 40, power : 100, builds : 70},
			{name: 'Mangano', photo : 'public/img/logo.png', level : 20, happy : 40, power : 600, builds : 16},
			{name: 'Perengano', photo : 'public/img/logo.png', level : 50, happy : 60, power : 100, builds : 10},
			{name: 'Tilutano', photo : 'public/img/logo.png', level : 20, happy : 43, power : 100, builds : 16}
		]	
	}

	render(cont = '.content') {
		this.__getFriendsInfo()
		let tmp = ''
		$.each(this.friends, function(key, friend) {
			tmp += `
			<section class="rank">
				<ul class="rank-friends">
					<li class="rank-friend">
						<img src="${friend.photo}" alt="" class="friend-photo">
						<span class="friend-name">${friend.name}</span>
						<strong class="friend-level">${friend.level}</strong>
						<ul>
							<li class="friend-happy">Happy : ${friend.happy}</li>
							<li class="friend-power">Power : ${friend.power}</li>
							<li class="friend-buildings">Builds : ${friend.builds}</li>
						</ul>
					</li>
				</ul>
			</section>`
		})
		$(cont).html(tmp)
	}
}

my_rank = new Rank()
$(document).ready(function() { 
	$('.menu-knowl').on('click', function() {
		my_rank.render()
	})
	
})