var Game={};

Game.boot=function(){
	
};

Game.boot.prototype={
	
	preload:function(){

		_this = this;
		//_this.cache.destroy();		
		
		_this.load.json('translations', 'assets/newAssets/lang.json');
				
		_this.load.image('prgressbarOutLine',window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
		_this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png');

		

		_this.load.image('loadingBg1',window.baseUrl+'assets/commonAssets/loadingBg1.png');
		_this.load.image('loadingBg2',window.baseUrl+'assets/commonAssets/loadingBg2.png');
		_this.load.image('singleCarrotForLoading',window.baseUrl+'assets/commonAssets/singleCarrotForLoading.png');
		_this.load.atlas('loadingTankAnim',window.baseUrl+'assets/commonAssets/loadingTankAnim.png',window.baseUrl+'assets/commonAssets/loadingTankAnim.json');
		_this.load.atlas('loadingGlassAnim',window.baseUrl+'assets/commonAssets/loadingGlassAnim.png',window.baseUrl+'assets/commonAssets/loadingGlassAnim.json');
		_this.load.atlas('loadingBottleAnim',window.baseUrl+'assets/commonAssets/loadingBottleAnim.png',window.baseUrl+'assets/commonAssets/loadingBottleAnim.json');
		_this.load.atlas('loadingTimeAnim',window.baseUrl+'assets/commonAssets/loadingTimeAnim.png',window.baseUrl+'assets/commonAssets/loadingTimeAnim.json');
		_this.load.atlas('loadingFishAnim2',window.baseUrl+'assets/commonAssets/loadingFishAnim2.png',window.baseUrl+'assets/commonAssets/loadingFishAnim2.json');
		_this.load.atlas('rabitSittingAnim',window.baseUrl+'assets/commonAssets/rabitSittingAnim.png',window.baseUrl+'assets/commonAssets/rabitSittingAnim.json');
		_this.load.atlas('rabitEatingAnim',window.baseUrl+'assets/commonAssets/rabitEatingAnim.png',window.baseUrl+'assets/commonAssets/rabitEatingAnim.json');
		_this.load.atlas('rabitJumpAnim',window.baseUrl+'assets/commonAssets/rabitJumpAnim.png',window.baseUrl+'assets/commonAssets/rabitJumpAnim.json');


		_this.load.image('CommonBackground',window.baseUrl+'assets/commonAssets/commonBg.png');
		
		_this.load.atlas('CommonAssets',window.baseUrl+'assets/commonAssets/phaserTest.png',window.baseUrl+'assets/commonAssets/phaserTest.json');	
      	
	},

	create:function(){
		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		_this.game.input.maxPointers = 1;

		//this.Input.MOUSE_OVERRIDES_TOUCH = 1;
		//_this.game.input.multiInputOverride = Phaser.Input.TOUCH_OVERRIDES_MOUSE;

		//_this.game.input.touch.preventDefault = true;

		_this.game.stage.disableVisibilityChange=true;
		
		//setting scale and orientation for the game.
		_this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        _this.scale.pageAlignHorizontally = true;
        _this.scale.pageAlignVertically = true;
        _this.scale.updateLayout(true);
        _this.scale.forceOrientation(false, true);
		
		
		
		var translations = _this.cache.getJSON('translations');
		
		if(window.languageSelected == "Hindi")
		{
			window.selctedLang = translations.hn;
		}
		else if(window.languageSelected == "Kannada")
		{
			window.selctedLang = translations.kan;
		}
		else if(window.languageSelected == "Odiya")
		{
			window.selctedLang = translations.od;
		}
		else if(window.languageSelected == "Gujarati")
		{
			window.selctedLang = translations.gu;
		}
		else
		{
			window.selctedLang = translations.en;
		}
		this.game.add.text(0, 0, "hack", {font:"1px myfont", fill:"#FFFFFF"});
		this.game.add.text(0, 0, "hack", {font:"1px gradefont", fill:"#FFFFFF"});

		//sounds = [ 'loadingSound' ];

		//this.sound.setDecodedCallback(sounds, 
		//	function()
		//	{
				_this.state.start('preloader',true,false);
		//	}, this);
					
					
	},
	
	shutdown:function()
	{
		_this = null;
	}
	
}