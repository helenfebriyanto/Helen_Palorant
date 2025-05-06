const faces = document.querySelectorAll('.kepala-agent');
const mainImage = document.querySelector('.agent img');
const agentName = document.querySelector('.agent-name');
const roleLogo = document.querySelector('.role-logo');
const roleText = document.querySelector('.role-hero');
const agentDescription = document.querySelector('.agent-description');
const skillIcons = document.querySelectorAll('.agent-skill .skill');

// Data agents
const agents = [
  {
    name: 'Zane',
    image: '/Assets/Zane.png',
    roleLogo: '/Assets/Sentinel.png',
    role: 'Sentinel',
    description: "Zane is the backbone of any team, creating safety wherever she steps. With her healing abilities and defensive barriers, she can turn the tide of battle in an instant. She revives fallen teammates and slows enemy advances. In the chaos of the fight, Zane brings calm and control.",
    skills: [
      '/Assets/Barrier_Orb.png',
      '/Assets/Slow_Orb.png',
      '/Assets/Healing_Orb.png',
      '/Assets/Resurrection.png'
    ]
  },
  {
    name: 'Nova',
    image: '/Assets/Nova.png',
    roleLogo: '/Assets/Initiator.png',
    role: 'Initiator',
    description: "Nova is a master tracker who uncovers enemies across vast terrains. His bow and advanced technology help him reveal hidden foes and control engagements. Whether scouting from afar or finishing a weakened enemy, Nova's precision ensures victory. No enemy can hide from his watchful eye.",
    skills: [
      '/Assets/Owl_Drone.png',
      '/Assets/Shock_Bolt.png',
      '/Assets/Recon_Bolt.png',
      '/Assets/Hunter_Fury.png'
    ]
  },
  {
    name: 'Oman',
    image: '/Assets/Oman.png',
    roleLogo: '/Assets/Controller.png',
    role: 'Controller',
    description: "Oman lurks in the shadows, sowing confusion among his enemies. His smokes and teleportation make him unpredictable and deadly. With careful positioning, he isolates and picks off opponents one by one. Fear follows wherever Oman treads.",
    skills: [
      '/Assets/Shrouded_Step.png',
      '/Assets/Paranoia.png',
      '/Assets/Dark_Cover.png',
      '/Assets/From_The_Shadows.png'
    ]
  },
  {
    name: 'Jetz',
    image: '/Assets/Jetz.png',
    roleLogo: '/Assets/Duelist.png',
    role: 'Duelist',
    description: "Jetz is a swift and agile duelist who dominates with high-speed movements. She strikes enemies with quick bursts, then escapes before they can react. Her daring playstyle rewards boldness and creativity. In Jetz’s hands, every battlefield feels like her playground.",
    skills: [
      '/Assets/Cloudburst.png',
      '/Assets/Updraft.png',
      '/Assets/Tailwind.png',
      '/Assets/Blade_Storm.png'
    ]
  },
  {
    name: 'Vaper',
    image: '/Assets/Vaper.png',
    roleLogo: '/Assets/Controller.png',
    role: 'Controller',
    description: "Vaper manipulates toxic chemicals to control the battlefield. Her poisonous clouds and deadly walls force enemies into vulnerable positions. With strategic use of her toxins, she cuts off vision and zones opponents. Facing Vaper means fighting on her terms—or not fighting at all.",
    skills: [
      '/Assets/Snake_Bite.png',
      '/Assets/Poison_Cloud.png',
      '/Assets/Toxic_Screen.png',
      '/Assets/Vipers_Pit.png'
    ]
  }
];

// Fungsi update agent
function updateAgent(index) {
  const agent = agents[index];
  mainImage.src = agent.image;
  mainImage.alt = agent.name;
  agentName.textContent = agent.name;
  roleLogo.src = agent.roleLogo;
  roleText.textContent = agent.role;
  agentDescription.textContent = agent.description;
  skillIcons.forEach((icon, i) => {
    icon.src = agent.skills[i];
  });

  // Update active class
  faces.forEach(face => face.classList.remove('active'));
  faces[index].classList.add('active');
}

// Add event listener ke semua wajah
faces.forEach((face, index) => {
  face.addEventListener('click', () => {
    updateAgent(index);
  });
});

// Set awal
updateAgent(0);