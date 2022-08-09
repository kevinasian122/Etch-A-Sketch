const container = document.querySelector(".container");

function createGrid(num){ //takes dimension, creates grid and adds lighting effect
    for(let i = 0; i< num; i++){
        for(let j = 0; j < num; j++){
            const div = document.createElement("div");
            div.classList.add("box");
            let dim = 1100/num;
            div.style.height= `${dim}px`;
            div.style.width= `${dim}px`;
            container.appendChild(div);
        }
        
    }
    const divs = document.querySelectorAll(".box")

    divs.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.classList.add('light');
        })
    })
}




function buttonClick(){ //input
    jQuery('.container').empty();
    let num = window.prompt("Enter the number of squares per side", 16);
    if(num < 100){
        createGrid(num);
    }
}