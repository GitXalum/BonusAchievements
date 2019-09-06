var mod = "https://github.com/GitXalum/BonusAchievements/blob/master/main.js"
var icons = "https://github.com/GitXalum/BonusAchievements/blob/master/icons.png"

Object.size = function(obj) {
	var size = 0;
	for (var i in obj) {
		size ++;
	}
	return size;
}

Game.AddAchievement = function(name, desc, icon) {
	var a = new Game.Achievement(name, desc, icon);
	a.xalum = 1;
	return a
}

Game.WinBackup = Game.Win
Game.Win = function(what) {
	Game.WinBackup(what);
	if (typeof Game.Achievements[what] !== 'undefined' && Game.Achievements[what].xalum == 1) {
        XalumSave[what] = 1;
        XalumSaveConfig();
    }
}

new Game.AchievementXal('Stomachache', 'Burst a wrinkler containing <b>1 trillion</b> cookies.', [0, 0, icons]);
new Game.AchievementXal('Dyspepsia', 'Burst a wrinkler containing <b>1 sextillion</b> cookies.', [0, 0, icons]);
new Game.AchievementXal('Hemorrhage', 'Burst a wrinkler containing <b>1 nonillion</b> cookies.', [0, 0, icons]);




Game.XalAchievements = {};
for (var i in Game.Achievements) {
	if (Game.Achievements[i].xal == 1) {
		Game.XalAchievements[Object.size(Game.XalAchievements)] = Game.Achievements[i]
	}
}

//Borrowing some code from the Darky Achievements Package to save data, massive props to the writer of these functions
//Names will be changed in the hope that our projects will be compatible
//Additional stuff will be added here so that upgrades can be stored too

var SavePrefix = "XalumPackage"

XalumSaveConfig = function() {
	localStorage.setItem(SavePrefix, JSON.stringify(XalumSave));
}

XalumSaveDefault = function() {
	XalumSave = {}
    for (var i in Game.XalAchievements) {
        XalumSave[Game.XalAchievements[i].name] = 0;
    }
    XalumSaveConfig();
}

XalumLoadConfig = function() {
    if (localStorage.getItem(SavePrefix) != null) {
        XalumSave = JSON.parse(localStorage.getItem(SavePrefix));
        for (var i in Game.Achievements) {
        	if (Game.Achievements[i].xalum == 1) {
	            var me = Game.Achievements[i];
	            if (typeof XalumSave[me.name] === 'undefined') {
	                XalumSave[me.name] = 0;
	                XalumSaveConfig();
	            } else if (XalumSave[me.name] == 1) {
	                Game.Win(me.name);
	            }
	        }
        }
    }
    else {
        XalumSaveDefault();
    }
}
 
Game.BackupHardReset = Game.HardReset;
Game.HardReset = function(bypass) {
    Game.BackupHardReset(bypass);
    if (bypass == 2) {
        XalumSaveDefault();
    }
}
 
XalumLoadConfig();

Game.Win('Third-party');