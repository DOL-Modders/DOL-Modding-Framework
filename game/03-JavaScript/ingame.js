window.hairdressers = function(type, value){
	switch(type){
		case 1:
			SugarCube.State.variables.money -= 3000;
			SugarCube.State.variables.hairlength = (100 * value);
			SugarCube.State.variables.phase = 1;
			new Wikifier(null, '<<pass 20>>');
			break;
		case 2:
			SugarCube.State.variables.money -= 3000;
			SugarCube.State.variables.fringelength = (200 * value);
			SugarCube.State.variables.phase = 1;
			new Wikifier(null, '<<pass 20>>');
			break;
		case 3:
			SugarCube.State.variables.money -= 6000;
			SugarCube.State.variables.haircolour = SugarCube.State.variables.hairdressersHairColour[value];
			SugarCube.State.variables.phase = 3;
			new Wikifier(null, '<<pass 30>>');
			break;
	}
	SugarCube.State.display(SugarCube.State.variables.passage);
}

window.mapMove = function(moveTo){
	var currentPassage = SugarCube.State.variables.passage;
	var destination_table = [];
	for(var i=1; i < SugarCube.State.variables.link_table.length; i++) {
		var temp = SugarCube.State.variables.link_table[i].split("|")[1];
		if(temp) {
			destination_table[destination_table.length] = temp.split("]]")[0];
		}
	}
	var avaliable = SugarCube.State.variables.map.avaliable;

	if(SugarCube.State.variables.debug == 1 || avaliable[currentPassage].includes(moveTo) && destination_table.includes(moveTo))
	//if(SugarCube.State.variables.debug == 1 || avaliable[currentPassage].includes(moveTo))
	{
		new Wikifier(null, '<<pass 5>>');
		SugarCube.State.display(moveTo);
	}
}

window.wikifier = function(widget, arg1, arg2, arg3){
	if(arg3 !== undefined){
		new Wikifier(null, '<<'+widget+' '+ arg1 +' '+ arg2 +' '+ arg3 +'>>');
	}
	else if(arg2 !== undefined){
		new Wikifier(null, '<<'+widget+' '+ arg1 +' '+ arg2 +'>>');
	}
	else if(arg1 !== undefined){
		new Wikifier(null, '<<'+widget+' '+ arg1 +'>>');
	}
	else if(arg1 === undefined){
		new Wikifier(null, '<<'+widget+'>>');
	}
}

window.wikifier2 = function(str){
	new Wikifier(null, str);
}

