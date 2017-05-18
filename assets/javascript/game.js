//	Gem Collector Javascript

        var targetScore
        var currentScore
        var gem1Value
        var gem2Value
        var gem3Value
        var gem4Value
        var wins = 0
        var losses = 0


    
    function randomizer(){
        currentScore = 0;
        targetScore = Math.floor(Math.random() * 102 + 19);
        gem1Value = Math.floor(Math.random() * 12 + 1);
        gem2Value = Math.floor(Math.random() * 12 + 1);
        gem3Value = Math.floor(Math.random() * 12 + 1);
        gem4Value = Math.floor(Math.random() * 12 + 1);
        $("#targetScoreBox").html(targetScore);
        $("#currentScoreBox").html(currentScore);

    }

    function checkScore(){
            if (currentScore === targetScore) {
                wins++;
                $("#winCounter").html(wins);
                $("#winCounter").css("color", "yellow");
                $("#lossCounter").css("color", "red");
                randomizer();

            } else if(currentScore > targetScore) {
                losses++;
                $("#lossCounter").html(losses);
                $("#winCounter").css("color","red");
                $("#lossCounter").css("color","yellow");
                randomizer();
            }
     }

    $(document).ready(function(){
        $("#gem1Icon").on("click", function(){
            currentScore += gem1Value;
            $("#currentScoreBox").html(currentScore);
            checkScore();
        });
    });

    $(document).ready(function(){
        $("#gem2Icon").on("click", function(){
            currentScore += gem2Value;
            $("#currentScoreBox").html(currentScore);
            checkScore();
        });
    });
 
    $(document).ready(function(){
        $("#gem3Icon").on("click", function(){
            currentScore += gem3Value;
            $("#currentScoreBox").html(currentScore);
            checkScore();
        });
    });  

    $(document).ready(function(){
        $("#gem4Icon").on("click", function(){
            currentScore += gem4Value;
            $("#currentScoreBox").html(currentScore);
            checkScore();
        });
    });  
