$(document).ready(function() {
	$('#header > .container >ul > li').hover(function(event) {
		$(this).children().slideDown(200);
		// });
	}, function() {
		$(this).children('ul').slideUp(200);
	});



	// Bai2
	var toggle = true;
	$('#btn_ding').click(function () {
		if (toggle) {
			toggle = false;
			// $('#content-bai2').fadeOut('slow');
			var length = $('#content-bai2').children().length;
			// console.log(length);

			// for(var i = length; i > 0; i--) {
			// 	// $('#content-bai2 ').fadeOut('slow');
			// 	$('#content-bai2 div:nth-child('+i+')').fadeOut('slow');
			// }
			// $('#content-bai2 div:nth-child(10)').fadeOut(function() {
			// 	$('#content-bai2 div:nth-child(9)').fadeOut(function() {
			// 		$('#content-bai2 div:nth-child(8)').fadeOut();
			// 	});
			// });

			// $('#content-bai2 div:nth-child(10)').fadeOut(function() {
			// 		// console.log($(this).prev());
			// 		$(this).prev().fadeOut();
			// 	});



			// 	length -= 1;
			// }

			test(10, '#content-bai2 div');
			// list.forEach(function(item) {
			// 	item.fadeOut();
			// });

		} else {
			toggle = true;
			$('#content-bai2').fadeIn('slow');
		}
	});

});

function test(length, selector) {
	if(length > 0) {
		console.log(length);
		$(selector+":nth-child("+length+")").fadeOut(test((length-1), selector));
	}
}