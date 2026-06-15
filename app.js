// ============================================
// GROUP D HEALTH SERVICES - MAIN APPLICATION
// Dynamic Page Rendering & Interactive Features
// ============================================

// DOM Elements
const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const closeChatBtn = document.getElementById('closeChatBtn');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatInput = document.getElementById('chatInput');

// Current active page
let currentPage = 'home';

// Mobile menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('href').substring(1);
        navigateTo(page);
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Navigation function
function navigateTo(page) {
    currentPage = page;
    
    // Update active state on nav links
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').substring(1);
        if (linkPage === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Render the appropriate page
    switch(page) {
        case 'home':
            renderHome();
            break;
        case 'about':
            renderAbout();
            break;
        case 'services':
            renderServices();
            break;
        case 'doctors':
            renderDoctors();
            break;
        case 'appointments':
            renderAppointments();
            break;
        case 'blog':
            renderBlog();
            break;
        case 'contact':
            renderContact();
            break;
        default:
            renderHome();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// PAGE RENDERING FUNCTIONS
// ============================================

// Render Home Page
function renderHome() {
    mainContent.innerHTML = `
        <section class="hero-section">
            <div class="container">
                <div class="hero-wrapper">
                    <div class="hero-content">
                        <span class="hero-badge">🏥 Premier Healthcare in Sierra Leone</span>
                        <h1 class="hero-title">Your Health is <span class="highlight">Our Priority</span></h1>
                        <p class="hero-description">Group D Health Services provides world-class medical care across Sierra Leone. With modern facilities, expert doctors, and compassionate staff, we're committed to your wellbeing.</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="navigateTo('appointments')">
                                <i class="fas fa-calendar-check"></i> Book Appointment
                            </button>
                            <button class="btn btn-outline" onclick="navigateTo('contact')">
                                <i class="fas fa-phone-alt"></i> Emergency Contact
                            </button>
                        </div>
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Locations</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">120+</div>
                                <div class="stat-label">Medical Staff</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">10k+</div>
                                <div class="stat-label">Happy Patients</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Emergency Care</div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600" alt="Group D Health Medical Team">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container">
            <h2 class="section-title">Our <span>Services</span></h2>
            <div class="cards-grid" id="home-services-grid"></div>
        </section>
        
        <section class="container">
            <h2 class="section-title">What Our <span>Patients Say</span></h2>
            <div class="cards-grid" id="home-testimonials-grid"></div>
        </section>
        
        <section class="container">
            <div class="form-container" style="text-align: center;">
                <h3>Emergency? We're Here 24/7</h3>
                <p style="margin-bottom: 1rem;">Call our ambulance service immediately for medical emergencies.</p>
                <button class="btn btn-primary" onclick="window.location.href='tel:999'" style="font-size: 2rem; padding: 1rem 2rem;">
                    <i class="fas fa-ambulance"></i> 999
                </button>
            </div>
        </section>
    `;
    
    // Render services preview
    const servicesGrid = document.getElementById('home-services-grid');
    const previewServices = services.slice(0, 6);
    servicesGrid.innerHTML = previewServices.map(service => `
        <div class="service-card">
            <i class="${service.icon} service-icon"></i>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <small style="color: var(--primary);">${service.price}</small>
        </div>
    `).join('');
    
    // Render testimonials preview
    const testimonialsGrid = document.getElementById('home-testimonials-grid');
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="stars">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">— ${testimonial.name}, ${testimonial.location}</p>
        </div>
    `).join('');
}

// Render About Page
function renderAbout() {
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">About <span>Group D Health</span></h1>
            
            <div style="background: var(--card-bg); border-radius: 2rem; padding: 3rem; margin-bottom: 2rem;">
                <h2>Our Story</h2>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Group D Health Services was founded by Petros Joel Kamara and Adama Caroline Bangura, two visionary graduates who shared a dream of transforming healthcare in Sierra Leone. After completing their university education, they recognized the urgent need for modern, accessible, and high-quality medical services across the country.
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Together with their Manager, Alhaji Babah Mansaray, they built a healthcare network that spans from the capital Freetown to rural communities including Bo, Kenema, Makeni, Port Loko, Bonth, and Moyamba. Their mission is simple: to ensure every Sierra Leonean has access to world-class medical care regardless of their location or financial status.
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                    Today, Group D Health operates multiple hospitals and clinics, employs over 120 medical professionals, and has served more than 10,000 satisfied patients. Our facilities are equipped with modern medical technology, and our staff is trained to deliver compassionate, patient-centered care.
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                <div class="service-card">
                    <i class="fas fa-eye service-icon"></i>
                    <h3>Our Vision</h3>
                    <p>To be Sierra Leone's most trusted healthcare provider, setting the standard for medical excellence in West Africa.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-bullseye service-icon"></i>
                    <h3>Our Mission</h3>
                    <p>Deliver accessible, affordable, and high-quality healthcare through innovation, compassion, and excellence.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-hand-holding-heart service-icon"></i>
                    <h3>Our Values</h3>
                    <p>Integrity, Compassion, Innovation, Excellence, and Patient-Centered Care.</p>
                </div>
            </div>
            
            <div style="background: var(--elevated-bg); border-radius: 2rem; padding: 2rem;">
                <h2>Why Patients Trust Us</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> Board Certified Doctors</div>
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> Modern Medical Equipment</div>
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> 24/7 Emergency Services</div>
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> Affordable Payment Plans</div>
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> Insurance Accepted</div>
                    <div><i class="fas fa-check-circle" style="color: var(--primary);"></i> Multilingual Staff</div>
                </div>
            </div>
        </section>
    `;
}

// Render Services Page
function renderServices() {
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">Our Medical <span>Services</span></h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 3rem;">Comprehensive healthcare services tailored to your needs</p>
            <div class="cards-grid" id="services-full-grid"></div>
        </section>
    `;
    
    const servicesGrid = document.getElementById('services-full-grid');
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <i class="${service.icon} service-icon"></i>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <small style="color: var(--primary); font-weight: 600;">${service.price}</small>
        </div>
    `).join('');
}

// Render Doctors Page
function renderDoctors() {
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">Our Medical <span>Specialists</span></h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 3rem;">Meet our team of expert doctors and healthcare professionals</p>
            <div class="cards-grid" id="doctors-full-grid"></div>
        </section>
    `;
    
    const doctorsGrid = document.getElementById('doctors-full-grid');
    doctorsGrid.innerHTML = allDoctors.map(doctor => `
        <div class="doctor-card">
            <img src="${doctor.image || 'https://randomuser.me/api/portraits/medics/' + (doctor.id % 30) + '.jpg'}" alt="${doctor.name}" class="doctor-image" onerror="this.src='https://randomuser.me/api/portraits/lego/1.jpg'">
            <div class="doctor-info">
                <h3 class="doctor-name">${doctor.name}</h3>
                <p class="doctor-specialty"><i class="fas fa-stethoscope"></i> ${doctor.specialty}</p>
                <p class="doctor-experience"><i class="fas fa-clock"></i> ${doctor.experience || 'Experience: ' + (5 + Math.floor(Math.random() * 10)) + ' years'}</p>
                <p class="doctor-location"><i class="fas fa-map-marker-alt"></i> ${doctor.location}</p>
                <button class="btn btn-outline" style="width: 100%;" onclick="bookDoctor('${doctor.name}')">
                    <i class="fas fa-calendar-plus"></i> Book Appointment
                </button>
            </div>
        </div>
    `).join('');
}

// Render Appointments Page
function renderAppointments() {
    const preselectedDoctor = localStorage.getItem('prebook_doctor') || '';
    if (preselectedDoctor) {
        localStorage.removeItem('prebook_doctor');
    }
    
    const appointmentList = getAllAppointments();
    
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">Book an <span>Appointment</span></h1>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                <div class="form-container">
                    <h3>Schedule Your Visit</h3>
                    <form id="appointmentForm">
                        <div class="form-group">
                            <label><i class="fas fa-user"></i> Full Name *</label>
                            <input type="text" id="aptName" required placeholder="Enter your full name">
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-phone"></i> Contact Number *</label>
                            <input type="tel" id="aptPhone" required placeholder="Africell/Orange/Qcell number">
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-envelope"></i> Email Address</label>
                            <input type="email" id="aptEmail" placeholder="your@email.com">
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-map-marker-alt"></i> Your Location *</label>
                            <select id="aptLocation" required>
                                <option value="">Select your location</option>
                                ${locations.map(loc => `<option value="${loc.name}">${loc.name}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-user-md"></i> Select Doctor *</label>
                            <select id="aptDoctor" required>
                                <option value="">Choose a doctor</option>
                                ${allDoctors.map(doc => `<option value="${doc.name}" ${preselectedDoctor === doc.name ? 'selected' : ''}>${doc.name} - ${doc.specialty}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-calendar"></i> Preferred Date *</label>
                            <input type="date" id="aptDate" required min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="form-group">
                            <label><i class="fas fa-notes-medical"></i> Symptoms / Description</label>
                            <textarea id="aptSymptoms" rows="4" placeholder="Describe what you're feeling..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-calendar-check"></i> Book Appointment
                        </button>
                    </form>
                    <div id="appointmentMessage"></div>
                </div>
                <div>
                    <div class="form-container" style="margin-bottom: 2rem;">
                        <h3>📋 Your Appointments</h3>
                        <div id="appointmentsList">
                            ${appointmentList.length === 0 ? '<p style="color: var(--text-secondary);">No appointments scheduled yet.</p>' : ''}
                        </div>
                    </div>
                    <div class="form-container">
                        <h3>ℹ️ Important Information</h3>
                        <ul style="color: var(--text-secondary); line-height: 1.8;">
                            <li>Please arrive 15 minutes before your appointment</li>
                            <li>Bring your ID and any previous medical records</li>
                            <li>Insurance cards accepted at all locations</li>
                            <li>Cancel or reschedule at least 2 hours in advance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Display existing appointments
    const appointmentsDiv = document.getElementById('appointmentsList');
    if (appointmentList.length > 0) {
        appointmentsDiv.innerHTML = appointmentList.map(apt => `
            <div class="appointment-item">
                <div><strong>${apt.name}</strong></div>
                <div class="appointment-doctor"><i class="fas fa-user-md"></i> Dr. ${apt.doctor}</div>
                <div class="appointment-date"><i class="fas fa-calendar"></i> ${apt.date}</div>
                <div><small>${apt.location} | ${apt.phone}</small></div>
            </div>
        `).join('');
    }
    
    // Handle form submission
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('aptName').value;
        const phone = document.getElementById('aptPhone').value;
        const email = document.getElementById('aptEmail').value;
        const location = document.getElementById('aptLocation').value;
        const doctor = document.getElementById('aptDoctor').value;
        const date = document.getElementById('aptDate').value;
        const symptoms = document.getElementById('aptSymptoms').value;
        
        if (!name || !phone || !location || !doctor || !date) {
            showMessage('appointmentMessage', 'Please fill in all required fields.', 'error');
            return;
        }
        
        const result = addAppointment({
            name, phone, email, location, doctor, date, symptoms
        });
        
        if (result.success) {
            showMessage('appointmentMessage', result.message, 'success');
            form.reset();
            setTimeout(() => {
                renderAppointments();
            }, 2000);
        } else {
            showMessage('appointmentMessage', result.message, 'error');
        }
    });
}

// Render Blog Page
function renderBlog() {
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">Health Tips & <span>Articles</span></h1>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 3rem;">Expert advice for a healthier life</p>
            <div class="cards-grid" id="blog-full-grid"></div>
        </section>
        
        <section class="container">
            <div class="form-container">
                <h3>📧 Subscribe to Our Health Newsletter</h3>
                <p style="margin-bottom: 1rem;">Get weekly health tips and medical updates delivered to your inbox.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <input type="email" id="newsletterEmail" placeholder="Your email address" style="flex: 1;">
                    <button class="btn btn-primary" id="subscribeBtn">Subscribe</button>
                </div>
                <div id="subscribeMessage"></div>
            </div>
        </section>
    `;
    
    const blogGrid = document.getElementById('blog-full-grid');
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-meta"><i class="fas fa-tag"></i> ${post.category} | <i class="fas fa-clock"></i> ${post.readTime}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <button class="btn-outline" style="padding: 0.5rem 1rem; font-size: 0.875rem;">Read More →</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('subscribeBtn')?.addEventListener('click', () => {
        const email = document.getElementById('newsletterEmail').value;
        if (email) {
            showMessage('subscribeMessage', `✅ Thank you for subscribing! Health tips will be sent to ${email}`, 'success');
            document.getElementById('newsletterEmail').value = '';
        } else {
            showMessage('subscribeMessage', 'Please enter a valid email address.', 'error');
        }
    });
}

// Render Contact Page
function renderContact() {
    mainContent.innerHTML = `
        <section class="container" style="padding-top: 100px;">
            <h1 class="section-title">Contact & <span>Locations</span></h1>
            <div class="contact-grid">
                <div>
                    <div class="form-container">
                        <h3><i class="fas fa-envelope"></i> Send Us a Message</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <label>Your Name *</label>
                                <input type="text" id="contactName" required>
                            </div>
                            <div class="form-group">
                                <label>Email Address *</label>
                                <input type="email" id="contactEmail" required>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" id="contactPhone">
                            </div>
                            <div class="form-group">
                                <label>Subject *</label>
                                <input type="text" id="contactSubject" required>
                            </div>
                            <div class="form-group">
                                <label>Message *</label>
                                <textarea id="contactMessage" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                        <div id="contactMessageDiv"></div>
                    </div>
                </div>
                <div>
                    <div class="form-container" style="margin-bottom: 2rem;">
                        <h3><i class="fas fa-map-marker-alt"></i> All Locations</h3>
                        <div id="locationsList"></div>
                    </div>
                    <div class="form-container">
                        <h3><i class="fas fa-question-circle"></i> Frequently Asked Questions</h3>
                        <div class="faq-grid" id="faqList"></div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Render locations
    const locationsDiv = document.getElementById('locationsList');
    locationsDiv.innerHTML = locations.map(loc => `
        <div class="location-card">
            <h4 class="location-name">🏥 ${loc.name}</h4>
            <div class="location-detail"><i class="fas fa-map-pin"></i> ${loc.address}</div>
            <div class="location-detail"><i class="fas fa-phone-alt"></i> ${loc.phone.join(' / ')}</div>
            <div class="location-detail"><i class="fas fa-envelope"></i> ${loc.email}</div>
            <div class="location-detail"><i class="fas fa-clock"></i> ${loc.hours}</div>
            <div class="location-detail"><i class="fas fa-user-md"></i> Head: ${loc.headDoctor}</div>
        </div>
    `).join('');
    
    // Render FAQ
    const faqData = [
        { q: "What are your operating hours?", a: "Our hospitals provide 24/7 emergency services. Clinics operate from 8 AM to 10 PM daily." },
        { q: "Do you accept health insurance?", a: "Yes, we accept all major health insurance plans in Sierra Leone." },
        { q: "How do I book an appointment?", a: "Use our online booking system on the Appointments page or call any of our locations." },
        { q: "Is there an ambulance service?", a: "Yes, call 999 for emergency ambulance service available 24/7 across all locations." },
        { q: "What should I bring to my appointment?", a: "Bring your ID, insurance card, and any relevant medical records." }
    ];
    
    const faqDiv = document.getElementById('faqList');
    faqDiv.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item" onclick="this.classList.toggle('active')">
            <div class="faq-question">
                <span>${faq.q}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">${faq.a}</div>
        </div>
    `).join('');
    
    // Handle contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        showMessage('contactMessageDiv', `✅ Thank you ${name}! Your message has been sent. We'll respond within 24 hours.`, 'success');
        document.getElementById('contactForm').reset();
    });
}

