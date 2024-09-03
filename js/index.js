function calculateAria() {
    // get base value
    const triangleBaseInput = document.getElementById('triangle-base-input');
    const triangleBaseInputText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseInputText);

    // get height value
    const triangleHeightInput = document.getElementById('triangle-height-input');
    const triangleHeightInputText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightInputText);

    // area result
    if(isNaN(base) || isNaN(height)){
        const triangleArea2 = document.getElementById('area2');
        triangleArea2.innerText = 'please give a number';
    }
    else{
        const result = 0.5 * base * height
        const triangleArea = document.getElementById('area');
        triangleArea.innerText = result;
        const triangleArea2 = document.getElementById('area2');
        triangleArea2.innerText = '';
        triangleBaseInput.value = '';
        triangleHeightInput.value = '';
        console.log(result);
    }
  
}



function calculateRectangle() {
    const rectangleWidth = document.getElementById('rectangle-width').value;
    const rectangleWidthToNumber = parseFloat(rectangleWidth);

    const rectangleHeight = document.getElementById('rectangle-height').value;
    const rectangleHeightToNumber = parseFloat(rectangleHeight);


    const rectangleArea = rectangleWidthToNumber * rectangleHeightToNumber;
    const rectangleAreaPlace = document.getElementById('rectangle-area');
    rectangleAreaPlace.innerText = rectangleArea;
}