const topHalf = document.getElementById("top-half");

topHalf.addEventListener("touchstart", (e) => {
    e.preventDefault(); //Prevents refresh when scrolling up and zooming
    console.log("Touches", e.touches.length)
    console.log("Targets", e.targetTouches.length)
    console.log("Chamged", e.changedTouches.length)
    if(e.targetTouches.length >= 2){
        console.log("2 or more touches")
    }
});

document.addEventListener("click", (e) => {
    console.log("Click");
});

document.addEventListener("touchstart", e=>{
    ;[...e.changedTouches].forEach(touch=>{
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.left = touch.clientX + "px"
        dot.style.top = touch.clientY + "px"
        dot.id = touch.identifier
        document.body.appendChild(dot)
})
})

document.addEventListener("touchmove", e=>{
    ;[...e.changedTouches].forEach(touch=>{
        const dot = document.getElementById(touch.identifier)
        dot.style.left = touch.clientX + "px"
        dot.style.top = touch.clientY + "px"
    })
    })
document.addEventListener("touchend", e=>{
    ;[...e.changedTouches].forEach(touch=>{
        const dot = document.getElementById(touch.identifier)
        document.body.removeChild(dot)
    })
})

document.addEventListener("touchcancel", e=>{ //In case touchend doesn't work
    ;[...e.changedTouches].forEach(touch=>{
        const dot = document.getElementById(touch.identifier)
        document.body.removeChild(dot)
    })
})