// ============================================
// GROUP D HEALTH SERVICES - DATA MODULE
// Doctors, Locations, Services, Appointments Storage
// ============================================

// Medical Team Database
const medicalTeam = [
    { id: 1, name: "Dr. Alhaji Kesuma Kamara", specialty: "Head Doctor - Cardiology", experience: "18+ years", location: "Freetown Headquarters", image: "https://randomuser.me/api/portraits/men/32.jpg", email: "alhaji.kesuma@groupdhealth.sl", phone: "+232 76 888002" },
    { id: 2, name: "Dr. Louisa C. Lahood", specialty: "Physiologist", experience: "12 years", location: "Freetown Carolinelane", image: "https://randomuser.me/api/portraits/women/44.jpg", email: "louisa.lahood@groupdhealth.sl", phone: "+232 77 123457" },
    { id: 3, name: "Dr. Osman Adu Daramy", specialty: "Surgeon", experience: "15 years", location: "Bo Hospital", image: "https://randomuser.me/api/portraits/men/55.jpg", email: "osman.daramy@groupdhealth.sl", phone: "+232 78 554434" },
    { id: 4, name: "Dr. Dwight Allan Doherty", specialty: "General Medicine & Supervisor", experience: "20+ years", location: "Kenema Hospital", image: "https://randomuser.me/api/portraits/men/90.jpg", email: "dwight.doherty@groupdhealth.sl", phone: "+232 88 998878" },
    { id: 5, name: "Dr. Fatima Jebbeh Davies", specialty: "Pediatrics (Baby Doctor)", experience: "9 years", location: "Makeni Hospital", image: "https://randomuser.me/api/portraits/women/68.jpg", email: "fatima.davies@groupdhealth.sl", phone: "+232 99 112234" },
    { id: 6, name: "Dr. Mariama Sajor Barrie", specialty: "Head Nurse", experience: "14 years", location: "Waterloo Clinic", image: "https://randomuser.me/api/portraits/women/22.jpg", email: "mariama.barrie@groupdhealth.sl", phone: "+232 76 334456" },
    { id: 7, name: "Dr. Naimah Kallon", specialty: "Pharmacist & Nurse Supervisor", experience: "11 years", location: "Lumley Clinic", image: "https://randomuser.me/api/portraits/women/50.jpg", email: "naimah.kallon@groupdhealth.sl", phone: "+232 77 556678" },
    { id: 8, name: "Dr. Amisha D. Bangura", specialty: "Registered Nurse", experience: "6 years", location: "Aberdeen Clinic", image: "https://randomuser.me/api/portraits/women/33.jpg", email: "amisha.bangura@groupdhealth.sl", phone: "+232 78 778890" },
    { id: 9, name: "Dr. Shebora Kamara", specialty: "Nurse Practitioner", experience: "7 years", location: "Hill Station Clinic", image: "https://randomuser.me/api/portraits/women/91.jpg", email: "shebora.kamara@groupdhealth.sl", phone: "+232 88 990012" },
    { id: 10, name: "Dr. Victor Nasty", specialty: "Emergency Nurse", experience: "5 years", location: "Port Loko Clinic", image: "https://randomuser.me/api/portraits/men/12.jpg", email: "victor.nasty@groupdhealth.sl", phone: "+232 30 987655" },
    { id: 11, name: "Dr. Cynthia Miller", specialty: "Senior Nurse", experience: "10 years", location: "Bonth Clinic", image: "https://randomuser.me/api/portraits/women/62.jpg", email: "cynthia.miller@groupdhealth.sl", phone: "+232 76 443322" },
    { id: 12, name: "Dr. Sylvia Kamara", specialty: "Ward Nurse", experience: "8 years", location: "Moyamba Clinic", image: "https://randomuser.me/api/portraits/women/77.jpg", email: "sylvia.kamara@groupdhealth.sl", phone: "+232 77 554433" },
    { id: 13, name: "Dr. Mariam Taylor", specialty: "Pediatric Nurse", experience: "9 years", location: "Freetown Headquarters", image: "https://randomuser.me/api/portraits/women/88.jpg", email: "mariam.taylor@groupdhealth.sl", phone: "+232 88 776655" },
    { id: 14, name: "Dr. Alhaji Babah Mansaray", specialty: "Healthcare Manager", experience: "12 years", location: "Headquarters", image: "https://randomuser.me/api/portraits/men/43.jpg", email: "babah.mansaray@groupdhealth.sl", phone: "+232 76 999000" },
    { id: 15, name: "Dr. James Koroma", specialty: "Orthopedic Surgeon", experience: "10 years", location: "Freetown Headquarters", image: "https://randomuser.me/api/portraits/men/67.jpg", email: "james.koroma@groupdhealth.sl", phone: "+232 76 111222" },
    { id: 16, name: "Dr. Elizabeth Sesay", specialty: "Obstetrician", experience: "13 years", location: "Bo Hospital", image: "https://randomuser.me/api/portraits/women/45.jpg", email: "elizabeth.sesay@groupdhealth.sl", phone: "+232 77 333444" },
    { id: 17, name: "Dr. Mohamed Bangura", specialty: "Neurologist", experience: "11 years", location: "Kenema Hospital", image: "https://randomuser.me/api/portraits/men/28.jpg", email: "mohamed.bangura@groupdhealth.sl", phone: "+232 88 555666" },
    { id: 18, name: "Dr. Hawa Conteh", specialty: "Dermatologist", experience: "8 years", location: "Makeni Hospital", image: "https://randomuser.me/api/portraits/women/56.jpg", email: "hawa.conteh@groupdhealth.sl", phone: "+232 99 777888" },
    { id: 19, name: "Dr. Sulaiman Kamara", specialty: "Radiologist", experience: "9 years", location: "Freetown Headquarters", image: "https://randomuser.me/api/portraits/men/84.jpg", email: "sulaiman.kamara@groupdhealth.sl", phone: "+232 76 999111" },
    { id: 20, name: "Dr. Aminata Jalloh", specialty: "Psychiatrist", experience: "7 years", location: "Waterloo Clinic", image: "https://randomuser.me/api/portraits/women/73.jpg", email: "aminata.jalloh@groupdhealth.sl", phone: "+232 30 123456" }
];

