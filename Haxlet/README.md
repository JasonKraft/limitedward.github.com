#About Haxlet
**Haxlet** is a web based score system designed by Jason Kraft for use in Haxball, an online 2D soccer game. The purpose of **Haxlet** is to provide a simple yet robust method of scorekeeping for long haxball games.

##Installation Instructions*
1. Enter open your web browser's built in bookmarks manager. In *Google Chrome*, you can open this in `Bookmarks -> Bookmarks Manager`
2. Create a new bookmark, preferably in your bookmarks bar. To do this in *Google Chrome's* Bookmarks Manager, simply right click wherever you'd like the bookmark to be created and click `Add Page`.
3. Title your bookmark as anything you would like. For simplicity's sake, it's easy to just call it "Haxlet."
4. For the URL, paste the following code:
  <pre>javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('src', 'http://limitedward.github.com/Haxlet/haxlet.js');   document.body.appendChild(jsCode);   }());</pre>

And that's it! Now you can test your newly made bookmarklet by going to www.haxball.com and clicking on the bookmark.

**\* Note:** these instructions do not work for *Maxthon*. To use this bookmarklet in *Maxthon*, simply copy and paste the code from step 4 into the top URL bar whenever you are using www.haxball.com. The only difference is that you can't bookmark the code to make it automated.

##How to use Haxlet
**Haxlet** is a very intuitive interface. The following is a list of instructions on how to use multiple features included in the web application.

###Moving the scoreboard
If you are using the scoreboard to stream games on websites such as www.livestream.com, chances are you will want to be able to move the scoreboard so that it is centered above the Haxball game window. To do this, hover your mouse over the top bar until you notice your cursor switch to a drag icon (<img src="http://qt-project.org/doc/qt-4.8/images/cursor-sizeall.png" width="20px" height="20px">). When you see the cursor change, simply the scoreboard by holding it at the top bar, and move it to whichever position you would like.

###Controlling the timer (basics)
Controlling the timer on the scoreboard is very simple. To keep track of the game time in tandem with the real game time, press the `Play/Pause` button whenever a kickoff or a timout occurs. It's important to note that the timer does not play/pause automatically whenver a change occurs. The timer does, however, automatically pause itself whenever the scorekeeper adds a point to either team.

###Modifying the time limit
By default, the timer will always stop at 5 minutes (5:00). Changing this is very simple. To edit the time limit, double click on the timer display. A dialog box will appear requesting for you to enter a time limit. The format for the time limit is in seconds; so if you wanted, for example, to set the time limit at 4 minutes (4:00), enter the number 240 (4 minutes = 240 seconds) into the dialog.

###Modifying the current time
If the scorekeeper forgets to play/pause the timer at any point, it may be useful to set manually set the current time. To do this, click on the `Options` button in the top bar. The Options bar should appear just below the top bar. Click on `Set Time`. A dialog box will appear requesting for you to enter a time. The format for the time is in seconds; so if you wanted, for example, to set the time limit at 2 minutes and 30 seconds (2:30), enter the number 150 (2 minutes + 30 seconds = 150 seconds) into the dialog.

###Scorekeeping
Scorekeeping is very easy with **Haxlet**. To modify a team's score, click on the up (`∧`) and down (`∨`) arrows next to their corresponding scores. It's important to note that adding to a team's score will automatically pause the timer.

###Editing team names
You may find it helpful as a scorekeeper to edit the team names to make it easier to keep track of who's who. To edit team names, double click over their names and type in the desired team names. To stop editing the team name, simply hit `Enter` or `Return` on your keybaord.

Some team names (including those from the Haxball Club Divisionals) have custom team colors. To these custom colors will be enabled automatically whenever their corresponding team names are entered.

####Custom team names:
- Orlando WillyNillys = "WillyNillys"
- Detroit Recession = "Recession"
- NYHC = "NYHC"
- Swag Weathermen = "Weathermen"
- United Talent = "United Talent"
- Night Hawks = "Night Hawks"
- Penguin Pride = "Penguin Pride"
- Squirtle Squad = "Squirtle Squad"
- GTA Golden Eagles = "Golden Eagles"
- Cuba Cyclones = "Cuba Cyclones"

###Swapping teams
If you are scorekeeping for a game with halftimes, it may be necessary to switch the teams after the first half on the scoreboard. To do this, click on the `Options` button in the top bar. The Options bar should appear just below the top bar. Next click on the `Swap Teams` button. The `Swap Teams` button not only swaps the team names but their scores as well. It's important to note that swapping the teams will automatically reset the timer.

###Resetting and closing the scoreboard
To reset the scoreboard, click on the `Reset` button below the timer display. Resetting the scoreboard will reset team names, team colors, scores, and the current time. Resetting will **NOT** reset the time limit.

At the moment, there is no quick way to close the scoreboard. The best way to do this at the moment is by refreshing the web page.
