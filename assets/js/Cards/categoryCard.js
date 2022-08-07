let createCategoryCard = () => {
    let card = document.createElement('div')
    document.body.appendChild(card)
    card.className = 'categoryCardBackground'
    card.innerHTML = `
        <div class="ccContent">
            <h2>Choose Category</h2>
            <div class="selectors">
                <div class="selector slc1"><p>სამოსი</p></div>
                <div class="selector slc2"><p>ჩანთები</p></div>
                <div class="selector slc3"><p>ჭიქები</p></div>
                <div class="selector slc4"><p>კალენდრები</p></div>
                <div class="selector slc5"><p>ალბომები</p></div>
                <div class="selector slc6"><p>პოსტერები</p></div>
                <div class="selector slc7"><p>ტილოები</p></div>
            </div>
            <button class="ccCloseBtn button-13">Close</button>
        </div>
    `

    document.querySelector('.ccCloseBtn').addEventListener('click', () => {
        card.remove ()
        if (document.querySelector('.container').childNodes.length == 0) {
            let p = document.createElement('h2')
            document.querySelector('.container').appendChild(p)
            p.innerHTML = `გთხოვთ აირჩიოთ კატეგორია <span class="inline-category-button" style="text-decoration: underline; color: darkblue; cursor: pointer;">კატეგორიის ღილაკიდან.</span>`
            p.style.maxWidth = '80%'
            p.style.textAlign = 'center'

            document.querySelector('.inline-category-button').addEventListener ('click', createCategoryCard)
        }
    })

    document.querySelector('.slc1').addEventListener('click', () => {
        drawClothes ()
        card.remove ()
        if (document.querySelector('.inline-category-button')) {
            document.querySelector('.inline-category-button').parentElement.remove ()
        }
    })
    document.querySelector('.slc2').addEventListener('click', () => {
        noService ()
    })
    document.querySelector('.slc3').addEventListener('click', () => {
        noService ()
    })
    document.querySelector('.slc4').addEventListener('click', () => {
        directToMessenger ()
    })
    document.querySelector('.slc5').addEventListener('click', () => {
        directToMessenger ()
        
    })
    document.querySelector('.slc6').addEventListener('click', () => {
        directToMessenger ()
        
    })
    document.querySelector('.slc7').addEventListener('click', () => {
        directToMessenger ()
        
    })
}