const categorySelector = document.querySelector('[name="Category"]')
const sizeSelector = document.querySelector('[name="Sizes"]')
const typeSelector = document.querySelector('[name="Type"]')
const priceSelector = document.querySelector('[data-range]')

const filterBtn = document.querySelector('.filterBtn')
const resetBtn = document.querySelector('.resetBtn')

let SV = {
    category: '',
    size: '',
    type: '',
    price: '',
}

let getValues = () => {
    SV.category = categorySelector.value.toLowerCase()
    SV.size = sizeSelector.value
    SV.type = typeSelector.value.toLowerCase()
    SV.price = priceSelector.value.toLowerCase()
}

let filterClothes = () => {
    getValues ()
    clothesSearchArr.forEach(obj => {
        let isVisible = obj.category.toLowerCase().includes(SV.category) && obj.size.includes(SV.size) && obj.type.toLowerCase().includes(SV.type) && obj.price <= SV.price

        obj.element.classList.toggle('hide', !isVisible)
    })
}

let filterAll = () => {
    filterClothes ()
}

filterBtn.addEventListener('click', filterAll)
resetBtn.addEventListener('click', () => {
    clothesSearchArr.forEach(obj => {
        obj.element.classList.remove('hide')
    })
})

const scategorySelector = document.querySelector('[name="sCategory"]')
const ssizeSelector = document.querySelector('[name="sSizes"]')
const stypeSelector = document.querySelector('[name="sType"]')
const spriceSelector = document.querySelector('[data-sRange]')

const sfilterBtn = document.querySelector('.sFilterBtn')
const sresetBtn = document.querySelector('.sResetBtn')

let sSV = {
    category: '',
    size: '',
    type: '',
    price: '',
}

let getSValues = () => {
    sSV.category = scategorySelector.value.toLowerCase()
    sSV.size = ssizeSelector.value
    sSV.type = stypeSelector.value.toLowerCase()
    sSV.price = spriceSelector.value.toLowerCase()
}

let sFilterClothes = () => {
    getSValues ()
    clothesSearchArr.forEach(obj => {
        let isVisible = obj.category.toLowerCase().includes(sSV.category) && obj.size.includes(sSV.size) && obj.type.toLowerCase().includes(sSV.type) && obj.price <= sSV.price

        obj.element.classList.toggle('hide', !isVisible)
    })
}

let sFilterAll = () => {
    sFilterClothes ()
}

sfilterBtn.addEventListener('click', sFilterAll)
sresetBtn.addEventListener('click', () => {
    clothesSearchArr.forEach(obj => {
        obj.element.classList.remove('hide')
    })
})