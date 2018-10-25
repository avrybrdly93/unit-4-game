$(document).ready(function(){
    
//variable instantiations
let userTotal = 0;
let userTotalDiv = $("<div>");
let userGoal = Math.floor(Math.random()*50) + 30;
let wins = 0;
let losses = 0;
let winsDiv = $("<div>");
let lossesDiv = $("<div>");
let crystals = [];
let userGoalDiv = $("<div>");
let htmlDiv = "hello";

//append divs to body element
userTotalDiv.appendTo("body");
userGoalDiv.appendTo("body");
winsDiv.appendTo("body");
lossesDiv.appendTo("body");

//display information to user
userTotalDiv.text("Total: " + userTotal);
userGoalDiv.text("Goal: " + userGoal);
winsDiv.text("Wins: " + wins);
lossesDiv.text("Losses: " + losses);

//Creates an array of four crystal objects
for(let i = 0; i < 4; i++) {
    crystals.push({
        value: Math.floor(Math.random() * 20) + 1,
        divSelector: htmlDiv,
        addToTotal: function() {
            userTotal = userTotal + this.value;
            userTotalDiv.text("Total: " + userTotal);
            console.log(this.value);
        },
        winChecker: function() {
            if(userTotal === userGoal) {
                wins++;
                winsDiv.text("Wins: " + wins);
                userTotal = 0;
                userGoal = Math.floor(Math.random()*50) + 30;
                userGoalDiv.text("Goal: " + userGoal);
            }
            else if(userTotal > userGoal) {
                losses++;
                lossesDiv.text("Losses: " + losses);
                userTotal = 0;
                userGoal = Math.floor(Math.random()*50) + 30;
                userGoalDiv.text("Goal: " + userGoal);
            }
        },
    });
    // creates image element for each crystal
    crystals[i].divSelector = $("<img>");
    crystals[i].divSelector.appendTo("body");
    crystals[i].divSelector.addClass("crystals");
}
// assigns specific images to img divs
crystals[0].divSelector.attr("src", "assets/images/crystal[0].png");
crystals[1].divSelector.attr("src", "assets/images/crystal[1].png");
crystals[2].divSelector.attr("src", "assets/images/crystal[2].png");
crystals[3].divSelector.attr("src", "assets/images/crystal[3].png");

// click event
for(let j = 0; j < 4; j++) {
    crystals[j].divSelector.on("click", function() {
        crystals[j].addToTotal();
        crystals[j].winChecker();
    });
}
});