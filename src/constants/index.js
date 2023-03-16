import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    meity,
    express,
    flask,
    stripe,
    thirdweb,
    web3,
    yelpcamp,
    codex,
    ecommerce,
    shareme,
    clone,
    sushil,
    mech,
    aman,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "Flask Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "flask",
      icon: flask,
    },
    {
      name: "thirdweb",
      icon: thirdweb,
    },
  ];
  
  const experiences = [
    {
      title: "AI-ML Intern",
      company_name: "Ministry of Electronics and Information Technology, Delhi",
      icon: meity,
      iconBg: "#383E56",
      date: "July 2022 - September 2022",
      points: [
        "Creating a full stack website using Artificial Intelligence and Machine Learning tools",
        "Aiding the employees of the Ministry to summarize large PDF files and convert audio files to text files",
        "Developing and maintaining web applications using Flask and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've seen very few interns as punctual, obedient and hard working as Rohan.",
      name: "Sushil Kr. Jangid",
      designation: "Scientist",
      company: "Ministry of Electronics and IT",
      image: sushil,
      linkedin: 'https://www.linkedin.com/in/sushiljangid/',
    },
    {
      testimonial:
        "After Rohan optimized institute's website, our traffic increased by 50%. We can't thank him enough!",
      name: "Dr. Shailendra Kumar",
      designation: "Assistant Professor",
      company: "TIIPS, Gr. Noida",
      image: mech,
      linkedin: 'https://www.linkedin.com/in/dr-shailendra-kumar-06264b69/',
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rohan does",
      name: "Aman Kumar",
      designation: "Data Analyst",
      company: "Astroyogi",
      image: aman,
      linkedin: 'https://www.linkedin.com/in/aman-kumar-b2b214150/',
    },
  ];
  
  const projects = [
    {
      name: "CrowdFunding Web 3.0",
      description:
        "A Web3 crowdfunding platform that allows users to create their own campaigns, and donate to other campaigns in ethereum, thereby leveraging blockchain technology.",
      tags: [
        {
          name: "thirdweb",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "metamask",
          color: "pink-text-gradient",
        },
      ],
      image: web3,
      source_code_link: "https://github.com/rohan492/web3-crowdfunding/",
      deployed_link: "https://web3-donate.netlify.app/",
    },
    {
      name: "YelpCamp",
      description:
        "A comprehensive campground search engine that allows users to easily find their favourite campgrounds, view detailed information, and create reviews."
        ,
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: yelpcamp,
      source_code_link: "https://github.com/rohan492/yelpCamp/",
      deployed_link: "https://yelpcamp-78wn.onrender.com/",
    },
    {
      name: "ChatGPT AI App",
      description:
        "An AI-powered chatbot application that enables users to have natural conversations with virtual agents, allowing them to interact with the bot in a conversational manner.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: codex,
      source_code_link: "https://github.com/rohan492/codex/",
      deployed_link: "https://codex-topaz-ten.vercel.app/",
    },
    {
      name: "Ecommerce Website",
      description:
        "NextJS application that includes all necessary components to create, manage, and maintain an online store, including a shopping cart and payment gateway.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/rohan492/ecommerce_sanity_stripe/",
      deployed_link: "https://ecommerce-sanity-stripe-2aia.vercel.app/",
    },
    {
      name: "Social Media Website",
      description:
        "An online platform that allows users to create and share photos, to comment on posts, and to save and download photos shared by other users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "taliwindcss",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: shareme,
      source_code_link: "https://github.com/rohan492/shareme_/",
      deployed_link: "https://shareme-30.netlify.app/",
    },
    {
      name: "Homepage Clone",
      description:
        "A responsive clone of the homepage of UsabilityHub.com, using only HTML and CSS, providing users with an identical experience, regardless of screen size or device type.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: clone,
      source_code_link: "https://github.com/rohan492/clone-website/",
      deployed_link: "https://rohan492.github.io/clone-website/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };