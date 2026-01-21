/* ============================================================
   DATA & INITIALIZATION
   ============================================================ */
const products = [
    {id:0, name:'PowerMax Treadmill 300i', price:45999, tags:['gym','equipment'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHFwFb3OgJI0iq1j2jZgbhIB95ASuKc4pYw&s'},
    {id:1, name:'Adjustable Dumbbells 24kg', price:12499, tags:['gym','equipment'], img:'https://www.theflexnest.com/cdn/shop/products/1_26f7cabd-aa5a-4256-9c47-24833f009086_500x500.jpg?v=1635230112'},
    {id:2, name:'Spin Bike SB300', price:28499, tags:['gym','equipment'], img:'https://www.theflexnest.com/cdn/shop/products/BIKESCREENcopy_500x500.jpg?v=1678169138'},
    {id:3, name:'Multi Gym Bench Pro', price:18999, tags:['gym','equipment'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfVubSHHrSVXBjh3-vf3htKeb8CCsO8AGsnw&s'},
    {id:4, name:'Nike Dry-Fit T-Shirt', price:3499, tags:['gym','running','apparel'], img:'https://images-cdn.ubuy.co.in/65a6851a915eff16ad5ad884-nike-men-39-s-dry-tee-drifit-cotton.jpg'},
    {id:5, name:'Adidas Training Shorts', price:3299, tags:['gym','apparel'], img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/04e4b3e930cb46cd89791e7493f93ebb_9366/Power_Workout_2-in-1_Shorts_Black_IK9683_01_laydown.jpg'},
    {id:6, name:'HRX High Waist Leggings', price:1799, tags:['yoga','gym','apparel'], img:'https://assets.myntassets.com/w_200,q_30,dpr_3,fl_progressive,f_webp/assets/images/27175316/2024/6/26/9af3eaaa-ca5d-4dd7-8e27-1512f95e08d61719396791095-HRX-by-Hrithik-Roshan-Women-Tights-3561719396790449-1.jpg'},
    {id:7, name:'Puma Sports Bra Medium', price:2299, tags:['yoga','apparel'], img:'https://images.puma.net/images/679472/54/mod01/fnd/IND/w/800/h/800/'},
    {id:8, name:'ASICS Gel-Kayano 30', price:12999, tags:['running','footwear'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYrapGvATyDl-JsA2o27UGiyWHVhYbIKpAQ&s'},
    {id:9, name:'Nike Metcon 9', price:9999, tags:['gym','footwear'], img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSy9ainU_tMi8CbX-SzjOn-k_Z2fcZrd9mhTXpnFVl-i_jOsdAd4EK5ZIdhubbs_rhFakboLStnAqio6DZ_XT4BrXgbrXIQw0EdAQ969UdoYefof0cbZikJWwk'},
    {id:10, name:'Reebok Nano X4', price:8999, tags:['gym','footwear'], img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpE0cee6xKKZo4_MLyq1DKKTPtlRD5GDkjg1JBQ_aK26X5UTfyvLMn4KO5xqL_fbK9qWXaxusMfkJ96BJYRlySATBnPDVkWkr4cgbx5mgbUIOE6mQx1g-k'},
    {id:11, name:'Liforme Yoga Mat 6mm', price:3999, tags:['yoga','accessories'], img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYfWwwRx0HxKMUoNQZoV2FamvtR2ChbSbQhPdUcdM5SleRY3QuTaEQ9WGdi1lmShXLUqchoCKYgf5O_SppZsR4RZ6UzLZWtQJqseL-Mnn4'},
    {id:12, name:'Everlast Boxing Gloves 14oz', price:2499, tags:['boxing','accessories'], img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSX-BqbbaEvVIWPgO85J9Ha8NHKvXmP0VANhxKfQCICM_tq8lN--un8ntBuZM2XD8cGJVwV0Xlyxlh4Y_38V-7xWd2dofYpfOTa9cOUEiwWyN5-G9E-lwR3vQ'},
    {id:13, name:'Optimum Nutrition Whey Gold 2kg', price:5999, tags:['gym','nutrition'], img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuBEAp7YeLFjh72DOZAJQK3-kQmWbOE-ipF6Bwk85RB152FE34PP6H5SPN2W5LvhlSM8L8sQL7eBYN_mJUHSDVMbKYilPbg7Y3KxAXpv4uOkpU7OMf83TamQ'},
    {id:14, name:'MuscleBlaze BCAA Pro 30srv', price:1499, tags:['gym','nutrition'], img:'https://m.media-amazon.com/images/I/61e2j2JElQL.jpg'},
    {id:15, name:'Decathlon Domyos Dumbbells', price:2999, tags:['gym','equipment'], img:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBimSwoOEm9AX3mNizWaCsmw8rik1eO191hGVErgIxyAlBBtTOE169kV-lj2h6MbUpFic2DjlSoUzEotph0mHekDGPqhlWDYRD3SXWO9FTX-8vd2HoPHcSKA'},
    {id:16, name:'Cult Running T-Shirt Men', price:999, tags:['running','apparel'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tOUWQ16dLf1W-i6D8AjaekMNht4lvvuaKA&s'},
    {id:17, name:'Under Armour Charged Shoes', price:7999, tags:['running','footwear'], img:'https://www.underarmour.in/media/catalog/product/cache/49532286929922a0f94d0abd09ec96a5/3/0/3028234-001-10-120240724105722672.jpeg'},
    {id:18, name:'Resistance Bands Set', price:1999, tags:['gym','accessories'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh26SYH3J6NpQ2O9AJLuKDT4qOL8QhYyUgcg&s'},
    {id:19, name:'Creatine Monohydrate 300g', price:1299, tags:['gym','nutrition'], img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3JspbOzw-vOagkxUe4xyljLRVHIlu-4e0A&s'}
];

let cart = JSON.parse(localStorage.getItem('fytro_cart')) || [];
let quantities = JSON.parse(localStorage.getItem('fytro_quantities')) || {};
let currentFilter = 'all';

products.forEach(p => {
    if (quantities[p.id] === undefined) quantities[p.id] = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();
    setupFilters();
    setupCartToggle();
    setupFeedbackForm();
    setupContactForm();
    setupSignup();
});

/* ============================================================
   PRODUCT & CART LOGIC
   ============================================================ */

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products
        .filter(p => currentFilter === 'all' || p.tags.includes(currentFilter))
        .map(p => `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h5>${p.name}</h5>
                    <div class="price">₹${p.price.toLocaleString()}</div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
                        <span class="qty-display">${quantities[p.id] || 0}</span>
                        <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `).join('');
}

function changeQty(id, delta) {
    let item = cart.find(p => p.id === id);
    let newQty = Math.max(0, (item?.quantity || 0) + delta);

    if (newQty === 0) {
        cart = cart.filter(p => p.id !== id);
    } else if (item) {
        item.quantity = newQty;
    } else {
        cart.push({ ...products.find(p => p.id === id), quantity: newQty });
    }

    quantities[id] = newQty;
    saveAndSync();
}

function updateCartDisplay() {
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total');
    const itemsEl = document.getElementById('cart-items');

    let totalQty = 0, totalPrice = 0;

    itemsEl.innerHTML = cart.length === 0 ? '<p>Your cart is empty</p>' :
        cart.map(item => {
            totalQty += item.quantity;
            totalPrice += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <span>${item.name} (x${item.quantity})</span>
                    <span>₹${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            `;
        }).join('');

    countEl.textContent = totalQty;
    totalEl.textContent = totalPrice.toLocaleString();
}

function saveAndSync() {
    localStorage.setItem('fytro_cart', JSON.stringify(cart));
    localStorage.setItem('fytro_quantities', JSON.stringify(quantities));
    updateCartDisplay();
    renderProducts();
}

/* ============================================================
   FILTERS & NAVIGATION
   ============================================================ */

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();
        });
    });
}

function shopNavigate(filter) {
    currentFilter = filter;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    renderProducts();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
}

/* ============================================================
   CART UI & CHECKOUT
   ============================================================ */

function toggleCart() {
    document.getElementById('cart-sidebar')?.classList.toggle('active');
}

function setupCartToggle() {
    document.querySelector('.cart-icon')?.addEventListener('click', e => {
        e.preventDefault();
        toggleCart();
    });
}

function checkout() {
    if (!cart.length) return;
    cart = [];
    quantities = {};
    saveAndSync();
    document.getElementById('order-modal')?.classList.remove('hidden');
    toggleCart();
}

function showFeedback() {
    document.getElementById('order-modal')?.classList.add('hidden');
    document.getElementById('feedback-modal')?.classList.remove('hidden');
}

function goToHome() {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   FEEDBACK → GOOGLE SHEETS
   ============================================================ */
function setupFeedbackForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        /* Email validation */
        const emailInput = document.getElementById('feedback-email');
        if (!emailInput) {
            alert('Email field not found in feedback form');
            return;
        }

        const email = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;

        if (!emailRegex.test(email)) {
        alert('PLease enter valid email address');
        emailInput.focus();
        return;
        }


        /* Phone number validation */
        const phoneInput = document.getElementById('feedback-phone');
        if (!phoneInput) {
            alert('Phone number field not found in feedback form');
            return;
        }

        const phone = phoneInput.value.trim();
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit mobile number');
            phoneInput.focus();
            return;
        }

        /* Feedback data object */
        const feedback = {
            orderId: 'FYTRO-' + Date.now(),
            timestamp: new Date().toLocaleString('en-IN'),
            email: email,  // new column
            phone: phone,   //  new column
            productRating: document.getElementById('product-rating')?.value || '',
            deliveryRating: document.getElementById('delivery-rating')?.value || '',
            source: document.getElementById('feedback-source')?.value || '',
            comments: document.getElementById('feedback-text')?.value || ''
        };

        const SCRIPT_URL =
            'https://script.google.com/macros/s/AKfycbwTfZFteJkQHHBBJ_bqIqcTWoRrXpCk2tjtBVfWC6QbKxQcvlrhtTixFrlmd9T1oVjw/exec';

        const btn = document.getElementById('submit-feedback-btn');
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Saving';
        }

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(feedback)
            });

            alert('Feedback submitted successfully!');
            form.reset();
            goToHome();
        } catch {
            alert('Error submitting feedback. Please try again.');
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.textContent = 'Submited Feedback';
            }
        }
    });
}

/* ============================================================
   EMAIL (GMAIL)
   ============================================================ */

function openGmail(subject, body) {
    const gmailLink =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=fytrofitness@gmail.com" +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    const a = document.createElement("a");
    a.href = gmailLink;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function setupContactForm() {
    document.getElementById('contact-form')?.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const emailInput = document.getElementById('contact-email');
        const phoneInput = document.getElementById('contact-phone');
        const message = document.getElementById('contact-message').value;

        if (!name.trim()) {
        alert('Please enter your name to submit the form');
        document.getElementById('contact-name').focus();
        return;
        }

        /* ✅ Email validation */
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        /* ✅ Phone validation */
        const phone = phoneInput.value.trim();
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit indian mobile number');
            phoneInput.focus();
            return;
        }

        if (!message.trim()) {
            alert('Please enter the message to submit the form');
            document.getElementById('contact-message').focus();
            return;
        }

        const body =
            "Customer Inquiry\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n\n" +
            "Message:\n" + message;

        openGmail("FYTRO Support - Contact Form", body);
        this.reset();
    });
}

function setupSignup() {
    document.getElementById("signupBtn")?.addEventListener("click", () => {
        const name = document.getElementById("signupName")?.value || 'N/A';
        const phone = document.getElementById("signupPhone")?.value || 'N/A';
        const email = document.getElementById("signupEmail")?.value || 'N/A';

        const body =
            "New Website Signup\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Email: " + email;

        openGmail("Website Signup - FYTRO", body);
    });
}

/* ============================================================
   EXIT TAB
   ============================================================ */

function exitTab() {
    document.getElementById('feedback-modal')?.classList.add('hidden');
    document.getElementById('order-modal')?.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


