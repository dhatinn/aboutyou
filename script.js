document.addEventListener("DOMContentLoaded", function() {
    const lyrics = document.querySelectorAll('.lyrics p'); // Mengambil semua elemen paragraf dalam lirik
    lyrics.forEach((lyric, index) => {
        lyric.style.animationDelay = `${index * 5}s`; // Mengatur delay animasi berdasarkan indeks
    });
})

