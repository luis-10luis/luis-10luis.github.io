// Schimbă culoarea titlului la click
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? 'white' : 'red';
});

// Afișează un mesaj în consolă
console.log('Site-ul a fost încărcat cu succes!');