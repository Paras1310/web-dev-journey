const skills = ['HTML', 'CSS', 'JavaScript', 'Flexbox','Grid', 'Git','Node.js'];
const container = document.getElementById('skills-container');

container.innerHTML = skills.map(skill => `<div class="skill">${skill}</div>`).join('');