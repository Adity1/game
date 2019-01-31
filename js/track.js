	class Track{
		constructor(trackElement){
		this.backgroundElement = trackElement;
		this.height = 600;
		this.width = 500;
		this.backgroundElement.style.height = this.height + 'px';
		this.backgroundElement.style.width = this.width + 'px';
		this.left = 0;
		this.top = 0;
		this.x = 10;
		this.backgroundElement.style.left = this.left + 'px';
		this.backgroundElement.style.top = this.top + 'px';
		this.moveBackground = this.moveBackground.bind(this);	
	}
	moveBackground(){
		this.top = this.top + this.x;
		this.backgroundElement.style.backgroundPositionY = this.top + 'px';
	}
}