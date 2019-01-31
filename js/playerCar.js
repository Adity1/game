class PlayerCar{
	constructor(gameElement){
		this.playerCar = document.createElement("div");
		this.left = 0;
		this.top = 410;
		this.width = 80;
		this.height= 180;
		this.Velocity = 180;
		this.playerCar.style.left = this.left + 'px';
		this.playerCar.style.top = this.top + 'px';
		this.playerCar.style.width = this.width + 'px';
		this.playerCar.style.height = this.height + 'px';
		this.playerCar.style.background = "url(images/car.png)";
		this.playerCar.style.backgroundSize = "cover";
		this.playerCar.style.position = "absolute";		
		gameElement.appendChild(this.playerCar);
		this.arrowPressed = this.arrowPressed.bind(this);
		this.removePlayerCar = this.removePlayerCar.bind(this);
    }

    removePlayerCar(){
         this.playerCar.remove(this.playerCar);
    }

	arrowPressed(event){
		if(event.key == "ArrowRight"){
		this.left = this.left + this.Velocity;
		this.playerCar.style.left = this.left + 'px';
		if(this.left  >= 420){
			this.left = 420;
			this.playerCar.style.left = this.left + 'px';
			}
		}
		if(event.key == "ArrowLeft"){
		this.left = this.left - this.Velocity;
		this.playerCar.style.left = this.left + 'px';
		if(this.left <= 0){
			this.left = 0;
			}
		this.playerCar.style.left = this.left + 'px';
		}
	}
}

