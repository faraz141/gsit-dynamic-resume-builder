document.addEventListener('DOMContentLoaded', () => {
  const generateCvButton = document.getElementById(
    'generateCv',
  ) as HTMLButtonElement;
  const resumePreview = document.getElementById('resumePreview') as HTMLElement;

  generateCvButton.addEventListener('click', () => {
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      title: (document.getElementById('title') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      contactNo: (document.getElementById('contactNo') as HTMLInputElement)
        .value,
      dob: (document.getElementById('dob') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value, // Changed from 'Address' to 'address'
      summary: (document.getElementById('summary') as HTMLTextAreaElement)
        .value,
      school: (document.getElementById('school') as HTMLInputElement).value,
      degree: (document.getElementById('degree') as HTMLInputElement).value,
      workExperienceCompanyDiscription: (
        document.getElementById('company-description') as HTMLTextAreaElement
      ).value,
      workExperienceCompanyName: (
        document.getElementById('company-name') as HTMLInputElement
      ).value,
      workExperiencePositionName: (
        document.getElementById('position') as HTMLInputElement
      ).value,
      workExperiencePositionDiscription: (
        document.getElementById('position-description') as HTMLTextAreaElement
      ).value,
      // Changed from 'company-discription' to 'company-description'
      skills: [
        (document.getElementById('skill1') as HTMLInputElement).value,
        (document.getElementById('skill2') as HTMLInputElement).value,
        (document.getElementById('skill3') as HTMLInputElement).value,
        (document.getElementById('skill4') as HTMLInputElement).value,
        (document.getElementById('soft-skill1') as HTMLInputElement).value,
        (document.getElementById('soft-skill2') as HTMLInputElement).value,
      ],
    };

    // Validation
    const errors = validateForm(formData);
    if (errors.length > 0) {
      errors.forEach((error) => {
        const errorField = document.getElementById(
          `${error.field}Error`,
        ) as HTMLSpanElement;
        errorField.style.display = 'inline';
      });
      return; // Stop execution if there are errors
    } else {
      hideErrors();
    }

    // Generate Resume Preview
    resumePreview.innerHTML = `
      <div class= "resume-container">
      <div class="top">
      <h1>${formData.name}</h1>
      <h2>${formData.title}</h2>
      <div class="info">
      <div class="info-detail"><p><i class="fas fa-envelope"></i> ${
        formData.email
      }</p></div>
      <div class="info-detail">  <p><i class="fas fa-phone"></i> ${
        formData.contactNo
      }</p>
</div>
      <div class="info-detail">  <p><i class="fas fa-birthday-cake"></i> ${
        formData.dob
      }</p>
</div>
      <div class="info-detail"><p><i class="fas fa-map-marker-alt"></i> ${
        formData.address
      }</p></div>
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
      <div class="experience"><h3>WorkExperience</h3>
      <h4><strong>Company Name :</strong> ${
        formData.workExperienceCompanyName
      }</h4>
      <h4><strong>Position :</strong> ${
        formData.workExperiencePositionName
      }</h4>
      <p><strong>Position Description :</strong> ${
        formData.workExperiencePositionDiscription
      }</p>
      <p>${formData.workExperienceCompanyDiscription}</p></div>
      <div class="Education"><h3>Education</h3>
      <p>${formData.school} - ${formData.degree}</p></div>
      </div>
      </div>
      
      
      
      
    `;
  });

  function validateForm(data: any) {
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
      (el as HTMLElement).style.display = 'none';
    });
  }
});
