var wrapText = require('canvas-text-wrapper');
var Rx = require('rx');
var clear = require('clear-canvas');


var canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;
canvas.style.background = '#542B72';

var context = canvas.getContext('2d');
context.lineWidth = 2;
context.fillStyle = 'white'



var quote = document.getElementById('quote');
var author = document.getElementById('author');

var quoteSource = Rx.Observable.fromEvent(quote, 'keyup');
var authorSource = Rx.Observable.fromEvent(author, 'keyup');

var quoteSubscription = quoteSource.subscribe(
	function(x) {
		clear(context);
		CanvasTextWrapper(canvas, x.currentTarget.value + '\n' + author.value, {
			font: "bold 40px Arial, sans-serif",
			textAlign: "center",
			verticalAlign: "middle",
			sizeToFill: true,
			paddingX: 5,
			paddingY: 5,
		});
	},
	function(err) {
		console.log('Error: ' + err);
	},
	function() {
		console.log('Completed');
	});

var authorSubscription = authorSource.subscribe(
	function(x) {
		clear(context);
		CanvasTextWrapper(canvas, quote.value + '\n' + x.currentTarget.value, {
			font: "bold 40px Arial, sans-serif",
			textAlign: "center",
			verticalAlign: "middle",
			sizeToFill: true,
			paddingX: 5,
			paddingY: 5,
		});
	},
	function(err) {
		console.log('Error: ' + err);
	},
	function() {
		console.log('Completed');
	});
