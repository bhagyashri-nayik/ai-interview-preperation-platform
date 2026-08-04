const button = document.querySelector("button");

button.addEventListener("click", function(){
    alert("Welcome to AI Interview Platform!");
});
function recommendTool() {

    let task = document
        .getElementById("task")
        .value.toLowerCase();

    let result = document
        .getElementById("result");

    if(task.includes("code")){
        result.innerHTML =
        "Recommended: ChatGPT, Claude";
    }
    else if(task.includes("image")){
        result.innerHTML =
        "Recommended: Midjourney, DALL·E";
    }
    else if(task.includes("video")){
        result.innerHTML =
        "Recommended: Runway AI";
    }
    else{
        result.innerHTML =
        "Recommended: ChatGPT";
    }
}
const questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why should we hire you?",
    "Where do you see yourself in 5 years?"
];

let index = 0;

function startInterview() {
    document.getElementById("question").innerHTML = questions[index];
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        document.getElementById("question").innerHTML = questions[index];
    } else {
        document.getElementById("question").innerHTML = "Interview Completed!";
    }
}