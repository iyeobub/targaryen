document.addEventListener('DOMContentLoaded', function() {
  // CHARACTER CARD CODE
  const characterCards = document.querySelectorAll('.character-card');
  characterCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return;
      }
      characterCards.forEach(function(c) {
        c.classList.remove('active');
      });
      card.classList.add('active');
    });
  });

  // FAMILY SLIDER CODE
  const slider = document.querySelector('.slider');
  const cards = document.querySelectorAll('.house-card');
  const leftArrow = document.querySelector('.slider-arrow.left');
  const rightArrow = document.querySelector('.slider-arrow.right');

  let currentIndex = 0;

  function scrollToCenter(index) {
    if (index < 0 || index >= cards.length) return;

    const card = cards[index];
    const sliderCenter = slider.parentElement.clientWidth / 2;
    const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
    const scrollPos = cardCenter - sliderCenter;

    slider.parentElement.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });

    cards.forEach((c, i) => {
      if (i === index) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });
  }

  leftArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCenter(currentIndex);
    }
  });

  rightArrow.addEventListener('click', function() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      scrollToCenter(currentIndex);
    }
  });

  // Initialize on load
  scrollToCenter(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.character-card');
  const loadMoreBtn = document.getElementById('load-more-btn');

  let currentIndex = 0;
  const batchSize = 4;

  function showNextCards() {
    const nextBatch = currentIndex + batchSize;
    for (let i = currentIndex; i < nextBatch && i < cards.length; i++) {
      cards[i].classList.add('visible');
    }
    currentIndex += batchSize;

    if (currentIndex >= 8) {
      loadMoreBtn.style.display = 'inline-block'; // Munculin tombol setelah 8 card
    }

    if (currentIndex >= cards.length) {
      loadMoreBtn.style.display = 'none'; // Semua card udah ditampilin
    }
  }

  // Initial tampilkan 4 cards
  showNextCards();

  // Scroll event (buat munculin sampai 8 card dulu)
  window.addEventListener('scroll', () => {
    if (currentIndex < 8 && window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
      showNextCards();
    }
  });

  // Button click (buat munculin batch berikutnya)
  loadMoreBtn.addEventListener('click', () => {
    showNextCards();
  });
});
