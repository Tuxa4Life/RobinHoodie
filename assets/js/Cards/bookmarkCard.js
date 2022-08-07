let moreBtnID = 0
let favBtnID = 0

let createBookmarkCard = (header, price, category, size, type, show, img) => {
    let card = document.createElement('div')
    card.className = 'card drk'
    document.querySelector('.container').appendChild(card)

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
                <i class='favBtn${favBtnID} bx bx-bookmark-minus'></i>
            </div>
        </div>
    `

    let moreBtn = document.querySelector(`.moreBtn${moreBtnID}`)
    moreBtn.addEventListener ('click', () => {
        createMoreInfoCard(img, header, category, size, type, show, price)
    })

    let favBtn = document.querySelector(`.favBtn${favBtnID}`)
    favBtn.addEventListener ('click', () => {
        let i = favBtn - 1
        favArr.splice(i, 1)
        localStorage.setItem('favourites', JSON.stringify(favArr))
        card.remove ()
    })

    return card
}