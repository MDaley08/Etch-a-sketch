const canvas  = document.getElementById('canvas');
const boxArr = [];

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
                                 background-color: white;`
            boxArr.push(box);
            column.appendChild(box);
        }
        canvas.appendChild(column);
    }
    boxArr.forEach(element => {
        element.addEventListener('mouseover',() => alert('temp') )
    });
}
createGrid(100);