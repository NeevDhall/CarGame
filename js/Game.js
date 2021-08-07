class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30)
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    if(allPlayers != undefined){
      var displayPosition = 130
      for(var Plr in allPlayers){
        if(Plr === "player"+player.index){
          fill("red")
        }
        else{
          fill("blue")
        }
        displayPosition += 20
        textSize(15)
        text(allPlayers[Plr].name+": "+ allPlayers[Plr].distance, 120, displayPosition)
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index != null){
    player.distance += 10
    player.update()
    }
  }
}
