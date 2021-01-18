# 21 01 18 JS DOM Events Lecture

## Set Up
1. Create and link HTML, CSS, and JS files
1. Add the assignment title to the HTML page
1. Check that files are linked

## Requirements
1. Recreate the wireframe using grid display to position elements. 
    - Add a div element below the assignment title that will serve as the grid container
    - Add titles/placeholder information for each grid cell in nested div elements
    - In the CSS file, select the container div, set the display property to grid and define the correct grid template columns
2. Display a form to the left with Name and Number fields.
    - Add a form element inside the first grid cell
    - Add the required input fields and a submit button
3. Display an image in the center
    - Add an image tag in the second grid cell with [this](https://unsplash.com/photos/9o8YdYGTT64) image
    - Resize the image by setting the width property to 100% of the image's parent element
4. When the form is submitted, append the form submission values to the entires element.
    - Select both form inputs, the submit button, and the entries element in the JS file
    - Add an event listener to the submit button that calls a function to handel the form submission
    - Define a function to handel form submission. This function should : 
         - prevent the page from reloading using `event.preventDefault()`
         - append the values from both form inputs to the innerHTML of the entires div using self assignment
         - clear the values of both form inputs
5. Optionally use bootstrap to add additional styling.
    - Link the bootstrap CDN above the link to your CSS file
    - Add bootstrap classes to the form submission button
    - Add bootstrap classes to the assignment heading