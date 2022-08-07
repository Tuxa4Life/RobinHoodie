let closeBtnID = 0
let orderBtnID = 0
let imageID = 0

let createMoreInfoCard = (img, name, category, size, type, show, price, color) => {
    let infoCard = document.createElement('div')
    infoCard.className = 'infoCardBackground'
    document.querySelector('.container').appendChild(infoCard)

    closeBtnID ++
    orderBtnID ++
    imageID ++

    infoCard.innerHTML = `
        <div class="infoCard drk">
            <div class="first-row">
                <div class="first-half">
                    <img class="img${imageID}" src="${img}" alt="Error, Please Refresh the page">
                </div>
                <div class="second-half">
                    <h2>${name}</h2>
                    <ul>
                        <li>ფასი: ${price}</li>
                        <li>კატეგორია: ${category}</li>
                        <li>ზომა: ${size}</li>
                        <li>ტიპი: ${type}</li>
                        <li>გადაცემა: ${show}</li>
                    </ul>
                    <div class="purchase-section">
                        <h3>${price} ლარი</h3>
                        <a href="https://m.me/robinhoodierustavi" target="_blank"><button style="width: auto; padding: 0 4px;" class="order-btn${orderBtnID}">შეკვეთა <i class='bx bxl-messenger'></i></button></a>
                    </div>
                </div>
            </div>
            <div class="second-row">
                <p style="font-size: 24px;">პროდუქტის შეძენისთვის გთხოვთ დაგვიკავშირდით მესენჯერზე.</p>
                <button class="closeBtn${closeBtnID} button-13">დახურვა</button>
            </div>
        </div>
    `

    document.querySelector(`.closeBtn${closeBtnID}`).addEventListener('click', () => {
        infoCard.remove ()
    })
    document.querySelector(`.img${imageID}`).addEventListener('click', () => {
        popOutImage(img)
    })
}