// Initialize theme based on system preference
function initTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }
}

// 1. Interactive Avatar Animation on Scroll
const avatar = document.getElementById('avatar');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  avatar.style.transform = `translateY(${scrollY * 0.2}px)`;
});

// 2. Dark Mode + Auto Theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// 3. Animated Career Timeline
const timelineContent = document.getElementById('timeline-content');
const timelineData = [
  { year: '2020', title: 'Desenvolvedor Júnior', description: 'Trabalhei em projetos de e-commerce.' },
  { year: '2022', title: 'Desenvolvedor Front-End', description: 'Liderança em interfaces interativas.' },
  { year: '2025', title: 'Desenvolvedor Sênior', description: 'Consultoria em UX/UI e performance.' },
];
timelineData.forEach((item, index) => {
  const div = document.createElement('div');
  div.className = 'relative pl-8 sm:pl-32 py-6 group animate-slide-up';
  div.style.animationDelay = `${index * 0.2}s`;
  div.innerHTML = `
    <div class="flex items-center">
      <div class="absolute left-0 w-4 h-4 bg-blue-500 rounded-full"></div>
      <div class="ml-4">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${item.year} - ${item.title}</h3>
        <p class="text-gray-600 dark:text-gray-300">${item.description}</p>
      </div>
    </div>
  `;
  timelineContent.appendChild(div);
});

// 4. Developer Mode (Easter Egg)
const devModeToggle = document.getElementById('dev-mode-toggle');
devModeToggle.addEventListener('click', () => {
  alert('Modo Desenvolvedor Ativado! 🛠️ Insira o código secreto:');
  const code = prompt('Digite o código:');
  if (code === '1337') {
    document.body.style.background = 'url("https://source.unsplash.com/random/1920x1080/?code")';
    document.body.style.backgroundSize = 'cover';
  }
});

// 5. Skills Thermometer
const skillsList = document.getElementById('skills-list');
const skillsData = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
];
skillsData.forEach(skill => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">${skill.name}</h3>
    <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div class="bg-blue-500 h-4 rounded-full" style="width: ${skill.level}%"></div>
    </div>
  `;
  skillsList.appendChild(div);
});

// 6. Salary Simulator (Mock Geolocalization)
const calculateSalary = document.getElementById('calculate-salary');
const locationInput = document.getElementById('location-input');
const salaryResult = document.getElementById('salary-result');
calculateSalary.addEventListener('click', () => {
  const location = locationInput.value || 'Desconhecida';
  // Mock salary calculation based on location
  const salary = location.toLowerCase().includes('são paulo') ? 'R$ 10.000 - R$ 15.000' : 'R$ 6.000 - R$ 10.000';
  salaryResult.textContent = `Salário estimado em ${location}: ${salary}`;
});

// 7. Mini Dashboard with Projects
const projectsList = document.getElementById('projects-list');
const projectsData = [
  { title: 'Projeto 1', description: 'E-commerce com React.' },
  { title: 'Projeto 2', description: 'Dashboard com D3.js.' },
  { title: 'Projeto 3', description: 'App mobile com Flutter.' },
];
projectsData.forEach(project => {
  const div = document.createElement('div');
  div.className = 'p-4 bg-white dark:bg-gray-700 rounded shadow';
  div.innerHTML = `
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">${project.title}</h3>
    <p class="text-gray-600 dark:text-gray-300">${project.description}</p>
  `;
  projectsList.appendChild(div);
});

// 8. AI Chatbot (Mock API)
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');
const chatSend = document.getElementById('chat-send');
chatSend.addEventListener('click', () => {
  const message = chatInput.value;
  if (message) {
    chatOutput.innerHTML += `<p class="text-gray-800 dark:text-white">Você: ${message}</p>`;
    // Mock AI response
    chatOutput.innerHTML += `<p class="text-blue-500">Bot: Olá! Como posso ajudar com seu projeto? 😄</p>`;
    chatInput.value = '';
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }
});

// 9. CV Parser (PDF.js)
const cvUpload = document.getElementById('cv-upload');
const cvResult = document.getElementById('cv-result');
cvUpload.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const typedArray = new Uint8Array(e.target.result);
      const pdf = await pdfjsLib.getDocument(typedArray).promise;
      let text = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ');
      }
      cvResult.textContent = `CV analisado: ${text.slice(0, 100)}...`;
    };
    reader.readAsArrayBuffer(file);
  }
});

// 10. Recruiter Mode
const recruiterModeToggle = document.getElementById('recruiter-mode-toggle');
recruiterModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('recruiter-mode');
  if (document.body.classList.contains('recruiter-mode')) {
    document.body.style.background = '#f0f4f8';
    document.body.style.color = '#333';
    document.querySelectorAll('section').forEach(section => {
      section.style.background = '#fff';
      section.style.border = '1px solid #ddd';
    });
    alert('Modo Recrutador Ativado: Interface simplificada para análise.');
  } else {
    document.body.style.background = '';
    document.body.style.color = '';
    document.querySelectorAll('section').forEach(section => {
      section.style.background = '';
      section.style.border = '';
    });
  }
});

// Animation for timeline
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);