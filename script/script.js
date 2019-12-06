$(document).ready(function(){
  $(".ecran1").hide()
  $(".ecran-renseignements").hide()
  $(".ecran-apprendre").hide()
  $(".ecran-compter").hide()
  $(".ecran-infos").hide()
  $(".compte-details").hide()
  $(".zoneRenseignementsGPS").hide()
  $(".zoneRenseignementsMETEO").hide()
  $(".boutonValiderModif").hide()
  $(".ecran-stats").hide()
  $(".ecran-terminer").hide()
  $(".boutonCommencer").click(clickCommencer)
  $("#pluie").click(clickPluie)
  $("#orage").click(clickOrage)
  $("#soleil").click(clickSoleil)
  $("#nuage").click(clickNuage)
  $("#eclaircies").click(clickEclaircies)
  $("#neige").click(clickNeige)
  $("#apprendre").click(clickApprendre)
  $("#compter").click(clickCompter)
  $(".header").click(clickHeader)
  $(".retour").click(clickRetour)
  $(".retour-compter").click(clickRetourCompter)
  $(".retour-infos").click(clickRetourInfos)
  $(".details").click(clickDetails)
  $(".boutonValider").click(clickValiderRenseignements)
  $(".retour-renseignements").click(clickRetourRenseignements)
  $(".retour-stats").click(clickRetourStats)
  $(".GPS").click(clickGPS)
  $(".meteo").click(clickMETEO)
  $(".boutonValiderModif").click(clickValiderModif)
  $(".boutonMoins").click(clickBoutonMoins)
  $(".boutonTerminer").click(clickBoutonTerminer)
  $("#logo-header-compter").click(clickHeader)
  $(".img-terminer").click(clickHeader)
  $("#tags").click(clickInput)
});


function clickRetourStats(){
  $(".ecran-apprendre").show()
  $(".ecran-stats").hide()
}

function clickBoutonTerminer(){
  $(".ecran-terminer").show()
  $(".ecran-compter").hide()
}

function clickBoutonMoins(){
  $( ".compte").html( parseInt($( ".compte").text()) - 1 );
}

function clickOrage(){
  $(".meteo").html("<img src=./images/orage.png>");
  $("#orage").addClass("select");
  $(".select").click(deselect)
}

function deselect(){
  $("#orage").removeClass("select");
  $("#orage").click(clickOrage)
  $("#pluie").removeClass("select");
  $("#pluie").click(clickPluie)
  $("#nuage").removeClass("select");
  $("#nuage").click(clickNuage)
  $("#neige").removeClass("select");
  $("#neige").click(clickNeige)
  $("#eclaircies").removeClass("select");
  $("#eclaircies").click(clickEclaircies)
  $("#soleil").removeClass("select");
  $("#soleil").click(clickSoleil)
}

function clickNeige(){
  $(".meteo").html("<img src=./images/neige.png>");
  $("#neige").addClass("select");
  $(".select").click(deselect)
}

function clickPluie(){
  $(".meteo").html("<img src=./images/pluie.png>");
  $("#pluie").addClass("select");
  $(".select").click(deselect)
}

function clickNuage(){
  $(".meteo").html("<img src=./images/nuageux.png>");
  $("#nuage").addClass("select");
  $(".select").click(deselect)
}

function clickSoleil(){
  $(".meteo").html("<img src=./images/soleil.png>");
  $("#soleil").addClass("select");
  $(".select").click(deselect)
}

function clickEclaircies(){
  $(".meteo").html("<img src=./images/eclaricies.png>");
  $("#eclaircies").addClass("select");
  $(".select").click(deselect)
}

function clickCommencer(){
  $(".ecran1").show()
  $(".ecran-accueil").hide()
}

function clickRetourInfos(){
  $(".ecran-apprendre").show()
  $(".ecran-infos").hide()
}

function clickValiderModif(){
  $(".zoneRenseignementsGPS").hide()
  $(".zoneRenseignementsMETEO").hide()
  $(".zoneRenseignements").show()
  $(".boutonValiderModif").hide()
  $(".boutonValider").show()
}

function clickGPS(){
  $(".zoneRenseignementsGPS").show()
  $(".zoneRenseignements").hide()
  $(".boutonValiderModif").show()
  $(".boutonValider").hide()
}

