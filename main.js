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
	a.pool = "custom";
	return a
}

Game.WinBackup = Game.Win
Game.Win = function(what) {
	Game.WinBackup(what);
	if (typeof Game.Achievements[what] !== 'undefined' && Game.Achievements[what].xalum == 1) {
        XalumSave.achievements[what] = 1;
        XalumSaveConfig();
    }
}

Game.SilentWin = function(what) {
	if (typeof what==='string') {
		if (Game.Achievements[what]) {
			if (Game.Achievements[what].won==0) {
				Game.Achievements[what].won=1;
				if (Game.CountsAsAchievementOwned(Game.Achievements[what].pool)) Game.AchievementsOwned++;
				Game.recalculateGains=1;
			}
		}
		if (Game.Achievements[what].xalum == 1) {
	        XalumSave.achievements[what] = 1;
	        XalumSaveConfig();
	    }
	}
	else {for (var i in what) {Game.SilentWin(what[i]);}}
}


new Game.AddAchievement("Wrath cookie", "Click a <b>wrath cookie</b>.", [15, 5]);
new Game.AddAchievement("Dodgy cookie", "Click <b>6 wrath cookies</b>.", [5, 0, icons]);
new Game.AddAchievement("Withering heights", "Click <b>66 wrath cookies</b>.", [6, 0, icons]);
new Game.AddAchievement("Hattrick", "Have <b>3</b> buffs active simultaneously.", [22, 6]);
new Game.AddAchievement("Dichotomy", "Have both a golden cookie, and wrath cookie present on screen <b>simultaneously</b>.<q>Perfectly balanced, as all things should be.</q>", [1, 0, icons]);
new Game.AddAchievement("Unlucky", "Miss a golden cookie.", [3, 0, icons]);
new Game.AddAchievement("Crumbling fortune", "Miss <b>77</b> golden cookies.", [3, 0, icons]);

new Game.AddAchievement("Achievement not found", "Obtain <b>404 base game achievements</b>.<q>Refer to the manual to determine the exact cause of this error</q>", [0, 7]);

new Game.AddAchievement("Elder worship", "Purchase <b>every Grandmapocalypse related upgrade</b>.<q>We<br>become<br>strong</q>", [4, 9]);

new Game.AddAchievement("Circle of life", "Have 12 wrinklers feeding on your big cookie <b>simultaneously</b>.", [19, 8]);
new Game.AddAchievement("Itchy trigger finger", "Burst a wrinkler <b>before</b> it consumes any cookies.", [19, 8]);
new Game.AddAchievement('Stomachache', 'Burst a wrinkler containing <b>1000000000000</b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Dyspepsia', 'Burst a wrinkler containing <b>1000000000000000000000</b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Hemorrhage', 'Burst a wrinkler containing <b>1000000000000000000000000000000</b> cookies.', [0, 0, icons]);

new Game.AddAchievement("Master of the elements", "Experience every season in one ascension.", [16, 6]);

new Game.AddAchievement("Euclidean geometry", "Own <b>500</b> upgrades and <b>5000</b> buildings.<q>The giants look up to you, for you have gone far beyond what they could ever have hoped to, the world is in your hands.</q>", [9, 0, icons]);

new Game.AddAchievement("Heavenly beginnings", "Obtain a heavenly chip.<q>Impressive.</q>", [2, 0, icons]);
new Game.AddAchievement("Heavenly bakery", "Obtain <b>1000000</b> total heavenly chips.<q>Amazing.</q>", [19, 7]);
new Game.AddAchievement("Heavenly empire", "Obtain <b>1000000000</b> total heavenly chips.<q>Incredible.</q>", [20, 7]);
new Game.AddAchievement("Heavenly legacy", "Obtain <b>1000000000000</b> total heavenly chips.<q>Magnifique.</q>", [28, 12]);

new Game.AddAchievement("Good news", "Click a <b>fortune</b>.", [29, 8]);
new Game.AddAchievement("Lucky day", "Click <b>7 fortunes</b>.", [29, 8]);
new Game.AddAchievement("Fortunate", "Click <b>77 fortunes</b>.", [29, 8]);
new Game.AddAchievement("Unfortunate", "Miss a fortune.", [10, 0, icons]);

new Game.AddAchievement("Farming simulator", "Unlock <b>every upgrade and cookie from the garden</b>.", [8, 0, icons]);
new Game.AddAchievement("Finder's keepers", "Fill in <b>half</b> of the seed log.<q>You snooze, you lose.</q>", [7, 0, icons]);

new Game.AddAchievement("A mouse made of a currently undisclosed metal", "Purchase <b>every cursor upgrade</b>.", [11, 27])
new Game.AddAchievement("Artificial accretion disk", "Purchase <b>every clicker upgrade</b>.", [0, 27])
new Game.AddAchievement("All-in-one power baking tools", "Purchase <b>every grandma upgrade</b>.", [1, 27])
new Game.AddAchievement("Universe-wide crop rotation", "Purchase <b>every farm upgrade</b>.", [2, 27])
new Game.AddAchievement("Holes through the bottom of the world", "Purchase <b>every mine upgrade</b>.", [3, 27])
new Game.AddAchievement("Zero friction lubricant", "Purchase <b>every factory upgrade</b>.", [4, 27])
new Game.AddAchievement("No win no fee guarentee", "Purchase <b>every bank upgrade</b>.", [15, 27])
new Game.AddAchievement("A series of strongly held beliefs", "Purchase <b>every temple upgrade</b>.", [16, 27])
new Game.AddAchievement("Klein mana bottles", "Purchase <b>every wizard tower upgrade</b>.", [17, 27])
new Game.AddAchievement("Bottomless fuel tanks", "Purchase <b>every shipment upgrade</b>.", [5, 27])
new Game.AddAchievement("Boltzmann distribution tactics", "Purchase <b>every alchemy lab upgrade</b>.", [6, 27])
new Game.AddAchievement("Fractures in space, shattering reality", "Purchase <b>every portal upgrade</b>.", [7, 27])
new Game.AddAchievement("Thyme", "Purchase <b>every time machine upgrade</b>.", [8, 27])
new Game.AddAchievement("Condensing into a third dimension", "Purchase <b>every antimatter condenser upgrade</b>.<q>NB. The third dimension is made of cookies.</q>", [13, 27])
new Game.AddAchievement("An unnecessary quantity of crystal polish", "Purchase <b>every prism upgrade</b>.", [14, 27])
new Game.AddAchievement("Influence over cause and effect", "Purchase <b>every chancemaker upgrade</b>.", [19, 27])
new Game.AddAchievement("An achievement celebrating the ownership of every fractal engine upgrade", "Purchase <b>every fractal engine upgrade</b>.", [20, 27])
new Game.AddAchievement('Game.Win("Game.Win("Game.Win("Game.Win("Game.Win(...)")")")")', "Purchase <b>every javascript console upgrade</b>.", [32, 27])


