var mod = "https://gitxalum.github.io/BonusAchievements/main.js"
var icons = "https://gitxalum.github.io/BonusAchievements/icons.png"

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


new Game.AddAchievement('Stomachache', 'Burst a wrinkler containing <b>1 trillion</b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Dyspepsia', 'Burst a wrinkler containing <b>1 sextillion</b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Hemorrhage', 'Burst a wrinkler containing <b>1 nonillion</b> cookies.', [0, 0, icons]);

new Game.AddAchievement("Heavenly beginnings", "Obtain a heavenly chip.<q>Impressive.</q>", [2, 0, icons]);
new Game.AddAchievement("Heavenly bakery", "Obtain <b>1 million</b> total heavenly chips.<q>Amazing.</q>", [19, 7]);
new Game.AddAchievement("Heavenly empire", "Obtain <b>1 billion</b> total heavenly chips.<q>Incredible.</q>", [20, 7]);
new Game.AddAchievement("Heavenly legacy", "Obtain <b>1 trillion</b> total heavenly chips.<q>Magnifique.</q>", [28, 12]);

Game.Achievements['Stomachache'].order = 21000.108;
Game.Achievements['Dyspepsia'].order = 21000.109;
Game.Achievements['Hemorrhage'].order = 21000.110;

Game.Achievements["Heavenly beginnings"].order = 32000.80;
Game.Achievements["Heavenly bakery"].order = 32000.81;
Game.Achievements["Heavenly empire"].order = 32000.82;
Game.Achievements["Heavenly legacy"].order = 32000.83;


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