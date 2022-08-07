let createProfileCard = () => {
    let profileCard = document.createElement('div')
    profileCard.className = 'profileCardBackground'
    document.body.appendChild(profileCard)

    profileCard.innerHTML = `
        <div class="profileCard drk">
            <h2>Profile</h2>
            <div class="profile-content">
                <h3>${userValues.username} <i class='bx bxs-edit'></i></h3>
                <span>UID: ${userValues.UID} <i onclick=" window.location.href = './Easter Egg/easteregg.html'" class="fa fa-light fa-fish"></i></span>
                <h5>${userValues.email}</h5>
                <p style="text-decoration: underline; font-size: 12px; cursor: pointer;" class="change-password-btn">პაროლის შეცვლა</p>
            </div>
            <div class="profile-btn-holder">
                <button class="logOutBtn button-13">Log Out</button>
                <button class="PCClose button-13">დაუხრვა</button>
            </div>
        </div>
    `

    document.querySelector('.logOutBtn').addEventListener ('click', () => {
        localStorage.setItem('loginState', false)
        window.location.reload ()
    })

    document.querySelector('.PCClose').addEventListener ('click', () => {
        profileCard.remove ()
    })

    document.querySelector('.bxs-edit').addEventListener ('click', () => {
        createEditCard ()
    })

    document.querySelector('.change-password-btn').addEventListener ('click', () => {
        createChangePasswordCard ()
    })
}