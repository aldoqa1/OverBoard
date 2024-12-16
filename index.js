const container = document.getElementById("container");
const colors = ["rgb(76, 108, 98)", "rgb(208, 108, 98)", "rgb(208, 237, 124)", "rgb(159, 124, 254)" ]

for(let x=0; x<221; x++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover", ()=>{
        box.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            box.style.backgroundColor = "rgb(66, 64, 64)";
        }, 1000);
    });
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*(colors.length))];
    
}