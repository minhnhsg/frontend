console.log('- Today is: ' + new Date());

// Global
let bai1 = document.getElementById('bai1');
let bai2_input = document.getElementById('bai2_numberOfCircle');
let bai2_output = document.getElementById('bai2-result');
let bai3 = document.getElementById('bai3_img');
let bai4 = document.getElementById('bai4_button');



// Bai1
function bai1_left() {
	console.log('--- bai1_left clicked');
	bai1.style = 'text-align: left';
};

function bai1_center() {
	console.log('--- bai1_center clicked');
	bai1.style = 'text-align: center';
};

function bai1_right() {
	console.log('--- bai1_right clicked');
	bai1.style = 'text-align: right';
};





// Bai2
function bai2_createCircle() {
	console.log('--- bai2_createCircle clicked');
	
	var numberOfCircle = bai2_input.value;
	if (numberOfCircle == null || numberOfCircle <= 0) {
		alert('Vui lòng nhập số dương!');
	} else {
		var temp = "";
		for (var i = 1; i <= numberOfCircle; i++) {
			temp += "&copy";
		}
		bai2_output.innerHTML = temp;
		if(numberOfCircle > 50) {
			alert('Tao render mệt nha. \nTao render thiếu đó, mày đếm lại coi đủ không :)))')
		}

		bai2_output.classList.remove("hideMe");
	}
}

// EVENT LISTENER
const node = document.getElementById("bai2_numberOfCircle");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        bai2_createCircle();
    }
});




// Bai3
function bai3_upsize() {
	console.log('--- bai3_upsize clicked');

	var currentWidth = bai3.clientWidth;
	var setWidth = currentWidth+169;
	bai3.style = 'width: '+ setWidth +'px';
	console.log('bai3_img width: '+ setWidth);
}

function bai3_downsize() {
	console.log('--- bai3_downsize clicked');

	var currentWidth = bai3.clientWidth;
	var setWidth = currentWidth-169;
	if (setWidth <= 0) {
		alert('Cannot downsize this imgage anymore!');
	} else {
		bai3.style = 'width: '+ setWidth +'px';
		console.log('bai3_img width: '+ setWidth);
	}
}


// Bai4
function bai4_touchMe() {
	console.log('--- bai4_touchMe clicked');

	if(bai4.classList.contains('color2')) {
		bai4.classList.remove('color2');
		bai4.classList.add('color1');
		console.log('Switch color1 - Blue');
	} else {
		bai4.classList.remove('color1');
		bai4.classList.add('color2');
		console.log('Switch color2 - Red');
	}
}