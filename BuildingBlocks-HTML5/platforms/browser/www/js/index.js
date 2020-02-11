var app = {

    // Application Constructor
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function(e) {		
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

       bbreglogin.initializeDB();

       screen.orientation.lock('portarait');
       var game = new Phaser.Game(540,960,Phaser.CANVAS,'',{preload:this.preload, create:this.create},false,true,null);

       game.state.add('boot',Game.boot);
       game.state.add('langSelectScreen',Game.langSelectScreen);
       game.state.add('preloader',Game.preloader);
       game.state.add('userprogress',Game.userprogress);
       game.state.add('userprogress2',Game.userprogress2);
       game.state.add('appLoginScreen',Game.appLoginScreen);
       game.state.add('appLoginEditScreen',Game.appLoginEditScreen);
       game.state.add('editLangScreen',Game.editLangScreen);
       game.state.add('registrationLangSelectionScreen',Game.registrationLangSelectionScreen);
       game.state.add('registrationPicSelectionScreen',Game.registrationPicSelectionScreen);
       game.state.add('index2',Game.index2);
       
    },


    preload:function(game)
    {
    	game.load.image('splash','assets/splash.png');
      game.load.image('registrationbg','assets/registrationbg.png');
      game.load.image('graphicBg','assets/graphicBg.png');
      game.load.image('carrotIcon','assets/carrotIcon.png');
      game.load.image('regBackArrow','assets/regBackArrow.png');
      game.load.image('userEditBtn','assets/userEditBtn.png');
      game.load.image('userProgressBtn','assets/userProgressBtn.png');
      game.load.atlas('fish','assets/fish.png','assets/fish.json');
      game.load.atlas('butterfly','assets/butterfly.png','assets/butterfly.json');
      game.load.atlas('flower','assets/flower.png','assets/flower.json');
      game.load.atlas('parrot','assets/parrot.png','assets/parrot.json');
      game.load.atlas('sun','assets/sun.png','assets/sun.json');
      game.load.atlas('tree','assets/tree.png','assets/tree.json');
      game.load.atlas('regTickBtn','assets/regTickBtn.png','assets/regTickBtn.json');
      game.load.atlas('regandstsrtBtn','assets/regandstsrtBtn.png','assets/regandstsrtBtn.json');
      game.load.atlas('regloding','assets/loding.png','assets/loding.json');
    },

    create:function(game)
    {

    	game.input.maxPointers = 1;

  		game.stage.disableVisibilityChange=true;
  		
  		//setting scale and orientation for the game.
  		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      game.scale.updateLayout(true);
      game.scale.forceOrientation(true, false);


    	game.stage.backgroundColor = '#71c5cf';
    	var splash = game.add.sprite(game.world.centerX,game.world.centerY,'splash');
    	splash.scale.setTo(1);
    	splash.anchor.setTo(0.5);  

    	console.log(game);



    	game.time.events.add(300, function(){
			game.time.events.removeAll();
			/*game.width = 960;
    		game.height = 540;
			console.log(game);

			screen.orientation.lock('landscape');*/
			game.state.start('appLoginScreen',true,false);
		},this); 

    },
	
};


app.initialize();