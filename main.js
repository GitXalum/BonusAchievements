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


new Game.AddAchievement('Stomachache', 'Burst a wrinkler containing <b></b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Dyspepsia', 'Burst a wrinkler containing <b>1000000000000000000000</b> cookies.', [0, 0, icons]);
new Game.AddAchievement('Hemorrhage', 'Burst a wrinkler containing <b>1000000000000000000000000000000</b> cookies.', [0, 0, icons]);

new Game.AddAchievement("Heavenly beginnings", "Obtain a heavenly chip.<q>Impressive.</q>", [2, 0, icons]);
new Game.AddAchievement("Heavenly bakery", "Obtain <b>1000000</b> total heavenly chips.<q>Amazing.</q>", [19, 7]);
new Game.AddAchievement("Heavenly empire", "Obtain <b>1000000000</b> total heavenly chips.<q>Incredible.</q>", [20, 7]);
new Game.AddAchievement("Heavenly legacy", "Obtain <b>1000000000000</b> total heavenly chips.<q>Magnifique.</q>", [28, 12]);

new Game.AddAchievement("Hattrick", "Have <b>3</b> buffs active simultaneously.", [22, 6]);
new Game.AddAchievement("Dichotomy", "Have both a golden cookie, and wrath cookie present on screen <b>simultaneously</b>.<q>Perfectly balanced, as all things should be.</q>", [1, 0, icons]);
new Game.AddAchievement("Crumbling fortune", "Miss <b>77</b> golden cookies.", [3, 0, icons]);

new Game.AddAchievement("Master of the elements", "Experience every season in one ascension.", [16, 6]);


new Game.AddAchievement('Ironman mode', 'Get to <b>1000000000000000</b> cookies baked with <b>no upgrades purchased</b>.<q>Was it worth it?</q>', [0, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Decacentennial", "Have at least <b>1000 of everything</b>.<q>You had to go and do it didn't you, people like you really have issues.</q>", [1, 1, icons]); Game.last.pool = "shadow";
new Game.AddAchievement("Modded god complex", "Name yourself <b>Xalum</b>.<div class='warning'>Note : modded usurpers incur a -2% CpS penalty until they rename themselves something else.</div><q>Come on now that\'s still not you, is it?</q>", [2, 1, icons]); Game.last.pool = "shadow";
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
Game.Achievements["Crumbling fortune"].order = 10000.271;

Game.Achievements["Master of the elements"].order = 22400.170;


Game.Achievements['Ironman mode'].order = 30200.08;
Game.Achievements["Decacentennial"].order = 32207.1;
Game.Achievements["Modded god complex"].order = 30200.1592;
Game.Achievements["Opti complex"].order = 30200.1591;
Game.Achievements["Tragedy comes in trees"].order = 33000.105;
Game.Achievements["Excellent bakery"].order = 36000.368;

Game.XalAchievements = {};
for (var i in Game.Achievements) {
	if (Game.Achievements[i].xalum == 1) {
		Game.XalAchievements[Object.size(Game.XalAchievements)] = Game.Achievements[i]
	}
}

Game.customChecks = [
	function() { // Gathering Data
		Game.minimumBuildingAmount = 'undefined';
		for (var i in Game.Objects) {
			var me = Game.Objects[i]
			if (Game.minimumBuildingAmount == 'undefined' || Game.minimumBuildingAmount > me.amount) Game.minimumBuildingAmount = me.amount;
		}

		if (Game.experiencedSeasons != nil) {
			if (Game.season != "" && !Game.experiencedSeasons[Game.season]) Game.experiencedSeasons[Game.season] = true; 
		} else {
			Game.experiencedSeasons = {
	    		christmas: false,
	    		halloween: false,
	    		valentines: false,
	    		easter: false,
	    		fools: false,
    		}
		}

		if (Game.experiencedSeasons.christmas && Game.experiencedSeasons.halloween && Game.experiencedSeasons.valentines && Game.experiencedSeasons.easter && Game.experiencedSeasons.fools) Game.experiencedAllSeasons = true;
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

		if (Game.missedGoldenClicks >= 77) Game.Win("Crumbling fortune")

		if (Game.experiencedAllSeasons) Game.Win("Master of the elements");


		if ((Game.ascensionMode==1 || Game.resets==0) && Game.cookiesEarned >= quad && Game.UpgradesOwned == 0) Game.Win("Ironman Mode");
		if (Game.bakeryName.toLowerCase() == "xalum") Game.Win("Modded god complex");
		if (Game.bakeryName.toLowerCase() == "opti") Game.Win("Opti complex");
		if (Game.Objects["Farm"].minigame.convertTimes >= 3) Game.Win("Tragedy comes in trees");
		if (Game.unbuffedCps >= tril && Game.cookiesEarned >= 60*60*24*30*Game.unbuffedCps) Game.Win("Excellent bakery");
		if (Game.minimumBuildingAmount >= thou) Game.Win("Decacentennial")
	},
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
	if (Game.hasAura('Breath of Milk')) milkMult*=1.05;
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
	if (Game.Has('Kitten angels')) catMult*=(1+Game.milkProgress*0.1*milkMult);
	
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
	
	if (Game.hasAura('Radiant Appetite')) mult*=2;
	
	if (Game.hasAura('Dragon\'s Fortune'))
	{
		var n=Game.shimmerTypes['golden'].n;
		for (var i=0;i<n;i++){mult*=2.23;}
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

//Borrowing some code from the Darky Achievements Package to save data, massive props to the writer of these functions
//Names will be changed in the hope that our projects will be compatible

var SavePrefix = "XalumPackage"

XalumSaveConfig = function() {
	XalumSave.experiencedSeasons = Game.experiencedSeasons
	localStorage.setItem(SavePrefix, JSON.stringify(XalumSave));
}

XalumSaveDefault = function() {
	XalumSave = {}
    for (var i in Game.XalAchievements) {
        XalumSave[Game.XalAchievements[i].name] = 0;
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
        Game.experiencedSeasons = XalumSave.experiencedSeasons
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