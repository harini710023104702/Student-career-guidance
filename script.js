function getGuidance(){
let interest=document.getElementById("interest").value;
let result=document.getElementById("result");

if(interest==="engineering")
result.innerHTML="Suggested Careers: Software Engineer, AI Engineer, Web Developer";
else if(interest==="medical")
result.innerHTML="Suggested Careers: Doctor, Nurse, Pharmacist";
else if(interest==="commerce")
result.innerHTML="Suggested Careers: CA, Banker, Business Analyst";
else if(interest==="arts")
result.innerHTML="Suggested Careers: Lawyer, Journalist, Designer";
else
result.innerHTML="Please select an interest";
}
function showEngineering() {
    alert(
        "CAREER: SOFTWARE ENGINEER\n\n" +
        "Eligibility:\n• 12th (Science preferred)\n• BE / BTech / BSc CS\n\n" +
        "Key Skills:\n• Programming\n• Problem Solving\n• Web & App Development\n\n" +
        "Job Roles:\n• Software Developer\n• System Engineer\n• Tester\n\n" +
        "Future Scope:\n• Very High demand"
    );
}


function showLaw() {
    alert(
        "CAREER: LAWYER\n\n" +
        "Eligibility:\n• 12th (Any stream)\n• 3 or 5 year LLB\n\n" +
        "Entrance Exams:\n• CLAT\n• AILET\n\n" +
        "Job Roles:\n• Advocate\n• Legal Advisor\n• Corporate Lawyer\n\n" +
        "Future Scope:\n• High with experience"
    );
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let successMsg = document.getElementById("successMsg");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    successMsg.innerHTML = "";

    let isValid = true;

    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    }

    if (phone === "" || phone.length < 10) {
        phoneError.innerHTML = "Enter valid phone number";
        isValid = false;
    }

    if (isValid) {
        successMsg.innerHTML = "Form submitted successfully!";
        return false; // prevents page reload (demo purpose)
    }

    return false;
}


// Doctor
function showMedical() {
    alert(
        "CAREER: DOCTOR\n\n" +
        "Eligibility:\n• 12th (Science - PCB)\n• MBBS / BDS / BAMS / BHMS\n\n" +
        "Entrance Exams:\n• NEET\n• AIIMS\n• JIPMER\n\n" +
        "Job Roles:\n• General Physician\n• Surgeon\n• Specialist Doctor\n\n" +
        "Future Scope:\n• Very high, opportunities in hospitals, research, and private practice"
    );
}

// Teacher
function showTeacher() {
    alert(
        "CAREER: TEACHER\n\n" +
        "Eligibility:\n• 12th + Graduation (B.Ed preferred)\n\n" +
        "Entrance Exams:\n• TET (Teacher Eligibility Test)\n• State/CBSE Exams\n\n" +
        "Job Roles:\n• School Teacher\n• College Lecturer\n• Private Tutor\n\n" +
        "Future Scope:\n• Good, especially in schools, colleges, coaching centers, and online teaching"
    );
}

// Agriculture Specialist
function showAgri() {
    alert(
        "CAREER: AGRICULTURE SPECIALIST\n\n" +
        "Eligibility:\n• 12th (Science) or Graduation in Agriculture\n\n" +
        "Entrance Exams:\n• ICAR AIEEA\n• State Agriculture University Exams\n\n" +
        "Job Roles:\n• Agronomist\n• Horticulturist\n• Agricultural Scientist\n\n" +
        "Future Scope:\n• Growing demand in sustainable farming, research, and agri-business"
    );
}

// Journalist
function showJournalism() {
    alert(
        "CAREER: JOURNALIST\n\n" +
        "Eligibility:\n• Graduation in Journalism, Mass Communication, or relevant field\n\n" +
        "Entrance Exams:\n• BJMC Entrance Exams\n• Some universities have their own exams\n\n" +
        "Job Roles:\n• Reporter\n• Editor\n• Media Correspondent\n\n" +
        "Future Scope:\n• Expanding opportunities in digital media, TV, print, and social platforms"
    );
}

// ===== AI Specialist =====
function showAISpecialist() {
    alert(
        "CAREER: AI SPECIALIST\n\n" +
        "Eligibility:\n• B.Tech / B.Sc in Computer Science or related field\n• Certifications in AI/ML\n\n" +
        "Skills Required:\n• Machine Learning, Deep Learning\n• Python, R\n• Problem Solving\n\n" +
        "Job Roles:\n• AI Engineer\n• ML Engineer\n• Research Scientist\n\n" +
        "Future Scope:\n• Very high demand with AI growing rapidly across industries."
    );
}

// ===== Entrepreneur / Startup Founder =====
function showEntrepreneur() {
    alert(
        "CAREER: ENTREPRENEUR / STARTUP FOUNDER\n\n" +
        "Eligibility:\n• No fixed educational requirement\n• Passion and innovative ideas\n\n" +
        "Skills Required:\n• Leadership & Management\n• Business Strategy\n• Networking & Fundraising\n\n" +
        "Job Roles:\n• Startup Founder\n• Business Owner\n• Product Manager\n\n" +
        "Future Scope:\n• Unlimited potential based on business success."
    );
}

// ===== Graphic Designer =====
function showDesigner() {
    alert(
        "CAREER: GRAPHIC DESIGNER\n\n" +
        "Eligibility:\n• Bachelor's in Design / Arts / Multimedia\n• Diploma in Graphic Design (optional)\n\n" +
        "Skills Required:\n• Creativity & Design Sense\n• Adobe Photoshop, Illustrator\n• Communication\n\n" +
        "Job Roles:\n• Visual Designer\n• UI/UX Designer\n• Freelance Designer\n\n" +
        "Future Scope:\n• High demand in digital media, marketing, and entertainment industries."
    );
}