// Additional Nurses & Staff (to reach 15 per location)
const additionalStaff = [
    { id: 21, name: "Nurse Fatmata Turay", specialty: "Staff Nurse", experience: "5 years", location: "Freetown Headquarters" },
    { id: 22, name: "Nurse Isatu Kamara", specialty: "Staff Nurse", experience: "4 years", location: "Freetown Carolinelane" },
    { id: 23, name: "Nurse Bintu Sesay", specialty: "Staff Nurse", experience: "6 years", location: "Bo Hospital" },
    { id: 24, name: "Nurse Kadiatu Bangura", specialty: "Staff Nurse", experience: "3 years", location: "Kenema Hospital" },
    { id: 25, name: "Nurse Zainab Conteh", specialty: "Staff Nurse", experience: "5 years", location: "Makeni Hospital" },
    { id: 26, name: "Nurse Mariama Kallon", specialty: "Staff Nurse", experience: "4 years", location: "Port Loko Clinic" },
    { id: 27, name: "Nurse Adama Jalloh", specialty: "Staff Nurse", experience: "7 years", location: "Bonth Clinic" },
    { id: 28, name: "Nurse Fatima Koroma", specialty: "Staff Nurse", experience: "4 years", location: "Moyamba Clinic" },
    { id: 29, name: "Nurse Rugiatu Kamara", specialty: "Staff Nurse", experience: "5 years", location: "Waterloo Clinic" },
    { id: 30, name: "Nurse Hafsatu Bah", specialty: "Staff Nurse", experience: "3 years", location: "Lumley Clinic" },
    { id: 31, name: "Nurse Memunatu Sankoh", specialty: "Staff Nurse", experience: "6 years", location: "Aberdeen Clinic" },
    { id: 32, name: "Nurse Kadijah Mansaray", specialty: "Staff Nurse", experience: "4 years", location: "Hill Station Clinic" },
    { id: 33, name: "Nurse Yealie Tarawally", specialty: "Staff Nurse", experience: "5 years", location: "Freetown Headquarters" },
    { id: 34, name: "Nurse Mabinty Kamara", specialty: "Staff Nurse", experience: "3 years", location: "Bo Hospital" },
    { id: 35, name: "Nurse Saffie Sesay", specialty: "Staff Nurse", experience: "4 years", location: "Kenema Hospital" }
];

const allDoctors = [...medicalTeam, ...additionalStaff];

