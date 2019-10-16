var app = {

    // Application Constructor
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function(e) {		
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
       var game = new Phaser.Game(540,960,Phaser.CANVAS,'',{preload:this.preload, create:this.create},false,true,null);

       game.state.add('boot',Game.boot);
       game.state.add('langSelectScreen',Game.langSelectScreen);
       game.state.add('preloader',Game.preloader);
       game.state.add('userprogress',Game.userprogress);
       game.state.add('userprogress2',Game.userprogress2);
       
    },


    preload:function(game)
    {
    	game.load.image('splash','assets/splash.png');
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
			game.width = 960;
    		game.height = 540;
			console.log(game);
		},this); 

    		
    	
    	
   	
    },
	
};


app.initialize();