document.addEventListener('DOMContentLoaded', () => {
  const generateCvButton = document.getElementById(
    'generateCv',
  ) as HTMLButtonElement;
  const addEducationButton = document.getElementById(
    'addEducation',
  ) as HTMLButtonElement;
  const addSkillButton = document.getElementById(
    'addSkills',
  ) as HTMLButtonElement;
  const resumePreview = document.getElementById('resumePreview') as HTMLElement;
  const educationContainer = document.getElementById(
    'educationContainer',
  ) as HTMLElement;
  const skillsContainer = document.getElementById(
    'skills-container',
  ) as HTMLElement;
  const languagesContainer = document.getElementById(
    'language-container',
  ) as HTMLElement;
  const addLanguageButton = document.getElementById(
    'addLanguages',
  ) as HTMLButtonElement;
  const certificationContainer = document.getElementById(
    'certification-container',
  ) as HTMLElement;
  const addCertificationButton = document.getElementById(
    'addCertification',
  ) as HTMLButtonElement;

  let educationCount = 1;
  let skillCount = 1;
  let languageCount = 1;
  let certificationCount = 1;

  const addEducationField = () => {
    educationCount++;

    const newEducationDiv = document.createElement('div');
    newEducationDiv.className = 'education-input';
    newEducationDiv.id = `education${educationCount}`;
    newEducationDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
      <button type="button" style="background-color: #ff5733; color: white; padding: 10px 20px; margin-right: 10px; margin-left: auto; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s;" class="delete-education">Delete<i class="fas fa-trash-alt " style="cursor: pointer; color: #333; margin-left: 10px;"></i></button>
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
      <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 10px;">
       <input type="text" name="skill${skillCount}" id="skill${skillCount}" placeholder="Enter Your Skill" />
      <i class="fas fa-trash-alt delete-skill" style="cursor: pointer;font-size: 24px; color: #333;"></i></div>
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
        <i class="fas fa-trash-alt delete-language" style="cursor: pointer;font-size: 24px; color: #333;"></i></div>
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
      <button type="button" style="background-color: #ff5733; color: white; padding: 10px 20px; margin-right: 10px; margin-left: auto; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.3s;" class="delete-certification">Delete<i class="fas fa-trash-alt " style="cursor: pointer; color: #333; margin-left: 10px;"></i></button>
      </div>
        <div class="certification-input">
          <input type="text" name="Certification-name${certificationCount}" id="certification-name${certificationCount}" placeholder="Certification Name" />
        </div>
        <div class="certification-input">
          <input type="text" name="Organization-name${certificationCount}" id="organization-name${certificationCount}" placeholder="Organization Name" />
        </div>
        
    `;

    // Append new certification div to the container
    certificationContainer.appendChild(newCertificationDiv);

    // Add event listener for delete button
    newCertificationDiv
      .querySelector('.delete-certification')
      ?.addEventListener('click', () => {
        newCertificationDiv.remove();
      });
  };
  const gatherFormData = () => {
    const certificationData = Array.from(
      certificationContainer.querySelectorAll('.certification'),
    ).map((cerDiv) => ({
      Name: (
        cerDiv.querySelector(
          'input[name^="Certification-name"]',
        ) as HTMLInputElement
      )?.value,
      Organization: (
        cerDiv.querySelector(
          'input[name^="Organization-name"]',
        ) as HTMLInputElement
      )?.value,
    }));

    const educationData = Array.from(
      educationContainer.querySelectorAll('.education-input'),
    ).map((eduDiv) => ({
      school: (
        eduDiv.querySelector('input[name^="school"]') as HTMLInputElement
      )?.value,
      degree: (
        eduDiv.querySelector('input[name^="degree"]') as HTMLInputElement
      )?.value,
      startDate: (
        eduDiv.querySelector(
          'input[name^="education-start-date"]',
        ) as HTMLInputElement
      )?.value,
      endDate: (
        eduDiv.querySelector(
          'input[name^="education-ending-date"]',
        ) as HTMLInputElement
      )?.value,
    }));

    const skillData = Array.from(
      skillsContainer.querySelectorAll('.skills-input'),
    ).map((skillDiv) => ({
      skill: (
        skillDiv.querySelector('input[name^="skill"]') as HTMLInputElement
      )?.value,
    }));

    const languageData = Array.from(
      languagesContainer.querySelectorAll('.languages-input'),
    ).map((languageDiv) => ({
      language: (
        languageDiv.querySelector('input[name^="language"]') as HTMLInputElement
      )?.value,
    }));

    return {
      name: (document.getElementById('name') as HTMLInputElement).value,
      title: (document.getElementById('title') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      contactNo: (document.getElementById('contactNo') as HTMLInputElement)
        .value,
      dob: (document.getElementById('dob') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      summary: (document.getElementById('summary') as HTMLTextAreaElement)
        .value,
      education: educationData,
      workExperienceCompanyDescription: (
        document.getElementById('company-description') as HTMLTextAreaElement
      ).value,
      workExperienceCompanyName: (
        document.getElementById('company-name') as HTMLInputElement
      ).value,
      workExperiencePositionName: (
        document.getElementById('position') as HTMLInputElement
      ).value,
      workExperiencePositionDescription: (
        document.getElementById('position-description') as HTMLTextAreaElement
      ).value,
      WorkStartDate: (
        document.getElementById('work-start-date') as HTMLInputElement
      ).value,
      workEndingDate: (
        document.getElementById('work-ending-date') as HTMLInputElement
      ).value,
      certification: certificationData,
      skills: skillData.map((s) => s.skill),
      languages: languageData.map((l) => l.language),
    };
  };

  const validateForm = (data: any) => {
    const errors: { field: string }[] = [];
    for (const field in data) {
      if (Array.isArray(data[field])) {
        data[field].forEach((value: string, idx: number) => {
          if (!value) errors.push({ field: `${field}${idx + 1}` });
        });
      } else if (data[field] === '') {
        errors.push({ field });
      }
    }
    return errors;
  };

  const displayErrors = (errors: { field: string }[]) => {
    errors.forEach((error) => {
      const errorField = document.getElementById(`${error.field}Error`);
      if (errorField) {
        errorField.style.display = 'inline';
      }
    });
  };

  const hideErrors = () => {
    document.querySelectorAll('.error').forEach((el) => {
      (el as HTMLElement).style.display = 'none';
    });
  };

  const renderResume = (formData: any) => {
    resumePreview.innerHTML = `
      <div class="resume-container">
        <div class="top">
          <h1>${formData.name}</h1>
          <h2>${formData.title}</h2>
          <div class="info">
            <p><i class="fas fa-envelope"></i> ${formData.email}</p>
            <p><i class="fas fa-phone"></i> ${formData.contactNo}</p>
            <p><i class="fas fa-birthday-cake"></i> ${formData.dob}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${formData.address}</p>
          </div>
        </div>
        <div class="main">
          <div class="left">
            <h3>Summary</h3>
            <p>${formData.summary}</p>
            <h3>Skills</h3>
            <ul>${formData.skills
              .map((skill: string) => `<li>${skill}</li>`)
              .join('')}</ul>
            <h3>Languages</h3>
            <ul>${formData.languages
              .map((language: string) => `<li>${language}</li>`)
              .join('')}</ul>
          </div>
          <div class="right">
            <h3>Work Experience</h3>
            <p>${formData.workExperienceCompanyName}, ${
      formData.workExperiencePositionName
    } (${formData.WorkStartDate} - ${formData.workEndingDate})</p>
            <p>${formData.workExperiencePositionDescription}</p>
            <p>${formData.workExperienceCompanyDescription}</p>
            <h3>Education</h3>
            ${formData.education
              .map(
                (edu: {
                  school: string;
                  degree: string;
                  startDate: string;
                  endDate: string;
                }) =>
                  `<p><strong>${edu.school}</strong><br/>Degree: ${edu.degree}<br/>${edu.startDate} - ${edu.endDate}</p>`,
              )
              .join('')}
            <h3>Certifications</h3>
            ${formData.certification.map(
              (cer: { Name: string; Organization: string }) =>
                `<p><strong>${cer.Name}</strong><br/>${cer.Organization}</p>`,
            )}
            
          </div>
        </div>
      </div>`;
  };

  addEducationButton.addEventListener('click', addEducationField);
  addSkillButton.addEventListener('click', addSkillsField);
  addLanguageButton.addEventListener('click', addLanguagesField);
  addCertificationButton.addEventListener('click', addCertificationField);

  generateCvButton.addEventListener('click', () => {
    hideErrors();

    const formData = gatherFormData();
    const errors = validateForm(formData);

    if (errors.length > 0) {
      displayErrors(errors);
      return;
    }

    renderResume(formData);
  });
});
