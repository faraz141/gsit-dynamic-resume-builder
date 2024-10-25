"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const generateCvButton = document.getElementById('generateCv');
    const resumePreview = document.getElementById('resumePreview');
    generateCvButton.addEventListener('click', () => {
        const formData = {
            name: document.getElementById('name').value,
            title: document.getElementById('title').value,
            email: document.getElementById('email').value,
            contactNo: document.getElementById('contactNo')
                .value,
            dob: document.getElementById('dob').value,
            address: document.getElementById('address').value,
            summary: document.getElementById('summary')
                .value,
            school: document.getElementById('school').value,
            degree: document.getElementById('degree').value,
            schoolStartDate: document.getElementById('education-start-date').value,
            schoolEndingDate: document.getElementById('education-ending-date').value,
            workExperienceCompanyDiscription: document.getElementById('company-description').value,
            workExperienceCompanyName: document.getElementById('company-name').value,
            workExperiencePositionName: document.getElementById('position').value,
            workExperiencePositionDiscription: document.getElementById('position-description').value,
            WorkStartDate: document.getElementById('work-start-date').value,
            workEndingDate: document.getElementById('work-ending-date').value,
            // Changed from 'company-discription' to 'company-description'
            skills: [
                document.getElementById('skill1').value,
                document.getElementById('skill2').value,
                document.getElementById('skill3').value,
                document.getElementById('skill4').value,
                document.getElementById('soft-skill1').value,
                document.getElementById('soft-skill2').value,
            ],
        };
        // Validation
        const errors = validateForm(formData);
        if (errors.length > 0) {
            errors.forEach((error) => {
                const errorField = document.getElementById(`${error.field}Error`);
                errorField.style.display = 'inline';
            });
            return; // Stop execution if there are errors
        }
        else {
            hideErrors();
        }
        // Generate Resume Preview
        resumePreview.innerHTML = `
      <div class= "resume-container">
      <div class="top">
      <h1>${formData.name}</h1>
      <h2>${formData.title}</h2>
      <div class="info">
      <div class="info-detail"><p><i class="fas fa-envelope"></i> ${formData.email}</p></div>
      <div class="info-detail">  <p><i class="fas fa-phone"></i> ${formData.contactNo}</p>
</div>
      <div class="info-detail">  <p><i class="fas fa-birthday-cake"></i> ${formData.dob}</p>
</div>
      <div class="info-detail"><p><i class="fas fa-map-marker-alt"></i> ${formData.address}</p></div>
  </div>
      </div>
      </div>
      <div class="main">
      <div class="left">
      <div class="summary"><h3>Summary</h3>
      <p>${formData.summary}</p></div>
      <div class="skill"><h3>Skills</h3>
      <ul>
        ${formData.skills
            .map((skill) => (skill ? `<li>${skill}</li>` : ''))
            .join('')}
      </ul></div>
      </div>
      <div class="right">
      <div class="experience"><h3>Work Experience</h3>
      <h4><strong>Company Name :</strong> ${formData.workExperienceCompanyName}<br/>${formData.WorkStartDate}  -  ${formData.workEndingDate}</h4>

      <h4><strong>Position :</strong> ${formData.workExperiencePositionName}</h4>
      <p><strong>Position Description :</strong> ${formData.workExperiencePositionDiscription}</p>
      <p>${formData.workExperienceCompanyDiscription}</p></div>
      <div class="Education"><h3>Education</h3>
      <p>${formData.school} <br/> ${formData.degree}<br/>${formData.schoolStartDate}    -   ${formData.schoolEndingDate}</p></div>
      </div>
      </div>
      
      
      
      
    `;
    });
    function validateForm(data) {
        const errors = [];
        for (const field in data) {
            if (!data[field]) {
                errors.push({ field });
            }
        }
        return errors;
    }
    function hideErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach((el) => {
            el.style.display = 'none';
        });
    }
});
