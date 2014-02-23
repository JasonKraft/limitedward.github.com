$(document).ready(function(e) { // <-- the document must be ready before doing anything
	console.log('Scoreboard loaded!');
	$('body').append('<div id="scorebody"><iframe id="ticker" src="http://71.174.247.104:3000/haxnewsticker.html"><p>Your browser does not support iframes.</p></iframe><div id="scoremain"><div id="scoremaininner"><div id="scoremaincontent" class="left"><div id="redteam" class="left" contenteditable="true" spellcheck="false">Red Team</div><div id="redscore" class="left"><div class="scoreinner"><div class="scoretoggle left"><div class="scoreup">▲</div><div class="scoredown">▼</div></div><div id="redpoints" class="left">0</div></div></div><div id="bluescore" class="left"><div class="scoreinner"><div id="bluepoints" class="left">0</div><div class="scoretoggle left"><div class="scoreup">▲</div><div class="scoredown">▼</div></div></div></div><div id="blueteam" class="left" contenteditable="true" spellcheck="false">Blue Team</div></div><div id="scoretools" class="left"><div id="scoreclose" class="tool"></div><div id="scoresettings" class="tool"></div><div id="scorehelp" class="tool"></div></div></div></div><div id="scorebottom"><div id="scorebottomcontent"><div id="scorebottomleft" class="left">◀</div><div id="scorebottomtext" class="left">Pregame</div><div id="scorebottomright" class="left">▶</div></div></div></div><div id="sound"></div>');
	$('head').append('<link rel=stylesheet type=text/css href=http://limitedward.github.io/Haxlet2_1/scoreboard/scoreboardcss.css>');
	
	// -- keyboard tracking --
	
	$(document).keypress(function(e){
		switch (e.keyCode) {
			case 87:
				redscore++;
				$('#redscore').animate({'background-color':'#0f0'},150)
				.delay(150).animate({'background-color':'rgba(0,0,0,0.1)'},150);
				break;
			case 83:
				redscore--;
				break;
			case 69:
				bluescore++;
				$('#bluescore').animate({'background-color':'#0f0'},150)
				.delay(150).animate({'background-color':'rgba(0,0,0,0.1)'},150);
    	        break;
			case 68:
            	bluescore--;
            	break;
			case 65:
				hdec();
				break;
			case 70:
				hinc();
				break;
			default:
				console.log(e.keyCode);
    	}
		updatescores();
	});
	
	// -- background music --
	/*setInterval(playSound('file:///Users/JasonKraft/Desktop/HCD%20Stuff/scoreboard/Zombienation.mp3', 22100), 180000);*/
	
	function playSound( url, duration ){  
  		document.getElementById("sound").innerHTML="<audio autoplay><source src=http://limitedward.github.io/Haxlet2/scoreboard/audio/"+url+".mp3 type=audio/mpeg><source src=http://limitedward.github.io/Haxlet2/scoreboard/audio/"+url+".ogg type=audio/ogg></audio>";
		setTimeout(function(){ document.getElementById("sound").innerHTML=""; }, duration);
	}
	
	function soundTest( teamname ) {
		switch (teamname.toUpperCase()) {
			case "DETROIT":
			case "RECESSION":
				playSound('detroitrecession', 74000);
				break;
			case "ORLANDO":
			case "WILLYNILLYS":
				playSound('willynillys', 50000);
				break;
			case "PITTSBURGH":
			case "PENGUINS":
				playSound('penguins', 57000);
				break;
			case "WALLABIES":
				playSound('wallabies', 50000);
				break;
			case "SQUIRTLE":
				playSound('squirtlesquad', 50000);
				break;
			case "WEATHERMEN":
				playSound('swagweathermen', 65000);
				break;
			case "CYCLONES":
				playSound('cubacyclones', 50000);
				break;
			case "NYHC":
				playSound('nyhc', 83000);
				break;
			case "NIGHT HAWKS":
				playSound('nighthawks',50000);
				$('audio').bind('canplay', function() {
					this.currentTime = 17; // jumps to 29th secs
				});
				break;
			case "OTTAWA":
			case "TORNADOES":
				playSound('ottawatornadoes', 65000);
				break;
			case "DUCKIES":
				playSound('rubberduckies', 73000);
				break;
			case "MADRID":
			case "MATADORS":
				playSound('madridmatadors', 47000);
				break;

			//--- The new teams ---
			case "MCGRIDDLES":
				playSound('genericgoal', 34000);
				break;
			case "BROOKLYN":
				playSound('genericgoal', 34000);
				break;
			case "BULLDOGS":
				playSound('genericgoal', 34000);
				break;
			case "NBGA":
				playSound('nbga', 23000);
				break;
			case "NORTH BAY":
				playSound('nbga', 23000);
				break;
			case "ANGELS":
				playSound('nbga', 23000);
				break;
			case "PROVIDENCE":
				playSound('genericgoal', 34000);
				break;
			case "CHIEFTAINS":
				playSound('genericgoal', 34000);
				break;
			case "TORONTO":
				playSound('genericgoal', 34000);
				break;
			case "HUSKIES":
				playSound('genericgoal', 34000);
				break;
			case "HURRICANES":
				playSound('genericgoal', 34000);
				break;
			default:
				playSound('genericgoal', 34000);
		}
	}
	
	// -- info button --
	var infoopen = false;
	
	$('#scorehelp').click(function(e) {
		if (!infoopen)
		{
			infoopen = true;
			$('#scoretools').append('<div id=\"scoreinfo\" title=\"About Haxlet\">Haxlet 2.0 Copyright 2013 Jason Kraft.\
			<br><br>Click on the arrows to change the scores/half tracking.\
			<br>Double click on the team names to edit them. Press ENTER to stop editing.\
			<br>Click on the gear icon to edit advanced settings.\
			<br>Click on the \'x\' button to close the scoreboard.\
			<br>If goal horns do not play, make sure Quicktime is enabled.\
			</div>');
			$( "#scoreinfo" ).dialog({
				resizable: false,
				width:'auto',
				height:'auto',
				close: function( event, ui ) {
					infoopen = false;
					$('#scoreinfo').dialog('destroy').remove();
				}
			});
		}
	});
	
	// -- settings button --
	var settingsopen = false;
	
	function loadColor() {
	   $('#scoremain').css('background-image', 'url(scoreboardc-' + this.text().toLowerCase() + '.png)');
	   console.log('hi');
	   return true;
    }
	$('.scorecolor').click(function(e) {
	   		$('#scoremain').css('background-image', 'url(scoreboardc-' + this.text().toLowerCase() + '.png)');
			console.log(this.text().toLowerCase());
	   		return true;
	});
	
	$(".scorecolor").on("click", function(e){

		$('#scoremain').css('background-image', 'url(scoreboardc-' + this.text().toLowerCase() + '.png)');
		console.log(this.text().toLowerCase());
	   	return true;

	});
	
	$('#scoresettings').click(function(e) {
		if (!settingsopen)
		{
			settingsopen = true;
			$('#scorebody').append('<ul id="scoresettingsmenu">\
			<li><a href="#">Colors</a><ul>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-red.png)\');">Red</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-orange.png)\');">Orange</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-yellow.png)\');">Yellow</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-green.png)\');">Green</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-blue.png)\');">Blue</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-\purple.png)\');">Purple</a></li>\
				<li><a href="#" class="scorecolor" onclick="$(\'#scoremain\').css(\'background-image\', \'url(http://limitedward.github.io/Haxlet2/scoreboard/scoreboardc-pink.png)\');">Pink</a></li>\
			</ul>\
			</li></ul>');
			$( "#scoresettingsmenu" ).menu({
				select: function(event, ui) {
					settingsopen = false;
					$('#scoresettingsmenu').menu('destroy').remove();
				}
			});
		}
		e.stopPropagation();
	});
	
	$(document).click(function() {
    	settingsopen = false;
		$('#scoresettingsmenu').menu('destroy').remove();
	});
	
	// -- reset game --
	function resetgame() {
		redscore = 0;
		bluescore = 0;
		half = 0;
		halfstring = 'Pregame';
		updatescores();
		updatehalf();
		$('#redteam').text('Red Team');
		$('#blueteam').text('Blue Team');
	}
	
	// -- half tracking system --
	var half = 0;
	var halfstring = 'Pregame';
	
	$('#scorebottomleft').click(function(e){hdec()});
	
	var hdec = function halfdecrease() {
        if (half == 1)
		{
			half--;
			halfstring = 'Pregame';
		}
		if (half == 2)
		{
			half--;
			halfstring = 'First Half';
		}
		if (half == 3)
		{
			half--;
			halfstring = 'Halftime';
			var tempscore = bluescore;
			bluescore = redscore;
			redscore = tempscore;
			updatescores();
			var tempname = $('#blueteam').text();
			$('#blueteam').text($('#redteam').text());
			$('#redteam').text(tempname);
		}
		if (half == 4)
		{
			half--;
			halfstring = 'Second Half';
		}
		if (half == 5)
		{
			half--;
			halfstring = 'Overtime';
		}
		
		updatehalf();
    }
	
	$('#scorebottomright').click(function(e){hinc()});
	
	var hinc = function halfincrease() {
		if (half == 5)
		{
			resetgame();
		}
		else {
			if (half == 4)
			{
				half++;
				halfstring = 'End of Game';
			}
			if (half == 3)
			{
				half++;
				halfstring = 'Overtime';
			}
			if (half == 2)
			{
				half++;
				halfstring = 'Second Half';
				var tempscore = bluescore;
				bluescore = redscore;
				redscore = tempscore;
				updatescores();
				var tempname = $('#blueteam').text();
				$('#blueteam').text($('#redteam').text());
				$('#redteam').text(tempname);
			}
			if (half == 1)
			{
				half++;
				halfstring = 'Halftime';
			}
			if (half == 0)
			{
				half++;
				halfstring = 'First Half';
			}
		}
		
		updatehalf();
    }
	
	// -- updates half --
	
	function updatehalf() {
		$('#scorebottomtext').text(halfstring);
	}
	
	// -- point tracking system --
	var redscore = 0;
	var bluescore = 0;
	
	$('.scoreup').click(function(e) {
        if ($(this).closest('#redscore').length > 0)
			{
				redscore++;
				$('#redscore').animate({'background-color':'#0f0'},150)
				.delay(150).animate({'background-color':'rgba(0,0,0,0.1)'},150);
				soundTest($('#redteam').text());
			}
		else
			{
				bluescore++;
				$('#bluescore').animate({'background-color':'#0f0'},150)
				.delay(150).animate({'background-color':'rgba(0,0,0,0.1)'},150);
				soundTest($('#blueteam').text());
			}
		
		updatescores();
    });
	$('.scoredown').click(function(e) {
        if ($(this).closest('#redscore').length > 0)
			{redscore--;}
		else
			{bluescore--;}
		
		updatescores();
    });
	
	// -- updates scores --
	function updatescores() {
		$('#redpoints').text(redscore);
		$('#bluepoints').text(bluescore);
	}
	
	$('#scorebody').draggable();
	$('#redteam').dblclick(function(e){
		//$(this).attr('contenteditable','true');
		select_all(this);
		$(this).focus();
		console.log('Editing Red Team');
	});
	$('#blueteam').dblclick(function(e){
		//$(this).attr('contenteditable','true');
		select_all(this);
		$(this).focus();
		console.log('Editing Blue Team');
	});
	
	// -- Checks to make sure text does not exceed limit --
	function check_charcount(content_id, e) {
		if (textWidth(content_id) > $('#' + content_id).width()-10)
		{
			//console.log('Max width reached!');
			e.preventDefault();
		}
	}
	
	// -- checks text width --
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
	
	$("#redteam").keypress(function(e){ 
		
		check_charcount('redteam', e);
		console.log('key pressed in redteam');
		
		if (e.which == 13)
			this.blur();
		return e.which != 13;
	});
	$("#blueteam").keypress(function(e){ 
		
		check_charcount('blueteam', e);
		console.log('key pressed in blueteam');
		
		if (e.which == 13)
			this.blur();
		return e.which != 13;
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
	
	//-- Close --
	$('#scoreclose').click(function(e) {
		console.log('Scoreboard Closed!');
		$('#scorebody').slideUp().delay(100).queue(function() { $('#scorebody').remove(); });;
	});
});