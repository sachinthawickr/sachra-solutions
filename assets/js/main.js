// Mobile Navigation Toggle Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Portfolio Category Filter Logic
const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-electric-600', 'text-white');
            b.classList.add('glass-card', 'text-slate-300');
        });

        btn.classList.add('bg-electric-600', 'text-white');
        btn.classList.remove('glass-card', 'text-slate-300');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox Modal Logic
function openLightBox(title, desc, imgUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-img').src = imgUrl;
    document.getElementById('lightbox-modal').classList.remove('hidden');
}

function closeLightBox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
}

// Send WhatsApp Direct Inquiry (Estimator)
function sendWhatsAppQuote(event) {
    event.preventDefault();
    const name = document.getElementById('cust-name').value;
    const service = document.getElementById('cust-service').value;
    const details = document.getElementById('cust-details').value;

    const phone = "94743603232";
    const text = `Hello Sachra Solutions,%0A%0AMy Name: ${encodeURIComponent(name)}%0AService Needed: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details)}`;

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// Contact Form Direct Redirect Logic
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const contact = document.getElementById('contact-email').value;
    const msg = document.getElementById('contact-msg').value;

    const phone = "94743603232";
    const text = `Hello Sachra Solutions,%0A%0AInquiry from website:%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AMessage: ${encodeURIComponent(msg)}`;

    const alertBox = document.getElementById('form-alert');
    if (alertBox) {
        alertBox.classList.remove('hidden');
    }

    setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 800);
}