window.combatListColor = function(name, value, type){
	var color = "";
	var check = "";
	if(value != undefined){
		check = value;
	}else{
		check = SugarCube.State.variables[name];
	}
	if(type === ""){
		switch(check) {
			/*leftaction or rightaction*/
			case "steal": case "penwhack": case "leftcovervagina": case "leftcoverpenis": case "leftcoveranus": case "rightcovervagina":
			case "rightcoverpenis": case "rightcoveranus":
			/*mouthaction*/
			case "pullaway": case "pullawayvagina": case "finish": case "novaginal": case "nopenile": case "noanal": case "scream":
			case "mock": case "breastclosed": case "breastpull": case "pullawaykiss":
			/*penisaction*/
			case "othermouthescape": case "escape": case "otheranusescape":
				color = "brat";
			break;
			
			/*leftaction or rightaction*/
			case "spray": case "lefthit": case "righthit": case "leftstruggle": case "rightstruggle":
			/*feetaction*/
			case "kick":
			/*mouthaction*/
			case "bite": case "demand":
				color = "def";
			break;
	
			/*mouthaction*/
			case "grasp": case "plead": case "forgive":
			/*penisaction*/
			case "thighbay": case "bay": case "otheranusbay":
			/*vaginaaction*/
			case "penisthighs":
			/*anusaction*/
			case "bottombay": case "penischeeks": case "penispussy": case "penisanus":
				color = "meek";
			break;
	
			/*leftaction or rightaction*/
			case "leftplay": case "leftgrab": case "leftstroke": case "leftchest": case "rightplay": case "rightgrab": case "rightstroke": case "rightchest":
			case "leftchest": case "rightchest": case "leftwork": case "rightwork": case "leftclit": case "rightclit":
			/*feetaction*/
			case "grab": case "vaginagrab": case "grabrub": case "vaginagrabrub": case "rub":
			/*mouthaction*/
			case "peniskiss": case "kiss": case "suck": case "lick": case "moan": case "breastsuck": case "breastlick": case "swallow": case "movetochest":
			case "othervagina": case "mouth": case "kissback": case "vaginalick":
			/*penisaction*/
			case "penistovagina": case "penistoanus": case "penisvaginafuck": case "penisanusfuck": case "othermouthtease": case "othermouthrub":
			case "othermouthcooperate": case "tease": case "cooperate": case "otheranustease": case "otheranusrub": case "otheranuscooperate": case "clitrub":
			/*vaginaaction*/
			case "vaginatopenis": case "vaginapenisfuck":
			/*anusaction*/
			case "anustopenis": case "anuspenisfuck": case "penistease": case "otherMouthAnusRub": case "otherAnusRub":
				color = "sub";
			break;
	
			default:
				color = "white";
			break;
		}
	}
	else if(type === "Tentacle"){
		switch(check.replace(/\d+/g, '')) {
			/*leftaction or rightaction*/
			case "lefthittentacle": case "righthittentacle":
			case "lefthit": case "righthit":
			/*feetaction*/
			case "feethittentacle":
			/*mouthaction*/
			case "mouthbitetentacle":
				color = "def";
			break;

			/*mouthaction*/
			case "mouthpullawaytentacle": 
			/*penisaction*/
			case "penispullawaytentacle":
			/*vaginaaction*/
			case "vaginapullawaytentacle":
			/*anusaction*/
			case "anuspullawaytentacle":
				color = "brat";

			/*leftaction or rightaction*/
			case "leftgrabtentacle": case "rightgrabtentacle": case "leftrubtentacle": case "rightrubtentacle":
			case "showbottomtentacle": case "showthighstentacle": case "showmouthtentacle": 
			case "leftgrab": case "rightgrab": case "leftrub": case "rightrub":
			case "showbottom": case "showthighs": case "showmouth": 
			/*feetaction*/
			case "feetgrab": case "feetrubtentacle":
			/*mouthaction*/
			case "mouthlicktentacle": case "mouthkisstentacle": case "mouthcooperatetentacle":
			/*penisaction*/
			case "penisrubtentacle": case "peniscooperatetentacle":
			/*vaginaaction*/
			case "vaginarubtentacle": case "vaginacooperatetentacle":
			/*anusaction*/
			case "anusrubtentacle": case "anuscooperatetentacle":
			/*bottomuse*/
			case "bottomrubtentacle":
			/*breastuse*/
			case "chestrubtentacle":
				color = "sub";
			break;
			default:
				color = "white";
			break;
		}
	}
	return color;
}

DefineMacroS("combatListColor", combatListColor);

function combatButtonAdjustments(name, extra){
	jQuery(document).on('change', '#listbox-'+name,{"name":name, "extra":extra}, function(e) {
		/*console.log(e.data);*/
		new Wikifier(null, '<<replace #'+e.data.name+'Difficulty>><<'+e.data.name+'Difficulty'+e.data.extra+'>><</replace>>');
		$('#'+e.data.name+'Select' ).removeClass('whiteList bratList meekList defList subList');
		$('#'+e.data.name+'Select' ).addClass(combatListColor(e.data.name, undefined, e.data.extra) + "List");
	});
	return "";
}

DefineMacroS("combatButtonAdjustments", combatButtonAdjustments);

function combatDefaults(){
	jQuery(document).on('change', '#listbox--defaultactions', function(e) {
		new Wikifier(null, '<<replace #othersFeelings>><<othersFeelings '+this.value+'>><</replace>>');
	});
	return "";
}

DefineMacroS("combatDefaults", combatDefaults);
