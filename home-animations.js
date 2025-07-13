// home-animations.js

gsap.registerPlugin(ScrollTrigger);

// Animate main heading
gsap.from("#home h1", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power2.out",
});

// Animate subtext
gsap.from("#home p", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
});

// about-animations.js

gsap.registerPlugin(ScrollTrigger);

// TITLE: Masuk dengan aura berat dan kerajaan
gsap.from(".about-text h2", {
  opacity: 0,
  scale: 0.9,
  y: -50,
  skewY: 5,
  duration: 1.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".about-text h2",
    start: "top 85%",
  }
});

// PARAGRAPH: Naratif lembut, naik perlahan
gsap.from(".about-text p", {
  opacity: 0,
  y: 40,
  duration: 1.4,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-text p",
    start: "top 90%",
  }
});

// IMAGE: Dramatis, zoom pelan dan dari kanan
gsap.from(".about-image img", {
  opacity: 0,
  x: 80,
  scale: 1.15,
  duration: 1.6,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".about-image img",
    start: "top 85%",
  }
});

// QUOTE: Sakral, melayang dari bawah
gsap.from(".about-quote p", {
  opacity: 0,
  y: 30,
  duration: 1.3,
  delay: 0.3,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".about-quote p",
    start: "top 95%",
  }
});


gsap.registerPlugin(ScrollTrigger);

// 1. Title & intro animation
gsap.from("#character h2", {
  opacity: 0,
  y: -40,
  duration: 1.4,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#character h2",
    start: "top 85%",
  }
});

gsap.from(".character-intro", {
  opacity: 0,
  y: 20,
  duration: 1.2,
  delay: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".character-intro",
    start: "top 85%",
  }
});

// 2. Animasi untuk semua character-card yang punya class 'visible'
function animateVisibleCards() {
  gsap.utils.toArray(".character-card.visible").forEach((card, i) => {
    if (!card.classList.contains("animated")) {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1.2,
        delay: i * 0.1,
        ease: "power3.out",
      });
      card.classList.add("animated");
    }
  });
}

// 3. Setup untuk initial visible cards (4 pertama)
document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".character-card");
  const loadMoreBtn = document.getElementById("load-more-btn");
  let visibleCount = 4;

  // Tampilkan 4 pertama
  for (let i = 0; i < visibleCount; i++) {
    allCards[i].classList.add("visible");
  }
  animateVisibleCards();

  // Setup load more button
  loadMoreBtn.addEventListener("click", () => {
    const nextBatch = [...allCards].slice(visibleCount, visibleCount + 4);
    nextBatch.forEach(card => {
      card.classList.add("visible");
    });
    visibleCount += 4;

    animateVisibleCards();

    // Sembunyikan tombol jika sudah habis
    if (visibleCount >= allCards.length) {
      loadMoreBtn.style.display = "none";
    }
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#family h2", {
  opacity: 0,
  y: -50,
  duration: 1.6,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#family h2",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});
