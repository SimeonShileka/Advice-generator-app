let adviceCounter = localStorage.getItem("adviceCounter")
    ? parseInt(localStorage.getItem("adviceCounter"), 10)
    : 1;


const generateButton = document.getElementById("generateBtn");


function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response=> {
        if(!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("adviceText").innerHTML = data.slip.advice;
        document.getElementById("adviceNo").innerHTML = "Advice #" + adviceCounter;

        adviceCounter ++;

        localStorage.setItem("adviceCounter", adviceCounter)

    })
    .catch(error=> console.error("Fetch error: ", error));
};

fetchAdvice();

generateButton.addEventListener("click", fetchAdvice);