function clickMETEO(){
  $(".zoneRenseignementsMETEO").show()
  $(".zoneRenseignements").hide()
  $(".boutonValiderModif").show()
  $(".boutonValider").hide()
}

function clickRetourRenseignements(){
  $(".ecran1").show()
  $(".ecran-renseignements").hide()
}

function clickValiderRenseignements(){
  $(".ecran-compter").show()
  $(".ecran-renseignements").hide()
}


function clickApprendre(){
  $(".ecran-apprendre").show()
  $(".ecran1").hide()
}

function clickCompter(){
  $(".ecran-renseignements").show()
  $(".ecran1").hide()
}

function clickHeader(){
  $(".ecran1").show()
  $(".ecran-accueil").hide()
  $(".ecran-apprendre").hide()
  $(".ecran-compter").hide()
  $(".ecran-renseignements").hide()
  $(".ecran-infos").hide()
  $(".ecran-stats").hide()
  $(".ecran-terminer").hide()
}

function clickRetour(){
  $(".ecran1").show()
  $(".ecran-apprendre").hide()
}

function clickRetourCompter(){
  $(".ecran1").show()
  $(".ecran-compter").hide()
}

function clickDetails(){
  $(".compte").hide()
  $(".compte-details").show()
  $(".details").click(clickDetailsFermer)
  $(".details").html("fermer")
}

function clickDetailsFermer(){
  $(".compte").show()
  $(".compte-details").hide()
  $(".details").click(clickDetails)
  $(".details").html("+Détails")
}

$( function() {
  $( ".compter-draggable" ).draggable({
    revert: true


  });

  $( ".compter-droppable" ).droppable({drop: function( event, ui ) {

    $( ".compte").html( parseInt($( ".compte").text()) + 1 );
    $( ".statRouge").html( parseInt($( ".statRouge").text()) + 1 );

    if ( $(event.toElement).hasClass('canard-drag')) {
      $(".compte-canard").html( parseInt($( ".compte-canard").text()) + 1 );
      function clickBoutonMoins(){
        $( ".compte-canard").html( parseInt($( ".compte-canard").text()) - 1 );
      }

    }

    if ( $(event.toElement).hasClass('rouge-drag')) {
      $(".compte-rouge").html( parseInt($( ".compte-rouge").text()) + 1 );}

      if ( $(event.toElement).hasClass('pigeon-drag')) {
        $(".compte-pigeon").html( parseInt($(".compte-pigeon").text()) + 1 );}

        if ( $(event.toElement).hasClass('mesange-drag')) {
          $(".compte-mesange").html( parseInt($( ".compte-mesange").text()) + 1 );}

        }
      });

      function clickBoutonMoins(instance) {
        this.command = instance;
        this.done = [];

        this.execute = function execute() {
          this.command.execute();
          this.done.push(this.command);
        };
        this.undo = function undo() {
          var command = this.done.pop();
          command.undo();
        };
      }




      $( ".ui-droppable-hover" ).droppable({drop: function( event, ui ) {

        addClass(".ui-droppable-hover")

      }

    });

    $(".apprendre-draggable").draggable({
      revert: true

    });
    $(".apprendre-droppable-infos").droppable({drop: function( event, ui ) {

      $(".ecran-apprendre").hide()
      $(".ecran-infos").show()

    }
  });

  $(".apprendre-droppable-stats").droppable({drop: function(event, ui) {

    $(".ecran-apprendre").hide()
    $(".ecran-stats").show()
  }
});

$(".compter-draggable").draggable({
  snap : true
});

} );

$( function() {
  var availableTags = [
    "Prends-toi-Garde",
    "Joyeuse",
    "Amiens",
    "Auxerre",
    "Dijon",
    "Reims",
    "Rennes",
    "Dunkerque",
    "Montélimar",
    "Rouen",
    "Paris",
    "Lyon",
    "Le-Puy-en-Velay",
    "Strasbourg",
    "Bordeaux",

    ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
}
);

function validerGPS() {
          var x =
              document.getElementById("tags").value;

          document.getElementById(
            "rennes").innerHTML = x;
      }
