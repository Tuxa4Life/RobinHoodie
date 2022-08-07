let createChangePasswordCard = () => {
    let editCard = document.createElement('div')
    document.body.appendChild(editCard)
    editCard.className = 'editCard drk'

    editCard.innerHTML = `
        <div class="edit-inputs">
            <label for="old">ძველი პაროლი:</label>
            <input class="old-input" name="old" type="password">
            <label for="old">ახალი პაროლი:</label>
            <input class="new-input" name="old" type="password">
        </div>
        <div class="edit-button-holder">
            <button class="pass-save-btn button-13">შენახვა</button>
            <button class="passCloseCard button-13">დახურვა</button>
        </div>
    `

    document.querySelector('.passCloseCard').addEventListener ('click', () => {
        editCard.remove ()
    })

    document.querySelector('.pass-save-btn').addEventListener ('click', () => {
        let oldInput = document.querySelector ('.old-input').value
        let newInput = document.querySelector ('.new-input').value

        let passwordFilter = /^[A-Za-z]\w{7,20}$/

        if (oldInput == userValues.password && newInput.match(passwordFilter) && oldInput != newInput) {
            userValues.password = newInput
            let tmp = JSON.stringify(userValues)
            localStorage.setItem('LS_values', tmp)

            window.location.reload ()
        } else {
            alert(`"Something's Wrong, I can feel it." - Eminem`)
        }
    })
}