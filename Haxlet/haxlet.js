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
		script1.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v1 + "/jquery-ui.js";
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
			$('head').load('https://raw.github.com/LimitedWard/haxlet/master/haxlet-style.html');
			$('body').load('https://raw.github.com/LimitedWard/haxlet/master/haxlet-divs.html');
			

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