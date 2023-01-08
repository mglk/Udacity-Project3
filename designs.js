'use strict';

// getting HTML elements
//can be moved to functions but they will lower performance because the
//created in each function call
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const submitBtn = document.querySelector('input[type = submit]');
const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('pixelCanvas');

submitBtn.addEventListener('click', makeGrid);
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(ev) {
    ev.preventDefault();

    //resting the grid
    grid.querySelectorAll('tr').forEach(tr => tr.remove());

    //adding row and columns to the grid
    for (let i = 0; i < gridHeight.value; i++){
        const row = document.createElement ('tr');
        
        for (let j = 0; j < gridWidth.value; j++){
            const column = document.createElement ('td');
            column.style.backgroundColor = '#ffffff';
            column.addEventListener('click', cellPainterHandler);;
            row.appendChild(column);
        }
        grid.appendChild(row);
    }
}

function cellPainterHandler(ev){
    const WHITE = 'rgb(255, 255, 255)';
      let isPainted;
    
    if (ev.target.style.backgroundColor === WHITE){
        ev.target.style.backgroundColor = colorPicker.value;
    } else {
        ev.target.style.backgroundColor = WHITE;
    }
}
