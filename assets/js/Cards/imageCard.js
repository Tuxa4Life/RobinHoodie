let popOutImage = (link) => {
    let imgBackground = document.createElement('div')
    document.body.appendChild(imgBackground)
    imgBackground.className = 'imgBackground'
    imgBackground.innerHTML = `
        <img src="${link}" alt="Error, Please Refresh the page">
    `

    imgBackground.addEventListener('click', () => {
        imgBackground.remove ()
    })
}