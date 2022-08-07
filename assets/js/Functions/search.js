let searchBtn = document.querySelector('[src="assets/icons/search-solid.svg"]')
let input = document.querySelector('[placeholder="Search"]')
let draggedItem = document.querySelector('.search-field')


let rect = draggedItem.getBoundingClientRect()

let searchState = true
let toggleSearchState = () => {
    searchState = !searchState
    if (searchState == true) {
        draggedItem.className = 'search-field drk openedSearch'
        if (initialX >= 850) {
            draggedItem.style.flexDirection = 'row-reverse'
        } else {
            draggedItem.style.flexDirection = 'row'
        }
        setTimeout(() => {input.style.display = 'block'}, 100)
    } else {
        draggedItem.className = 'search-field drk closedSearch'
        input.style.display = 'none'
    }
}

searchBtn.addEventListener('dblclick', toggleSearchState)






let dragItem = document.querySelector("#drag");
let container = document.querySelector("main");

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
        active = true;
        draggedItem.style.boxShadow = '0px 0px 15px 5px rgba(0,0,0,0.5)'
        draggedItem.style.zIndex = 101
    }

}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
    draggedItem.style.zIndex = 99
    draggedItem.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0)'
}

function drag(e) {
    if (active) {
    
        e.preventDefault();
        
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, draggedItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}