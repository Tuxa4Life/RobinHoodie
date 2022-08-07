let createEditCard = () => {
    let editCard = document.createElement('div')
    document.body.appendChild(editCard)
    editCard.className = 'editCard drk'

    editCard.innerHTML = `
        <div class="edit-inputs">
            <label for="newName">ახალი სახელი</label>
            <input class="edit-input" name="newName" type="text">
        </div>
        <div class="edit-button-holder">
            <button class="edit-save-btn button-13">შენახვა</button>
            <button class="editCloseCard button-13">დახურვა</button>
        </div>
    `

    document.querySelector('.editCloseCard').addEventListener ('click', () => {
        editCard.remove ()
    })

    document.querySelector ('.edit-save-btn').addEventListener ('click', () => {
        let input = document.querySelector('.edit-input').value
        userValues.username = input
        let tmp = JSON.stringify(userValues)
        localStorage.setItem('LS_values', tmp)

        window.location.reload ()
    })
}