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
		var done1 = false;
		var script1 = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				//initMyBookmarklet();
				script1.src = "http://code.jquery.com/ui/" + v1 + "/jquery-ui.js";
				script1.onload = script1.onreadystatechange = function(){
				if (!done1 && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done1 = true;
					initMyBookmarklet();
				}
		};
		document.getElementsByT
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
		
		//script1.src = "http://code.jquery.com/ui/" + v1 + "/jquery-ui.js";
		//script1.onload = script1.onreadystatechange = function(){
			//if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
			//	done = true;
			//	initMyBookmarklet();
			//}
		//};
		document.getElementsByTagName("head")[0].appendChild(script1);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
			$('head').append('<style type="text/css">\
\
	#scoreboard\
	{\
		position:absolute;\
		z-index:1;\
		border: 2px solid #000;\
		font-family:Arial, Helvetica, sans-serif;\
		font-size:18px;\
		background-color:#fff;\
		height:95px;\
		width:500px;\
		\
		box-shadow:0px 0px 10px rgba(0,0,0,.5);\
		-moz-box-shadow:0px 0px 10px rgba(0,0,0,.5);\
		-webkit-box-shadow:0px 0px 10px rgba(0,0,0,.5);\
		-o-box-shadow:0px 0px 10px rgba(0,0,0,.5);\
		\
		background-image: linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -o-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -moz-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -webkit-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -ms-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		\
		background-image: -webkit-gradient(\
			linear,\
			left bottom,\
			left top,\
			color-stop(0.33, rgb(133,133,133)),\
			color-stop(0.84, rgb(240,240,240))\
		);\
	}\
	.topBar\
	{\
		display:block;\
		background-color:#666;\
		color:#fff;\
		font-size:10px;\
		text-shadow:0px -1px 1px #000;\
		height:18px;\
		cursor:move;\
		line-height:20px;\
		padding-left: 10px;\
		padding-right:10px;\
		\
		border-bottom:1px solid rgb(51,51,51);\
		background-image: linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);\
		background-image: -o-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);\
		background-image: -moz-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);\
		background-image: -webkit-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);\
		background-image: -ms-linear-gradient(bottom, rgb(36,36,36) 17%, rgb(122,122,122) 80%);\
		\
		background-image: -webkit-gradient(\
			linear,\
			left bottom,\
			left top,\
			color-stop(0.17, rgb(36,36,36)),\
			color-stop(0.8, rgb(122,122,122))\
		);\
	}\
	#options\
	{\
		float:right;\
		cursor:pointer;\
		height:18px;\
	}\
	#swapper, #setTime, .spacer\
	{\
		float:left;\
		height:18px;\
	}\
	#swapper, #setTime\
	{\
		cursor:pointer;\
	}\
	#scoreleft, #scoreright, #scorecenter, #bluescore, #redscore, #timer\
	{\
		float:left;\
	}\
	#scoreleft\
	{\
		background-color:#36C;\
		width:30%;\
		height:75px;\
		text-align:center;\
		line-height:75px;\
		/*padding-top:27px;*/\
		color:#fff;\
		font-weight:bold;\
		\
		background-image: linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);\
		background-image: -o-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);\
		background-image: -moz-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);\
		background-image: -webkit-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);\
		background-image: -ms-linear-gradient(bottom, rgb(22,80,196) 33%, rgb(136,156,235) 84%);\
		\
		background-image: -webkit-gradient(\
			linear,\
			left bottom,\
			left top,\
			color-stop(0.33, rgb(22,80,196)),\
			color-stop(0.84, rgb(136,156,235))\
		);\
		\
		border-right:1px solid rgb(51,51,51);\
		border-top:1px solid rgb(204,204,204);\
	}\
	#scoreright\
	{\
		background-color:#F30;\
		width:30%;\
		height:75px;\
		text-align:center;\
		line-height:75px;\
		/*padding-top:27px;*/\
		color:#fff;\
		font-weight:bold;\
		\
		background-image: linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);\
		background-image: -o-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);\
		background-image: -moz-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);\
		background-image: -webkit-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);\
		background-image: -ms-linear-gradient(bottom, rgb(153,0,0) 33%, rgb(237,109,109) 84%);\
		\
		background-image: -webkit-gradient(\
			linear,\
			left bottom,\
			left top,\
			color-stop(0.33, rgb(153,0,0)),\
			color-stop(0.84, rgb(237,109,109))\
		);\
		\
		border-left:1px solid rgb(204,204,204);\
		border-top:1px solid rgb(204,204,204);\
	}\
	#scorecenter\
	{\
		width:39.1%;\
		height:75px;\
		text-align:center;\
		color:#000;\
		background-color:#fff;\
		border-left:1px solid rgb(204,204,204);\
		border-right:1px solid rgb(51,51,51);\
		-webkit-touch-callout: none;\
		-webkit-user-select: none;\
		-khtml-user-select: none;\
		-moz-user-select: none;\
		-ms-user-select: none;\
		user-select: none;\
		border-top:1px solid rgb(204,204,204);\
		\
		background-image: linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -o-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -moz-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -webkit-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		background-image: -ms-linear-gradient(bottom, rgb(133,133,133) 33%, rgb(240,240,240) 84%);\
		\
		background-image: -webkit-gradient(\
			linear,\
			left bottom,\
			left top,\
			color-stop(0.33, rgb(133,133,133)),\
			color-stop(0.84, rgb(240,240,240))\
		);\
	}\
	#bluescore, #redscore\
	{\
		height:75px;\
		width:30%;\
	}\
	#timer\
	{\
		height:75px;\
		width:40%;\
	}\
	#incrementb, #decrementb, #incrementr, #decrementr, #pause, #reset\
	{\
		height:20px;\
	}\
	#incrementb, #incrementr\
	{\
		cursor:n-resize;\
	}\
	#decrementb, #decrementr\
	{\
		cursor:s-resize;\
	}\
	#scorepieceb, #scorepiecer, #timepiece\
	{\
		height:25px;\
		padding-top:10px;\
		font-weight:bold;\
		text-outline:1px solid #fff;\
	}\
	#reset, #pause\
	{\
		cursor:pointer;\
	}\
</style>');
			
			$('body').append('<div id="scoreboard"></div>');
			$('#scoreboard').html('<div class="topBar">Haxlet Scoreboard 1.2 - Copyright 2013 Jason Kraft <span id="announcer"></span><span id="options">Options</span></div>\
        <div class="topBar" style="display:none">\
        	<span id="swapper">SWAP TEAMS</span><span class = "spacer">&nbsp;&nbsp;&nbsp;</span><span id="setTime">SET TIME</span>\
        </div>\
    \
    	<div id="scoreleft" contenteditable="true" spellcheck="false">Blue Team</div>\
        \
        <div id="scorecenter">\
        	\
        	<div id="bluescore">\
            	<div id="incrementb">&#8743;</div>\
                <div id="scorepieceb">0</div>\
                <div id="decrementb">&#8744;</div>\
            </div>\
            \
            <div id="timer">\
            	<div id="pause">Play/Pause</div>\
            	<div id="timepiece">0:00</div>\
                <div id="reset">Reset</div>\
            </div>\
            \
            <div id="redscore">\
            	<div id="incrementr">&#8743;</div>\
                <div id="scorepiecer">0</div>\
                <div id="decrementr">&#8744;</div>\
            </div>\
            \
        </div>\
        \
        <div id="scoreright" contenteditable="true" spellcheck="false">Red Team</div>\
        \
    </div>').ready(function(e) {
                
            
			//$('#scoreboard').draggable();

var blueScore = 0;
var redScore = 0;
var paused = false;

$('#scoreboard').draggable();
$('#scoreleft').dblclick(function(e){
	select_all(this);
	$(this).focus();
});
$('#scoreright').dblclick(function(e){
	select_all(this);
	$(this).focus();
});

$(document).ready(function(e) {
	paused = true;
	interval1 = clearInterval(interval1);
});

function textWidth(content_id){
	var html_org = "";
	html_org += $('#' + content_id).html();
	var html_calc = '<span id="tester">' + html_org + '</span>';
	$('#' + content_id).append(html_calc);
	$('#tester').css('display', 'none');
	var width = $('#tester').width();
	$('#tester').remove();
	return width;
}

function checkName(id) {
	if (id.text() == "WillyNillys")
	{
		console.log('Matches WillyNillys');
		id.css({
			'background' : 'rgba(255,0,128,.5)'
		});
	}
	else if (id.text() == "Recession")
	{
		console.log('Matches Recession');
		id.css({
			'background' : 'rgba(191,0,0,.5)'
		});
	}
	else if (id.text() == "NYHC")
	{
		console.log('Matches NYHC');
		id.css({
			'background' : 'rgba(106,90,205,.5)'
		});
	}
	else if (id.text() == "Weathermen")
	{
		console.log('Matches Weathermen');
		id.css({
			'background' : 'rgba(51,255,0,.5)'
		});
	}
	else if (id.text() == "United Talent")
	{
		console.log('Matches United Talent');
		id.css({
			'background' : 'rgba(11,56,97,.5)'
		});
	}
	else if (id.text() == "Night Hawks")
	{
		console.log('Matches Night Hawks');
		id.css({
			'background' : 'rgba(128,0,128,.5)'
		});
	}
	else if (id.text() == "Penguin Pride")
	{
		console.log('Matches Penguin Pride');
		id.css({
			'background' : 'rgba(0,0,191,.5)'
		});
	}
	else if (id.text() == "Squirtle Squad")
	{
		console.log('Matches Squirtle Squad');
		id.css({
			'background' : 'rgba(53,126,199,.5)'
		});
	}
	else if (id.text() == "Golden Eagles")
	{
		console.log('Matches Golden Eagles');
		id.css({
			'background' : 'rgba(255,191,0,.5)'
		});
	}
	else if (id.text() == "Cuba Cyclones")
	{
		console.log('Matches Cuba Cyclones');
		id.css({
			'background' : 'rgba(0,128,128,.5)'
		});
	}
	else
	{
		id.removeAttr("style");
	}
}

function check_charcount(content_id, e) {   
		
	if (textWidth(content_id) > $('#' + content_id).width()-10)
	{
		//console.log('Max width reached!');
		e.preventDefault();
	}
}
	

$("#scoreright").keyup(function(e) {
    checkName($('#scoreright'));
});

$("#scoreleft").keyup(function(e) {
    checkName($('#scoreleft'));
});

$("#scoreright").keypress(function(e){ 
	
	//checkName($('#scoreright'));
	
	check_charcount('scoreright', e);
	
	if (e.which == 13)
		this.blur();
	return e.which != 13;
});
 
$("#scoreleft").keypress(function(e){ 
	
	check_charcount('scoreleft', e);
	
	if (e.which == 13)
		this.blur();
	return e.which != 13;
});

$("#reset").click(function(e){
	minutes = 0;
	seconds = 0;
	currenttime = 0;
	$("#timepiece").text("0:00");
	interval1 = clearInterval(interval1);
	paused = true;
	
	var blue = $('#scoreright');
	var red = $('#scoreleft');
	$('#scoreright').hide();
	$('#scoreleft').hide();
	red.insertAfter($('.topBar:last')).show();
	blue.insertAfter($('#scorecenter')).show();
	swapped = false;
	$("#scoreleft").removeAttr("style");
	$("#scoreright").removeAttr("style");
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

var minutes = 0;
var seconds = 0;
var secPad = "";

function pad (str, max) {
	return str.length < max ? pad("0" + str, max) : str;
}

var maxmin = 5;
var maxsec = 0;
var maxtimeint = maxmin * 60 + maxsec;
var currenttime = 0;

function timer(){
	seconds++;
	currenttime++;
	
	if (seconds > 59)
	{
		seconds = 0;
		minutes++;
	}
	if (currenttime >= maxtimeint)
	{
		seconds = maxsec;
		minutes = maxmin;
		interval1 = clearInterval(interval1);
		paused = true;
		$("#timepiece").fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");
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

var optionsopen = false;

$('#options').click(function() {
	if (optionsopen)
	{
		optionsopen = false;
		$('.topBar:last').slideUp('fast');
		$('#scoreboard').animate({height : ($('#scoreboard').height() - 18)},'fast');
		$('#options').text('Options');
	}
	else
	{
		optionsopen = true;
		$('.topBar:last').slideDown('fast');
		$('#scoreboard').animate({height : ($('#scoreboard').height() + 18)},'fast');
		$('#options').text('Options (close)');
	}
});

$('#setTime').click(function() {
	var time = prompt("Enter the desired time in seconds (ex: 1:00 = 60):");
	currenttime = parseInt(time);
	minutes = parseInt(time / 60);
	seconds = parseInt(time - (minutes * 60));
	secPad = pad("" + seconds, 2);
	$("#timepiece").text(minutes + ":" + secPad);
});

var swapped = false;

$('#swapper').click(function() {
	if (swapped)
	{
		var blue = $('#scoreright');
		var red = $('#scoreleft');
		$('#scoreright').fadeOut("fast");
		$('#scoreleft').fadeOut("fast");
		red.insertAfter($('.topBar:last')).fadeIn('fast');
		blue.insertAfter($('#scorecenter')).fadeIn('fast');
		swapped = false;
	}
	else
	{
		var blue = $('#scoreleft');
		var red = $('#scoreright');
		$('#scoreright').fadeOut("fast");
		$('#scoreleft').fadeOut("fast");
		red.insertAfter($('.topBar:last')).fadeIn('fast');
		blue.insertAfter($('#scorecenter')).fadeIn('fast');
		swapped = true;
	}
	
	var tempscore = blueScore;
	blueScore = redScore;
	redScore = tempscore;
	$("#scorepieceb").fadeOut("fast").text("" + blueScore).fadeIn("fast");
	$("#scorepiecer").fadeOut("fast").text("" + redScore).fadeIn("fast");
	
	interval1 = clearInterval(interval1);
	paused = true;
	minutes = 0;
	seconds = 0;
	$("#timepiece").fadeOut("fast").text("0:00").fadeIn("fast");
	$('#announcer').hide().text("| Teams switched").fadeIn("fast").delay(200).fadeOut("fast");
});

$('#timepiece').dblclick(function() {
	var maxtime = prompt("Enter the desired max time in seconds (ex: 1:00 = 60):");
	maxtimeint = parseInt(maxtime);
	maxmin = parseInt(maxtimeint / 60);
	maxsec = parseInt(maxtimeint - (maxmin * 60));
});

function select_all(el) {
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.select();
        }
    }


});

	})();
	}

})();