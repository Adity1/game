class gameWorld{
	constructor(sbutton){
		this.gameElement = document.getElementsByClassName("container")[0];
		this.buttonHeight = 100; 
        this.buttonWidth = 50; 
        this.buttonLeft = 0;
		this.buttonTop = 0;  
		this.carArray = [];
   		this.init();
		this.carMusic = new sound("bmw.mp3");	
	}

	init(){
		this.trackElement = document.getElementsByClassName("track")[0];
		this.track = new Track(this.trackElement);
		document.onkeydown = ('onkeydown', (e) => this.playerCar.arrowPressed(e));	
	}

	playerCarInit(){
		this.playerCar = new PlayerCar(this.gameElement);
	}
	gameLoop(){
		setInterval(this.track.moveBackground, 100);
		var enemyCar1;
        var that = this;       
        this.gameLoopInterval = setInterval (() => {
			enemyCar1 = new EnemyCar();
			this.carMusic.play();
			enemyCar1.randomPosition(that.playerCar);
			this.carArray.push(enemyCar1); 
		}, 5000); 
	}

	clearGameLoop(){
        clearInterval(this.gameLoopInterval);
	}
}
var score = 0;
let game = new gameWorld();
var scoreElement = document.getElementById('scoreText');
scoreElement.textContent = score;
var startButton = document.createElement("button");
startButton.style.height =  50 + 'px';
startButton.style.width = 130 + 'px';       
startButton.style.left = 0 + 'px';        
startButton.style.top = 0 + 'px';   
startButton.style.position = "absolute";
startButton.style.borderRadius = "25px";
startButton.style.backgroundColor = "#6a5acd";
startButton.innerHTML = "START GAME";
startButton.onclick = function(){
	startButton.style.display ="none"; 
    game.gameLoop();
    game.playerCarInit();  
    gameOver.style.display = "none";     
}
game.gameElement.appendChild(startButton);

var gameOver = document.createElement("div");
game.gameElement.appendChild(gameOver);
gameOver.style.fontSize = '50px';
gameOver.style.color = 'black';
gameOver.style.position = 'absolute';
gameOver.style.display = 'none';
gameOver.style.top = '230px';
gameOver.style.left = '100px';
gameOver.innerHTML = 'GAME OVER';
		