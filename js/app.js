const canvas  = document.getElementById('canvas');
const gridInput = document.getElementById('grid-size');
const gridBtn = document.getElementById('grid-btn')
const clearBtn = document.getElementById('clear');
const boxArr = [];
const filledBoxArr = [];

const editGridSize = () => {
    let inputVal = gridInput.value;
    gridInput.value = '';
}
const clearGrid = () => {
    clearBtn.addEventListener('click', () => {
        filledBoxArr.forEach(element => element.style.backgroundColor = 'white')
    });
};
const createGrid = (gridSize) => {
    const boxLen = (canvas.offsetHeight/gridSize) + 'px';
    for(let i = 0; i < gridSize; i++){
        let column = document.createElement('div');
        for(let j = 0; j < gridSize; j++){
            let box = document.createElement('div');
            box.style.cssText = `border: 0.5px solid black; 
                                 height:${boxLen}; 
                                 width:${boxLen}; 
                                 box-sizing: border-box;
                                 background-color: white;`;
            boxArr.push(box);
            column.appendChild(box);
        }
        canvas.appendChild(column);
    }
    boxArr.forEach(element => {
        element.addEventListener('mouseover',() => {
            filledBoxArr.push(element);
            element.style.backgroundColor = 'black'
        });
    });
};
clearGrid();
editGridSize();
createGrid(100);