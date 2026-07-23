//To start off, the form built in html needs to be linked to .js

 const form= document.querySelector("#careerForm")

 form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput= document.querySelector("#name")
  const name= nameInput.value
  const majorInput= document.querySelector("#major")
  const major= majorInput.value
  const gradYearInput= document.querySelector("#gradYear")
  const gradYear= gradYearInput.value
  const skillsInput= document.querySelector("#skills")
  const skills= skillsInput.value
  const jobDescriptionInput= document.querySelector("#jobDescription")
  const jobDescription= jobDescriptionInput.value

  console.log(name);
  console.log(major);
  console.log(gradYear);
  console.log(skills);
  console.log(jobDescription);

  const results= document.querySelector("#results")
  results.innerHTML= `
  <div class="results-card">
   <p>Name: ${name}</p>
   <p>Major: ${major}</p>
   <p>Graduation Year: ${gradYear}</p>
   <p>Skills: ${skills}</p>
   <p>Job Description: ${jobDescription}</p>
  </div>
  `;
  form.reset()
});