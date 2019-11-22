Game.registrationLangSelectionScreen=function(){

};

Game.registrationLangSelectionScreen.prototype={
	
	init:function(game)
	{
		
	},

	preload:function(game)
	{

	},

	create:function(game)
	{
		
		var splash = game.add.sprite(game.world.centerX,game.world.centerY,'registrationbg');
    	splash.scale.setTo(1);
    	splash.anchor.setTo(0.5);

    	var titleBar = game.add.graphics(0, 0);
    	titleBar.anchor.setTo(0.5);
    	titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		if(this.showRegBackBtn)
		{
			var regBackArrow = game.add.sprite(40,40,'regBackArrow');
	    	regBackArrow.scale.setTo(0.5);
	    	regBackArrow.anchor.setTo(0.5);

	    	var regBackArrowGrph = game.add.graphics(0, 0);
	    	regBackArrowGrph.beginFill(0x4E342E, 0.05);
			regBackArrowGrph.drawRect(-60, -60, 120, 120);
			regBackArrow.addChild(regBackArrowGrph);

	    	regBackArrow.inputEnabled = true;
	    	regBackArrow.events.onInputDown.add(function(){
	    		alert("hai");
	    	},this);

			var titleTxt = game.add.text(game.world.centerX-80,40,"Building Blocks");
			titleTxt.anchor.setTo(0.5);
			titleTxt.align = 'center';
			titleTxt.fontSize = 32;
			titleTxt.fontWeight = 'normal';
			titleTxt.fill = '#FFFFFF';
			titleTxt.wordWrap = true;
			titleTxt.wordWrapWidth = 500;
		}
		else
		{
			var titleTxt = game.add.text(game.world.centerX-120,40,"Building Blocks");
			titleTxt.anchor.setTo(0.5);
			titleTxt.align = 'center';
			titleTxt.fontSize = 32;
			titleTxt.fontWeight = 'normal';
			titleTxt.fill = '#FFFFFF';
			titleTxt.wordWrap = true;
			titleTxt.wordWrapWidth = 500;
		}


    	var graphicBg = game.add.sprite(game.world.centerX,game.world.centerY-50,'graphicBg');
    	graphicBg.scale.setTo(0.6,0.5);
    	graphicBg.anchor.setTo(0.5);

    	var carrotIcon = game.add.sprite(game.world.centerX+110,game.world.centerY-50,'carrotIcon');
    	carrotIcon.scale.setTo(0.8);
    	carrotIcon.anchor.setTo(0.5);


    	var regTickBtn = game.add.sprite(game.world.centerX,game.world.centerY+100,'regTickBtn');
    	regTickBtn.scale.setTo(0.5);
    	regTickBtn.anchor.setTo(0.5);


    	this.selectLanguageText = game.add.text(game.world.centerX-10,game.world.centerY-50,"Select Language");
		this.selectLanguageText.anchor.setTo(0.5);
		this.selectLanguageText.align = 'center';
		this.selectLanguageText.fontSize = 26;
		this.selectLanguageText.fontWeight = 'normal';
		this.selectLanguageText.fill = '#000000';
		this.selectLanguageText.wordWrap = true;
		this.selectLanguageText.wordWrapWidth = 500;

		

		graphicBg.inputEnabled = true;
		graphicBg.events.onInputDown.add(function(target){
			target.inputEnabled = false;

			this.languageSelectedGrp = game.add.group();

			var languageList = ["Select Language","English","Hindi","Kannada","Odiya","Gujarati"];

	    	var x = game.world.centerX-140;
	    	var y = game.world.centerY-25;

	    	for(var i=0; i<languageList.length; i++){
	    		if(i!=0)
	    			y=y+45;
	    		this.createDropDownMenu(game,languageList[i],i,x,y,this.languageSelectedGrp,target, languageList, regTickBtn);
	    	}
		},this);

	},


	createDropDownMenu:function(game, lang, i, x, y, grp, targetGpc, list, regTickBtn)
	{
		this["languagegraphicsBg"+i] = game.add.graphics(0, 0);
    	this["languagegraphicsBg"+i].anchor.setTo(0.5);
    	this["languagegraphicsBg"+i].name = lang;
		this["languagegraphicsBg"+i].lineStyle(2, 0x000000, 0.8);
		this["languagegraphicsBg"+i].beginFill(0xFFFFFF, 1);
		this["languagegraphicsBg"+i].drawRoundedRect(x, y, 280, 45, 10);

		this["languageTxt"+i] = game.add.text(game.world.centerX,y+25,lang);
		this["languageTxt"+i].anchor.setTo(0.5);
		this["languageTxt"+i].align = 'center';
		this["languageTxt"+i].fontSize = 26;
		this["languageTxt"+i].fontWeight = 'normal';
		this["languageTxt"+i].fill = '#000000';
		this["languageTxt"+i].wordWrap = true;
		this["languageTxt"+i].wordWrapWidth = 500;

		this["languagegraphicsBg"+i].inputEnabled = true;
		this["languagegraphicsBg"+i].events.onInputDown.add(function(target){
			this.selectLanguageText.text = target.name;
			target.events.onInputDown.removeAll();
			grp.destroy();
			targetGpc.inputEnabled = true;
			regTickBtn.frame=0;
			regTickBtn.inputEnabled = true;
			regTickBtn.events.onInputDown.removeAll();

			if(this.selectLanguageText.text !== list[0])
			{
				regTickBtn.frame=1;
				regTickBtn.inputEnabled = true;
				regTickBtn.events.onInputDown.add(function(target){
					game.state.start('registrationPicSelectionScreen',true,false);
				},this);
			}
		},this);

		grp.add(this["languagegraphicsBg"+i]);
		grp.add(this["languageTxt"+i]);
	}
};