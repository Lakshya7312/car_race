class Form{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
        this.reset = createButton("Reset");
        this.title = createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {
        
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 -200, displayHeight/4 -150);
        this.input.position(displayWidth/2 -200, displayHeight -870);
        this.button.position(displayWidth/2 -200, displayHeight-830);
        this.reset.position(displayWidth/2 -950, 30);
        
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 -200, displayHeight -900);
        });

        this.reset.mousePressed(()=>{
           player.updateCount(0);
           game.update(0);
           Player.updateCarsAtEnd(0);
        })
    }

}