new Game.AddAchievement('Ironman mode', 'Get to <b>1000000000000000</b> cookies baked with <b>no upgrades purchased</b>.<q>Was it worth it?</q>', [0, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Earl of creation", "Own <b>1000</b> of any building.", [4, 0, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Modded god complex", "Name yourself <b>Xalum</b>.<div class='warning'>Note : modded usurpers incur a -2% CpS penalty until they rename themselves something else.</div><q>Come on now that's still not you, is it?</q>", [2, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Opti complex", "Name yourself <b>Opti</b>.<div class='warning'>Note : usurpers incur a -1% CpS penalty until they rename themselves something else.</div><q>Hey you remembered me, but that's not you, is it?</q>", [3, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Tragedy comes in trees", "Convert a complete seed log into sugar lumps by sacrificing your garden to the sugar hornets <b>three times</b>.<q>The hornets send their regards and eagerly await your next sacrifice.</q>", [4, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Excellent bakery", "Own <b>1 month's worth</b> of your unbuffed CpS.<q>You and I have witnessed many things, but nothing as bodacious as what just happened.</q>", [5, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Completionism", "Own <b>every base game achievement</b>.<q>You did it, there's nothing left to do. So what now?</q>", [6, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Modded completionism", "Own <b>every custom achievement</b>.<q>I have to say I'm impressed, good job, and thank you for playing.</q>", [7, 1, icons]); Game.last.pool = "shadow";



Game.Achievements["Wrath cookie"].order = 10000.090;
Game.Achievements["Dodgy cookie"].order = 10000.091;
Game.Achievements["Withering heights"].order = 10000.092;
Game.Achievements["Hattrick"].order = 10000.270;
Game.Achievements["Dichotomy"].order = 10000.271;
Game.Achievements["Unlucky"].order = 10000.272;
Game.Achievements["Crumbling fortune"].order = 10000.273;

Game.Achievements["Achievement not found"].order = 11000.244;

Game.Achievements["Elder worship"].order = 20000.083;

Game.Achievements['Circle of life'].order = 21000.107;
Game.Achievements['Itchy trigger finger'].order = 21000.107;
Game.Achievements['Stomachache'].order = 21000.108;
Game.Achievements['Dyspepsia'].order = 21000.109;
Game.Achievements['Hemorrhage'].order = 21000.110;

Game.Achievements["Master of the elements"].order = 22400.170;

Game.Achievements["Euclidean geometry"].order = 6000.44;

Game.Achievements["Heavenly beginnings"].order = 32000.80;
Game.Achievements["Heavenly bakery"].order = 32000.81;
Game.Achievements["Heavenly empire"].order = 32000.82;
Game.Achievements["Heavenly legacy"].order = 32000.83;

Game.Achievements["Good news"].order = 33000.440;
Game.Achievements["Lucky day"].order = 33000.441;
Game.Achievements["Fortunate"].order = 33000.442;
Game.Achievements["Fortunate"].order = 33000.443;

Game.Achievements["Farming simulator"].order = 61515.379;
Game.Achievements["Finder's keepers"].order = 61515.380;

Game.Achievements["A mouse made of a currently undisclosed metal"].order = 6000.50;
Game.Achievements["Artificial accretion disk"].order = 6000.51;
Game.Achievements["All-in-one power baking tools"].order = 6000.52;
Game.Achievements["Universe-wide crop rotation"].order = 6000.53;
Game.Achievements["Holes through the bottom of the world"].order = 6000.54;
Game.Achievements["Zero friction lubricant"].order = 6000.55;
Game.Achievements["No win no fee guarentee"].order = 6000.56;
Game.Achievements["A series of strongly held beliefs"].order = 6000.57;
Game.Achievements["Klein mana bottles"].order = 6000.58;
Game.Achievements["Bottomless fuel tanks"].order = 6000.59;
Game.Achievements["Boltzmann distribution tactics"].order = 6000.60;
Game.Achievements["Fractures in space, shattering reality"].order = 6000.61;
Game.Achievements["Thyme"].order = 6000.62;
Game.Achievements["Condensing into a third dimension"].order = 6000.63;
Game.Achievements["An unnecessary quantity of crystal polish"].order = 6000.64;
Game.Achievements["Influence over cause and effect"].order = 6000.65;
Game.Achievements["An achievement celebrating the ownership of every fractal engine upgrade"].order = 6000.66;
Game.Achievements['Game.Win("Game.Win("Game.Win("Game.Win("Game.Win(...)")")")")'].order = 6000.67;


Game.Achievements['Ironman mode'].order = 30200.08;
Game.Achievements["Earl of creation"].order = 32207.1;
Game.Achievements["Modded god complex"].order = 30200.1592;
Game.Achievements["Opti complex"].order = 30200.1591;
Game.Achievements["Tragedy comes in trees"].order = 33000.105;
Game.Achievements["Excellent bakery"].order = 36000.368;
Game.Achievements["Completionism"].order = 37000.70;
Game.Achievements["Modded completionism"].order = 37000.80;


Game.XalAchievements = {};
Game.CustomAchievements = {};
Game.CustomShadowAchievements = {};
Game.BaseAchievements = {};
for (var i in Game.Achievements) {
	if (Game.Achievements[i].xalum == 1) {
		Game.XalAchievements[Object.size(Game.XalAchievements)] = Game.Achievements[i]
		if (Game.Achievements[i].pool == "shadow") {
			Game.CustomShadowAchievements[Object.size(Game.CustomShadowAchievements)] = Game.Achievements[i]
		}
	} else {
		if (Game.Achievements[i].pool != "shadow") {
			Game.BaseAchievements[Object.size(Game.BaseAchievements)] = Game.Achievements[i]
		}
	}
	if (Game.Achievements[i].pool == "custom") {
		Game.CustomAchievements[Object.size(Game.CustomAchievements)] = Game.Achievements[i]
	}
}

Game.customChecks = [
	function() { // Gathering Data
		Game.minimumBuildingAmount = 'undefined';
		Game.maximumBuildingAmount = 'undefined';
		for (var i in Game.Objects) {
			var me = Game.Objects[i]
			if (Game.minimumBuildingAmount == 'undefined' || Game.minimumBuildingAmount > me.amount) Game.minimumBuildingAmount = me.amount;
			if (Game.maximumBuildingAmount == 'undefined' || Game.maximumBuildingAmount < me.amount) Game.maximumBuildingAmount = me.amount;
		}

		if (Game.experiencedSeasons) {
			if (Game.season != "" && !Game.experiencedSeasons[Game.season]) Game.experiencedSeasons[Game.season] = true; 
		} else {
			Game.experiencedSeasons = XalumSave.experiencedSeasons;
		}

		Game.experiencedAllSeasons = (Game.experiencedSeasons.christmas && Game.experiencedSeasons.halloween && Game.experiencedSeasons.valentines && Game.experiencedSeasons.easter && Game.experiencedSeasons.fools);
		Game.foundAllGardenUpgrades = (Game.Upgrades["Elderwort biscuits"].unlocked == 1 && Game.Upgrades["Bakeberry cookies"].unlocked == 1 && Game.Upgrades["Duketater cookies"].unlocked == 1 && Game.Upgrades["Green yeast digestives"].unlocked == 1 && Game.Upgrades["Wheat slims"].unlocked == 1 && Game.Upgrades["Fern tea"].unlocked == 1 && Game.Upgrades["Ichor syrup"].unlocked == 1)

		Game.feedingWrinklers = 0
		for (var i in Game.wrinklers) {
			var me = Game.wrinklers[i];
			if (me.sucked > 0) Game.feedingWrinklers++;
		}

		Game.CustomAchievementsOwned = 0;
		for (var i in Game.CustomAchievements) {
			if (Game.Achievements[Game.CustomAchievements[i].name].won != 0) Game.CustomAchievementsOwned ++;
		}

		XalumSave.experiencedSeasons = Game.experiencedSeasons;
	},
	function() { // Awarding Achievements
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

		if (Game.missedGoldenClicks >= 1) Game.Win("Unlucky");
		if (Game.missedGoldenClicks >= 77) Game.Win("Crumbling fortune");

		if (Game.Upgrades["Specialized chocolate chips"].bought == 1 && Game.Upgrades["Designer cocoa beans"].bought == 1 && Game.Upgrades["Ritual rolling pins"].bought == 1 && Game.Upgrades["Underworld ovens"].bought == 1 &&
			Game.Upgrades["One mind"].bought == 1 && Game.Upgrades["Exotic nuts"].bought == 1 && Game.Upgrades["Communal brainsweep"].bought == 1 && Game.Upgrades["Arcane sugar"].bought == 1 &&
			Game.Upgrades["Elder Pact"].bought == 1 && Game.Upgrades["Sacrificial rolling pins"].bought == 1) {
			Game.Win("Elder worship");
		}

		if (Game.feedingWrinklers >= 12) Game.Win("Circle of life");

		if (Game.experiencedAllSeasons) Game.Win("Master of the elements");

		if (Game.BuildingsOwned >= 5000 && Game.UpgradesOwned >= 500) Game.Win("Euclidean geometry");

		if (Game.Achievements["A mouse made of a currently undisclosed metal"].won == 0 && 
			Game.Upgrades["Plastic mouse"].bought == 1 && Game.Upgrades["Iron mouse"].bought == 1 && Game.Upgrades["Titanium mouse"].bought == 1 && Game.Upgrades["Adamantium mouse"].bought == 1 &&
			Game.Upgrades["Unobtainium mouse"].bought == 1 && Game.Upgrades["Eludium mouse"].bought == 1 && Game.Upgrades["Wishalloy mouse"].bought == 1 && Game.Upgrades["Fantasteel mouse"].bought == 1 &&
			Game.Upgrades["Nevercrack mouse"].bought == 1 && Game.Upgrades["Armythril mouse"].bought == 1 && Game.Upgrades["Technobsidian mouse"].bought == 1 && Game.Upgrades["Plasmarble mouse"].bought == 1) {
			Game.Win("A mouse made of a currently undisclosed metal");
		}
		if (Game.Achievements["Artificial accretion disk"].won == 0 &&
			Game.Upgrades["Reinforced index finger"].bought == 1 && Game.Upgrades["Carpal tunnel prevention cream"].bought == 1 && Game.Upgrades["Ambidextrous"].bought == 1 && Game.Upgrades["Thousand fingers"].bought == 1 &&
			Game.Upgrades["Million fingers"].bought == 1 && Game.Upgrades["Billion fingers"].bought == 1 && Game.Upgrades["Trillion fingers"].bought == 1 && Game.Upgrades["Quadrillion fingers"].bought == 1 &&
			Game.Upgrades["Quintillion fingers"].bought == 1 && Game.Upgrades["Sextillion fingers"].bought == 1 && Game.Upgrades["Septillion fingers"].bought == 1 && Game.Upgrades["Octillion fingers"].bought == 1) {
			Game.Win("Artificial accretion disk");
		}
		if (Game.Achievements["All-in-one power baking tools"].won == 0 &&
			Game.Upgrades["Forwards from grandma"].bought == 1 && Game.Upgrades["Steel-plated rolling pins"].bought == 1 && Game.Upgrades["Lubricated dentures"].bought == 1 && Game.Upgrades["Prune juice"].bought == 1 &&
			Game.Upgrades["Double-thick glasses"].bought == 1 && Game.Upgrades["Aging agents"].bought == 1 && Game.Upgrades["Xtreme walkers"].bought == 1 && Game.Upgrades["The Unbridling"].bought == 1 &&
			Game.Upgrades["Reverse dementia"].bought == 1 && Game.Upgrades["Timeproof hair dyes"].bought == 1 && Game.Upgrades["Good manners"].bought == 1) {
			Game.Win("All-in-one power baking tools");
		}
		if (Game.Achievements["Universe-wide crop rotation"].won == 0 &&
			Game.Upgrades["Cheap hoes"].bought == 1 && Game.Upgrades["Fertilizer"].bought == 1 && Game.Upgrades["Cookie trees"].bought == 1 && Game.Upgrades["Genetically-modified cookies"].bought == 1 &&
			Game.Upgrades["Gingerbread scarecrows"].bought == 1 && Game.Upgrades["Pulsar sprinklers"].bought == 1 && Game.Upgrades["Fudge fungus"].bought == 1 && Game.Upgrades["Wheat triffids"].bought == 1 &&
			Game.Upgrades["Humane pesticides"].bought == 1 && Game.Upgrades["Barnstars"].bought == 1 && Game.Upgrades["Lindworms"].bought == 1) {
			Game.Win("Universe-wide crop rotation");
		}
		if (Game.Achievements["Holes through the bottom of the world"].won == 0 &&
			Game.Upgrades["Sugar gas"].bought == 1 && Game.Upgrades["Megadrill"].bought == 1 && Game.Upgrades["Ultradrill"].bought == 1 && Game.Upgrades["Ultimadrill"].bought == 1 &&
			Game.Upgrades["H-bomb mining"].bought == 1 && Game.Upgrades["Coreforge"].bought == 1 && Game.Upgrades["Planetsplitters"].bought == 1 && Game.Upgrades["Canola oil wells"].bought == 1 &&
			Game.Upgrades["Mole people"].bought == 1 && Game.Upgrades["Mine canaries"].bought == 1 && Game.Upgrades["Bore again"].bought == 1) {
			Game.Win("Holes through the bottom of the world");
		}
		if (Game.Achievements["Zero friction lubricant"].won == 0 &&
			Game.Upgrades["Sturdier conveyor belts"].bought == 1 && Game.Upgrades["Child labor"].bought == 1 && Game.Upgrades["Sweatshop"].bought == 1 && Game.Upgrades["Radium reactors"].bought == 1 &&
			Game.Upgrades["Recombobulators"].bought == 1 && Game.Upgrades["Deep-bake process"].bought == 1 && Game.Upgrades["Cyborg workforce"].bought == 1 && Game.Upgrades["78-hour days"].bought == 1 &&
			Game.Upgrades["Machine learning"].bought == 1 && Game.Upgrades["Brownie point system"].bought == 1 && Game.Upgrades['"Volunteer" interns'].bought == 1) {
			Game.Win("Zero friction lubricant");
		}
		if (Game.Achievements["No win no fee guarentee"].won == 0 &&
			Game.Upgrades["Taller tellers"].bought == 1 && Game.Upgrades["Scissor-resistant credit cards"].bought == 1 && Game.Upgrades["Acid-proof vaults"].bought == 1 && Game.Upgrades["Chocolate coins"].bought == 1 &&
			Game.Upgrades["Exponential interest rates"].bought == 1 && Game.Upgrades["Financial zen"].bought == 1 && Game.Upgrades["Way of the wallet"].bought == 1 && Game.Upgrades["The stuff rationale"].bought == 1 &&
			Game.Upgrades["Edible money"].bought == 1 && Game.Upgrades["Grand supercycles"].bought == 1 && Game.Upgrades["Rules of acquisition"].bought == 1) {
			Game.Win("No win no fee guarentee");
		}
		if (Game.Achievements["A series of strongly held beliefs"].won == 0 &&
			Game.Upgrades["Golden idols"].bought == 1 && Game.Upgrades["Sacrifices"].bought == 1 && Game.Upgrades["Delicious blessing"].bought == 1 && Game.Upgrades["Sun festival"].bought == 1 &&
			Game.Upgrades["Enlarged pantheon"].bought == 1 && Game.Upgrades["Great baker in the sky"].bought == 1 && Game.Upgrades["Creation myth"].bought == 1 && Game.Upgrades["Theocracy"].bought == 1 &&
			Game.Upgrades["Sick rap prayers"].bought == 1 && Game.Upgrades["Psalm-reading"].bought == 1 && Game.Upgrades["War of the gods"].bought == 1) {
			Game.Win("A series of strongly help beliefs");
		}


		if (Game.foundAllGardenUpgrades) Game.Win("Farming simulator");
		if (Game.Objects.Farm.minigame.plantsUnlockedN >= Game.Objects.Farm.minigame.plantsN / 2) Game.Win("Finder's keepers");

		if (Game.AchievementsOwned >= 404) Game.Win("Achievement not found");

		if (Game.FortuneClicks >= 1) Game.Win("Good news");
		if (Game.FortuneClicks >= 7) Game.Win("Lucky day");
		if (Game.FortuneClicks >= 77) Game.Win("Fortunate");


		if ((Game.ascensionMode==1 || Game.resets==0) && Game.cookiesEarned >= quad && Game.UpgradesOwned == 0) Game.Win("Ironman Mode");
		if (Game.bakeryName.toLowerCase() == "xalum") Game.Win("Modded god complex");
		if (Game.bakeryName.toLowerCase() == "opti") Game.Win("Opti complex");
		if (Game.maximumBuildingAmount >= 1000) Game.Win("Earl of creation");
		if (Game.Objects.Farm.minigame.convertTimes >= 3) Game.Win("Tragedy comes in trees");
		if (Game.unbuffedCps >= tril && Game.cookiesEarned >= 60*60*24*30*Game.unbuffedCps) Game.Win("Excellent bakery");
		if (Game.AchievementsOwned >= Object.size(Game.BaseAchievements)) Game.Win("Completionism");
		if (Game.CustomAchievementsOwned >= Object.size(Game.CustomAchievements)) Game.Win("Modded completionism");
	},
]

Game.BackupUpdateWrinklers = Game.UpdateWrinklers;
Game.UpdateWrinklers = function() {
	var popped = Game.wrinklersPopped;
	var bank = Game.cookies;
	var val = Game.BackupUpdateWrinklers();
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
		if (Game.cookies == bank) {
			Game.Win("Itchy trigger finger");
		}
	}
	return val;
}

Game.BackupReset = Game.Reset;
Game.Reset = function(hard) {
	Game.experiencedSeasons = {
		christmas: false,
		halloween: false,
		valentines: false,
		easter: false,
		fools: false,
	}
	Game.BackupReset(hard)
}

Game.shimmerTypes.golden.popFunc = function(me) {
	//get achievs and stats
	if (me.spawnLead)
	{
		Game.goldenClicks++;
		Game.goldenClicksLocal++;
		
		if (me.wrath == 1) {
			Game.wrathClicks ++;
			XalumSave.wrathClicks ++;
		}

		if (Game.goldenClicks>=1) Game.Win('Golden cookie');
		if (Game.goldenClicks>=7) Game.Win('Lucky cookie');
		if (Game.goldenClicks>=27) Game.Win('A stroke of luck');
		if (Game.goldenClicks>=77) Game.Win('Fortune');
		if (Game.goldenClicks>=777) Game.Win('Leprechaun');
		if (Game.goldenClicks>=7777) Game.Win('Black cat\'s paw');
		
		if (Game.goldenClicks>=7) Game.Unlock('Lucky day');
		if (Game.goldenClicks>=27) Game.Unlock('Serendipity');
		if (Game.goldenClicks>=77) Game.Unlock('Get lucky');
		
		if ((me.life/Game.fps)>(me.dur-1)) Game.Win('Early bird');
		if (me.life<Game.fps) Game.Win('Fading luck');

		if (Game.wrathClicks >= 1) Game.Win("Wrath cookie");
		if (Game.wrathClicks >= 6) Game.Win("Dodgy cookie");
		if (Game.wrathClicks >= 66) Game.Win("Withering heights");
	}
	
	if (Game.forceUnslotGod)
	{
		if (Game.forceUnslotGod('asceticism')) Game.useSwap(1000000);
	}
	
	//select an effect
	var list=[];
	if (me.wrath>0) list.push('clot','multiply cookies','ruin cookies');
	else list.push('frenzy','multiply cookies');
	if (me.wrath>0 && Game.hasGod && Game.hasGod('scorn')) list.push('clot','ruin cookies','clot','ruin cookies');
	if (me.wrath>0 && Math.random()<0.3) list.push('blood frenzy','chain cookie','cookie storm');
	else if (Math.random()<0.03 && Game.cookiesEarned>=100000) list.push('chain cookie','cookie storm');
	if (Math.random()<0.05 && Game.season=='fools') list.push('everything must go');
	if (Math.random()<0.1 && (Math.random()<0.05 || !Game.hasBuff('Dragonflight'))) list.push('click frenzy');
	if (me.wrath && Math.random()<0.1) list.push('cursed finger');
	
	if (Game.BuildingsOwned>=10 && Math.random()<0.25) list.push('building special');
	
	if (Game.canLumps() && Math.random()<0.0005) list.push('free sugar lump');
	
	if ((me.wrath==0 && Math.random()<0.15) || Math.random()<0.05)
	{
		//if (Game.hasAura('Reaper of Fields')) list.push('dragon harvest');
		if (Math.random()<Game.auraMult('Reaper of Fields')) list.push('dragon harvest');
		//if (Game.hasAura('Dragonflight')) list.push('dragonflight');
		if (Math.random()<Game.auraMult('Dragonflight')) list.push('dragonflight');
	}
	
	if (this.last!='' && Math.random()<0.8 && list.indexOf(this.last)!=-1) list.splice(list.indexOf(this.last),1);//80% chance to force a different one
	if (Math.random()<0.0001) list.push('blab');
	var choice=choose(list);
	
	if (this.chain>0) choice='chain cookie';
	if (me.force!='') {this.chain=0;choice=me.force;me.force='';}
	if (choice!='chain cookie') this.chain=0;
	
	this.last=choice;
	
	//create buff for effect
	//buff duration multiplier
	var effectDurMod=1;
	if (Game.Has('Get lucky')) effectDurMod*=2;
	if (Game.Has('Lasting fortune')) effectDurMod*=1.1;
	if (Game.Has('Lucky digit')) effectDurMod*=1.01;
	if (Game.Has('Lucky number')) effectDurMod*=1.01;
	if (Game.Has('Green yeast digestives')) effectDurMod*=1.01;
	if (Game.Has('Lucky payout')) effectDurMod*=1.01;
	//if (Game.hasAura('Epoch Manipulator')) effectDurMod*=1.05;
	effectDurMod*=1+Game.auraMult('Epoch Manipulator')*0.05;
	if (!me.wrath) effectDurMod*=Game.eff('goldenCookieEffDur');
	else effectDurMod*=Game.eff('wrathCookieEffDur');
	
	if (Game.hasGod)
	{
		var godLvl=Game.hasGod('decadence');
		if (godLvl==1) effectDurMod*=1.07;
		else if (godLvl==2) effectDurMod*=1.05;
		else if (godLvl==3) effectDurMod*=1.02;
	}
	
	//effect multiplier (from lucky etc)
	var mult=1;
	//if (me.wrath>0 && Game.hasAura('Unholy Dominion')) mult*=1.1;
	//else if (me.wrath==0 && Game.hasAura('Ancestral Metamorphosis')) mult*=1.1;
	if (me.wrath>0) mult*=1+Game.auraMult('Unholy Dominion')*0.1;
	else if (me.wrath==0) mult*=1+Game.auraMult('Ancestral Metamorphosis')*0.1;
	if (Game.Has('Green yeast digestives')) mult*=1.01;
	if (!me.wrath) mult*=Game.eff('goldenCookieGain');
	else mult*=Game.eff('wrathCookieGain');
	
	var popup='';
	var buff=0;
	
	if (choice=='building special')
	{
		var time=Math.ceil(30*effectDurMod);
		var list=[];
		for (var i in Game.Objects)
		{
			if (Game.Objects[i].amount>=10) list.push(Game.Objects[i].id);
		}
		if (list.length==0) {choice='frenzy';}//default to frenzy if no proper building
		else
		{
			var obj=choose(list);
			var pow=Game.ObjectsById[obj].amount/10+1;
			if (me.wrath && Math.random()<0.3)
			{
				buff=Game.gainBuff('building debuff',time,pow,obj);
			}
			else
			{
				buff=Game.gainBuff('building buff',time,pow,obj);
			}
		}
	}
	
	if (choice=='free sugar lump')
	{
		Game.gainLumps(1);
		popup='Sweet!<div style="font-size:65%;">Found 1 sugar lump!</div>';
	}
	else if (choice=='frenzy')
	{
		buff=Game.gainBuff('frenzy',Math.ceil(77*effectDurMod),7);
	}
	else if (choice=='dragon harvest')
	{
		buff=Game.gainBuff('dragon harvest',Math.ceil(60*effectDurMod),15);
	}
	else if (choice=='everything must go')
	{
		buff=Game.gainBuff('everything must go',Math.ceil(8*effectDurMod),5);
	}
	else if (choice=='multiply cookies')
	{
		var moni=mult*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13;//add 15% to cookies owned (+13), or 15 minutes of cookie production - whichever is lowest
		Game.Earn(moni);
		popup='Lucky!<div style="font-size:65%;">+'+Beautify(moni)+' cookies!</div>';
	}
	else if (choice=='ruin cookies')
	{
		var moni=Math.min(Game.cookies*0.05,Game.cookiesPs*60*10)+13;//lose 5% of cookies owned (-13), or 10 minutes of cookie production - whichever is lowest
		moni=Math.min(Game.cookies,moni);
		Game.Spend(moni);
		popup='Ruin!<div style="font-size:65%;">Lost '+Beautify(moni)+' cookies!</div>';
	}
	else if (choice=='blood frenzy')
	{
		buff=Game.gainBuff('blood frenzy',Math.ceil(6*effectDurMod),666);
	}
	else if (choice=='clot')
	{
		buff=Game.gainBuff('clot',Math.ceil(66*effectDurMod),0.5);
	}
	else if (choice=='cursed finger')
	{
		buff=Game.gainBuff('cursed finger',Math.ceil(10*effectDurMod),Game.cookiesPs*Math.ceil(10*effectDurMod));
	}
	else if (choice=='click frenzy')
	{
		buff=Game.gainBuff('click frenzy',Math.ceil(13*effectDurMod),777);
	}
	else if (choice=='dragonflight')
	{
		buff=Game.gainBuff('dragonflight',Math.ceil(10*effectDurMod),1111);
		if (Math.random()<0.8) Game.killBuff('Click frenzy');
	}
	else if (choice=='chain cookie')
	{
		//fix by Icehawk78
		if (this.chain==0) this.totalFromChain=0;
		this.chain++;
		var digit=me.wrath?6:7;
		if (this.chain==1) this.chain+=Math.max(0,Math.ceil(Math.log(Game.cookies)/Math.LN10)-10);
		
		var maxPayout=Math.min(Game.cookiesPs*60*60*6,Game.cookies*0.5)*mult;
		var moni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,this.chain)*digit*mult),maxPayout));
		var nextMoni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,this.chain+1)*digit*mult),maxPayout));
		this.totalFromChain+=moni;
		var moniStr=Beautify(moni);

		//break the chain if we're above 5 digits AND it's more than 50% of our bank, it grants more than 6 hours of our CpS, or just a 1% chance each digit (update : removed digit limit)
		if (Math.random()<0.01 || nextMoni>=maxPayout)
		{
			this.chain=0;
			popup='Cookie chain<div style="font-size:65%;">+'+moniStr+' cookies!<br>Cookie chain over. You made '+Beautify(this.totalFromChain)+' cookies.</div>';
		}
		else
		{
			popup='Cookie chain<div style="font-size:65%;">+'+moniStr+' cookies!</div>';//
		}
		Game.Earn(moni);
	}
	else if (choice=='cookie storm')
	{
		buff=Game.gainBuff('cookie storm',Math.ceil(7*effectDurMod),7);
	}
	else if (choice=='cookie storm drop')
	{
		var moni=Math.max(mult*(Game.cookiesPs*60*Math.floor(Math.random()*7+1)),Math.floor(Math.random()*7+1));//either 1-7 cookies or 1-7 minutes of cookie production, whichever is highest
		Game.Earn(moni);
		popup='<div style="font-size:75%;">+'+Beautify(moni)+' cookies!</div>';
	}
	else if (choice=='blab')//sorry (it's really rare)
	{
		var str=choose([
		'Cookie crumbliness x3 for 60 seconds!',
		'Chocolatiness x7 for 77 seconds!',
		'Dough elasticity halved for 66 seconds!',
		'Golden cookie shininess doubled for 3 seconds!',
		'World economy halved for 30 seconds!',
		'Grandma kisses 23% stingier for 45 seconds!',
		'Thanks for clicking!',
		'Fooled you! This one was just a test.',
		'Golden cookies clicked +1!',
		'Your click has been registered. Thank you for your cooperation.',
		'Thanks! That hit the spot!',
		'Thank you. A team has been dispatched.',
		'They know.',
		'Oops. This was just a chocolate cookie with shiny aluminium foil.'
		]);
		popup=str;
	}
	
	if (popup=='' && buff && buff.name && buff.desc) popup=buff.name+'<div style="font-size:65%;">'+buff.desc+'</div>';
	if (popup!='') Game.Popup(popup,me.x+me.l.offsetWidth/2,me.y);
	
	Game.DropEgg(0.9);
	
	//sparkle and kill the shimmer
	Game.SparkleAt(me.x+48,me.y+48);
	if (choice=='cookie storm drop')
	{
		if (Game.prefs.cookiesound) PlaySound('snd/clickb'+Math.floor(Math.random()*7+1)+'.mp3',0.75);
		else PlaySound('snd/click'+Math.floor(Math.random()*7+1)+'.mp3',0.75);
	}
	else PlaySound('snd/shimmerClick.mp3');
	me.die();
}

Game.CalculateGains=function() {
	Game.cookiesPs=0;
	var mult=1;
	//add up effect bonuses from building minigames
	var effs={};
	for (var i in Game.Objects)
	{
		if (Game.Objects[i].minigameLoaded && Game.Objects[i].minigame.effs)
		{
			var myEffs=Game.Objects[i].minigame.effs;
			for (var ii in myEffs)
			{
				if (effs[ii]) effs[ii]*=myEffs[ii];
				else effs[ii]=myEffs[ii];
			}
		}
	}
	Game.effs=effs;
	
	if (Game.ascensionMode!=1) mult+=parseFloat(Game.prestige)*0.01*Game.heavenlyPower*Game.GetHeavenlyMultiplier();
	
	mult*=Game.eff('cps');
	
	if (Game.Has('Heralds') && Game.ascensionMode!=1) mult*=1+0.01*Game.heralds;
	
	var cookieMult=0;
	for (var i in Game.cookieUpgrades)
	{
		var me=Game.cookieUpgrades[i];
		if (Game.Has(me.name))
		{
			mult*=(1+(typeof(me.power)=='function'?me.power(me):me.power)*0.01);
		}
	}
	mult*=(1+0.01*cookieMult);
	
	if (Game.Has('Specialized chocolate chips')) mult*=1.01;
	if (Game.Has('Designer cocoa beans')) mult*=1.02;
	if (Game.Has('Underworld ovens')) mult*=1.03;
	if (Game.Has('Exotic nuts')) mult*=1.04;
	if (Game.Has('Arcane sugar')) mult*=1.05;
	
	if (Game.Has('Increased merriness')) mult*=1.15;
	if (Game.Has('Improved jolliness')) mult*=1.15;
	if (Game.Has('A lump of coal')) mult*=1.01;
	if (Game.Has('An itchy sweater')) mult*=1.01;
	if (Game.Has('Santa\'s dominion')) mult*=1.2;
	
	if (Game.Has('Fortune #100')) mult*=1.01;
	if (Game.Has('Fortune #101')) mult*=1.07;
	
	var buildMult=1;
	if (Game.hasGod)
	{
		var godLvl=Game.hasGod('asceticism');
		if (godLvl==1) mult*=1.15;
		else if (godLvl==2) mult*=1.1;
		else if (godLvl==3) mult*=1.05;
		
		var godLvl=Game.hasGod('ages');
		if (godLvl==1) mult*=1+0.15*Math.sin((Date.now()/1000/(60*60*3))*Math.PI*2);
		else if (godLvl==2) mult*=1+0.15*Math.sin((Date.now()/1000/(60*60*12))*Math.PI*2);
		else if (godLvl==3) mult*=1+0.15*Math.sin((Date.now()/1000/(60*60*24))*Math.PI*2);
		
		var godLvl=Game.hasGod('decadence');
		if (godLvl==1) buildMult*=0.93;
		else if (godLvl==2) buildMult*=0.95;
		else if (godLvl==3) buildMult*=0.98;
		
		var godLvl=Game.hasGod('industry');
		if (godLvl==1) buildMult*=1.1;
		else if (godLvl==2) buildMult*=1.06;
		else if (godLvl==3) buildMult*=1.03;
		
		var godLvl=Game.hasGod('labor');
		if (godLvl==1) buildMult*=0.97;
		else if (godLvl==2) buildMult*=0.98;
		else if (godLvl==3) buildMult*=0.99;
	}
	
	if (Game.Has('Santa\'s legacy')) mult*=1+(Game.santaLevel+1)*0.03;
	
	for (var i in Game.Objects)
	{
		var me=Game.Objects[i];
		me.storedCps=(typeof(me.cps)=='function'?me.cps(me):me.cps);
		if (Game.ascensionMode!=1) me.storedCps*=(1+me.level*0.01)*buildMult;
		me.storedTotalCps=me.amount*me.storedCps;
		Game.cookiesPs+=me.storedTotalCps;
		Game.cookiesPsByType[me.name]=me.storedTotalCps;
	}
	
	if (Game.Has('"egg"')) {Game.cookiesPs+=9;Game.cookiesPsByType['"egg"']=9;}//"egg"
	
	for (var i in Game.customCps) {mult*=Game.customCps[i]();}
	
	Game.milkProgress=Game.AchievementsOwned/25;
	var milkMult=1;
	if (Game.Has('Santa\'s milk and cookies')) milkMult*=1.05;
	//if (Game.hasAura('Breath of Milk')) milkMult*=1.05;
	milkMult*=1+Game.auraMult('Breath of Milk')*0.05;
	if (Game.hasGod)
	{
		var godLvl=Game.hasGod('mother');
		if (godLvl==1) milkMult*=1.1;
		else if (godLvl==2) milkMult*=1.05;
		else if (godLvl==3) milkMult*=1.03;
	}
	milkMult*=Game.eff('milk');
	
	var catMult=1;
	
	if (Game.Has('Kitten helpers')) catMult*=(1+Game.milkProgress*0.1*milkMult);
	if (Game.Has('Kitten workers')) catMult*=(1+Game.milkProgress*0.125*milkMult);
	if (Game.Has('Kitten engineers')) catMult*=(1+Game.milkProgress*0.15*milkMult);
	if (Game.Has('Kitten overseers')) catMult*=(1+Game.milkProgress*0.175*milkMult);
	if (Game.Has('Kitten managers')) catMult*=(1+Game.milkProgress*0.2*milkMult);
	if (Game.Has('Kitten accountants')) catMult*=(1+Game.milkProgress*0.2*milkMult);
	if (Game.Has('Kitten specialists')) catMult*=(1+Game.milkProgress*0.2*milkMult);
	if (Game.Has('Kitten experts')) catMult*=(1+Game.milkProgress*0.2*milkMult);
	if (Game.Has('Kitten consultants')) catMult*=(1+Game.milkProgress*0.2*milkMult);
	if (Game.Has('Kitten assistants to the regional manager')) catMult*=(1+Game.milkProgress*0.175*milkMult);
	if (Game.Has('Kitten marketeers')) catMult*=(1+Game.milkProgress*0.15*milkMult);
	if (Game.Has('Kitten analysts')) catMult*=(1+Game.milkProgress*0.125*milkMult);
	if (Game.Has('Kitten executives')) catMult*=(1+Game.milkProgress*0.115*milkMult);
	if (Game.Has('Kitten angels')) catMult*=(1+Game.milkProgress*0.1*milkMult);
	if (Game.Has('Fortune #103')) catMult*=(1+Game.milkProgress*0.05*milkMult);
	
	Game.cookiesMultByType['kittens']=catMult;
	mult*=catMult;
	
	var eggMult=1;
	if (Game.Has('Chicken egg')) eggMult*=1.01;
	if (Game.Has('Duck egg')) eggMult*=1.01;
	if (Game.Has('Turkey egg')) eggMult*=1.01;
	if (Game.Has('Quail egg')) eggMult*=1.01;
	if (Game.Has('Robin egg')) eggMult*=1.01;
	if (Game.Has('Ostrich egg')) eggMult*=1.01;
	if (Game.Has('Cassowary egg')) eggMult*=1.01;
	if (Game.Has('Salmon roe')) eggMult*=1.01;
	if (Game.Has('Frogspawn')) eggMult*=1.01;
	if (Game.Has('Shark egg')) eggMult*=1.01;
	if (Game.Has('Turtle egg')) eggMult*=1.01;
	if (Game.Has('Ant larva')) eggMult*=1.01;
	if (Game.Has('Century egg'))
	{
		//the boost increases a little every day, with diminishing returns up to +10% on the 100th day
		var day=Math.floor((Date.now()-Game.startDate)/1000/10)*10/60/60/24;
		day=Math.min(day,100);
		eggMult*=1+(1-Math.pow(1-day/100,3))*0.1;
	}
	
	Game.cookiesMultByType['eggs']=eggMult;
	mult*=eggMult;
	
	if (Game.Has('Sugar baking')) mult*=(1+Math.min(100,Game.lumps)*0.01);
	
	//if (Game.hasAura('Radiant Appetite')) mult*=2;
	mult*=1+Game.auraMult('Radiant Appetite');
	
	if (true)// || Game.hasAura('Dragon\'s Fortune'))
	{
		var n=Game.shimmerTypes['golden'].n;
		var auraMult=Game.auraMult('Dragon\'s Fortune');
		for (var i=0;i<n;i++){mult*=1+auraMult*1.23;}
		//old behavior
		/*var buffs=0;
		for (var i in Game.buffs)
		{buffs++;}
		mult*=1+(0.07)*buffs;*/
	}
	
	var rawCookiesPs=Game.cookiesPs*mult;
	for (var i in Game.CpsAchievements)
	{
		if (rawCookiesPs>=Game.CpsAchievements[i].threshold) Game.Win(Game.CpsAchievements[i].name);
	}
	
	name=Game.bakeryName.toLowerCase();
	if (name=='orteil') mult*=0.99;
	else if (name=='ortiel') mult*=0.98;//or so help me

	if (name == "opti") mult *= 0.99;
	if (name == "xalum") mult *= 0.98;
	
	var sucking=0;
	for (var i in Game.wrinklers)
	{
		if (Game.wrinklers[i].phase==2)
		{
			sucking++;
		}
	}
	var suckRate=1/20;//each wrinkler eats a twentieth of your CpS
	suckRate*=Game.eff('wrinklerEat');
	
	Game.cpsSucked=sucking*suckRate;
	
	
	if (Game.Has('Elder Covenant')) mult*=0.95;
	
	if (Game.Has('Golden switch [off]'))
	{
		var goldenSwitchMult=1.5;
		if (Game.Has('Residual luck'))
		{
			var upgrades=Game.goldenCookieUpgrades;
			for (var i in upgrades) {if (Game.Has(upgrades[i])) goldenSwitchMult+=0.1;}
		}
		mult*=goldenSwitchMult;
	}
	if (Game.Has('Shimmering veil [off]'))
	{
		var veilMult=0.5;
		if (Game.Has('Reinforced membrane')) veilMult+=0.1;
		mult*=1+veilMult;
	}
	if (Game.Has('Magic shenanigans')) mult*=1000;
	if (Game.Has('Occult obstruction')) mult*=0;
	
	for (var i in Game.customCpsMult) {mult*=Game.customCpsMult[i]();}
	
	
	//cps without golden cookie effects
	Game.unbuffedCps=Game.cookiesPs*mult;
	
	for (var i in Game.buffs)
	{
		if (typeof Game.buffs[i].multCpS != 'undefined') mult*=Game.buffs[i].multCpS;
	}
	
	Game.globalCpsMult=mult;
	Game.cookiesPs*=Game.globalCpsMult;
	
	//if (Game.hasBuff('Cursed finger')) Game.cookiesPs=0;
	
	Game.computedMouseCps=Game.mouseCps();
	
	Game.computeLumpTimes();
	
	Game.recalculateGains=0;
}

Game.UpdateMenu=function() {
	var str='';
	if (Game.onMenu!='')
	{
		str+='<div class="close menuClose" '+Game.clickStr+'="Game.ShowMenu();">x</div>';
		//str+='<div style="position:absolute;top:8px;right:8px;cursor:pointer;font-size:16px;" '+Game.clickStr+'="Game.ShowMenu();">X</div>';
	}
	if (Game.onMenu=='prefs')
	{
		str+='<div class="section">Options</div>'+
		'<div class="subsection">'+
		'<div class="title">General</div>'+
		'<div class="listing"><a class="option" '+Game.clickStr+'="Game.toSave=true;PlaySound(\'snd/tick.mp3\');">Save</a><label>Save manually (the game autosaves every 60 seconds; shortcut : ctrl+S)</label></div>'+
		'<div class="listing"><a class="option" '+Game.clickStr+'="Game.ExportSave();PlaySound(\'snd/tick.mp3\');">Export save</a><a class="option" '+Game.clickStr+'="Game.ImportSave();PlaySound(\'snd/tick.mp3\');">Import save</a><label>You can use this to backup your save or to transfer it to another computer (shortcut for import : ctrl+O)</label></div>'+
		'<div class="listing"><a class="option" '+Game.clickStr+'="Game.FileSave();PlaySound(\'snd/tick.mp3\');">Save to file</a><a class="option" style="position:relative;"><input id="FileLoadInput" type="file" style="cursor:pointer;opacity:0;position:absolute;left:0px;top:0px;width:100%;height:100%;" onchange="Game.FileLoad(event);" '+Game.clickStr+'="PlaySound(\'snd/tick.mp3\');"/>Load from file</a><label>Use this to keep backups on your computer</label></div>'+
		
		'<div class="listing"><a class="option warning" '+Game.clickStr+'="Game.HardReset();PlaySound(\'snd/tick.mp3\');">Wipe save</a><label>Delete all your progress, including your achievements</label></div>'+
		'<div class="title">Settings</div>'+
		'<div class="listing">'+
		Game.WriteSlider('volumeSlider','Volume','[$]%',function(){return Game.volume;},'Game.setVolume(Math.round(l(\'volumeSlider\').value));l(\'volumeSliderRightText\').innerHTML=Game.volume+\'%\';')+'<br>'+
		Game.WriteButton('fancy','fancyButton','Fancy graphics ON','Fancy graphics OFF','Game.ToggleFancy();')+'<label>(visual improvements; disabling may improve performance)</label><br>'+
		Game.WriteButton('filters','filtersButton','CSS filters ON','CSS filters OFF','Game.ToggleFilters();')+'<label>(cutting-edge visual improvements; disabling may improve performance)</label><br>'+
		Game.WriteButton('particles','particlesButton','Particles ON','Particles OFF')+'<label>(cookies falling down, etc; disabling may improve performance)</label><br>'+
		Game.WriteButton('numbers','numbersButton','Numbers ON','Numbers OFF')+'<label>(numbers that pop up when clicking the cookie)</label><br>'+
		Game.WriteButton('milk','milkButton','Milk ON','Milk OFF')+'<label>(only appears with enough achievements)</label><br>'+
		Game.WriteButton('cursors','cursorsButton','Cursors ON','Cursors OFF')+'<label>(visual display of your cursors)</label><br>'+
		Game.WriteButton('wobbly','wobblyButton','Wobbly cookie ON','Wobbly cookie OFF')+'<label>(your cookie will react when you click it)</label><br>'+
		Game.WriteButton('cookiesound','cookiesoundButton','Alt cookie sound ON','Alt cookie sound OFF')+'<label>(how your cookie sounds when you click on it)</label><br>'+
		Game.WriteButton('crates','cratesButton','Icon crates ON','Icon crates OFF')+'<label>(display boxes around upgrades and achievements in stats)</label><br>'+
		Game.WriteButton('monospace','monospaceButton','Alt font ON','Alt font OFF')+'<label>(your cookies are displayed using a monospace font)</label><br>'+
		Game.WriteButton('format','formatButton','Short numbers OFF','Short numbers ON','BeautifyAll();Game.RefreshStore();Game.upgradesToRebuild=1;',1)+'<label>(shorten big numbers)</label><br>'+
		Game.WriteButton('notifs','notifsButton','Fast notes ON','Fast notes OFF')+'<label>(notifications disappear much faster)</label><br>'+
		//Game.WriteButton('autoupdate','autoupdateButton','Offline mode OFF','Offline mode ON',0,1)+'<label>(disables update notifications)</label><br>'+
		Game.WriteButton('warn','warnButton','Closing warning ON','Closing warning OFF')+'<label>(the game will ask you to confirm when you close the window)</label><br>'+
		Game.WriteButton('focus','focusButton','Defocus OFF','Defocus ON',0,1)+'<label>(the game will be less resource-intensive when out of focus)</label><br>'+
		Game.WriteButton('extraButtons','extraButtonsButton','Extra buttons ON','Extra buttons OFF','Game.ToggleExtraButtons();')+'<label>(add Mute buttons on buildings)</label><br>'+
		Game.WriteButton('askLumps','askLumpsButton','Lump confirmation ON','Lump confirmation OFF')+'<label>(the game will ask you to confirm before spending sugar lumps)</label><br>'+
		Game.WriteButton('customGrandmas','customGrandmasButton','Custom grandmas ON','Custom grandmas OFF')+'<label>(some grandmas will be named after Patreon supporters)</label><br>'+
		Game.WriteButton('timeout','timeoutButton','Sleep mode timeout ON','Sleep mode timeout OFF')+'<label>(on slower computers, the game will put itself in sleep mode when it\'s inactive and starts to lag out; offline CpS production kicks in during sleep mode)</label><br>'+
		'</div>'+
		//'<div class="listing">'+Game.WriteButton('autosave','autosaveButton','Autosave ON','Autosave OFF')+'</div>'+
		'<div style="padding-bottom:128px;"></div>'+
		'</div>'
		;
	}
	else if (Game.onMenu=='main')
	{
		str+=
		'<div class="listing">This isn\'t really finished</div>'+
		'<div class="listing"><a class="option big title" '+Game.clickStr+'="Game.ShowMenu(\'prefs\');">Menu</a></div>'+
		'<div class="listing"><a class="option big title" '+Game.clickStr+'="Game.ShowMenu(\'stats\');">Stats</a></div>'+
		'<div class="listing"><a class="option big title" '+Game.clickStr+'="Game.ShowMenu(\'log\');">Updates</a></div>'+
		'<div class="listing"><a class="option big title" '+Game.clickStr+'="">Quit</a></div>'+
		'<div class="listing"><a class="option big title" '+Game.clickStr+'="Game.ShowMenu(Game.onMenu);">Resume</a></div>';
	}
	else if (Game.onMenu=='log')
	{
		str+=replaceAll('[bakeryName]',Game.bakeryName,Game.updateLog);
	}
	else if (Game.onMenu=='stats')
	{
		var buildingsOwned=0;
		buildingsOwned=Game.BuildingsOwned;
		var upgrades='';
		var cookieUpgrades='';
		var hiddenUpgrades='';
		var prestigeUpgrades='';
		var upgradesTotal=0;
		var upgradesOwned=0;
		var prestigeUpgradesTotal=0;
		var prestigeUpgradesOwned=0;
		
		var list=[];
		for (var i in Game.Upgrades)//sort the upgrades
		{
			list.push(Game.Upgrades[i]);
		}
		var sortMap=function(a,b)
		{
			if (a.order>b.order) return 1;
			else if (a.order<b.order) return -1;
			else return 0;
		}
		list.sort(sortMap);
		for (var i in list)
		{
			var str2='';
			var me=list[i];
			
			str2+=Game.crate(me,'stats');
			
			if (me.bought)
			{
				if (Game.CountsAsUpgradeOwned(me.pool)) upgradesOwned++;
				else if (me.pool=='prestige') prestigeUpgradesOwned++;
			}
			
			if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') upgradesTotal++;
			if (me.pool=='debug') hiddenUpgrades+=str2;
			else if (me.pool=='prestige') {prestigeUpgrades+=str2;prestigeUpgradesTotal++;}
			else if (me.pool=='cookie') cookieUpgrades+=str2;
			else if (me.pool!='toggle' && me.pool!='unused') upgrades+=str2;
		}
		var achievements=[];
		var achievementsOwned=0;
		var achievementsOwnedOther=0;
		var achievementsOwnedCustom=0;
		var achievementsTotal=0;
		var achievementsTotalCustom=0;
		
		var list=[];
		for (var i in Game.Achievements)//sort the achievements
		{
			list.push(Game.Achievements[i]);
		}
		var sortMap=function(a,b)
		{
			if (a.order>b.order) return 1;
			else if (a.order<b.order) return -1;
			else return 0;
		}
		list.sort(sortMap);

		for (var i in list)
		{
			var me=list[i];
			//if (me.pool=='normal' || me.won>0) achievementsTotal++;
			if (Game.CountsAsAchievementOwned(me.pool)) achievementsTotal++;
			var pool=me.pool;
			if (!achievements[pool]) achievements[pool]='';
			achievements[pool]+=Game.crate(me,'stats');
			
			if (me.pool == "custom") achievementsTotalCustom++;

			if (me.won)
			{
				if (Game.CountsAsAchievementOwned(me.pool)) achievementsOwned++;
				else {
					if (me.pool == "custom") achievementsOwnedCustom++;
					else achievementsOwnedOther++;
				}
			}
		}
		
		var achievementsStr='';
		var pools={
			'dungeon':'<b>Dungeon achievements</b> <small>(Not technically achievable yet.)</small>',
			"custom":"<b>Custom achievements</b> <small>(These achievements are added via a mod, whilst not unfair or difficult to attain they do not give milk to retain game balance.)</small>",
			'shadow':'<b>Shadow achievements</b> <small>(These are feats that are either unfair or difficult to attain. They do not give milk.)</small>'
		};
		for (var i in achievements)
		{
			if (achievements[i]!='')
			{
				if (pools[i]) achievementsStr+='<div class="listing">'+pools[i]+'</div>';
				achievementsStr+='<div class="listing crateBox">'+achievements[i]+'</div>';
			}
		}
		
		var milkStr='';
		for (var i=0;i<Game.Milks.length;i++)
		{
			if (Game.milkProgress>=i)
			{
				var milk=Game.Milks[i];
				milkStr+='<div '+Game.getTooltip(
				'<div class="prompt" style="text-align:center;padding-bottom:6px;white-space:nowrap;margin:0px;padding-bottom:96px;"><h3 style="margin:6px 32px 0px 32px;">'+milk.name+'</h3><div style="opacity:0.75;font-size:9px;">('+(i==0?'starter milk':('for '+Beautify(i*25)+' achievements'))+')</div><div class="line"></div><div style="width:100%;height:96px;position:absolute;left:0px;bottom:0px;background:url(img/'+milk.pic+'.png);"></div></div>'
				,'top')+' style="background:url(img/icons.png) '+(-milk.icon[0]*48)+'px '+(-milk.icon[1]*48)+'px;margin:2px 0px;" class="trophy"></div>';
			}
		}
		milkStr+='<div style="clear:both;"></div>';
		
		var santaStr='';
		var frames=15;
		if (Game.Has('A festive hat'))
		{
			for (var i=0;i<=Game.santaLevel;i++)
			{
				santaStr+='<div '+Game.getTooltip(
				'<div class="prompt" style="text-align:center;padding-bottom:6px;white-space:nowrap;margin:0px 32px;"><div style="width:96px;height:96px;margin:4px auto;background:url(img/santa.png) '+(-i*96)+'px 0px;filter:drop-shadow(0px 3px 2px #000);-webkit-filter:drop-shadow(0px 3px 2px #000);"></div><div class="line"></div><h3>'+Game.santaLevels[i]+'</h3></div>'
				,'top')+' style="background:url(img/santa.png) '+(-i*48)+'px 0px;background-size:'+(frames*48)+'px 48px;" class="trophy"></div>';
			}
			santaStr+='<div style="clear:both;"></div>';
		}
		var dragonStr='';
		var frames=9;
		var mainLevels=[0,4,8,22,23,24];
		if (Game.Has('A crumbly egg'))
		{
			for (var i=0;i<=mainLevels.length;i++)
			{
				if (Game.dragonLevel>=mainLevels[i])
				{
					var level=Game.dragonLevels[mainLevels[i]];
					dragonStr+='<div '+Game.getTooltip(
					//'<div style="width:96px;height:96px;margin:4px auto;background:url(img/dragon.png?v='+Game.version+') '+(-level.pic*96)+'px 0px;"></div><div class="line"></div><div style="min-width:200px;text-align:center;margin-bottom:6px;">'+level.name+'</div>'
					'<div class="prompt" style="text-align:center;padding-bottom:6px;white-space:nowrap;margin:0px 32px;"><div style="width:96px;height:96px;margin:4px auto;background:url(img/dragon.png?v='+Game.version+') '+(-level.pic*96)+'px 0px;filter:drop-shadow(0px 3px 2px #000);-webkit-filter:drop-shadow(0px 3px 2px #000);"></div><div class="line"></div><h3>'+level.name+'</h3></div>'
					,'top')+' style="background:url(img/dragon.png?v='+Game.version+') '+(-level.pic*48)+'px 0px;background-size:'+(frames*48)+'px 48px;" class="trophy"></div>';
				}
			}
			dragonStr+='<div style="clear:both;"></div>';
		}
		var ascensionModeStr='';
		var icon=Game.ascensionModes[Game.ascensionMode].icon;
		if (Game.resets>0) ascensionModeStr='<span style="cursor:pointer;" '+Game.getTooltip(
					'<div style="min-width:200px;text-align:center;font-size:11px;">'+Game.ascensionModes[Game.ascensionMode].desc+'</div>'
					,'top')+'><div class="icon" style="display:inline-block;float:none;transform:scale(0.5);margin:-24px -16px -19px -8px;'+(icon[2]?'background-image:url('+icon[2]+');':'')+'background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px;"></div>'+Game.ascensionModes[Game.ascensionMode].name+'</span>';
		
		var milkName=Game.Milk.name;
		
		var researchStr=Game.sayTime(Game.researchT,-1);
		var pledgeStr=Game.sayTime(Game.pledgeT,-1);
		var wrathStr='';
		if (Game.elderWrath==1) wrathStr='awoken';
		else if (Game.elderWrath==2) wrathStr='displeased';
		else if (Game.elderWrath==3) wrathStr='angered';
		else if (Game.elderWrath==0 && Game.pledges>0) wrathStr='appeased';
		
		var date=new Date();
		date.setTime(Date.now()-Game.startDate);
		var timeInSeconds=date.getTime()/1000;
		var startDate=Game.sayTime(timeInSeconds*Game.fps,-1);
		date.setTime(Date.now()-Game.fullDate);
		var fullDate=Game.sayTime(date.getTime()/1000*Game.fps,-1);
		if (!Game.fullDate || !fullDate || fullDate.length<1) fullDate='a long while';
		/*date.setTime(new Date().getTime()-Game.lastDate);
		var lastDate=Game.sayTime(date.getTime()/1000*Game.fps,2);*/
		
		var heavenlyMult=Game.GetHeavenlyMultiplier();
		
		var seasonStr=Game.sayTime(Game.seasonT,-1);
		
		str+='<div class="section">Statistics</div>'+
		'<div class="subsection">'+
		'<div class="title">General</div>'+
		'<div class="listing"><b>Cookies in bank :</b> <div class="price plain">'+Game.tinyCookie()+Beautify(Game.cookies)+'</div></div>'+
		'<div class="listing"><b>Cookies baked (this ascension) :</b> <div class="price plain">'+Game.tinyCookie()+Beautify(Game.cookiesEarned)+'</div></div>'+
		'<div class="listing"><b>Cookies baked (all time) :</b> <div class="price plain">'+Game.tinyCookie()+Beautify(Game.cookiesEarned+Game.cookiesReset)+'</div></div>'+
		(Game.cookiesReset>0?'<div class="listing"><b>Cookies forfeited by ascending :</b> <div class="price plain">'+Game.tinyCookie()+Beautify(Game.cookiesReset)+'</div></div>':'')+
		(Game.resets?('<div class="listing"><b>Legacy started :</b> '+(fullDate==''?'just now':(fullDate+' ago'))+', with '+Beautify(Game.resets)+' ascension'+(Game.resets==1?'':'s')+'</div>'):'')+
		'<div class="listing"><b>Run started :</b> '+(startDate==''?'just now':(startDate+' ago'))+'</div>'+
		'<div class="listing"><b>Buildings owned :</b> '+Beautify(buildingsOwned)+'</div>'+
		'<div class="listing"><b>Cookies per second :</b> '+Beautify(Game.cookiesPs,1)+' <small>'+
			'(multiplier : '+Beautify(Math.round(Game.globalCpsMult*100),1)+'%)'+
			(Game.cpsSucked>0?' <span class="warning">(withered : '+Beautify(Math.round(Game.cpsSucked*100),1)+'%)</span>':'')+
			'</small></div>'+
		'<div class="listing"><b>Cookies per click :</b> '+Beautify(Game.computedMouseCps,1)+'</div>'+
		'<div class="listing"><b>Cookie clicks :</b> '+Beautify(Game.cookieClicks)+'</div>'+
		'<div class="listing"><b>Hand-made cookies :</b> '+Beautify(Game.handmadeCookies)+'</div>'+
		'<div class="listing"><b>Golden cookie clicks :</b> '+Beautify(Game.goldenClicksLocal)+' <small>(all time : '+Beautify(Game.goldenClicks)+')</small></div>'+//' <span class="hidden">(<b>Missed golden cookies :</b> '+Beautify(Game.missedGoldenClicks)+')</span></div>'+
		'<br><div class="listing"><b>Running version :</b> '+Game.version+'</div>'+
		
		((researchStr!='' || wrathStr!='' || pledgeStr!='' || santaStr!='' || dragonStr!='' || Game.season!='' || ascensionModeStr!='' || Game.canLumps())?(
		'</div><div class="subsection">'+
		'<div class="title">Special</div>'+
		(ascensionModeStr!=''?'<div class="listing"><b>Challenge mode :</b>'+ascensionModeStr+'</div>':'')+
		(Game.season!=''?'<div class="listing"><b>Seasonal event :</b> '+Game.seasons[Game.season].name+
			(seasonStr!=''?' <small>('+seasonStr+' remaining)</small>':'')+
		'</div>':'')+
		(Game.season=='fools'?
			'<div class="listing"><b>Money made from selling cookies :</b> $'+Beautify(Game.cookiesEarned*0.08,2)+'</div>'+
			(Game.Objects['Portal'].amount>0?'<div class="listing"><b>TV show seasons produced :</b> '+Beautify(Math.floor((timeInSeconds/60/60)*(Game.Objects['Portal'].amount*0.13)+1))+'</div>':'')
		:'')+
		(researchStr!=''?'<div class="listing"><b>Research :</b> '+researchStr+' remaining</div>':'')+
		(wrathStr!=''?'<div class="listing"><b>Grandmatriarchs status :</b> '+wrathStr+'</div>':'')+
		(pledgeStr!=''?'<div class="listing"><b>Pledge :</b> '+pledgeStr+' remaining</div>':'')+
		(Game.wrinklersPopped>0?'<div class="listing"><b>Wrinklers popped :</b> '+Beautify(Game.wrinklersPopped)+'</div>':'')+
		((Game.canLumps() && Game.lumpsTotal>-1)?'<div class="listing"><b>Sugar lumps harvested :</b> <div class="price lump plain">'+Beautify(Game.lumpsTotal)+'</div></div>':'')+
		//(Game.cookiesSucked>0?'<div class="listing warning"><b>Withered :</b> '+Beautify(Game.cookiesSucked)+' cookies</div>':'')+
		(Game.reindeerClicked>0?'<div class="listing"><b>Reindeer found :</b> '+Beautify(Game.reindeerClicked)+'</div>':'')+
		(santaStr!=''?'<div class="listing"><b>Santa stages unlocked :</b></div><div>'+santaStr+'</div>':'')+
		(dragonStr!=''?'<div class="listing"><b>Dragon training :</b></div><div>'+dragonStr+'</div>':'')+
		''
		):'')+
		((Game.prestige>0 || prestigeUpgrades!='')?(
		'</div><div class="subsection">'+
		'<div class="title">Prestige</div>'+
		'<div class="listing"><div class="icon" style="float:left;background-position:'+(-19*48)+'px '+(-7*48)+'px;"></div>'+
			'<div style="margin-top:8px;"><span class="title" style="font-size:22px;">Prestige level : '+Beautify(Game.prestige)+'</span> at '+Beautify(heavenlyMult*100,1)+'% of its potential <b>(+'+Beautify(parseFloat(Game.prestige)*Game.heavenlyPower*heavenlyMult,1)+'% CpS)</b><br>Heavenly chips : <b>'+Beautify(Game.heavenlyChips)+'</b></div>'+
		'</div>'+
		(prestigeUpgrades!=''?(
		'<div class="listing" style="clear:left;"><b>Prestige upgrades unlocked :</b> '+prestigeUpgradesOwned+'/'+prestigeUpgradesTotal+' ('+Math.floor((prestigeUpgradesOwned/prestigeUpgradesTotal)*100)+'%)</div>'+
		'<div class="listing crateBox">'+prestigeUpgrades+'</div>'):'')+
		''):'')+

		'</div><div class="subsection">'+
		'<div class="title">Upgrades</div>'+
		(hiddenUpgrades!=''?('<div class="listing"><b>Debug</b></div>'+
		'<div class="listing crateBox">'+hiddenUpgrades+'</div>'):'')+
		'<div class="listing"><b>Upgrades unlocked :</b> '+upgradesOwned+'/'+upgradesTotal+' ('+Math.floor((upgradesOwned/upgradesTotal)*100)+'%)</div>'+
		'<div class="listing crateBox">'+upgrades+'</div>'+
		(cookieUpgrades!=''?('<div class="listing"><b>Cookies</b></div>'+
		'<div class="listing crateBox">'+cookieUpgrades+'</div>'):'')+
		'</div><div class="subsection">'+
		'<div class="title">Achievements</div>'+
		'<div class="listing"><b>Achievements unlocked :</b> '+achievementsOwned+'/'+achievementsTotal+' ('+Math.floor((achievementsOwned/achievementsTotal)*100)+'%)'+(achievementsOwnedOther>0?('<span style="font-weight:bold;font-size:10px;color:#70a;"> (+'+achievementsOwnedOther+')</span>'):'')+'</div>'+
		'<div class="listing"><b>Custom achievements unlocked :</b> '+achievementsOwnedCustom+'/'+achievementsTotalCustom+' ('+Math.floor((achievementsOwnedCustom/achievementsTotalCustom)*100)+'%)</div>'+
		(Game.cookiesMultByType['kittens']>1?('<div class="listing"><b>Kitten multiplier :</b> '+Beautify((Game.cookiesMultByType['kittens'])*100)+'%</div>'):'')+
		'<div class="listing"><b>Milk :</b> '+milkName+'</div>'+
		(milkStr!=''?'<div class="listing"><b>Milk flavors unlocked :</b></div><div>'+milkStr+'</div>':'')+
		'<div class="listing"><small style="opacity:0.75;">(Milk is gained with each achievement. It can unlock unique upgrades over time.)</small></div>'+
		achievementsStr+
		'</div>'+
		'<div style="padding-bottom:128px;"></div>'
		;
	}
	//str='<div id="selectionKeeper" class="selectable">'+str+'</div>';
	l('menu').innerHTML=str;
	/*AddEvent(l('selectionKeeper'),'mouseup',function(e){
		console.log('selection:',window.getSelection());
	});*/
}

Game.crate=function(me,context,forceClickStr,id) {
	//produce a crate with associated tooltip for an upgrade or achievement
	//me is an object representing the upgrade or achievement
	//context can be "store", "ascend", "stats" or undefined
	//forceClickStr changes what is done when the crate is clicked
	//id is the resulting div's desired id
	
	var classes='crate';
	var enabled=0;
	var noFrame=0;
	var attachment='top';
	var neuromancy=0;
	if (context=='stats' && (Game.Has('Neuromancy') || (Game.sesame && me.pool=='debug'))) neuromancy=1;
	var mysterious=0;
	var clickStr='';
	
	if (me.type=='upgrade')
	{
		var canBuy=(context=='store'?me.canBuy():true);
		if (context=='stats' && me.bought==0 && !Game.Has('Neuromancy') && (!Game.sesame || me.pool!='debug')) return '';
		else if (context=='stats' && (Game.Has('Neuromancy') || (Game.sesame && me.pool=='debug'))) neuromancy=1;
		else if (context=='store' && !canBuy) enabled=0;
		else if (context=='ascend' && me.bought==0) enabled=0;
		else enabled=1;
		if (me.bought>0) enabled=1;
		
		if (context=='stats' && !Game.prefs.crates) noFrame=1;
		
		classes+=' upgrade';
		if (me.pool=='prestige') classes+=' heavenly';
		
		
		if (neuromancy) clickStr='Game.UpgradesById['+me.id+'].toggle();';
	}
	else if (me.type=='achievement')
	{
		if (context=='stats' && me.won==0 && me.pool!='normal' && me.pool!="custom") return '';
		else if (context!='stats') enabled=1;
		
		if (context=='stats' && !Game.prefs.crates) noFrame=1;
		
		classes+=' achievement';
		if (me.pool=='shadow') classes+=' shadow';
		if (me.won>0) enabled=1;
		else mysterious=1;
		if (!enabled) clickStr='Game.AchievementsById['+me.id+'].click();';
		
		if (neuromancy) clickStr='Game.AchievementsById['+me.id+'].toggle();';
	}
	
	if (context=='store') attachment='store';
	
	if (forceClickStr) clickStr=forceClickStr;
	
	if (me.choicesFunction) classes+=' selector';
	
	
	var icon=me.icon;
	if (mysterious) icon=[0,7];
	
	if (me.iconFunction) icon=me.iconFunction();
	
	if (me.bought && context=='store') enabled=0;
	
	if (enabled) classes+=' enabled';// else classes+=' disabled';
	if (noFrame) classes+=' noFrame';
	
	var text=[];
	if (Game.sesame)
	{
		if (Game.debuggedUpgradeCpS[me.name] || Game.debuggedUpgradeCpClick[me.name])
		{
			text.push('x'+Beautify(1+Game.debuggedUpgradeCpS[me.name],2));text.push(Game.debugColors[Math.floor(Math.max(0,Math.min(Game.debugColors.length-1,Math.pow(Game.debuggedUpgradeCpS[me.name]/2,0.5)*Game.debugColors.length)))]);
			text.push('x'+Beautify(1+Game.debuggedUpgradeCpClick[me.name],2));text.push(Game.debugColors[Math.floor(Math.max(0,Math.min(Game.debugColors.length-1,Math.pow(Game.debuggedUpgradeCpClick[me.name]/2,0.5)*Game.debugColors.length)))]);
		}
		if (Game.extraInfo) {text.push(Math.floor(me.order)+(me.power?'<br>P:'+me.power:''));text.push('#fff');}
	}
	var textStr='';
	for (var i=0;i<text.length;i+=2)
	{
		textStr+='<div style="opacity:0.9;z-index:1000;padding:0px 2px;background:'+text[i+1]+';color:#000;font-size:10px;position:absolute;top:'+(i/2*10)+'px;left:0px;">'+text[i]+'</div>';
	}
	
	return '<div'+
	(clickStr!=''?(' '+Game.clickStr+'="'+clickStr+'"'):'')+
	' class="'+classes+'" '+
	Game.getDynamicTooltip(
		'function(){return Game.crateTooltip(Game.'+(me.type=='upgrade'?'Upgrades':'Achievements')+'ById['+me.id+'],'+(context?'\''+context+'\'':'')+');}',
		attachment,true
	)+
	(id?'id="'+id+'" ':'')+
	'style="'+(mysterious?
		'background-position:'+(-0*48)+'px '+(-7*48)+'px':
		(icon[2]?'background-image:url('+icon[2]+');':'')+'background-position:'+(-icon[0]*48)+'px '+(-icon[1]*48)+'px')+';'+
		((context=='ascend' && me.pool=='prestige')?'position:absolute;left:'+me.posX+'px;top:'+me.posY+'px;':'')+
	'">'+
	textStr+
	(me.choicesFunction?'<div class="selectorCorner"></div>':'')+
	'</div>';
}

