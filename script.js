document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-mobile');
    const navList = document.querySelector('.nav-list');
    
    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        
        // Altera o ícone do botão
        const icon = this.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fecha o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Efeito de scroll suave para links internos
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
    
    // Adiciona classe ao header quando scrollar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Animação ao rolar a página (Intersection Observer)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .section-title');
        
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
            transform: translateY(20px);
            transition: opacity 0.6s, transform 0.6s;
        }
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    animateOnScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    
    menuToggle.addEventListener('click', function() {
        navMobile.classList.toggle('active');
        
        // Altera o ícone
        const icon = this.querySelector('i');
        if (navMobile.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});



document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      window.open(item.querySelector('img').src, '_blank');
    });
  });




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



const menuBtn = document.getElementById('menu-toggle');
const navMobile = document.getElementById('nav-mobile');

menuBtn.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
    if (!navMobile.contains(e.target) && !menuBtn.contains(e.target)) {
        navMobile.classList.remove('active');
    }
});
