let moreBtnID = 0
let favBtnID = 0

let createCard = (header, price, category, size, type, show, img, color, parent) => {
    let card = document.createElement('div')
    card.className = 'card drk'
    if (parent) {
        document.querySelector(`.${parent}`).appendChild(card)
    } else {
        document.querySelector('.container').appendChild(card)
    }

    moreBtnID ++
    favBtnID ++

    card.innerHTML = `
        <img src="${img}" alt="Error, Please Refresh the page">
        <div class="card-description"> 
            <h3>${header}</h3>
            <ul>
                <li>ფასი: ${price}</li>
                <li>კატეგორია: ${category}</li>
                <li>ზომა: ${size}</li>
                <li>ტიპი: ${type}</li>
                <li>გადაცემა: ${show}</li>
            </ul>
            <div class="button-holder">
                <button class="moreBtn${moreBtnID}">მეტი</button>
                <i class='favBtn${favBtnID} bx bx-bookmark-plus'></i>
            </div>
        </div>
    `

    let menuBtn = document.querySelector(`.moreBtn${moreBtnID}`)
    menuBtn.addEventListener ('click', () => {
        createMoreInfoCard(img, header, category, size, type, show, price, color)
    })

    let favBtn = document.querySelector(`.favBtn${favBtnID}`)
    favBtn.addEventListener ('click', () => {
        favBtn.style.display = 'none'
        let tmp = {
            img: img,
            header: header,
            size: size,
            price: price,
            category: category,
            type: type,
            show: show,
        }
        favArr.unshift(tmp)
        let JsonString = JSON.stringify(favArr)
        localStorage.setItem('favourites', JsonString)
    })

    return card
}

