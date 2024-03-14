import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
 
  linkedin,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Nossos serviços",
    url: "#features",
  },
  {
    id: "1",
    title: "Preços",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Nossas virtudes",
    url: "#collaboration",
  },
  {
    id: "3",
    title: "Projetos Futuros",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "1",
    title: "Iniciativa - Rotina Virtual",
    text: "Um conglomerado de aplicativos para várias siuações do dia-a-dia, não importa como ou quando, sempre há um jeito de digitalizar.",
    date: "Atualmente",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Elvis Sistema de Barbearia ",
    text: "Um aplicativo com um objetivo de facilitar e dinamizar o processo de um cliente marcar serviços em uma barbearia.",
    date: "Fevereiro 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Emperor - Criador de sites IA",
    text: "Criar seu site nunca foi tão fácil e rápido. Com apenas um comando e cinco perguntas, o Emperor é capaz de criar uma página personalizavel para seu negócio ",
    date: "EM BREVE",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Com automação inteligente e segurança de primeira linha, é a solução perfeita para equipes que buscam trabalhar de forma mais eficiente.";

export const collabContent = [
  {
    id: "0",
    title: "Segurança de Ponta",
    text: collabText,
  },
  {
    id: "1",
    title: "Criatividade",
  },
  {
    id: "2",
    title: "Flexibilidade",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
  
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Uma página simples e elegante para o seu negócio",
    price: "799",
    features: [
      "Layout responsívo",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Design moderno e tecnologias mais recentes do mercado",
    price: "3999",
    features: [
      "Layout responsívo",
      "Elementos visuais exclusivos",
      "Animações",
      "Várias páginas",
    ],
  },
  {
    id: "2",
    title: "Ultra",
    description: "Eleve seu negócio para o proximo nível, dispute com os melhores do mercado e deixe sua marca",
    price: null,
    features: [
      "Layout responsívo",
      "Elementos visuais exclusivos",
      "Animações",
      "Várias páginas",
      "Cadastro para clientes",
      "Muitas outras vantagens"
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Criação de sites modernos",
    text: "C oncepção e implementação de websites que são visualmente atraentes, fáceis de navegar e otimizados para motores de busca",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Desenvolvimento de Sistemas",
    text: "Criação de sistemas personalizados para atender às necessidades específicas de um negócio",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Otimização de processos ",
    text: "Melhoria dos processos de negócios existentes para aumentar a eficiência, reduzir o desperdício e melhorar a qualidade",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Social Media e Rebranding ",
    text: "Ajuda as empresas a construir uma presença forte nas redes sociais e a reformular sua imagem de marca para se manterem relevantes e atraentes para o público-alvo.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Automação de Processo",
    text: "Utilização de tecnologia para automatizar tarefas repetitivas, reduzindo o tempo e o esforço necessários e aumentando a precisão",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Consultoria TOTS RM & FLUIG",
    text: "Este serviço oferece consultoria especializada em TOTS RM & FLUIG, ajudando as empresas a aproveitar ao máximo essas plataformas",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [

  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/p/CzUcVCsglQv/?igshid=MzRlODBiNWFlZA==",
  },
  {
    id: "2",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/r3d3-desenvolvimentos",
  },
];
