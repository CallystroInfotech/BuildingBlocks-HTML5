var app = {

    // Application Constructor
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function(e) {		
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

       screen.orientation.lock('portarait');
       var game = new Phaser.Game(540,960,Phaser.CANVAS,'',{preload:this.preload, create:this.create},false,true,null);

       game.state.add('boot',Game.boot);
       game.state.add('langSelectScreen',Game.langSelectScreen);
       game.state.add('preloader',Game.preloader);
       game.state.add('userprogress',Game.userprogress);
       game.state.add('userprogress2',Game.userprogress2);
       game.state.add('registrationLangSelectionScreen',Game.registrationLangSelectionScreen);
       game.state.add('registrationPicSelectionScreen',Game.registrationPicSelectionScreen);
       
    },


    preload:function(game)
    {
    	game.load.image('splash','assets/splash.png');
      game.load.image('registrationbg','assets/registrationbg.png');
      game.load.image('graphicBg','assets/graphicBg.png');
      game.load.image('carrotIcon','assets/carrotIcon.png');
      game.load.image('regBackArrow','assets/regBackArrow.png');
      game.load.image('fish','assets/fish.jpg');
      game.load.image('butterfly','assets/butterfly.jpg');
      game.load.image('flower','assets/flower.jpg');
      game.load.image('parrot','assets/parrot.jpg');
      game.load.image('sun','assets/sun.jpg');
      game.load.image('tree','assets/tree.jpg');
      game.load.atlas('regTickBtn','assets/regTickBtn.png','assets/regTickBtn.json');
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
			game.state.start('registrationLangSelectionScreen',true,false);
		},this); 

    },
	
};


app.initialize();