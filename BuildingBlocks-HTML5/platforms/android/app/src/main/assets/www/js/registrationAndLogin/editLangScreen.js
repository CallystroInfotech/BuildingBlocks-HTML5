Game.editLangScreen=function(){

};

Game.editLangScreen.prototype={
	
	init:function(user)
	{
		_this = this;
		_this.user = user;
		console.log(_this.user);
	},

	preload:function(game)
	{

	},

	create:function(game)
	{
		//Fullscreen.off();

		var splash = game.add.sprite(game.world.centerX,game.world.centerY,'registrationbg');
    	splash.scale.setTo(1);
    	splash.anchor.setTo(0.5);

    	var titleBar = game.add.graphics(0, 0);
    	titleBar.anchor.setTo(0.5);
    	titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		var regBackArrow = game.add.sprite(40,40,'regBackArrow');
	    regBackArrow.scale.setTo(0.5);
	    regBackArrow.anchor.setTo(0.5);

	    var regBackArrowGrph = game.add.graphics(0, 0);
	    regBackArrowGrph.beginFill(0x4E342E, 0.05);
		regBackArrowGrph.drawRect(-60, -60, 120, 120);
		regBackArrow.addChild(regBackArrowGrph);

	    regBackArrow.inputEnabled = true;
	    regBackArrow.events.onInputDown.add(function(){
	    	game.state.start('appLoginEditScreen',true,false,_this.user);
	    },this);

	    document.addEventListener('backbutton', _this.goback, false);

		var titleTxt = game.add.text(game.world.centerX-80,40,"Building Blocks");
		titleTxt.anchor.setTo(0.5);
		titleTxt.align = 'center';
		titleTxt.fontSize = 32;
		titleTxt.fontWeight = 'normal';
		titleTxt.fill = '#FFFFFF';
		titleTxt.wordWrap = true;
		titleTxt.wordWrapWidth = 500;
		


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

			var languageList = ["Select Language","English","हिंदी","ಕನ್ನಡ","ଓଡ଼ିଆ","ગુજરાતી"];

	    	var x = game.world.centerX-140;
	    	var y = game.world.centerY-25;

	    	for(var i=0; i<languageList.length; i++){
	    		if(i!=0)
	    			y=y+45;
	    		this.createDropDownMenu(game,languageList[i],i,x,y,this.languageSelectedGrp,target, languageList, regTickBtn);
	    	}
		},this);

	},

	goback:function(e) {
		document.removeEventListener('backbutton', _this.goback, false);
		    	_this.state.start('appLoginEditScreen',true,false,_this.user);
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
				regTickBtn.events.onInputDown.add(function(targets){
					target.inputEnabled = false;
					_this.updateLanguage(target);
				},this);
			}
		},this);

		grp.add(this["languagegraphicsBg"+i]);
		grp.add(this["languageTxt"+i]);
	},

	updateLanguage:function(target)
	{
		if(target.name == "हिंदी")
			target.name = "Hindi"
		else if(target.name == "ಕನ್ನಡ")
			target.name = "Kannada"
		else if(target.name == "ଓଡ଼ିଆ")
			target.name = "Odiya"
		else if(target.name == "ગુજરાતી")
			target.name = "Gujarati"
		else
			target.name = "English"

		var jsondata = {name:_this.user.name,deviceid:_this.user.deviceId,grade:_this.user.grade,schooltype:_this.user.schoolType,language:target.name,organization:_this.user.organization};

		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
				var apiurl = "https://abbmath.klp.org.in/abbchmprm/updateprofile";        		        
		        $.ajax({
		            url: apiurl,
		            type: "POST",
		            dataType: "json",
		            // async:false, // set to false to perform a synchronous request
		            data: JSON.stringify(jsondata),
		            contentType: 'application/json; charset=UTF-8',
		            accepts: 'application/json',
		            success: function (jsonresp) {
		            	console.log(jsonresp);
		            	if(jsonresp.status == "success")
		            	{
		            		window.plugins.toast.show(jsonresp.status, 3000, "bottom");	
		            		console.log("UPDATE user SET language = '"+target.name+"' WHERE name LIKE %"+_this.user.name+"%");
		            		bbreglogin.bbdbhandler.executeSql("UPDATE user SET language = '"+target.name+"' WHERE name LIKE '%"+_this.user.name+"%';", [], _this.localdatasuccess, _this.localdatafailed);
     	    				//bbreglogin.bbdbhandler.executeSql('select * from user where name like %'+_this.user.name+'%;', [], _this.localdatasuccess, _this.localdatafailed);
		            	}
		            	else
		            	{
		            		window.plugins.toast.show(jsonresp.status+"\n"+jsonresp.description, 3000, "bottom");
		            		
		            	}
		                 
		            },
		            error: function (error) {
		            	window.plugins.toast.show(error, 3000, "bottom");
		            	
		             }
		            
		        });
		    }
		    else
		    {
		    	window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
		    	document.addEventListener("online", _this.checkNetwork, false);
		    	target.inputEnabled = true;
		    }
	},

	checkNetwork:function()
	{
		document.removeEventListener("online", _this.checkNetwork, false);
		
	},

	localdatasuccess:function(result)
	{
		console.log(result);
		//_this.state.start('appLoginScreen',true,false,_this.user);
		bbreglogin.bbdbhandler.executeSql("select * from user where name like '%"+_this.user.name+"%';", [], _this.localdatasuccess2, _this.localdatafailed);		
	},

	localdatasuccess2:function(result)
	{
		console.log(result.rows.item(0));
		//if(result.rows.length>0)
		//{
			//for (var i = 0; i < result.rows.length; i++) 
			//{
            	_this.state.start('appLoginEditScreen',true,false,result.rows.item(0));
        	//}	
		//}		
	},


	localdatafailed:function(error)
	{
		console.log(error);
		window.plugins.toast.show("something went wrong Try Again", 3000, "bottom");
	},

	shutdown:function()
	{
		document.removeEventListener('backbutton', _this.goback, false);
	}
};