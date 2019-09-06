var mod = "https://gitxalum.github.io/BonusAchievements/main.js"
var icons = "https://gitxalum.github.io/BonusAchievements/icons.png"

var thou = 1000;
var mill = thou * 1000;
var bill = mill * 1000;
var tril = bill * 1000;
var quad = tril * 1000;
var quin = quad * 1000;
var sext = quin * 1000;
var sept = sext * 1000;
var octi = sept * 1000;
var noni = octi * 1000;
var deci = noni * 1000;
var unde = deci * 1000;
var duod = unde * 1000;
var tred = duod * 1000;
var quat = tred * 1000;
var quid = quat * 1000;

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

new Game.AddAchievement("Hattrick", "Have <b>3</b> buffs active simultaneously.", [22, 6]);
new Game.AddAchievement("Dichotomy", "Have both a golden cookie, and wrath cookie effect active <b>simultaneously</b>.<q>Perfectly balanced, as all things should be.</q>", [0, 1, icons]);


new Game.AddAchievement('Ironman Mode', 'Get to <b>1 quadrillion</b> cookies baked with <b>no upgrades purchased</b>.<q>Was it worth it?</q>', [0, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Decacentennial", "Have at least <b>1000 of everything</b>.<q>You had to go and do it didn't you, people like you really have issues.</q>", [1, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Modded god complex", "Name yourself <b>Xalum</b>.<div class='warning'>Note : modded usurpers incur a -2% CpS penalty until they rename themselves something else.</div><q>Come on now that\'s still not you.</q>", [2, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Opti complex", "Name yourself <b>Opti</b>.<div class='warning'>Note : usurpers incur a -1% CpS penalty until they rename themselves something else.</div><q>Hey you remembered me, but that's not you, is it?</q>", [3, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Tragedy comes in trees", "Convert a complete seed log into sugar lumps by sacrificing your garden to the sugar hornets <b>three times</b>.<q>The hornets send their regards and eagerly await your next sacrifice.</q>", [4, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Excellent bakery", "Own <b>1 month's worth</b> of your unbuffed CpS.<q>You and I have witnessed many things, but nothing as bodacious as what just happened.</q>", [5, 1, icons]); Game.last.pool = "shadow";

Game.Achievements['Stomachache'].order = 21000.108;
Game.Achievements['Dyspepsia'].order = 21000.109;
Game.Achievements['Hemorrhage'].order = 21000.110;

Game.Achievements["Heavenly beginnings"].order = 32000.80;
Game.Achievements["Heavenly bakery"].order = 32000.81;
Game.Achievements["Heavenly empire"].order = 32000.82;
Game.Achievements["Heavenly legacy"].order = 32000.83;

Game.Achievements["Hattrick"].order = 10000.270;
Game.Achievements["Dichotomy"].order = 10000.271;


Game.XalAchievements = {};
for (var i in Game.Achievements) {
	if (Game.Achievements[i].xalum == 1) {
		Game.XalAchievements[Object.size(Game.XalAchievements)] = Game.Achievements[i]
	}
}

Game.customChecks = [
	function() {
		if (Game.prestige >= 1) Game.Win("Heavenly beginnings");
		if (Game.prestige >= mill) Game.Win("Heavenly bakery");
		if (Game.prestige >= bill) Game.Win("Heavenly empire");
		if (Game.prestige >= tril) Game.Win("Heavenly legacy");

		if (Object.size(Game.buffs) >= 3) Game.Win("Hattrick");

		var w = 0;
		for (var i in Game.shimmers) {
			if (Game.shimmers[i].wrath == 1) w ++;
		}
		var n = Object.size(Game.shimmers);
		if (n >= 2 && n > w && w > 0) Game.Win("Dichotomy");
	}
]

Game.BackupUpdateWrinklers = Game.UpdateWrinklers;
Game.UpdateWrinklers = function() {
	var popped = Game.wrinklersPopped;
	var bank = Game.cookies;
	Game.BackupUpdateWrinklers();
	if (popped < Game.wrinklersPopped) {
		if (Game.cookies - bank >= tril) {
			Game.Win('Stomachache');
		}
		if (Game.cookies - bank >= sext) {
			Game.Win('Dyspepsia');
		}
		if (Game.cookies - bank >= noni) {
			Game.Win('Hemorrhage');
		}
	}
}

//Borrowing some code from the Darky Achievements Package to save data, massive props to the writer of these functions
//Names will be changed in the hope that our projects will be compatible

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