const $home = document.querySelector('.home-link')
const $shop = document.querySelector('.search-box')
const $profile = document.querySelector('.profile-link')
const $bookmarks = document.querySelector('.bookmark-link')
const $contact = document.querySelector('.contact-link')

$home.addEventListener('click', () => window.location.href = 'index.html')
$shop.addEventListener('click', () => {
    if (document.body.contains(document.querySelector('.search-field'))) {
        setTranslate(1, 1, draggedItem);
        currentX = initialX = currentY = initialY = xOffset = yOffset = 1
    } else {
        window.location.href = 'shop.html'
    }
})
$profile.addEventListener('click', () => {
    if (loginState) {
        createProfileCard ()
    } else {
        window.location.href = 'profile.html'
    }
})
$bookmarks.addEventListener('click', () => window.location.href = 'bookmarks.html')
$contact.addEventListener('click', () => window.location.href = 'contact.html')


const $Shome = document.querySelector('.Shome-link')
const $Sshop = document.querySelector('.Ssearch-box')
const $Sprofile = document.querySelector('.Sprofile-link')
const $Sbookmarks = document.querySelector('.Sbookmark-link')
const $Scontact = document.querySelector('.Scontact-link')

$Shome.addEventListener('click', () => window.location.href = 'index.html')
$Sshop.addEventListener('click', () => {
    if (document.body.contains(document.querySelector('.search-field'))) {
        setTranslate(1, 1, draggedItem);
    } else {
        window.location.href = 'shop.html'
    }
})
$Sprofile.addEventListener('click', () => {
    if (loginState) {
        createProfileCard ()
    } else {
        window.location.href = 'profile.html'
    }
})
$Sbookmarks.addEventListener('click', () => window.location.href = 'bookmarks.html')
$Scontact.addEventListener('click', () => window.location.href = 'contact.html')
