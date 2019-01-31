class EnemyCar{
	constructor(){
		this.enemyCar = document.createElement("div");	
		this.left = 60;
		this.top = 0;
		this.height = 180;
		this.width = 80;
		this.velocity = 10;	
		this.maxtop = 80;
		this.maxleft = 420;
		this.minleft = 0 ;
		this.mintop = 0;
		this.enemyCar.style.left = this.left + 'px' ;
		this.enemyCar.style.top = this.top + 'px' ;
		this.enemyCar.style.width = this.width + 'px';
		this.enemyCar.style.height = this.height + 'px';
		this.enemyCar.style.velocity = this.velocity + 'px';
		this.init(); 
		this.init = this.init.bind(this);
		this.crashMusic = new sound("crash.mp3");
	}

	init(){
		this.enemyCar.style.backgroundImage = "url(images/car1.png)" ;
		this.enemyCar.style.backgroundSize = "cover";
		this.enemyCar.style.position = "absolute";		
		gameElement.appendChild(this.enemyCar);
	}
	
	randomPosition(playerCar){
		const pos = [0,200,400];
		this.playerCar = playerCar;
		this.left = pos[Math.floor(Math.random() * pos.length)] ;
		this.enemyCar.style.left = this.left + 'px';
		this.containerHeight = 600;	 
		this.moveCar = this.moveCar.bind(this);
		this.removeEnemyCar = this.removeEnemyCar.bind(this);
		this.checkcollision = this.checkcollision.bind(this);
		this.carMove = setInterval(this.moveCar ,100);
		this.collisionInterval = setInterval(this.checkcollision ,100, playerCar);
		this.checkScore = this.checkScore.bind(this);
		setInterval(this.checkScore, 100);
	}
	removeEnemyCar(){
		this.enemyCar.remove(this.enemyCar);
	}
	
	moveCar(){
		this.top = this.top + this.velocity;
		this.enemyCar.style.top = this.top + 'px';
		
		if( this.top >= this.containerHeight - this.height )
		{
			clearInterval(this.collisionInterval)
			this.enemyCar.remove(this.enemyCar);
		}
	}
	
	checkcollision(playerCar){
		if((this.top + this.height > playerCar.top) && (this.left + this.width > playerCar.left) && (this.left < playerCar.left + playerCar.width)) {
			gameOver.style.display = "block";
			this.crashMusic.play();
			clearInterval(this.carMove);
            game.clearGameLoop();
		}		
	}
	checkScore(){
			if(this.playerCar.top == this.top ){
				score+= 10;
			}
			scoreElement.textContent= score;
		
	}
}
let gameElement = document.getElementsByClassName("container")[0];