Game.OldNotif = Game.Notify
Game.Notify = function(title, desc, pic, quick, noLog) {
	var val = Game.OldNotif(title, desc, pic, quick, noLog);
	if (title.substring(0, 7) == "Fortune") {
		Game.FortuneClicks ++;
		XalumSave.FortuneClicks ++;
	}
	return val;
}

Game.BackupNewTicker = Game.getNewTicker
Game.getNewTicker = function(manual) {
	if (!manual && Game.TickerEffect && Game.TickerEffect.type == "fortune") {
		Game.MissedFortunes++; 
		XalumSave.MissedFortunes++; 
		Game.Win("Unfortunate");
	}
	return Game.BackupNewTicker(manual)
}


var SavePrefix = "XalumPackage"
var XalumPermaSave = {}

XalumSaveConfig = function() {
	localStorage.setItem(SavePrefix, JSON.stringify(XalumPermaSave));
}

XalumSaveDefault = function() {
	XalumPermaSave = {}
	XalumPermaSave.achievements = {}
    for (var i in Game.XalAchievements) {
        XalumPermaSave.achievements[Game.XalAchievements[i].name] = 0;
    }
    if (!Game.experiencedSeasons) {
    	Game.experiencedSeasons = {
    		christmas: false,
    		halloween: false,
    		valentines: false,
    		easter: false,
    		fools: false,
    	}
    }
    if (!Game.wrathClicks) Game.wrathClicks = 0;
    if (!Game.FortuneClicks) Game.FortuneClicks = 0;
    if (!Game.MissedFortunes) Game.MissedFortunes = 0;

    XalumSaveConfig();
}

