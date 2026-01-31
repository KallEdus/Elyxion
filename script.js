// Inicializar partículas no background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#c9a86a" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#8b4513",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// Modal do Prólogo
const readPrologueBtn = document.getElementById('read-prologue');
const prologueModal = document.getElementById('prologue-modal');
const closeModal = document.querySelector('.close-modal');

readPrologueBtn.addEventListener('click', () => {
    prologueModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    prologueModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
    if (e.target === prologueModal) {
        prologueModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Animações ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.world-card, .character-card, .triad').forEach(el => {
    observer.observe(el);
});

// Navegação suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    });
});

// Efeito no botão CTA
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'translateY(-5px)';
});
ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'translateY(0)';
});

// Efeito de digitação no título principal
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

/* --- CARROSSEL DO MUNDO --- */
const worldCarousel = document.getElementById("world-carousel");
document.getElementById("world-left").onclick = () => {
    worldCarousel.scrollBy({ left: -350, behavior: "smooth" });
};
document.getElementById("world-right").onclick = () => {
    worldCarousel.scrollBy({ left: 350, behavior: "smooth" });
};

/* --- EXPANSÃO DAS ERAS (Antigo - mantido para compatibilidade) --- */
document.querySelectorAll('.era-card').forEach(card => {
    const closeBtn = card.querySelector('.close-era');
    // Abrir ao clicar (exceto botão)
    card.addEventListener('click', (e) => {
        if (e.target === closeBtn) return;
        card.classList.add('open');
    });
    // Fechar ao clicar no botão
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('open');
    });
});

/* --- CARROSSEL DE PERSONAGENS --- */
const charCarousel = document.getElementById("char-carousel");
document.getElementById("char-left").onclick = () => {
    charCarousel.scrollBy({ left: -330, behavior: "smooth" });
};
document.getElementById("char-right").onclick = () => {
    charCarousel.scrollBy({ left: 330, behavior: "smooth" });
};

/* --- EXPANSÃO DOS PERSONAGENS (Antigo - mantido para compatibilidade) --- */
document.querySelectorAll('.char-card').forEach(card => {
    const closeBtn = card.querySelector('.close-char');
    // Abrir ao clicar (exceto no botão)
    card.addEventListener('click', (e) => {
        if (e.target === closeBtn) return;
        card.classList.add('open');
    });
    // Fechar
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('open');
    });
});

/* --- EXPANSÃO DAS TRÍADES (Antigo - mantido para compatibilidade) --- */
document.querySelectorAll('.triad-card').forEach(card => {
    const closeBtn = card.querySelector('.close-triad');
    // Abrir ao clicar (exceto no botão)
    card.addEventListener('click', (e) => {
        if (e.target === closeBtn) return;
        card.classList.add('open');
    });
    // Fechar
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('open');
    });
});

/* --- EXPANSÃO DOS LOCAIS (Antigo - mantido para compatibilidade) --- */
document.querySelectorAll('.location-card').forEach(card => {
    const closeBtn = card.querySelector('.close-location');
    // abrir
    card.addEventListener('click', (e) => {
        if (e.target === closeBtn) return;
        card.classList.add('open');
    });
    // fechar
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('open');
    });
});

/* ===== POPUP UNIVERSAL (ADICIONADO NO FINAL) ===== */
const popupOverlay = document.getElementById("popup-overlay");
const popupBody = document.getElementById("popup-body");
const popupClose = document.getElementById("popup-close");

function openPopup(contentHTML) {
    popupBody.innerHTML = contentHTML;
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closePopup() {
    popupOverlay.classList.remove("active");
    popupBody.innerHTML = "";
    document.body.style.overflow = "auto";
}

popupClose.addEventListener("click", closePopup);

popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) closePopup();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});

/* ===== ATIVAR POPUP PARA TODOS OS CARDS ===== */
function activatePopup(cardSelector, expandSelector) {
    document.querySelectorAll(cardSelector).forEach(card => {
        const expand = card.querySelector(expandSelector);
        if (!expand) return;

        card.addEventListener("click", () => {
            openPopup(expand.innerHTML);
        });
    });
}

/* Eras */
activatePopup(".era-card", ".era-expand");

/* Personagens */
activatePopup(".char-card", ".char-expand");

/* Tríades */
activatePopup(".triad-card", ".triad-expand");

/* Locais */
activatePopup(".location-card", ".location-expand");

/* --- CARROSSEL DE LOCAIS --- */
const locationsCarousel = document.getElementById("locations-carousel");
const locLeftBtn = document.getElementById("loc-left");
const locRightBtn = document.getElementById("loc-right");

// Calcular o deslocamento com base na largura do card + gap
const cardWidth = 320; // Largura do card
const gap = 30; // Gap entre cards
const scrollAmount = cardWidth + gap;

// Função para verificar se é possível rolar
function updateArrowVisibility() {
    const maxScrollLeft = locationsCarousel.scrollWidth - locationsCarousel.clientWidth;
    
    // Esconder seta esquerda se estiver no início
    if (locationsCarousel.scrollLeft <= 10) {
        locLeftBtn.classList.add('hidden');
    } else {
        locLeftBtn.classList.remove('hidden');
    }
    
    // Esconder seta direita se estiver no final
    if (locationsCarousel.scrollLeft >= maxScrollLeft - 10) {
        locRightBtn.classList.add('hidden');
    } else {
        locRightBtn.classList.remove('hidden');
    }
}

// Eventos para as setas
locLeftBtn.addEventListener("click", () => {
    locationsCarousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 300); // Aguardar animação
});

locRightBtn.addEventListener("click", () => {
    locationsCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateArrowVisibility, 300); // Aguardar animação
});

// Atualizar visibilidade das setas ao rolar com mouse/gestos
locationsCarousel.addEventListener("scroll", updateArrowVisibility);

// Atualizar visibilidade inicial
window.addEventListener("load", updateArrowVisibility);
window.addEventListener("resize", updateArrowVisibility);

/* --- EXPANSÃO DOS LOCAIS (para compatibilidade) --- */
// Esta função mantém compatibilidade com o sistema antigo de expansão
document.querySelectorAll('.locations-carousel .location-card').forEach(card => {
    const closeBtn = card.querySelector('.close-location');
    
    // Abrir ao clicar (exceto botão de fechar)
    card.addEventListener('click', (e) => {
        if (e.target === closeBtn || e.target.classList.contains('close-location')) return;
        
        // Se tiver o sistema de popup universal, ele já cuida da abertura
        // Esta parte é apenas para compatibilidade com o sistema antigo
        if (!window.popupSystemActive) {
            card.classList.toggle('open');
        }
    });
    
    // Fechar ao clicar no botão (sistema antigo)
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('open');
        });
    }
});

