document.getElementById("resume-form")?.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const objective = (document.getElementById("objective") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
    const languages = (document.getElementById("languages") as HTMLInputElement).value;
    const hobbies = (document.getElementById("hobbies") as HTMLInputElement).value;
    const imageInput = document.getElementById("image") as HTMLInputElement;

    const resumeOutput = document.getElementById("resume-output") as HTMLElement;
    const resumeDiv = document.getElementById("resume") as HTMLElement;

    // Load profile image if available
    let imageUrl = "";
    if (imageInput.files && imageInput.files[0]) {
        imageUrl = await loadImage(imageInput.files[0]);
    } else {
        alert("Please select a profile image to complete the resume.");
        return;
    }

    // Display the resume output section
    resumeOutput.style.display = "block";
    resumeDiv.innerHTML = `
        <div>
            <img id="profile-image" src="${imageUrl}" alt="Profile Image">
        </div>
        <h3 class="resume-section-title">Name</h3>
        <p class="resume-item">${name}</p>
        <h3 class="resume-section-title">Email</h3>
        <p class="resume-item">${email}</p>
        <h3 class="resume-section-title">Objective</h3>
        <p class="resume-item">${objective}</p>
        <h3 class="resume-section-title">Education</h3>
        <p class="resume-item">${education}</p>
        <h3 class="resume-section-title">Skills</h3>
        <p class="resume-item">${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
        <h3 class="resume-section-title">Experience</h3>
        <p class="resume-item">${experience}</p>
        <h3 class="resume-section-title">Projects</h3>
        <p class="resume-item">${projects}</p>
        <h3 class="resume-section-title">Certifications</h3>
        <p class="resume-item">${certifications}</p>
        <h3 class="resume-section-title">Languages</h3>
        <p class="resume-item">${languages.split(',').map(lang => lang.trim()).join(', ')}</p>
        <h3 class="resume-section-title">Hobbies/Interests</h3>
        <p class="resume-item">${hobbies}</p>
    `;
});

// Ensure this function appears only once
function loadImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
