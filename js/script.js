const photos = [
    "./assets/img/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
    "./assets/img/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
    "./assets/img/ant-rozetsky-H9m6mfeeakU-unsplash.jpg",
    "./assets/img/chad-madden-cPa-7yByq3o-unsplash.jpg",
    "./assets/img/federica-galli-pF1ug8ysTtY-unsplash.jpg",
    "./assets/img/andrey-grinkevich-0x6RTts1jRU-unsplash.jpg",
    "./assets/img/chuttersnap-TSgwbumanuE-unsplash.jpg",
    "./assets/img/vivek-doshi-obsBswnv7FI-unsplash.jpg",
    "./assets/img/michal-mancewicz-R9L7ukhBSgs-unsplash.jpg",
    "./assets/img/john-towner-FD_sabE544U-unsplash.jpg",
    "./assets/img/torsten-dederichs-KrQJzrZiCak-unsplash.jpg",
    "./assets/img/c-g-JgDUVGAXsso-unsplash.jpg",
    "./assets/img/alex-dukhanov-ZxZQk7777R4-unsplash.jpg",
    "./assets/img/shot-by-cerqueira-0o_GEzyargo-unsplash.jpg",
    "./assets/img/jeremy-thomas-E0AHdsENmDg-unsplash.jpg",
    "./assets/img/the-new-york-public-library-KCj0iqbuXtU-unsplash.jpg",
    "./assets/img/kien-do-NjT4O7WYmwk-unsplash.jpg",
    "./assets/img/meiying-ng-OrwkD-iWgqg-unsplash.jpg",
    "./assets/img/maria-noel-rabunal-cantero-i-8YnfyF0VY-unsplash.jpg",
    "./assets/img/guillaume-galtier-3YrppYQPoCI-unsplash.jpg"
]

function changeBackground() {
    const random = Math.floor(Math.random() * photos.length)
    document.body.style.backgroundImage = `url(${photos[random]})`
}

changeBackground()

setInterval(changeBackground, 15000)