// Services Offered
const services = [
    { id: 1, name: "General Consultation", icon: "fas fa-stethoscope", description: "Comprehensive medical consultations with experienced physicians.", price: "Free with insurance" },
    { id: 2, name: "Emergency Care", icon: "fas fa-ambulance", description: "24/7 emergency services with rapid response teams.", price: "24/7 available" },
    { id: 3, name: "Dental Care", icon: "fas fa-tooth", description: "Complete dental services including cleaning, filling, and surgery.", price: "Le 150,000 - 500,000" },
    { id: 4, name: "Pediatrics", icon: "fas fa-baby", description: "Specialized care for infants, children, and adolescents.", price: "Le 100,000 - 300,000" },
    { id: 5, name: "Laboratory Services", icon: "fas fa-flask", description: "Advanced diagnostic testing with quick results.", price: "Varies by test" },
    { id: 6, name: "Pharmacy", icon: "fas fa-capsules", description: "Full-service pharmacy with prescription delivery.", price: "Competitive pricing" },
    { id: 7, name: "Maternity Care", icon: "fas fa-female", description: "Comprehensive prenatal and postnatal care.", price: "Le 500,000 - 2,000,000" },
    { id: 8, name: "Surgery", icon: "fas fa-scalpel", description: "Advanced surgical procedures with expert surgeons.", price: "Quote required" },
    { id: 9, name: "Cardiology", icon: "fas fa-heartbeat", description: "Heart health assessments and treatments.", price: "Le 300,000 - 800,000" },
    { id: 10, name: "Orthopedics", icon: "fas fa-bone", description: "Bone, joint, and muscle treatments.", price: "Le 250,000 - 1,000,000" },
    { id: 11, name: "Neurology", icon: "fas fa-brain", description: "Neurological disorder diagnosis and treatment.", price: "Le 400,000 - 1,200,000" },
    { id: 12, name: "Mental Health", icon: "fas fa-heart", description: "Counseling and psychiatric services.", price: "Le 150,000 - 400,000" },
    { id: 13, name: "Nutrition", icon: "fas fa-apple-alt", description: "Dietary planning and nutrition counseling.", price: "Le 100,000 - 250,000" },
    { id: 14, name: "Radiology", icon: "fas fa-x-ray", description: "X-rays, CT scans, and ultrasound services.", price: "Le 200,000 - 800,000" },
    { id: 15, name: "Vaccination", icon: "fas fa-syringe", description: "Immunization for all ages.", price: "Le 50,000 - 200,000" },
    { id: 16, name: "Telemedicine", icon: "fas fa-video", description: "Remote consultations via video call.", price: "Le 75,000" },
    { id: 17, name: "Physiotherapy", icon: "fas fa-walking", description: "Rehabilitation and physical therapy.", price: "Le 120,000 - 350,000" },
    { id: 18, name: "Health Checkup", icon: "fas fa-clipboard-list", description: "Comprehensive health screening packages.", price: "Le 350,000 - 1,500,000" }
];

// Locations Database
const locations = [
    { 
        name: "Freetown Headquarters", 
        address: "Joelpkdrive, Freetown, Sierra Leone",
        phone: ["+232 76 888001 (Africell)", "+232 77 999222 (Orange)", "+232 88 111333 (Qcell)"],
        email: "hq@groupdhealth.sl",
        hours: "24/7 Emergency Services",
        headDoctor: "Dr. Alhaji Kesuma Kamara"
    },
    { 
        name: "Freetown Carolinelane", 
        address: "Carolinelane, Freetown, Sierra Leone",
        phone: ["+232 77 123456 (Orange)", "+232 76 444555 (Africell)", "+232 88 666777 (Qcell)"],
        email: "carolinelane@groupdhealth.sl",
        hours: "8 AM - 10 PM Daily",
        headDoctor: "Dr. Louisa C. Lahood"
    },
    { 
        name: "Bo Hospital", 
        address: "Bo City, Southern Province",
        phone: ["+232 78 554433 (Orange)", "+232 76 667788 (Africell)", "+232 88 889900 (Qcell)"],
        email: "bo@groupdhealth.sl",
        hours: "24/7 Emergency",
        headDoctor: "Dr. Osman Adu Daramy"
    },
    { 
        name: "Kenema Hospital", 
        address: "Kenema City, Eastern Province",
        phone: ["+232 88 998877 (Orange)", "+232 77 112233 (Africell)", "+232 76 334455 (Qcell)"],
        email: "kenema@groupdhealth.sl",
        hours: "24/7 Emergency",
        headDoctor: "Dr. Dwight Allan Doherty"
    },
    { 
        name: "Makeni Hospital", 
        address: "Makeni City, Northern Province",
        phone: ["+232 99 112233 (Orange)", "+232 76 445566 (Africell)", "+232 77 778899 (Qcell)"],
        email: "makeni@groupdhealth.sl",
        hours: "24/7 Emergency",
        headDoctor: "Dr. Fatima Jebbeh Davies"
    },
    { 
        name: "Waterloo Clinic", 
        address: "Waterloo, Western Rural District",
        phone: ["+232 76 334456 (Africell)", "+232 77 445567 (Orange)", "+232 88 556678 (Qcell)"],
        email: "waterloo@groupdhealth.sl",
        hours: "8 AM - 8 PM Daily",
        headDoctor: "Dr. Mariama Sajor Barrie"
    },
    { 
        name: "Lumley Clinic", 
        address: "Lumley, Freetown",
        phone: ["+232 77 556678 (Orange)", "+232 76 667789 (Africell)", "+232 88 778890 (Qcell)"],
        email: "lumley@groupdhealth.sl",
        hours: "8 AM - 8 PM Daily",
        headDoctor: "Dr. Naimah Kallon"
    },
    { 
        name: "Aberdeen Clinic", 
        address: "Aberdeen, Freetown",
        phone: ["+232 78 778890 (Orange)", "+232 76 889901 (Africell)", "+232 88 990012 (Qcell)"],
        email: "aberdeen@groupdhealth.sl",
        hours: "8 AM - 8 PM Daily",
        headDoctor: "Dr. Amisha D. Bangura"
    },
    { 
        name: "Hill Station Clinic", 
        address: "Hill Station, Freetown",
        phone: ["+232 88 990012 (Orange)", "+232 77 001122 (Africell)", "+232 76 112233 (Qcell)"],
        email: "hillstation@groupdhealth.sl",
        hours: "8 AM - 8 PM Daily",
        headDoctor: "Dr. Shebora Kamara"
    }
];

