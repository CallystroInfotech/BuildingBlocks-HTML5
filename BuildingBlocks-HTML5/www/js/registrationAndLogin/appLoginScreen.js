Game.appLoginScreen=function(){

};

Game.appLoginScreen.prototype={
	
	init:function(lang)
	{		
		_this = this;
	},

	preload:function(game)
	{

	},

	create:function(game)
	{
		this.avatarName = ['fish','butterfly','flower','parrot','sun','tree'];
		this.checkForLoginData();

		_this.userArray = [];
		
		
		//Fullscreen.on();
		var splash = game.add.sprite(game.world.centerX,game.world.centerY,'registrationbg');
    	splash.scale.setTo(1);
    	splash.anchor.setTo(0.5);

    	var titleBar = game.add.graphics(0, 0);
    	titleBar.anchor.setTo(0.5);
    	titleBar.lineStyle(2, 0x000000, 0.8);
		titleBar.beginFill(0x4E342E, 1);
		titleBar.drawRect(0, 0, 540, 80);


		var titleTxt = game.add.text(game.world.centerX-120,40,"Building Blocks");
		titleTxt.anchor.setTo(0.5);
		titleTxt.align = 'center';
		titleTxt.fontSize = 32;
		titleTxt.fontWeight = 'normal';
		titleTxt.fill = '#FFFFFF';
		titleTxt.wordWrap = true;
		titleTxt.wordWrapWidth = 500;

	},

	loadEverything:function(game)
	{
		var selectPicTxt = game.add.text(game.world.centerX,150,"Sign in by selecting \n your avatar");
		selectPicTxt.anchor.setTo(0.5);
		selectPicTxt.align = 'center';
		selectPicTxt.fontSize = 38;
		selectPicTxt.fontWeight = 'normal';
		selectPicTxt.fill = '#000000';
		selectPicTxt.wordWrap = true;
		selectPicTxt.wordWrapWidth = 500;


		_this.fish = game.add.sprite(150,300,'fish');
    	_this.fish.scale.setTo(0.8);
    	_this.fish.anchor.setTo(0.5);


    	_this.butterfly = game.add.sprite(390,300,'butterfly');
    	_this.butterfly.scale.setTo(0.8);
    	_this.butterfly.anchor.setTo(0.5);

    	_this.flower = game.add.sprite(150,500,'flower');
    	_this.flower.scale.setTo(0.8);
    	_this.flower.anchor.setTo(0.5);

    	_this.parrot = game.add.sprite(390,500,'parrot');
    	_this.parrot.scale.setTo(0.8);
    	_this.parrot.anchor.setTo(0.5);

    	_this.sun = game.add.sprite(150,700,'sun');
    	_this.sun.scale.setTo(0.8);
    	_this.sun.anchor.setTo(0.5);

    	_this.tree = game.add.sprite(390,700,'tree');
    	_this.tree.scale.setTo(0.8);
    	_this.tree.anchor.setTo(0.5);
    	

    	_this.fish.visible = false;
    	_this.fish.inputEnabled = false;
    	_this.fish.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "fish")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);


    	_this.butterfly.visible = false;
    	_this.butterfly.inputEnabled = false;
    	_this.butterfly.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "butterfly")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);

    	_this.flower.visible = false;
    	_this.flower.inputEnabled = false;
    	_this.flower.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "flower")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);

    	_this.parrot.visible = false;
    	_this.parrot.inputEnabled = false;
    	_this.parrot.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "parrot")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);

    	_this.sun.visible = false;
    	_this.sun.inputEnabled = false;
    	_this.sun.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "sun")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);

    	_this.tree.visible = false;
    	_this.tree.inputEnabled = false;
    	_this.tree.events.onInputDown.add(function(){
    		for (var i = 0; i < _this.userArray.length; i++) {
    			if(_this.userArray[i].name.toLowerCase() == "tree")
    			{
    				_this.state.start('appLoginEditScreen',true,false,_this.userArray[i]);
    				return;
    			} 
    		}
    	},this);

    	var orTxt = game.add.text(game.world.centerX,820,"------------- Or -------------");
		orTxt.anchor.setTo(0.5);
		orTxt.align = 'center';
		orTxt.fontSize = 38;
		orTxt.fontWeight = 'normal';
		orTxt.fill = '#000000';
		orTxt.wordWrap = true;
		orTxt.wordWrapWidth = 500;

		_this.regandstsrtBtn = _this.add.sprite(game.world.centerX,880,'regandstsrtBtn');
    	_this.regandstsrtBtn.scale.setTo(0.4,0.5);
    	_this.regandstsrtBtn.anchor.setTo(0.5);

    	_this.regandstsrtBtnTxt = _this.add.text(game.world.centerX,880,"Register");
		_this.regandstsrtBtnTxt.anchor.setTo(0.5);
		_this.regandstsrtBtnTxt.align = 'center';
		_this.regandstsrtBtnTxt.fontSize = 32;
		_this.regandstsrtBtnTxt.fontWeight = 'normal';
		_this.regandstsrtBtnTxt.fill = '#FFFFFF';
		_this.regandstsrtBtnTxt.wordWrap = true;
		_this.regandstsrtBtnTxt.wordWrapWidth = 500;

		
	},

	checkForLoginData:function()
	{
		bbreglogin.bbdbhandler.executeSql('select * from user', [], this.localdatasuccess, this.localdatafailed);
	},

	localdatasuccess:function(result)
	{
		if(result.rows.length>0)
		{
			_this.loadEverything(_this);
			for (var i = 0; i < result.rows.length; i++) 
			{
				console.log(result.rows.item(i));
            	_this.userArray.push(result.rows.item(i));      	

            	_this[""+result.rows.item(i).name.toLowerCase()].visible = true;   
            	_this[""+result.rows.item(i).name.toLowerCase()].inputEnabled = true;   

        	}
        	if(_this.userArray.length<6)
			{
				_this.regandstsrtBtn.inputEnabled = true;
				_this.regandstsrtBtn.events.onInputDown.add(function(){
					_this.state.start('registrationLangSelectionScreen',true,false,_this.userArray);
				},_this);
			}
			else
			{
				_this.regandstsrtBtn.frame = 1;
			}
        	
		}
		else
		{
			window.plugins.toast.show("Building Blocks is loading \n please wait", 2000, "center");
			_this.checkOnlineForData();
		}
		
	},

	localdatasuccess2:function(result)
	{
		if(result.rows.length>0)
		{
			_this.loadEverything(_this);
			for (var i = 0; i < result.rows.length; i++) 
			{
            	console.log(result.rows.item(i));
            	_this.userArray.push(result.rows.item(i));      	

            	_this[""+result.rows.item(i).name.toLowerCase()].visible = true;   
            	_this[""+result.rows.item(i).name.toLowerCase()].inputEnabled = true;   

        	}
        	if(_this.userArray.length<6)
			{
				_this.regandstsrtBtn.inputEnabled = true;
				_this.regandstsrtBtn.events.onInputDown.add(function(){
					_this.state.start('registrationLangSelectionScreen',true,false,_this.userArray);
				},_this);
			}
			else
			{
				_this.regandstsrtBtn.frame = 1;
			}
        	
		}
		else
		{
			_this.state.start('registrationLangSelectionScreen',true,false);
		}
		
	},


	localdatafailed:function(error)
	{
		window.plugins.toast.show("something went wrong Try Again", 3000, "bottom");
	},

	checkOnlineForData:function()
	{
		
		var jsondata = {name:this.avatarName[0],deviceid:device.serial+"_"+device.uuid};
		//var jsondata = {name:this.avatarName[0],deviceid:123456};

		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
				var apiurl = "https://abbmath.klp.org.in/abbchmprm/login";        		        
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
		            	    _this.checkOnlineForData2(jsonresp.description);
		            	       		
		            	}
		            	else
		            	{
		            		//window.plugins.toast.show(jsonresp.status+"\n"+jsonresp.description, 3000, "bottom");
		            		_this.avatarName.shift();
		            	     if(_this.avatarName.length>0)
		            	     	  _this.checkOnlineForData();
		            	     else{
		            	     	console.log("finish");
		            	     	bbreglogin.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess2, _this.localdatafailed);
		            	     }
		            	}
		                 
		            },
		            error: function (error) {
		            	window.plugins.toast.show(error, 1000, "bottom");		            	
		             }
		            
		        });
		    }
		    else
		    {
		    	window.plugins.toast.show("please check your internet connection and try again", 3000, "bottom");
		    	document.addEventListener("online", _this.checkNetwork, false);
		    }
	},

	checkNetwork:function()
	{
		document.removeEventListener("online", _this.checkNetwork, false);
		_this.checkOnlineForData();
	},

	checkOnlineForData2:function(acc_token)
	{
		var jsondata = {name:this.avatarName[0],deviceid:device.serial+"_"+device.uuid};
		//var jsondata = {name:this.avatarName[0],deviceid:123456};

		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
				var apiurl = "https://abbmath.klp.org.in/abbchmprm/getchild";        		        
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

		            		bbreglogin.bbdbhandler.executeSql("insert into user(uid, name, language, deviceId) values (?,?,?,?)", [acc_token,jsonresp.name,jsonresp.language,jsonresp.deviceid], null, null);

		            	     _this.avatarName.shift();
		            	     if(_this.avatarName.length>0)
		            	     	  _this.checkOnlineForData();
		            	     else{
		            	     	console.log("finish");
		            	     	bbreglogin.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess, _this.localdatafailed);
		            	     }
		            	     	    		
		            	}
		            	else
		            	{
		            		window.plugins.toast.show(jsonresp.status+"\n"+jsonresp.description, 3000, "bottom");
		            		_this.avatarName.shift();
		            	     if(_this.avatarName.length>0)
		            	     	  _this.checkOnlineForData();
		            	     else{
		            	     	console.log("finish");
		            	     	bbreglogin.bbdbhandler.executeSql('select * from user', [], _this.localdatasuccess, _this.localdatafailed);
		            	     }
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
		    }
	},
};