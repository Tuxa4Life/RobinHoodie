// filter
const chevDown = document.querySelector('.bx-chevron-down')
const filterDiv = document.querySelector('.filter-field')
const filterContent = document.querySelector('.filter-content')

let filterState = false
let toggleFilter = () => {
    filterState = !filterState
    if (filterState == true) {
        filterDiv.className = 'filter-field drk openedFilter'
        chevDown.style.transform = 'rotate(180deg)'
        document.querySelector('.filter-header').style.borderBottom = '1px gray solid'
        setTimeout(() => {filterContent.style.display ='block'}, 200)
    } else {
        filterDiv.className = 'filter-field drk closedFilter'
        chevDown.style.transform = 'rotate(0deg)'
        document.querySelector('.filter-header').style.borderBottom = 'none'
        filterContent.style.display = 'none'
    }
}
chevDown.addEventListener('click', toggleFilter)


// small device
const chevLeft = document.querySelector('.chevv')
const sFilter = document.querySelector('.sFilter')

chevLeft.addEventListener('click', () => {
    sFilter.classList.toggle('active')
    if (chevLeft.classList.contains('bx-chevron-left')) {
        chevLeft.className = 'bx bx-chevron-right chevv'
    } else {
        chevLeft.className = 'bx bx-chevron-left chevv'
    }
})