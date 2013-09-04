$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  var player_1 = 0;
  var player_2 = 0;


  $(document).on('keyup', function(event) {

   
    if (event.keyCode==87 && (player_1 < 21) && (player_2 < 21) ){ 
    move_player("#player1_strip");
    player_1++
    winner(player_1)
    }

        if (event.keyCode==38 && (player_2 < 21) && (player_1 < 21)){
    move_player("#player2_strip");
     player_2++
     winner(player_2)
    }
  });
});




function winner(player){
  if (player == 21)
    alert("We have a winner!");
}


    function move_player(strip) 
    {$(strip).find('td.active').removeClass( "active" ).next().addClass( "active" );
  }
