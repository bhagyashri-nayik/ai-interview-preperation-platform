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