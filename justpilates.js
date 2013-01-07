// JavaScript Document

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		index_05_over = newImage("images/index_05-over.gif");
		index_06_over = newImage("images/index_06-over.gif");
		index_07_over = newImage("images/index_07-over.gif");
		index_09_over = newImage("images/index_09-over.gif");
		index_10_over = newImage("images/index_10-over.gif");
		index_11_over = newImage("images/index_11-over.gif");
		preloadFlag = true;
	}
}

