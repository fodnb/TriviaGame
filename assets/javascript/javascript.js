$(document).ready(function() {


    var timeClock;
    var play = false;
    var queAns = 0;
    var answer; // for the correct response to the answer from a through d
    var correct = 0; // count for how many correct responses received       
    var wrong = 0; // count for how many wrong responses received
    var counter = 5;
    var count = 0;
    var total = 0;
    var Questions = [
        ["What continent do Kangaroo's live on?", "Africa", "Asia", "North America", "Australia", "Australia"],
        ["What kingdom of animals do Frogs belong to?", "Amphibians", "Mammals", "Dinosaurs", "Birds", "Amphibians"],
        ["What is a Shark's skeleton made out of?", "Bone", "Wood", "Cartilage", "Nutella", "Cartilage"],
        ["Where do Birds fly for the Winter?", "GreenLand", "Iceland", "Maine", "South", "South"],
        ["What color is a Giraffes tongue?", "Red", "Orange", "Zebra Colored", "Black", "Black"],
        ["What is the skeleton of a Beetle called?", "Exoskeleton", "Bone", "Hardskin", "Gash", "Exoskeleton"],
        ["What color is a Polar Bear's skin?", "White", "Black", "Grey", "Red", "Black"],
        ["What color is a Cardinal?", "Blue", "Red", "Yellow", "Pink", "Red"],
        ["What can't Elephant's do?", "Jump", "Laugh", "Play", "Cry", "Jump"]
    ];




    //// what we do when we answer correctly
    function correctAnswer() {
        correct++;
        total++;
        console.log(total + "total in correct");
        console.log(typeof total + total);
        $("#wins").html(correct + " Right");
        queAns++;
        waitRight();
    }

    //// what we do when we have an incorrect answer
    function wrongAnswer() {
        wrong++;
        total++;
        queAns++;
        console.log(total + "total in wrong");
        console.log(typeof total + total);
        $("#losses").html(wrong + " Wrong");
        waitWrong();
            if(total === Questions.length){
                restart();
            }// this is what I just added

    }

    /// inbetween guesses screen - I still need to fix this
    function waitRight() {

        setTimeout(makeQuestion, 2000);
        setTimeout(theAnswers, 2000);
        count = 5;
        $("#timer").html(counter + " Seconds Left");
        $("#question").html("<h2>" + "YOU ARE CORRECT" + "</h2>");
        if (total === Questions.length) {
            restart();
        }

    }

    function waitWrong() {

         $("#question").html("<h2>" + " WRONG!" + " Correct answer: " +  (Questions[queAns-1][5]) + "</h2>");    
        setTimeout(makeQuestion, 2000);
        setTimeout(theAnswers, 2000);
        count = 5;
        $("#timer").html(" TIMES UP!");
       
        if (total === Questions.length) {
            restart();

        }

    }

    function restart() {

        $("#wins").html("0 Right");
        $("#losses").html("0 Wrong");
        $("#question").html("Want to Try Again? Click Here!");
        $(".answer").html("");
        queAns = 0;
        wrong = 0;
        correct = 0;
        total = 0;

    }


    console.log(Questions.length)

    function clicking() {

        $(".answer").on("click", function() {
            var Value = ($(this).attr("data-value"));
            clearInterval(timeClock);// added this to try and stop clock when clicking
            if (total < Questions.length) {
                $(".answer").off("click")

                if (Value === (Questions[queAns][5])) {
                    correctAnswer();
                } else if (Value != (Questions[queAns][5])) {
                    wrongAnswer();
                }
            } else if (total >= Questions.length) {
                $(".answer").off("click");
            }
        });


    }





    function reclicking() {
        $("#question").on("click", function() {
            var Value = $(this).attr("data-value")
            if (25 == $(this).attr("data-Value")) {
                restart();
                $("#question").off("click");

            }

        });

    }

    function makeQuestion() {
        $("#question").html("<h2>"+Questions[queAns][0] +"</h2>");
        console.log(queAns);
        clicking();     
        counter = 5;



          //    var timeClock = setInterval(function() {
          //     counter--;
          //     console.log(counter);
          //     $("#timer").html(counter + " Seconds Left");
          //     if (counter <= 0) {
          //       $("#question").html("<h2>" + "NOT QUICK ENOUGH" + "</h2>")
          //         clearInterval(timeClock);   
          //         total++;
          //         $("#losses").html(wrong + " Wrong");
          //        setTimeout(wrongAnswer, 1000);   
          //     }
          // },1000);





    }


    //guess is the choice from a thru d

    function theAnswers() {
        for (var guess = 1; guess <= 5; guess++) {
            $("#choice" + [0]).text(Questions[queAns][1]);
            $("#choice" + [0]).attr("data-Value", Questions[queAns][1]);
            $("#choice" + [1]).text(Questions[queAns][2]);
            $("#choice" + [1]).attr("data-Value", Questions[queAns][2]);
            $("#choice" + [2]).text(Questions[queAns][3]);
            $("#choice" + [2]).attr("data-Value", Questions[queAns][3]);
            $("#choice" + [3]).text(Questions[queAns][4]);
            $("#choice" + [3]).attr("data-Value", Questions[queAns][4]);
            var answer = Questions[queAns][5];
            $("#question").attr("data-Value", "25")
        }
    }

    //*************************THIS IS OUR GAME************************************************

   





    function game() {

      
        makeQuestion();
        theAnswers();
        console.log(typeof queAns + queAns);
        console.log(typeof total + total);

    }


  



    setTimeout(game, 1000);




  

    // TO DO LIST
    // fix time counter - done
    // make end game function - 
    


});







// 
// **********************************UNUSED CODE**************************************************************************
// 




// function tenSeconds() {

//     if (counter === 0) {
//         clearInterval(timeLeft)
//         wrong++;
//         count++;
//         $("#losses").html(wrong + " Wrong")
//             // wait();
//         console.log(wrong + " Wrong");
//     }
//     if (counter > 0) {
//         counter--;

//     }

//     $("#timer").html(counter);
//     $("#losses").html(wrong + " Wrong")

//     // wait();
// }
