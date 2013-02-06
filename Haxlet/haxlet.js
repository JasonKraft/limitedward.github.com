// Haxlet Scoreboard bookmarklet
// Copy 2013 Jason Kraft

(function(){

	// the minimum version of jQuery we want
	var v = "1.9.0";
	var v1 = "1.10.0";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
		
		var done1 = false;
		var script1 = document.createElement("script");
		script1.src = "http://code.jquery.com/ui/" + v1 + "/jquery-ui.js";
		script1.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script1);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
			//$('head').load('http://limitedward.github.com/Haxlet/haxlet-style.html');
			//$('body').load('http://limitedward.github.com/Haxlet/haxlet-divs.html');
			$('head').append('<style type="text/css">	#scoreboard	{		position:absolute;		z-index:1;		border: 2px solid #000;		font-family:Arial, Helvetica, sans-serif;		font-size:18px;		background-color:#fff;		height:95px;		width:500px;				box-shadow:0px 0px 10px rgba(0,0,0,.5);		-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);		-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);		-o-box-shadow:0px 0px 10px rgba(0,0,0,.5);				background-image: linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);		background-image: -o-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);		background-image: -moz-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);		background-image: -webkit-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);		background-image: -ms-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);				background-image: -webkit-gradient(			linear,			left bottom,			left top,			color-stop(0.33, rgb(133,133,133)),			color-stop(0.84, rgb(240,240,240))		);}	#topBar	{		display:block;		background-color:#666;		color:#fff;		font-size:10px;		text-shadow:0px -1px 1px #000;		height:18px;		cursor:move;	line-height:20px;		padding-left: 10px;		padding-right:10px;				border-bottom:1px solid rgb(51,51,51);		background-image: linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);		background-image: -o-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);		background-image: -moz-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);		background-image: -webkit-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);		background-image: -ms-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);				background-image: -webkit-gradient(			linear,			left bottom,		left top,		color-stop(0.17, rgb(36,36,36)),			color-stop(0.8, rgb(122,122,122))		);	}	#swapper	{		float:right;		cursor:pointer;		height:18px;	}	#scoreleft, #scoreright, #scorecenter, #bluescore, #redscore, #timer	{		float:left;	}#scoreleft	{		background-color:#36C;		width:30%;		height:75px;		text-align:center;		line-height:75px;	/*padding-top:27px;*/	color:#fff;		font-weight:bold;				background-image: linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);		background-image: -o-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);		background-image: -moz-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);		background-image: -webkit-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);		background-image: -ms-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);				background-image: -webkit-gradient(			linear,			left bottom,			left top,			color-stop(0.33, rgb(22,80,196)),			color-stop(0.84, rgb(136,156,235))		);				border-right:1px solid rgb(51,51,51);		border-top:1px solid rgb(204,204,204);	}	#scoreright	{		background-color:#F30;		width:30%;		height:75px;		text-align:center;		line-height:75px;		/*padding-top:27px;*/		color:#fff;		font-weight:bold;				background-image: linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);		background-image: -o-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);		background-image: -moz-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);		background-image: -webkit-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);		background-image: -ms-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);				background-image: -webkit-gradient(		linear,			left bottom,		left top,			color-stop(0.33, rgb(153,0,0)),		color-stop(0.84, rgb(237,109,109))		);				border-left:1px solid rgb(204,204,204);		border-top:1px solid rgb(204,204,204);	}	#scorecenter	{		width:39.2%;		height:75px;		text-align:center;		border-left:1px solid rgb(204,204,204);		border-right:1px solid rgb(51,51,51);		-webkit-touch-callout: none;		-webkit-user-select: none;		-khtml-user-select: none;		-moz-user-select: none;	-ms-user-select: none;		user-select: none;		border-top:1px solid rgb(204,204,204);	}	#bluescore, #redscore	{		height:75px;		width:30%;	}	#timer	{		height:75px;		width:40%;	}	#incrementb, #decrementb, #incrementr, #decrementr, #pause, #reset	{		height:20px;	}	#incrementb, #incrementr	{		cursor:n-resize;	}	#decrementb, #decrementr	{		cursor:s-resize;	}	#scorepieceb, #scorepiecer, #timepiece	{		height:25px;		padding-top:10px;		font-weight:bold;		text-outline:1px solid #fff;	}</style>');
			$('body').append('<div id="scoreboard">        	<div id="topBar">Haxlet Scoreboard 1.0 - Copyright 2013 Jason Kraft <span id="announcer"></span><span id="swapper">SWAP TEAM</span></div>        	<div id="scoreleft" contenteditable="true">Blue Team</div>                <div id="scorecenter">        	        	<div id="bluescore">            	<div id="incrementb">&#8743;</div>                <div id="scorepieceb">0</div>                <div id="decrementb">&#8744;</div>            </div>                        <div id="timer">            	<div id="pause"><a href="#">Play/Pause</a></div>            	<div id="timepiece">5:00</div>                <div id="reset"><a href="#">Reset</a></div>            </div>                        <div id="redscore">            	<div id="incrementr">&#8743;</div>                <div id="scorepiecer">0</div>                <div id="decrementr">&#8744;</div>            </div>                    </div>                <div id="scoreright" contenteditable="true">Red Team</div>            </div>');

var blueScore = 0;
var redScore = 0;
var paused = false;

$('#scoreboard').draggable();
$('#scoreleft').dblclick(function(e){
	$(this).focus();
});
$('#scoreright').dblclick(function(e){
	$(this).focus();
});

$(document).ready(function(e) {
	paused = true;
	interval1 = clearInterval(interval1);
});

$("#scoreright").keypress(function(e){ 
if (e.which == 13)
	this.blur();
	return e.which != 13;
 });
$("#scoreleft").keypress(function(e){ 
if (e.which == 13)
	this.blur();
	return e.which != 13;
});
$("#reset").click(function(e){
	minutes = 5;
	seconds = 0;
	$("#timepiece").text("5:00");
	interval1 = clearInterval(interval1);
	paused = true;
	
	$("#scoreleft").text("Blue Team");
	$("#scoreright").text("Red Team");
	blueScore = 0;
	redScore = 0;
	$("#scorepieceb").text("" + blueScore);
	$("#scorepiecer").text("" + redScore);
	$('#announcer').hide().text("| Game reset").fadeIn("fast").delay(200).fadeOut("fast");
});
$("#incrementb").click(function(){
	blueScore++;
	$("#scorepieceb").fadeOut("fast").text("" + blueScore).fadeIn("fast");
	bname = $('#scoreleft').text();
	$('#announcer').hide().text("| "+ bname +" scores!").fadeIn("fast").delay(1000).fadeOut("fast");
	interval1 = clearInterval(interval1);
	paused = true;
});
$("#incrementr").click(function(){
	redScore++;
	$("#scorepiecer").fadeOut("fast").text("" + redScore).fadeIn("fast");
	rname = $('#scoreright').text();
	$('#announcer').hide().text("| "+ rname +" scores!").fadeIn("fast").delay(1000).fadeOut("fast");
	interval1 = clearInterval(interval1);
	paused = true;
});
$("#decrementb").click(function(){
	blueScore--;
	$("#scorepieceb").fadeOut("fast").text("" + blueScore).fadeIn("fast");
});
$("#decrementr").click(function(){
	redScore--;
	$("#scorepiecer").fadeOut("fast").text("" + redScore).fadeIn("fast");
});

var minutes = 5;
var seconds = 0;
var secPad = "";

function pad (str, max) {
	return str.length < max ? pad("0" + str, max) : str;
}

function timer(){
	seconds--;
	if (seconds < 0)
	{
		seconds = 59;
		minutes--;
	}
	if (minutes < 0)
	{
		seconds = 0;
		minutes = 0;
		interval1 = clearInterval(interval1);
	}
	secPad = pad("" + seconds, 2);
	
	$("#timepiece").text(minutes + ":" + secPad);
}

var interval1 = setInterval(function(){ timer() }, 1000);

$('#pause').click(function() {
	if (paused == false)
	{
		interval1 = clearInterval(interval1);
		paused = true;
		$("#timepiece").fadeOut("fast").fadeIn("fast");
		$('#announcer').hide().text("| Game paused").fadeIn("fast").delay(200).fadeOut("fast");
	}
	else
	{
		interval1 = setInterval(function(){ timer() }, 1000);
		paused = false;
		$("#timepiece").fadeOut("fast").fadeIn("fast");
		$('#announcer').hide().text("| Game unpaused").fadeIn("fast").delay(200).fadeOut("fast");
	}
});

var bname = "";
var rname = "";

$('#swapper').click(function() {
	bname = $('#scoreleft').text();
	rname = $('#scoreright').text();
	var tempscore = blueScore;
	blueScore = redScore;
	redScore = tempscore;
	$('#scoreright').fadeOut("fast").text(bname).fadeIn("fast");
	$('#scoreleft').fadeOut("fast").text(rname).fadeIn("fast");
	$("#scorepieceb").fadeOut("fast").text("" + blueScore).fadeIn("fast");
	$("#scorepiecer").fadeOut("fast").text("" + redScore).fadeIn("fast");
	interval1 = clearInterval(interval1);
	paused = true;
	minutes = 5;
	seconds = 0;
	$("#timepiece").fadeOut("fast").text("5:00").fadeIn("fast");
	$('#announcer').hide().text("| Teams switched").fadeIn("fast").delay(200).fadeOut("fast");
});

	})();
	}

})();