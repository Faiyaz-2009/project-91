player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" +player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -" +player2_name;



function send(){
    get_word1 = document.getElementById("word1").value;
    console.log(get_word1);

    get_word2 = document.getElementById("word2").value;
    console.log(get_word2);

    actual_answer = parseInt(get_word1) * parseInt(get_word2)


    question_word = "<h4>Q."+get_word1 + " X " + get_word2+"</h4>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    input_box = "<br>Answer : <input type= 'text' id='input_check_box'>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";


}