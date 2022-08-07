favArr.map (e => {
    let favCard = createBookmarkCard(e.header, e.price, e.category, e.size, e.type, e.show, e.img)
    return favCard
})

if (document.querySelector('.container').children.length == 0) {
    let p = document.createElement('h2')
    document.querySelector('.container').appendChild(p)
    p.innerHTML = `შეინახეთ პროდუქტები <a style="text-decoration: underline;" href="shop.html">მაღაზიის</a> გვერდიდან.`
    p.style.maxWidth = '80%'
    p.style.textAlign = 'center'
}
