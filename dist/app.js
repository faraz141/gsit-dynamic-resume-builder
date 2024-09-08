"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    const generateCvButton = document.getElementById('generateCv');
    const resumePreview = document.getElementById('resumePreview');
    generateCvButton.addEventListener('click', () => {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            contactNo: document.getElementById('contactNo')
                .value,
            dob: document.getElementById('dob').value,
            nationality: document.getElementById('nationality')
                .value,
            education: document.getElementById('education')
                .value,
            workExperience: document.getElementById('workExperience').value,
            skills: document.getElementById('skills').value,
        };
        // Reset error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach((el) => (el.style.display = 'none'));
        let isValid = true;
        // Validate form fields
        Object.keys(formData).forEach((key) => {
            if (formData[key] === '') {
                isValid = false;
                const errorElement = document.getElementById(`${key}Error`);
                if (errorElement) {
                    errorElement.style.display = 'block';
                }
            }
        });
        if (isValid) {
            updateResumePreview(formData);
        }
    });
    function updateResumePreview(formData) {
        resumePreview.innerHTML = `
        <div class="resumeContent">
            <h2>${formData.name}</h2>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Contact Number:</strong> ${formData.contactNo}</p>
            <p><strong>Date of Birth:</strong> ${new Date(formData.dob).toLocaleDateString()}</p>
            <p><strong>Nationality:</strong> ${formData.nationality}</p>
            <h3>Education</h3>
            <p>${formData.education.replace(/\n/g, '<br>')}</p>
            <h3>Work Experience</h3>
            <p>${formData.workExperience.replace(/\n/g, '<br>')}</p>
            <h3>Skills</h3>
            <p>${formData.skills.replace(/\n/g, '<br>')}</p>
        </div>
    `;
    }
});
