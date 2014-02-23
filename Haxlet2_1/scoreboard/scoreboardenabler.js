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
			// your JavaScript code goes here!// JavaScript Document
			$('head').append('<link href=\"http://fonts.googleapis.com/css?family=Roboto+Condensed\" rel=\"stylesheet\" type=\"text/css\"><link rel=\"stylesheet\" href=\"http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css\" /><script src=\"http://limitedward.github.io/Haxlet2_1/scoreboard/scoreboardjs.js\"></script>');
			
			// END OF CODE
	})();
}

})();