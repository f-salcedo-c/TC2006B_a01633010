
function activityOne(evt){
    posX = evt.clientX;
    posY = evt.clientY;

    let mousePositionP = document.getElementById("mousePosition");
    mousePositionP.textContent = "Posición del mouse: " + posX + "," + posY;
}

function getFormvalue(){

    
    const form = document.getElementById("form1");
    let firstName = form.elements['fname'].value;
    let lastName = form.elements['lname'].value;
    
    let resultNode = document.createElement("p");
    resultNode.textContent = firstName + lastName;
    
    let formButton = form.elements[2];
    formButton.after(resultNode);
    event.preventDefault();
    
}

function insertRow(){
    
    let tableRef = document.getElementById("sampleTable");
    let rowNum = tableRef.rows.length;
    let colNum = tableRef.rows[0].cells.length;
    
    console.log(rowNum,colNum);
    
    let row = tableRef.insertRow();
    
    for (let i=1; i<=colNum; i++){
        let cell = row.insertCell();
        cell.innerHTML = "Row " + (rowNum + 1) + " column " + i;
        
    }
    
    
    
    
    
}

function insertColumn(){
    let tableRef = document.getElementById("sampleTable");
    
    let rowNum = tableRef.rows.length;
    let colNum = tableRef.rows[0].cells.length;
    
    
    for (let i=0; i<=rowNum; i++){
        let row = tableRef.rows[i]
        let cell = row.insertCell();
        cell.innerHTML = "Row " + (i+1) + " column " + (colNum + 1);
    }
    
    
    
    
}


function changeContent(){
    
    const form = document.getElementById("form2");
    let rowIndex = parseInt(form.elements['pickRow'].value);
    let colIndex = parseInt(form.elements['pickCol'].value);
    let content = form.elements['pickCont'].value;
    
    let tableRef = document.getElementById("myTable");
    
    let row = tableRef.rows[rowIndex].cells[colIndex].innerText = content;
    
    
    
}

function addColor(){
    
    const colorList = ['Red','Green','White','Black','Pink','Orange','Violet','Cyan'];
    let usedColors = [];
    
    let selectRef = document.getElementById("colorSelect");
    
    for (let i = 0; i<selectRef.length; i++){
        usedColors.push(selectRef[i].innerText);
    }
    
    console.log(usedColors);
    
    for (let i = 0; i<colorList.length; i++){
        if(usedColors.includes(colorList[i])){
            continue
        } else {
            let option = document.createElement('option');
            option.innerText = colorList[i];
            selectRef.appendChild(option);
            break;
        }
    }
    
}



function removeColor(){
    
    let selectRef = document.getElementById("colorSelect");
    
    if (selectRef.length != 1){
    let removedColor = selectRef[selectRef.length-1];
    selectRef.removeChild(removedColor);
    }
    
    
    
}

function changeImage(){
    let height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    let width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    let imgRef = document.getElementById("kitten-image");
    
    let newSource  = "http://placekitten.com/" + height +"/"+ width;
    
    imgRef.src = newSource;
}

document.addEventListener("mousemove",activityOne);

window.addEventListener("load",()=>{
    
    document.addEventListener("mousemove",activityOne);

    document.getElementById("addColorButton").addEventListener("click",addColor);
    document.getElementById("remColorButton").addEventListener("click",removeColor);
    document.getElementById("kitten-image").addEventListener("onmouseover",changeImage);
    
    
})