XalumLoadConfig = function() {
    if (localStorage.getItem(SavePrefix) != null) {
        XalumSave = JSON.parse(localStorage.getItem(SavePrefix));
        XalumPermaSave = JSON.parse(localStorage.getItem(SavePrefix));
        for (var i in Game.Achievements) {
        	if (Game.Achievements[i].xalum == 1) {
	            var me = Game.Achievements[i];
	            if (typeof XalumSave.achievements[me.name] === 'undefined') {
	                XalumSave.achievements[me.name] = 0;
	                XalumSaveConfig();
	            } else if (XalumSave.achievements[me.name] == 1) {
	                Game.SilentWin(me.name);
	            }
	        }
        }
        if (!XalumSave.experiencedSeasons) {
        	XalumSave.experiencedSeasons = {
	    		christmas: false,
	    		halloween: false,
	    		valentines: false,
	    		easter: false,
	    		fools: false,
	    	}
        }
        if (!XalumSave.wrathClicks) XalumSave.wrathClicks = 0;
        if (!XalumSave.FortuneClicks) XalumSave.FortuneClicks = 0;
        if (!XalumSave.MissedFortunes) XalumSave.MissedFortunes = 0;

        Game.experiencedSeasons = XalumSave.experiencedSeasons;
        Game.wrathClicks = XalumSave.wrathClicks;
        Game.FortuneClicks = XalumSave.FortuneClicks;
        Game.MissedFortunes = XalumSave.MissedFortunes;
    }
    else {
        XalumSaveDefault();
    }
}
 
Game.BackupHardReset = Game.HardReset;
Game.HardReset = function(bypass) {
	if (bypass == 2) {
        XalumSaveDefault();
    }
    Game.BackupHardReset(bypass);
}

Game.BackupWriteSave = Game.WriteSave;
Game.WriteSave = function(type) {
	XalumPermaSave = Object.assign(Object.create(Object.getPrototypeOf(XalumSave)), XalumSave);
	Game.BackupWriteSave(type);
}

XalumLoadConfig();

Game.Win('Third-party');