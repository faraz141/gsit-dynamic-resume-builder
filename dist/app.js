"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const generateCvButton = document.getElementById('generateCv');
    const addEducationButton = document.getElementById('addEducation');
    const addSkillButton = document.getElementById('addSkills');
    const resumePreview = document.getElementById('resumePreview');
    const educationContainer = document.getElementById('educationContainer');
    const skillsContainer = document.getElementById('skills-container');
    const languagesContainer = document.getElementById('language-container');
    const addLanguageButton = document.getElementById('addLanguages');
    const certificationContainer = document.getElementById('certification-container');
    const addCertificationButton = document.getElementById('addCertification');
    let educationCount = 1;
    let skillCount = 1;
    let languageCount = 1;
    let certificationCount = 1;
    // Add the formatDate function here
    const formatDate = (dateString) => {
        if (!dateString)
            return 'N/A'; // Handle empty date strings
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        // Determine the suffix for the day
        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31)
            suffix = 'st';
        else if (day === 2 || day === 22)
            suffix = 'nd';
        else if (day === 3 || day === 23)
            suffix = 'rd';
        return `${day}${suffix}-${month}-${year}`;
    };
    const addEducationField = () => {
        educationCount++;
        const newEducationDiv = document.createElement('div');
        newEducationDiv.className = 'education-input';
        newEducationDiv.id = `education${educationCount}`;
        newEducationDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <button type="button" style="background-color: #ff5733; color: white; padding: 10px 20px; margin-right: 10px; margin-left: auto; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s;" class="delete-education">Delete<i class="fas fa-trash-alt" style="cursor: pointer; color: #333; margin-left: 10px;"></i></button>
      </div>
      <input type="text" id="school${educationCount}" name="school${educationCount}" placeholder="School" />
      <span class="error" id="school${educationCount}Error">This field is required.</span>
      <input type="text" id="degree${educationCount}" name="degree${educationCount}" placeholder="Degree" />
      <span class="error" id="degree${educationCount}Error">This field is required.</span>
      <div class="education-input-date">
        <div class="date-input">
          <input type="date" id="education-start-date${educationCount}" name="education-start-date${educationCount}" placeholder="Starting Date" />
          <span class="error" id="education-start-date${educationCount}Error">This field is required.</span>
        </div>
        <div class="date-input">
          <input type="date" id="education-ending-date${educationCount}" name="education-ending-date${educationCount}" placeholder="Ending Date" />
          <span class="error" id="education-ending-date${educationCount}Error">This field is required.</span>
        </div>
      </div>
    `;
        educationContainer.appendChild(newEducationDiv);
        newEducationDiv
            .querySelector('.delete-education')
            ?.addEventListener('click', () => {
            newEducationDiv.remove();
        });
    };
    const addSkillsField = () => {
        skillCount++;
        const newSkillDiv = document.createElement('div');
        newSkillDiv.className = 'skills-input';
        newSkillDiv.id = `skill${skillCount}`;
        newSkillDiv.innerHTML = `
      <div style="display: flex; flex-direction: row; justify -content: center; align-items: center; gap: 10px;">
        <input type="text" name="skill${skillCount}" id="skill${skillCount}" placeholder="Enter Your Skill" />
        <i class="fas fa-trash-alt delete-skill" style="cursor: pointer; font-size: 24px; color: #333;"></i>
      </div>
      <span class="error" id="skill${skillCount}Error">This field is required.</span>
    `;
        skillsContainer.appendChild(newSkillDiv);
        newSkillDiv
            .querySelector('.delete-skill')
            ?.addEventListener('click', () => {
            newSkillDiv.remove();
        });
    };
    const addLanguagesField = () => {
        languageCount++;
        const newLanguageDiv = document.createElement('div');
        newLanguageDiv.className = 'languages-input';
        newLanguageDiv.id = `language${languageCount}`;
        newLanguageDiv.innerHTML = `
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
        <input type="text" name="language${languageCount}" id="language${languageCount}" placeholder="Enter Your Language" />
        <i class="fas fa-trash-alt delete-language" style="cursor: pointer; font-size: 24px; color: #333;"></i>
      </div>
      <span class="error" id="language${languageCount}Error">This field is required.</span>
    `;
        languagesContainer.appendChild(newLanguageDiv);
        newLanguageDiv
            .querySelector('.delete-language')
            ?.addEventListener('click', () => {
            newLanguageDiv.remove();
        });
    };
    const addCertificationField = () => {
        certificationCount++;
        const newCertificationDiv = document.createElement('div');
        newCertificationDiv.className = 'certification';
        newCertificationDiv.id = `certification${certificationCount}`;
        newCertificationDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <button type="button" style="background-color: #ff5733; color: white; padding: 10px 20px; margin-right: 10px; margin-left : auto; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s;" class="delete-certification">Delete<i class="fas fa-trash-alt" style="cursor: pointer; color: #333; margin-left: 10px;"></i></button>
        </div>
        <div class="certification-input">
          <input type="text" name="Certification-name${certificationCount}" id="certification-name${certificationCount}" placeholder="Certification Name" />
        </div>
        <div class="certification-input">
          <input type="text" name="Organization-name${certificationCount}" id="organization-name${certificationCount}" placeholder="Organization Name" />
        </div>
    `;
        certificationContainer.appendChild(newCertificationDiv);
        newCertificationDiv
            .querySelector('.delete-certification')
            ?.addEventListener('click', () => {
            newCertificationDiv.remove();
        });
    };
    const gatherFormData = (callback) => {
        const photoInput = document.getElementById('photo');
        const file = photoInput.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const dataUrl = event.target?.result;
                callback(dataUrl);
            };
            reader.readAsDataURL(file);
        }
        else {
            callback(''); // If no file is selected, pass an empty string
        }
    };
    const renderResume = (formData) => {
        resumePreview.innerHTML = `
      <div class="resume-container">
        <div class="top" >
          <div class="profile-pic">    
              <img src="${formData.photo}" alt="${formData.name}">
          </div>
          <div class="info">
            <h1>${formData.name.toUpperCase()}</h1>
            <h2>${formData.title}</h2>
            <div class="contact-info">
                 <p><i class="fas fa-envelope"></i> ${formData.email}</p>
                 <p><i class="fas fa-phone"></i> ${formData.contactNo}</p>
                 <p><i class="fas fa-map-marker-alt"></i> ${formData.address}</p>
            </div>
           
          </div>
        </div>
        <div class="main">
          <div class="left">
          <h3>Certifications</h3>
            ${formData.certification
            .map((cer) => `<p><strong>${cer.Name}</strong><br/>${cer.Organization}</p>`)
            .join('')}
            
            <h3>Skills</h3>
            <ul>
              ${formData.skills
            .map((skill) => `<li>${skill}</li>`)
            .join('')}
            </ul>
            <h3>Languages</h3>
            <ul>
              ${formData.languages
            .map((language) => `<li>${language}</li>`)
            .join('')}
            </ul>
          </div>
          <div class="right">
          <h3>Summary</h3>
            <p>${formData.summary}</p>
            <h3>Work Experience</h3>
            <p>${formData.workExperienceCompanyName}, ${formData.workExperiencePositionName} (${formatDate(formData.WorkStartDate)} - ${formatDate(formData.workEndingDate)})</p>
            <p>${formData.workExperiencePositionDescription}</p>
            <p>${formData.workExperienceCompanyDescription}</p>
            
            <h3> Education</h3>
            ${formData.education
            .map((edu) => `<p><strong>${edu.school}</strong><br/>Degree: ${edu.degree}<br/>${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}</p>`)
            .join('')}
            
            
          </div>
        </div>
      </div>
    `;
    };
    generateCvButton.addEventListener('click', () => {
        hideErrors();
        gatherFormData((photoDataUrl) => {
            const certificationData = Array.from(certificationContainer.querySelectorAll('.certification')).map((cerDiv) => ({
                Name: cerDiv.querySelector('input[name^="Certification-name"]')?.value,
                Organization: cerDiv.querySelector('input[name^="Organization-name"]')?.value,
            }));
            const educationData = [
                // Include the initial education input here
                {
                    school: document.getElementById('school')
                        ?.value,
                    degree: document.getElementById('degree')
                        ?.value,
                    startDate: document.getElementById('education-start-date')?.value,
                    endDate: document.getElementById('education-ending-date')?.value,
                },
            ];
            educationData.push(...Array.from(educationContainer.querySelectorAll('.education-input')).map((eduDiv) => ({
                school: eduDiv.querySelector('input[name^="school"]')?.value,
                degree: eduDiv.querySelector('input[name^="degree"]')?.value,
                startDate: eduDiv.querySelector('input[name^="education-start-date"]')?.value,
                endDate: eduDiv.querySelector('input[name^="education-ending-date"]')?.value,
            })));
            const skillData = Array.from(skillsContainer.querySelectorAll('.skills-input')).map((skillDiv) => ({
                skill: skillDiv.querySelector('input[name^="skill"]')?.value,
            }));
            const languageData = Array.from(languagesContainer.querySelectorAll('.languages-input')).map((languageDiv) => ({
                language: languageDiv.querySelector('input[name^="language"]')?.value,
            }));
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
                education: educationData,
                workExperienceCompanyDescription: document.getElementById('company-description').value,
                workExperienceCompanyName: document.getElementById('company-name').value,
                workExperiencePositionName: document.getElementById('position').value,
                workExperiencePositionDescription: document.getElementById('position-description').value,
                WorkStartDate: document.getElementById('work-start-date').value,
                workEndingDate: document.getElementById('work-ending-date').value,
                certification: certificationData,
                skills: skillData.map((s) => s.skill),
                languages: languageData.map((l) => l.language),
                photo: photoDataUrl, // Pass the data URL here
            };
            const errors = validateForm(formData);
            if (errors.length > 0) {
                displayErrors(errors);
                return;
            }
            renderResume(formData);
        });
    });
    addEducationButton.addEventListener('click', addEducationField);
    addSkillButton.addEventListener('click', addSkillsField);
    addLanguageButton.addEventListener('click', addLanguagesField);
    addCertificationButton.addEventListener('click', addCertificationField);
    const validateForm = (data) => {
        const errors = [];
        for (const field in data) {
            if (Array.isArray(data[field])) {
                data[field].forEach((value, idx) => {
                    if (!value)
                        errors.push({ field: `${field}${idx + 1}` });
                });
            }
            else if (data[field] === '') {
                errors.push({ field });
            }
        }
        return errors;
    };
    const displayErrors = (errors) => {
        errors.forEach((error) => {
            const errorField = document.getElementById(`${error.field}Error`);
            if (errorField) {
                errorField.style.display = 'inline';
            }
        });
    };
    const hideErrors = () => {
        document.querySelectorAll('.error').forEach((el) => {
            el.style.display = 'none';
        });
    };
});
