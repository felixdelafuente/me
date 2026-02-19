import projectGPA from "../assets/project-gpa.png";
import projectGymBuilder from "../assets/project-gymbuilder.png";
import projectSproutIt from "../assets/project-sproutit.png";
import projectSales from "../assets/project-sales.png";
import projectAutomotive from "../assets/project-automotive.png";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project8 from "../assets/project-8.png";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import phpIcon from "../assets/php-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import bootstrapIcon from "../assets/bootstrap-icon.svg";
import tailwindIcon from "../assets/tailwind-icon.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import figmaIcon from "../assets/figma-icon.svg";
import uxIcon from "../assets/ux-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/nodejs-icon.svg";
import expressIcon from "../assets/expressjs-icon.svg";
import mongoIcon from "../assets/mongodb-icon.svg";
import flutterIcon from "../assets/flutter-icon.svg";
import strapiIcon from "../assets/strapi-icon.svg";
import tsIcon from "../assets/ts-icon.svg";
import angularIcon from "../assets/angular-icon.svg";
import azureIcon from "../assets/azure-icon.svg";

interface Tool {
  icon: string;
  name: string;
}

interface Project {
  title: string;
  description: string;
  img: string;
  link: string;
  tools: Tool[];
}

interface PortfolioContentType {
  contents: Project[];
}

export const PortfolioContent: PortfolioContentType = {
  contents: [
    {
      title: "Predictive Sales AI Web Application",
      description:
        "A web application that uses Azure services for data upload, processing, and AI-based predictions, providing both historical and forecasted sales data.",
      img: projectSales,
      link: "https://github.com/felixdelafuente/sales-forecast",
      tools: [
        {
          icon: angularIcon,
          name: "Angular",
        },
        {
          icon: azureIcon,
          name: "Microsoft Azure",
        },
      ],
    },
    {
      title: "Automotive Business Management System",
      description:
        "A web application for an automotive business that features inventory, services, and client management, as well as Point-of-Sales and invoice generation.",
      img: projectAutomotive,
      link: "https://zarahemla-client.vercel.app/",
      tools: [
        {
          icon: angularIcon,
          name: "Angular",
        },
        {
          icon: nodeIcon,
          name: "Node.JS",
        },
        {
          icon: mongoIcon,
          name: "MongoDB",
        },
      ],
    },
    {
      title: "Gym Builder App",
      description:
        "An E-commerce android application for a gym equipment store that features product browsing, adding to cart, and ordering.",
      img: projectGymBuilder,
      link: "https://github.com/felixdelafuente/gymbuilderph_app",
      tools: [
        {
          icon: flutterIcon,
          name: "Flutter",
        },
        {
          icon: phpIcon,
          name: "PHP",
        },
        {
          icon: mysqlIcon,
          name: "MySQL",
        },
      ],
    },
    {
      title: "Sprout It Web Management System",
      description:
        "Web Management System for a mushroom farm featuring production management, analytics, and CRUD functions for records, inventory, purchases, and suppliers.",
      img: projectSproutIt,
      link: "https://sprout-it-eandb-wdsn.vercel.app/",
      tools: [
        {
          icon: reactIcon,
          name: "React",
        },
        {
          icon: tailwindIcon,
          name: "Tailwind CSS",
        },
        {
          icon: expressIcon,
          name: "Express JS",
        },
        {
          icon: nodeIcon,
          name: "Node.JS",
        },
        {
          icon: mongoIcon,
          name: "MongoDB",
        },
      ],
    },
    {
      title: "Algo Filipino Website",
      description:
        "The website of Algo Filipino serves as the information section for all things about the organization.",
      img: project1,
      link: "https://algofilipino.com/",
      tools: [
        {
          icon: htmlIcon,
          name: "HTML",
        },
        {
          icon: cssIcon,
          name: "CSS",
        },
        {
          icon: tailwindIcon,
          name: "Tailwind CSS",
        },
        {
          icon: reactIcon,
          name: "React",
        },
      ],
    },
    {
      title: "Guam Power Authority Website",
      description:
        "A marketing website for the electricity and power company of Guam that features CMS capabilities for showing dynamic content.",
      img: projectGPA,
      link: "https://guampowerauthority.com/",
      tools: [
        {
          icon: reactIcon,
          name: "React",
        },
        {
          icon: tsIcon,
          name: "TypeScript",
        },
        {
          icon: strapiIcon,
          name: "Strapi",
        },
      ],
    },
    {
      title: "Naughty Kids Apparel Webiste",
      description:
        "An e-commerce website that features CRUD operations, as well as product ordering, archiving, and complete/cancel orders.",
      img: project2,
      link: "https://github.com/felixdelafuente/naughtykids-clothing-website",
      tools: [
        {
          icon: figmaIcon,
          name: "Figma",
        },
        {
          icon: htmlIcon,
          name: "HTML",
        },
        {
          icon: bootstrapIcon,
          name: "Bootstrap",
        },
        {
          icon: phpIcon,
          name: "PHP",
        },
        {
          icon: mysqlIcon,
          name: "MySQL",
        },
      ],
    },
    {
      title: "Astrokids Apparel Website",
      description:
        "Collaborated with a clothing line, the website contains information about their products and redirection to Facebook and Shopee.",
      img: project3,
      link: "https://astrokids-co.web.app/",
      tools: [
        {
          icon: figmaIcon,
          name: "Figma",
        },
        {
          icon: htmlIcon,
          name: "HTML",
        },
        {
          icon: bootstrapIcon,
          name: "Bootstrap",
        },
        {
          icon: jsIcon,
          name: "JavaScript",
        },
        {
          icon: firebaseIcon,
          name: "Firebase",
        },
      ],
    },
    {
      title: "MediGuide Mobile App UX Case Study",
      description:
        "Case Study that practices the whole UX Design Process, such as Research, Persona Creation, Journey Mapping, Wireframing, Prototyping, and Usability Testing.",
      img: project8,
      link: "https://www.figma.com/proto/0nhbSl6GaAjAUoOXIah7hd/UX-Uni-2021-Wireframe-%26-Prototype?page-id=138%3A1094&node-id=143%3A560&viewport=241%2C48%2C0.09&scaling=scale-down&starting-point-node-id=143%3A560",
      tools: [
        {
          icon: figmaIcon,
          name: "Figma",
        },
        {
          icon: uxIcon,
          name: "UI/UX Research & Design",
        },
      ],
    },
  ],
};
