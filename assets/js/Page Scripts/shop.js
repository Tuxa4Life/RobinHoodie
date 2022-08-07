window.addEventListener('load', () => {
    document.querySelector('.search-span-text').textContent = 'Reset'
    drawClothes ()
    
    if (localStorage.getItem('display')) {
        document.querySelector('.container').className = 'container minimal-container'
    } else {
        document.querySelector('.container').className = 'container'
    }
})

document.querySelector ('.bxs-category').addEventListener ('click', createCategoryCard)

document.querySelector('.grid-changer').addEventListener ('click', () => {
    document.querySelector('.container').classList.toggle('minimal-container')
    if (document.querySelector('.minimal-container')) {
        document.querySelector('.grid-changer').className = 'bx bx-grid-alt grid-changer'
        localStorage.setItem('display', true)
    } else {
        document.querySelector('.grid-changer').className = 'bx bx-columns bx-rotate-270 grid-changer'
        localStorage.removeItem('display')
    }
})

let drawClothes = () => {
    if (document.querySelector('.card')) {
        let cardArr = document.querySelectorAll('.card')
        for (let i = 0; i < cardArr.length; i++) {
            cardArr[i].remove ()
        }
    }

    // shuffling
    clothes_.forEach(e => {
        shuffle(e)
    });
    
    clothes_.map (parentArray => {
        parentArray.map (object => {
            let el = createCard(object.name, object.price, object.category, object.size, object.type, object.show, object.img, object.color)
            
            clothesSearchArr.unshift({element: el, name: object.name, price: object.price, category: object.category, size: object.size, type: object.type, show: object.show, img: object.size, color: object.color})
        })
    })
}