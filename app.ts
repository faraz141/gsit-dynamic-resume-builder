interface ResumeFormData {
  name: string;
  email: string;
  contactNo: string;
  dob: string;
  nationality: string;
  education: string;
  workExperience: string;
  skills: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const generateCvButton = document.getElementById(
    'generateCv',
  ) as HTMLButtonElement;
  const resumePreview = document.getElementById(
    'resumePreview',
  ) as HTMLDivElement;

  generateCvButton.addEventListener('click', () => {
    const formData: ResumeFormData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      contactNo: (document.getElementById('contactNo') as HTMLInputElement)
        .value,
      dob: (document.getElementById('dob') as HTMLInputElement).value,
      nationality: (document.getElementById('nationality') as HTMLInputElement)
        .value,
      education: (document.getElementById('education') as HTMLTextAreaElement)
        .value,
      workExperience: (
        document.getElementById('workExperience') as HTMLTextAreaElement
      ).value,
      skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
    };

    // Reset error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(
      (el) => ((el as HTMLSpanElement).style.display = 'none'),
    );

    let isValid = true;

    // Validate form fields
    Object.keys(formData).forEach((key) => {
      if (formData[key as keyof ResumeFormData] === '') {
        isValid = false;
        const errorElement = document.getElementById(
          `${key}Error`,
        ) as HTMLSpanElement;
        if (errorElement) {
          errorElement.style.display = 'block';
        }
      }
    });

    if (isValid) {
      updateResumePreview(formData);
    }
  });

  function updateResumePreview(formData: ResumeFormData) {
    resumePreview.innerHTML = `
        <div class="resumeContent">
            <h2>${formData.name}</h2>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Contact Number:</strong> ${formData.contactNo}</p>
            <p><strong>Date of Birth:</strong> ${new Date(
              formData.dob,
            ).toLocaleDateString()}</p>
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
