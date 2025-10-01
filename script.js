document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-mobile');
    
    // Função para atualizar o ícone do menu
    function updateMenuIcon(isActive) {
        const icon = menuBtn.querySelector('i');
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Toggle menu ao clicar no botão
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        updateMenuIcon(navList.classList.contains('active'));
    });
    
    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            updateMenuIcon(false);
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
            navList.classList.remove('active');
            updateMenuIcon(false);
        }
    });
    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .hero, .section-title, .citacoes-right, .citacoes-left, .portfolio, .portfolio-item, .botao-zap, .contato-conteudo, .info-item i, .contato-redes a, .faq-columns, .faq-item, .about, .about p, .about-image img, .social-btn i');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            element.classList.add('hide');
            observer.observe(element);
        });
    };
    
    const style = document.createElement('style');
    style.textContent = `
        .hide {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s, transform 1s;
        }
        .animate {
            opacity: 1;
            transform: translateY(0px);
        }
    `;
    document.head.appendChild(style);
    
    animateOnScroll();
});

// Portfolio items click handler
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        window.open(item.querySelector('img').src, '_blank');
    });
});

// Header scroll effect
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

// FAQ accordion - verificar se funciona para menu feito em código.
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        
        if (item.classList.contains('active')) {
            // Animação de fechamento suave
            answer.style.maxHeight = answer.scrollHeight + 'px';
            setTimeout(() => {
                answer.style.maxHeight = '0';
            }, 10);
        } else {
            // Animação de abertura
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
        item.classList.toggle('active');
    });
});

function alternarContraste() {
    document.body.classList.toggle('contraste-ativo');
}


// menu que some e aparece ao scroll
let lastScroll = 0;
const menu = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});

