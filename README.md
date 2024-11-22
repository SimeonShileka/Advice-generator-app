# Advice-generator-app

# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Live Site URL: (https://simeonshileka.github.io/Advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned to retrieve resources form an API and display them on the page. I also learned how to use JavaScript to generate a random number and use it to select a random piece of advice from the API. Additionally, I learned how to store information in localStorage and retrieve it later.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="css/style.css">
  <title>Frontend Mentor | Advice generator app</title>

</head>
<body>
  <div>
    <p id="adviceNo"></p> 

    <p id="adviceText"></p>
    <img src="images/pattern-divider-desktop.svg" alt="pattern divider ">
    
    <button type="button" id="generateBtn" class="icon-btn">
      <img src="images/icon-dice.svg" alt="Generate advice icon">
    </button>
  </div>
  
  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/SimeonShileka" target="blank">Simeon T. Shileka</a> &copy 2024
  </footer>

  <script src="index.js"></script>
</body>
</html>
```
```css
*{
    padding: 0;
    margin: 0;
}

body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(217, 19%, 38%);
    flex-direction: column;
    font-size: 24px;
    min-height: 100vh; 
}

div {
    background-color: hsl(217, 19%, 24%); 
    padding: 20px; 
    border-radius: 15px; 
    width: 80%; 
    max-width: 600px; 
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
    gap: 10px;
    font-family: "Mantope", sans-serif;
    font-weight: 800;

    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

div p {
    margin-bottom: 15px;
}

.icon-btn{
    position: relative;
    margin-top: 20px;
}

#adviceNo {
    color: hsl(150, 100%, 66%);
}

#adviceText {
    color: white;
}

.icon-btn {
    background-color: hsl(150, 100%, 66%);
    position: absolute;
    align-items: center;
    bottom: -15px;
    
    transform: traslateX(-50%);
    border-radius: 50%; 
    border: none; 
    padding: 15px; 
    cursor: pointer;
}

.icon-btn:hover {
  background-color: hsl(150, 100%, 50%); 
  transform: scale(1.1); 
}
  
.icon-btn img {
    width: 20px; 
    height: 20px;
}

footer.attribution {
    background-color: #f8f8f8; 
    color: hsl(228, 45%, 44%);
    font-size: 15px;
    text-align: center; 
    padding: 10px 0; 
    position: static; 
    width: 100%; 
    margin-top: auto; 
}
```
```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

For my future projects I wouyld like to work more with complex API integrations and learn more about state management.


### Useful resources

- [Resource 1](https://youtu.be/37vxWr0WgQk?feature=shared) - This video helped in understanding how to use JavaScript to retrive resources from an API.
- [Resource 2](https://youtu.be/QdITQ4upjME?feature=shared) - This video helped In positionong the dice button beyond the container.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- GitHub - [Simeon T. Shileka](https://github.com/SimeonShileka)
- Frontend Mentor - [shilekast@gmail.com](https://www.frontendmentor.io/profile/SimeonShileka)
