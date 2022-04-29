

function changeLayout(e){
    e.preventDefault();
    let select = document.getElementById('layoutSelect');
    let op = parseInt(select.options[select.selectedIndex].value);
    console.log(op);

    const createCells = (c) => {

        let cell = document.createElement("div")
                 cell.setAttribute('id','cell'+cellnum);

                 cell.style.backgroundColor = hexDict[c];
                 cell.style.gridArea = ('cell'+cellnum);

                 grid.appendChild(cell);

                 cellnum++;
             }



    let id = document.getElementById("grid");

    const hexDict = {
        'red':'#f74746',
        'orange':'#fa6c4a',
        'yellow':'#fa8d4f',
        'green':'#139973',
        'aqua':'#21b78f',
        'blue':'#31d4ab'
    }

    let child = grid.lastElementChild;

    while(child){
        grid.removeChild(child);
        child = grid.lastElementChild;
    }



    switch(op){
        case 1: {
            const colors = ['red','orange','yellow','green','aqua','blue']

            cellnum = 0;
            colors.forEach(createCells);
        grid.style.gridTemplateAreas = '"cell0 cell1 cell2" "cell3 cell4 cell5"';
            break;
        }
        case 2: {

            const colors = ['red', 'yellow', 'green','aqua'];
            cellnum =0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas= '"cell0 cell0 cell1" "cell2 cell3 cell1"';
            break;

        }
        case 3: {

            const colors = ['yellow','green','red','aqua']
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell0 cell0" "cell1 cell2 cell2" "cell3 cell3 cell3"';
            break;
        }
        case 4: {
            const colors = ['orange','red','green','blue','yellow'];
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell0 cell0 cell1 cell1 cell1" "cell2 cell2 cell3 cell3 cell3 cell3" "cell4 cell4 cell4 cell4 cell4 cell4"';
            break;

        }
        case 5: {
            const colors = ['green','orange','aqua','red','blue','orange','yellow','green','orange','aqua','yellow','red','green','red','blue','orange','green','blue'];
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell1 cell2 cell3 cell4 cell5" "cell6 cell7 cell8 cell9 cell10 cell11" "cell12 cell13 cell14 cell15 cell16 cell17"'
            break;
        }
        case 6: {
            const colors = ['red','green','yellow','orange','green','aqua','yellow','blue','red','green','blue','yellow'];
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell0 cell1 cell2" "cell3 cell4 cell5 ." "cell6 cell6 cell7 cell8" "cell6 cell6 cell9 ." "cell10 cell10 cell10 cell11"';
            break;
        }
        case 7: {
            const colors = ['yellow','blue','red','aqua'];
            cellnum =0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell1" "cell2 cell3" "cell2 cell3"';


            const subcolors = ['blue','green','yellow'];
            cellnum = colors.length;
            let temp_grid = grid;
            grid = document.getElementById('cell3');
            grid.style.display = "grid";
            grid.style.padding = "10px";
            grid.style.gap = "20px";

            subcolors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell4 cell4" "cell5 cell6"';
            grid = temp_grid;
            break;
        }
        case 8: {
            const colors = ['red','yellow','blue','aqua','green','yellow','red','orange','blue'];
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell1 cell2 cell3 cell4" "cell5 cell6 cell7 cell7 cell7" "cell8 cell8 cell8 cell8 cell8"';
            break;
        }
        case 9: {
            const colors = ['yellow','green','blue','red','yellow'];
            cellnum = 0;
            colors.forEach(createCells);
            grid.style.gridTemplateAreas = '"cell0 cell0 cell0" "cell1 cell2 cell2" "cell1 cell3 cell4"';
            break;
        }
        default: {
            break;
        }



    }





}


window.addEventListener("load",()=>{

let layoutButton= document.getElementById("layoutswap");

layoutButton.addEventListener("click",changeLayout);
});
