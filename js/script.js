const photos = [
    "./assets/img/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
    "./assets/img/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
    "./assets/img/ant-rozetsky-H9m6mfeeakU-unsplash.jpg",
    "./assets/img/andrey-grinkevich-0x6RTts1jRU-unsplash.jpg",
    "./assets/img/chuttersnap-TSgwbumanuE-unsplash.jpg",
    "./assets/img/vivek-doshi-obsBswnv7FI-unsplash.jpg",
    "./assets/img/michal-mancewicz-R9L7ukhBSgs-unsplash.jpg",
    "./assets/img/john-towner-FD_sabE544U-unsplash.jpg",
    "./assets/img/torsten-dederichs-KrQJzrZiCak-unsplash.jpg",
    "./assets/img/jeremy-thomas-E0AHdsENmDg-unsplash.jpg",
    "./assets/img/the-new-york-public-library-KCj0iqbuXtU-unsplash.jpg",
    "./assets/img/kien-do-NjT4O7WYmwk-unsplash.jpg",
    "./assets/img/meiying-ng-OrwkD-iWgqg-unsplash.jpg",
    "./assets/img/maria-noel-rabunal-cantero-i-8YnfyF0VY-unsplash.jpg",
    "./assets/img/guillaume-galtier-3YrppYQPoCI-unsplash.jpg",
    "./assets/img/matt-hardy-55NI4yEAas4-unsplash.jpg",
    "./assets/img/sarah-dorweiler-9Z1KRIfpBTM-unsplash.jpg",
    "./assets/img/alex-b6C2oGuAads-unsplash.jpg",
    "./assets/img/abhinav-chitikela-OtW3XS4Yjd0-unsplash.jpg",
    "./assets/img/brad-mann-8U-vdPvBe50-unsplash.jpg",
    "./assets/img/patrick-ryan-3kUIaB2EPp8-unsplash.jpg",
    "./assets/img/erica-li-qbNcIFPC3qc-unsplash.jpg"
]

function changeBackground() {
    const random = Math.floor(Math.random() * photos.length)
    document.body.style.backgroundImage = `url(${photos[random]})`
}

changeBackground()

setInterval(changeBackground, 15000)