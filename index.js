document.addEventListener("DOMContentLoaded", () => {
    let button1 = "#3c8a2e";
    let button2 = "#3c8a2e";
    let button3 = "#3c8a2e";
    let button4 = "#3c8a2e";
    let button5 = "#3c8a2e";
  
    const buttonColors1 = {
      "#3c8a2e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/springgreen/springgreen-outside-bb.png",
      "#427730":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopengreen/usopengreen-outside-bb.png",
      "#84888b":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightgrey/lightgrey-outside-bb.png",
      "#72c7e7":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightblue/lightblue-outside-bb.png",
      "#3774aa":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/arctic/arctic-outside-bb.png",
      "#004165":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopenblue/usopenblue-outside-bb.png",
      "#8d3c1e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/brickred/brickred-outside-bb.png",
    };
  
    const buttonColors2 = {
      "#3c8a2e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/springgreen/springgreen-inside-bb.png",
      "#427730":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopengreen/usopengreen-inside-bb.png",
      "#84888b":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightgrey/lightgrey-inside-bb.png",
      "#72c7e7":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightblue/lightblue-inside-bb.png",
      "#3774aa":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/arctic/arctic-inside-bb.png",
      "#004165":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopenblue/usopenblue-inside-bb.png",
      "#8d3c1e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/brickred/brickred-inside-bb.png",
    };
  
    const buttonColors3 = {
      "#3c8a2e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/springgreen/springgreen-key-bb.png",
      "#427730":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopengreen/usopengreen-key-bb.png",
      "#84888b":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightgrey/lightgrey-key-bb.png",
      "#72c7e7":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightblue/lightblue-key-bb.png",
      "#3774aa":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/arctic/arctic-key-bb.png",
      "#004165":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopenblue/usopenblue-key-bb.png",
      "#8d3c1e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/brickred/brickred-key-bb.png",
    };
  
    const buttonColors4 = {
      "#3c8a2e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/springgreen/springgreen-perimeter-bb.png",
      "#427730":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopengreen/usopengreen-perimeter-bb.png",
      "#84888b":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightgrey/lightgrey-perimeter-bb.png",
      "#72c7e7":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightblue/lightblue-perimeter-bb.png",
      "#3774aa":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/arctic/arctic-perimeter-bb.png",
      "#004165":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopenblue/usopenblue-perimeter-bb.png",
      "#8d3c1e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/brickred/brickred-perimeter-bb.png",
    };
  
    const buttonColors5 = {
      "#3c8a2e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/springgreen/springgreen-center-bb.png",
      "#427730":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopengreen/usopengreen-center-bb.png",
      "#84888b":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightgrey/lightgrey-center-bb.png",
      "#72c7e7":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/lightblue/lightblue-center-bb.png",
      "#3774aa":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/arctic/arctic-center-bb.png",
      "#004165":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/usopenblue/usopenblue-center-bb.png",
      "#8d3c1e":
        "https://sportgroup-techhub.com/wp-content/plugins/apt-color-selector/assets/images/court/basketball/brickred/brickred-center-bb.png",
    };
  
    const innerColorsContainer = document.getElementById("innerColors");
    const outerColorsContainer = document.getElementById("outerColors");
    const keyColorsContainer = document.getElementById("keyColors");
    const perimeterColorsContainer = document.getElementById("perimeterColors");
    const centerColorsContainer = document.getElementById("centerColors");
  
    const innerImage = document.getElementById("innerImage");
    const outerImage = document.getElementById("outerImage");
    const keyImage = document.getElementById("keyImage");
    const perimeterImage = document.getElementById("perimeterImage");
    const centerImage = document.getElementById("centerImage");
  
    let selectedInnerButton = null;
    let selectedOuterButton = null;
    let selectedKeyButton = null;
    let selectedPerimeterButton = null;
    let selectedCenterButton = null;
  
    const createButtons = (colors, container, image, type) => {
      Object.keys(colors).forEach((color) => {
        const button = document.createElement("button");
        button.style.backgroundColor = color;
        button.style.height = "40px";
        button.style.width = "40px";
        button.style.marginBottom = "10px";
        button.style.marginRight = "10px";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
  
        if (
          (color === button1 && type === "inner") ||
          (color === button2 && type === "outer") ||
          (color === button3 && type === "key") ||
          (color === button4 && type === "perimeter") ||
          (color === button5 && type === "center")
        ) {
          button.style.border = "solid 4px black";
          if (type === "inner") selectedInnerButton = button;
          if (type === "outer") selectedOuterButton = button;
          if (type === "key") selectedKeyButton = button;
          if (type === "perimeter") selectedPerimeterButton = button;
          if (type === "center") selectedCenterButton = button;
        }
  
        button.onclick = () => {
          image.src = colors[color];
  
          if (type === "inner" && selectedInnerButton) {
            selectedInnerButton.style.border = "none";
          } else if (type === "outer" && selectedOuterButton) {
            selectedOuterButton.style.border = "none";
          } else if (type === "key" && selectedKeyButton) {
            selectedKeyButton.style.border = "none";
          } else if (type === "perimeter" && selectedPerimeterButton) {
            selectedPerimeterButton.style.border = "none";
          } else if (type === "center" && selectedCenterButton) {
            selectedCenterButton.style.border = "none";
          }
  
          button.style.border = "solid 4px black";
  
          if (type === "inner") {
            selectedInnerButton = button;
            button1 = color;
          } else if (type === "outer") {
            selectedOuterButton = button;
            button2 = color;
          } else if (type === "key") {
            selectedKeyButton = button;
            button3 = color;
          } else if (type === "perimeter") {
            selectedPerimeterButton = button;
            button4 = color;
          } else if (type === "center") {
            selectedCenterButton = button;
            button5 = color;
          }
        };
  
        container.appendChild(button);
      });
    };
  
    createButtons(buttonColors1, outerColorsContainer, outerImage, "outer");
    createButtons(buttonColors2, innerColorsContainer, innerImage, "inner");
    createButtons(buttonColors3, keyColorsContainer, keyImage, "key");
    createButtons(
      buttonColors4,
      perimeterColorsContainer,
      perimeterImage,
      "perimeter",
    );
    createButtons(buttonColors5, centerColorsContainer, centerImage, "center");
  });
  