// Helper: Show message
function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

// Global function for booking doctor
window.bookDoctor = function(doctorName) {
    localStorage.setItem('prebook_doctor', doctorName);
    navigateTo('appointments');
};

// Search functionality
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    
    if (query.includes('doctor') || query.includes('dr') || allDoctors.some(d => d.name.toLowerCase().includes(query) || d.specialty.toLowerCase().includes(query))) {
        navigateTo('doctors');
    } else if (query.includes('appointment') || query.includes('book')) {
        navigateTo('appointments');
    } else if (query.includes('service') || services.some(s => s.name.toLowerCase().includes(query))) {
        navigateTo('services');
    } else if (query.includes('contact') || query.includes('phone') || query.includes('location')) {
        navigateTo('contact');
    } else {
        alert(`🔍 Search results for "${query}":\n\nCheck our Services, Doctors, or Contact page for more information.\n\nFor emergencies, please call 999 immediately.`);
    }
}

// Chat functionality
if (chatIcon) {
    chatIcon.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });
}

if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
}

if (sendChatBtn) {
    sendChatBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const chatBody = document.querySelector('.chat-body');
            const sentMessage = document.createElement('div');
            sentMessage.className = 'chat-message sent';
            sentMessage.innerHTML = `<p>${message}</p><small>Just now</small>`;
            chatBody.appendChild(sentMessage);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
            
            // Auto reply
            setTimeout(() => {
                const reply = document.createElement('div');
                reply.className = 'chat-message received';
                reply.innerHTML = `<p>Thank you for your message! A representative will assist you shortly. For emergencies, please call 999.</p><small>Support</small>`;
                chatBody.appendChild(reply);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// Initialize the app
navigateTo('home');