// Blog Posts / Health Tips
const blogPosts = [
    {
        title: "10 Tips for a Healthy Heart",
        excerpt: "Learn how to maintain cardiovascular health with these simple lifestyle changes.",
        category: "Heart Health",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400"
    },
    {
        title: "Understanding Malaria Prevention",
        excerpt: "Essential information about malaria prevention and treatment in Sierra Leone.",
        category: "Prevention",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?w=400"
    },
    {
        title: "Nutrition Guide for Expecting Mothers",
        excerpt: "Proper nutrition during pregnancy for mother and baby health.",
        category: "Maternal Health",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1511949860663-92c5c1d9a8e2?w=400"
    },
    {
        title: "Mental Health Awareness",
        excerpt: "Breaking the stigma: importance of mental health in our communities.",
        category: "Mental Health",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400"
    },
    {
        title: "Child Immunization Schedule",
        excerpt: "Complete guide to essential vaccines for children in Sierra Leone.",
        category: "Pediatrics",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400"
    },
    {
        title: "First Aid Basics Everyone Should Know",
        excerpt: "Life-saving first aid techniques for common emergencies.",
        category: "Emergency",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1584515979956-1c4e5b2c6d8f?w=400"
    }
];

// Testimonials
const testimonials = [
    {
        name: "Fatmata Jalloh",
        location: "Freetown",
        text: "The care I received at Group D Health was exceptional. The doctors are professional and caring.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Mohamed Sesay",
        location: "Bo",
        text: "Best hospital experience in Sierra Leone. Modern facilities and friendly staff.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Mariama Kamara",
        location: "Kenema",
        text: "My son's surgery went perfectly thanks to Dr. Daramy and the amazing team.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "Ibrahim Bangura",
        location: "Makeni",
        text: "Affordable, accessible, and high-quality healthcare. Highly recommended!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
];

// Appointments Storage
let appointments = JSON.parse(localStorage.getItem('groupD_appointments')) || [];

// Save appointments to localStorage
function saveAppointments() {
    localStorage.setItem('groupD_appointments', JSON.stringify(appointments));
}

// Check if doctor is already booked on a specific date
function isDoctorBooked(doctorName, date) {
    return appointments.some(apt => apt.doctor === doctorName && apt.date === date);
}

// Add new appointment
function addAppointment(appointment) {
    if (isDoctorBooked(appointment.doctor, appointment.date)) {
        return { success: false, message: `❌ Dr. ${appointment.doctor} has already been booked for ${appointment.date}. Please select another doctor or date.` };
    }
    appointment.id = Date.now();
    appointments.push(appointment);
    saveAppointments();
    return { success: true, message: `✅ Thank you ${appointment.name} for contacting Group D Health Services! Your appointment with Dr. ${appointment.doctor} on ${appointment.date} has been booked. See you soon!` };
}

// Get appointments by doctor
function getAppointmentsByDoctor(doctorName) {
    return appointments.filter(apt => apt.doctor === doctorName);
}

// Get all appointments
function getAllAppointments() {
    return [...appointments].reverse();
}