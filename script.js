document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function addUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user-message");
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot-message");
    botMessage.innerHTML = message;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addLoader() {
    const chatBox = document.getElementById("chat-box");
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    loaderDiv.setAttribute("id", "bot-typing-indicator");
    for (let i = 0; i < 4; i++) { // Four balls for the loader
        const ball = document.createElement("div");
        ball.classList.add("circle");
        loaderDiv.appendChild(ball);
    }
    chatBox.appendChild(loaderDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeLoader() {
    const loaderDiv = document.getElementById("bot-typing-indicator");
    if (loaderDiv) {
        loaderDiv.remove();
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim()) {
        addUserMessage(userInput);

        // Add the loader (three balls animation) during the delay
        addLoader();

        // Simulate a delay of 1 second before showing the bot's response
        setTimeout(function () {
            // Get and show the response after the delay
            const response = getResponse(userInput);
            addBotMessage(response);

            // Remove the loader after the delay
            removeLoader();
        }, 1000); // Adjust delay as needed (1 second in this case)
    }
    document.getElementById("user-input").value = ""; // Clear user input field
}

function getResponse(userInput) {
    // Simulate bot response based on user input (you can change this logic as needed)
    return `You said: ${userInput}`;
}




function getResponse(query) {
    query = query.toLowerCase();

    if (query.includes("placement") || query.includes("internship")) {
        return "Our department has a dedicated placement cell that works tirelessly to ensure our students secure internships and job placements in top companies. We have a strong track record of successful placements across various industries.";
    }
    if (query.includes("plagiarism") || query.includes("ethics")) {
        return generateResearchEthicsInfo();
    }
    if (query.includes("scholarship")) {
        return generateScholarshipOptions();
    }
    if (query.includes("prof. (dr. navita shrivastava") || query.includes("navita shrivastava")) {
        return "Prof. (Dr.) Navita Shrivastava is the Head of the Department and an accomplished researcher in the field of data science and statistics. She has worked with leading tech companies and contributed to the development of data analytics tools widely used in the industry for more information you can <a href='https://www.apsurewa.ac.in/en/faculty-members-cs/prof-dr-smt-navita-shrivastava' target='_blank'>click here</a>";
    }

    if (query.includes("hi") || query.includes("hello") || query.includes("hey")) {
        return "Hello! How can I assist you today? You can ask about courses, faculty, or admission details and others.";
    }

    if (query.includes("research directorate") || query.includes("directorate of research")) {
        return generateResearchDirectorateInfo();
    }

    if (query.includes("phd admission") || query.includes("research entrance exam") || query.includes("phd entrance exam") || query.includes("phd") || query.includes("research scholar")) {
        return generatePhdAdmissionInfo();
    }

    if (query.includes("research funding") || query.includes("grants")) {
        return generateResearchFundingInfo();
    }

    if (query.includes("thesis submission") || query.includes("viva voce") || query.includes("viva voce") || query.includes("thesis") || query.includes("dissertation")) {
        return generateThesisSubmissionInfo();
    }


    if (query.includes("courses")) {
        return generateCourseOptions();

    } else if (query.includes("faculty") || query.includes("faculties") || query.includes("teachers") || query.includes("professors") || query.includes("staff") || query.includes("teacher") || query.includes("professor")) {
        return generateFacultyOptions();
    } else if (query.includes("fee")) {
        return "The fee structure varies depending on the course. Do you need details on a particular course fee so you can visit our admission cell";
    } else if (query.includes("who is the head of department") || query.includes("hod")) {
        return "The Head of the Department is <strong>Prof. (Dr.) Navita Shrivastava</strong>.";
    } else if (query.includes("admission") || query.includes("apply")) {
        return "You can visit our admissions portal to find detailed information about the admission process and how to apply.";
    } else {
        return "I'm sorry, I didn't understand that. Can you ask something else related to college courses, admissions, or other available services?";
    }
}

function generateResearchDirectorateInfo() {
    return `
        <strong>Research Directorate FAQs:</strong><br>
        <button class="modern-btn" onclick="showResearchDirectorateDetails('director')">Who is the Director of the Directorate of Research?</button><br>
        <button class="modern-btn" onclick="showResearchDirectorateDetails('role')">What is the role of the Research Directorate?</button><br>
        <button class="modern-btn" onclick="showResearchDirectorateDetails('contact')">How can I contact the Research Directorate?</button><br>
    `;
}

function showResearchDirectorateDetails(type) {
    let description = "";
    switch (type) {
        case 'director':
            description = "<strong>Professor Navita Shrivastava </strong>is the current Director of the Research Directorate.";
            break;
        case 'role':
            description = "The Research Directorate oversees all research activities, PhD admissions, funding opportunities, research projects, and compliance with university and UGC regulations.";
            break;
        case 'contact':
            description = "You can contact the Research Directorate at<strong> navita.srivastava@gmail.com</strong>  or call<strong> 8839684559</strong>. The office is located at<strong> Computer Science department on campus</strong>.";
            break;
        default:
            description = "Sorry, I don't have information on this topic.";
    }
    addBotMessage(description);
}

function generatePhdAdmissionInfo() {
    return `
        <strong>PhD Admission FAQs:</strong><br>
        <button class="modern-btn" onclick="showPhdAdmissionDetails('exam')">When is the next research entrance exam?</button><br>
        <button class="modern-btn" onclick="showPhdAdmissionDetails('form')">When will the application forms be available?</button><br>
        <button class="modern-btn" onclick="showPhdAdmissionDetails('eligibility')">What are the eligibility criteria for PhD admission?</button><br>
        <button class="modern-btn" onclick="showPhdAdmissionDetails('syllabus')">What is the syllabus for the entrance exam?</button><br>
    `;
}

function showPhdAdmissionDetails(type) {
    let description = "";
    switch (type) {
        case 'exam':
            description = "The next research entrance exam is scheduled for the first week of May.";
            break;
        case 'form':
            description = "Application forms will be available online from the second week of April.";
            break;
        case 'eligibility':
            description = 'Eligibility criteria for PhD admission are as per UGC guidelines. Detailed criteria are available on the website or  <a href="https://admission.educationdunia.com/aps-university-phd-admission" target="_blank">clickhere</a>.';
            break;

        case 'syllabus':
            description = 'The syllabus for the entrance exam is available on our website or <a href="https://apsurewa.ac.in/files/561/pgdca21_Syllabus_with_CO_PO.pdf" target="_blank">click here</a>.';
            break;
        default:
            description = "Sorry, I don't have information on this topic.";
    }
    addBotMessage(description);
}

function generateResearchFundingInfo() {
    return `
        <strong>Research Funding FAQs:</strong><br>
        <button class="modern-btn" onclick="showResearchFundingDetails('seed-money')">Is there any seed money available for faculty research?</button><br>
        <button class="modern-btn" onclick="showResearchFundingDetails('travel-grants')">Are there travel grants for presenting research at conferences?</button><br>
        <button class="modern-btn" onclick="showResearchFundingDetails('apply-funding')">How can I apply for research funding?</button><br>
    `;
}

function showResearchFundingDetails(type) {
    let description = "";
    switch (type) {
        case 'seed-money':
            description = "Yes, seed money is available for faculty research. Check funding details at [link].";
            break;
        case 'travel-grants':
            description = "Yes, APS University provides partial/full funding for travel grants. Application details are available at [link].";
            break;
        case 'apply-funding':
            description = "You can apply for research funding by following the guidelines and submitting the necessary documents at [link].";
            break;
        default:
            description = "Sorry, I don't have information on this topic.";
    }
    addBotMessage(description);
}

function generateResearchEthicsInfo() {
    return `
        <strong>Research Ethics FAQs:</strong><br>
        <button class="modern-btn" onclick="showResearchEthicsDetails('plagiarism')">What are the university guidelines on plagiarism?</button><br>
        <button class="modern-btn" onclick="showResearchEthicsDetails('software')">Which plagiarism detection software is used?</button><br>
        <button class="modern-btn" onclick="showResearchEthicsDetails('ethical-guidelines')">What are the ethical guidelines for conducting research?</button><br>
    `;
}

function showResearchEthicsDetails(type) {
    let description = "";
    switch (type) {
        case 'plagiarism':
            description = "APS University follows UGC norms for plagiarism. The acceptable similarity percentage is [99.99%].";
            break;
        case 'software':
            description = "We use Turnitin/URKUND for plagiarism detection.";
            break;
        case 'ethical-guidelines':
            description = "The ethical guidelines for conducting research are available at [link].";
            break;
        default:
            description = "Sorry, I don't have information on this topic.";
    }
    addBotMessage(description);
}

function generateThesisSubmissionInfo() {
    return `
        <strong>Thesis Submission FAQs:</strong><br>
        <button class="modern-btn" onclick="showThesisSubmissionDetails('timeline')">What is the timeline for thesis submission?</button><br>
        <button class="modern-btn" onclick="showThesisSubmissionDetails('submission-process')">What is the process for thesis submission?</button><br>
        <button class="modern-btn" onclick="showThesisSubmissionDetails('viva')">What is the viva-voce process?</button><br>
    `;
}

function showThesisSubmissionDetails(type) {
    let description = "";
    switch (type) {
        case 'timeline':
            description = "Research scholars must submit their thesis within<strong> three months</strong> from registration.";
            break;
        case 'submission-process':
            description = "The step-by-step thesis submission process is available at [link].";
            break;
        case 'viva':
            description = "After thesis evaluation, the scholar must defend their work before an expert panel.";
            break;
        default:
            description = "Sorry, I don't have information on this topic.";
    }
    addBotMessage(description);
}

function generateCourseOptions() {
    return `
        <div>
            <strong>Here are some courses we offer:</strong><br>
            <button class="modern-btn" onclick="showCourseDetails('bsc')">B.Sc (Hons.)</button><br>
            <button class="modern-btn" onclick="showCourseDetails('msc')">M.Sc</button><br>
            <button class="modern-btn" onclick="showCourseDetails('mtech')">M.Tech</button><br>
            <button class="modern-btn" onclick="showCourseDetails('pgdca')">PGDCA</button><br>
        </div>
    `;
}

function showCourseDetails(course) {
    let courseDescription = "";
    switch (course) {
        case 'bsc':
            courseDescription = "<strong>B.Sc (Hons.):</strong> A three-year undergraduate course focused on building a strong foundation in various branches of science, with an emphasis on analytical and research skills <a href='https://www.apsurewa.ac.in/files/561/M.Tech_cbcs.pdf' target='_blank'>click here</a>";
            break;
        case 'msc':
            courseDescription = "<strong>M.Sc:</strong> A two-year postgraduate program designed for students seeking to deepen their understanding in specialized science fields such as mathematics, physics, and more <a href='https://www.apsurewa.ac.in/files/561/msc_cs_cbcs2020.pdf' target='_blank'>click here</a>";
            break;
        case 'mtech':
            courseDescription = "<strong>M.Tech:</strong> This advanced degree is ideal for students looking to specialize in areas of technology such as software engineering, artificial intelligence, and network security. For syllabus <a href='https://www.apsurewa.ac.in/files/561/M.Tech_cbcs.pdf' target='_blank'>click here</a>";
            break;
        case 'pgdca':
            courseDescription = "<strong>PGDCA (Computer Applications):</strong> A one-year postgraduate diploma course that provides an in-depth understanding of computer applications, including software development and data management <a href='https://www.apsurewa.ac.in/files/561/pgdca21_Syllabus_with_CO_PO.pdf.' target='_blank'>click here</a>";
            break;
        default:
            courseDescription = "Sorry, I don't have information on this course.";
    }
    addBotMessage(courseDescription);
}

function generateFacultyOptions() {
    return `
        <div>
            <strong>Here are the faculty members:</strong><br />
            <button class="modern-btn" onclick="showFacultyDetails('prof. (Dr.) Rakesh Kumar Katare')">Prof. (Dr.) Rakesh Kumar Katare</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('prof. (Dr.) Navita Shrivastava')">Prof. (Dr.) Navita Shrivastava</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Sunil Tiwari')">Dr. Sunil Tiwari</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Arvind Singh')">Dr. Arvind Singh</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Ajitesh Singh Baghel')">Dr. Ajitesh Singh Baghel</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Aarti Panday')">Dr. Aarti Panday</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Neha Singh')">Dr. Neha Singh</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Dr. Ritu Mishra')">Dr. Ritu Mishra</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Ms. Priyanka Patel')">Ms. Priyanka Patel</button><br />
            <button class="modern-btn" onclick="showFacultyDetails('Ms. Monita Tiwari')">Ms. Monita Tiwari</button><br />
        </div>
    `;
}

function showFacultyDetails(faculty) {
    let facultyDescription = "";
    let facultyLink = "";

    switch (faculty) {
        case 'prof. (Dr.) Rakesh Kumar Katare':
            facultyDescription = "<strong>Prof. (Dr.) Rakesh Kumar Katare:</strong> Prof. (Dr.) Rakesh Kumar Katare has over 30 years of experience in computer science, specializing in software engineering and artificial intelligence. He is an expert in machine learning and others.";
            facultyLink = "<a href='https://apsurewa.ac.in/en/faculty-members-cs/prof-dr-rakesh-kumar-katare' target='_blank'>Visit his website</a>";
            break;
        case 'prof. (Dr.) Navita Shrivastava':
            facultyDescription = "<strong>Prof. (Dr.) Navita Shrivastava:</strong> Prof. (Dr.) Navita Shrivastava is the Head of Department and an accomplished researcher in the field of data science and statistics. She has worked with leading tech companies and contributed to the development of data analytics tools widely used in the industry.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/prof-dr-smt-navita-shrivastava' target='_blank'>Visit her website</a>";
            break;
        case 'Dr. Sunil Tiwari':
            facultyDescription = "<strong>Dr. Sunil Tiwari:</strong> Dr. Sunil Tiwari is a prominent researcher in the field of software engineering and cloud computing. He has authored numerous papers on system optimization and has collaborated on international research projects.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-sunil-tiwari' target='_blank'>Visit his website</a>";
            break;
        case 'Dr. Arvind Singh':
            facultyDescription = "<strong>Dr. Arvind Singh:</strong> Dr. Arvind Singh specializes in data structures and algorithms. He has contributed to the development of advanced computational models and is an active member of several international research communities.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-arvind-singh' target='_blank'>Visit his website</a>";
            break;
        case 'Dr. Ajitesh Singh Baghel':
            facultyDescription = "<strong>Dr. Ajitesh Singh Baghel:</strong> Dr. Ajitesh Singh Baghel's research interests are in cybersecurity and blockchain technology. He has been instrumental in various national-level cybersecurity workshops and seminars.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-ajitesh-singh-baghel' target='_blank'>Visit his website</a>";
            break;
        case 'Dr. Aarti Panday':
            facultyDescription = "<strong>Dr. Aarti Panday:</strong> Dr. Aarti Panday is an expert in artificial intelligence, focusing on machine learning and deep learning. She has been a key contributor to AI research in education and healthcare sectors.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-aarti-panday' target='_blank'>Visit her website</a>";
            break;
        case 'Dr. Neha Singh':
            facultyDescription = "<strong>Dr. Neha Singh:</strong> Dr. Neha Singh is a renowned researcher in the field of Internet of Things (IoT) and smart cities. She works on projects related to the optimization of IoT networks for industrial applications.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-neha-singh' target='_blank'>Visit her website</a>";
            break;
        case 'Dr. Ritu Mishra':
            facultyDescription = "<strong>Dr. Ritu Mishra:</strong> Dr. Ritu Mishra is a specialist in database management systems and cloud storage solutions. She has presented her research in numerous international conferences and has published articles on big data management.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/dr-ritu-mishra' target='_blank'>Visit her website</a>";
            break;
        case 'Ms. Priyanka Patel':
            facultyDescription = "<strong>Ms. Priyanka Patel:</strong> Ms. Priyanka Patel focuses on mobile application development and UI/UX design. She has mentored several student projects that received recognition in national tech fests.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/ms-priyanka-patel' target='_blank'>Visit her website</a>";
            break;
        case 'Ms. Monita Tiwari':
            facultyDescription = "<strong>Ms. Monita Tiwari:</strong> Ms. Monita Tiwari is an expert in web development and e-commerce solutions. She has been part of various technology-driven community initiatives aimed at empowering women in tech.";
            facultyLink = "<a href='https://www.apsurewa.ac.in/en/faculty-members-cs/ms-monita-tiwari' target='_blank'>Visit her website</a>";
            break;
        default:
            facultyDescription = "Sorry, I don't have information on this faculty member.";
    }

    const fullMessage = `${facultyDescription}<br><br>${facultyLink}`;
    addBotMessage(fullMessage);
}


function generateScholarshipOptions() {
    return `
        <div>
            <strong>Here are some scholarship options available:</strong><br>
            <button class="modern-btn" onclick="showScholarshipDetails('merit')">Merit-based Scholarship</button><br>
            <button class="modern-btn" onclick="showScholarshipDetails('need')">Need-based Scholarship</button><br>
            <button class="modern-btn" onclick="showScholarshipDetails('sports')">Sports Scholarship</button><br>
            <button class="modern-btn" onclick="showScholarshipDetails('research')">Research Scholarship</button><br>
        </div>
    `;
}

function showScholarshipDetails(type) {
    let scholarshipDescription = "";

    switch (type) {
        case 'merit':
            scholarshipDescription = "<strong>Merit-based Scholarship:</strong> This scholarship is awarded to students based on their academic performance. Students who achieve exceptional grades in their previous education can apply for this scholarship.";
            break;
        case 'need':
            scholarshipDescription = "<strong>Need-based Scholarship:</strong> This scholarship is designed to help students who are facing financial difficulties. The eligibility criteria are based on income level and other financial factors.";
            break;
        case 'sports':
            scholarshipDescription = "<strong>Sports Scholarship:</strong> For students who excel in sports, this scholarship provides financial support for their education while also encouraging them to represent the university in various athletic events.";
            break;
        case 'research':
            scholarshipDescription = "<strong>Research Scholarship:</strong> This scholarship is offered to postgraduate students who wish to pursue research in specific fields of study. It is ideal for students interested in contributing to innovative research in their area of expertise.";
            break;
        default:
            scholarshipDescription = "Sorry, I don't have information on this scholarship type.";
    }

    addBotMessage(scholarshipDescription);
}
