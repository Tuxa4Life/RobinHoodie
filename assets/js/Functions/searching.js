let searchInput = document.querySelector('#searchbar')

let keyword

let clothesSearchArr = []

let searchClothes = () => {
    keyword = searchInput.value.toLowerCase()

    clothesSearchArr.forEach (obj => {
        let isVisible = obj.name.toLowerCase().includes(keyword) || obj.category.toLowerCase().includes(keyword) || obj.show.toLowerCase().includes(keyword)
        obj.element.classList.toggle('hide', !isVisible)
    })
}

let searchAll = () => {
    searchClothes ()
}

searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
    }
});

searchBtn.addEventListener('click', searchAll)