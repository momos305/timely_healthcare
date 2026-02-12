
function openService(service) {

  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const modal = document.getElementById("serviceModal");

  let content = "";

  if(service === "general") {
    title.innerText = "General Medicine";
    content = `
      <p>Our General Medicine department provides complete primary healthcare services.</p>
      <ul>
        <li>Diagnosis and treatment of common illnesses</li>
        <li>Preventive health checkups</li>
        <li>Chronic disease management</li>
        <li>Health counseling</li>
      </ul>
    `;
  }

  else if(service === "emergency") {
    title.innerText = "Emergency & Trauma Care (24/7)";
    content = `
      <p>We provide round the clock emergency support with advanced facilities.</p>
      <ul>
        <li>24/7 ambulance service</li>
        <li>Trauma and accident care</li>
        <li>Critical care support</li>
        <li>Experienced emergency specialists</li>
      </ul>
    `;
  }

  else if(service === "cardiology") {
    title.innerText = "Cardiology";
    content = `
      <p>Advanced heart care services with modern technology.</p>
      <ul>
        <li>ECG and heart monitoring</li>
        <li>Cardiac consultations</li>
        <li>Hypertension management</li>
        <li>Preventive heart screening</li>
      </ul>
    `;
  }

  else if(service === "ortho") {
    title.innerText = "Orthopedics";
    content = `
      <p>Specialized care for bones and joints.</p>
      <ul>
        <li>Fracture treatment</li>
        <li>Joint replacement</li>
        <li>Arthritis management</li>
        <li>Sports injury care</li>
      </ul>
    `;
  }

  else if(service === "gyn") {
    title.innerText = "Gynecology & Maternity Care";
    content = `
      <p>Complete women’s healthcare services.</p>
      <ul>
        <li>Prenatal and postnatal care</li>
        <li>Safe delivery services</li>
        <li>Routine gynecological checkups</li>
        <li>Fertility counseling</li>
      </ul>
    `;
  }

  else if(service === "pediatrics") {
    title.innerText = "Pediatrics";
    content = `
      <p>Dedicated healthcare for children and infants.</p>
      <ul>
        <li>Child vaccinations</li>
        <li>Growth monitoring</li>
        <li>Pediatric consultations</li>
        <li>Nutrition guidance</li>
      </ul>
    `;
  }

  else if(service === "diagnostics") {
    title.innerText = "Diagnostics & Laboratory Services";
    content = `
      <p>Accurate and fast diagnostic services.</p>
      <ul>
        <li>Blood tests</li>
        <li>X-ray and imaging</li>
        <li>Pathology services</li>
        <li>Health screening packages</li>
      </ul>
    `;
  }

  else if(service === "pharmacy") {
    title.innerText = "Pharmacy Services";
    content = `
      <p>In-house pharmacy providing quality medicines.</p>
      <ul>
        <li>Prescription medicines</li>
        <li>Health supplements</li>
        <li>24/7 availability</li>
        <li>Qualified pharmacists</li>
      </ul>
    `;
  }

  description.innerHTML = content;
  modal.style.display = "block";
}

function closeService() {
  document.getElementById("serviceModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


  function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }



// ===== Section Animation =====
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // ek baar show hone ke baad band
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => observer.observe(section));

// ===== WhatsApp Message Function =====
function sendWhatsAppMessage() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const process = document.getElementById("process").value;
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "919771369563";

  const text =
    `Appointment Request:\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n` +
    `Process: ${process}\n` +
    `Message: ${message}`;

  const encodedText = encodeURIComponent(text);

  window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
}
