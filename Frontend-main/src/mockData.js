export const CATEGORIES = [
  { id: "1", slug: "blokzincir", name: "Blockchain" },
  { id: "2", slug: "onyuz", name: "Frontend Development" },
  { id: "3", slug: "linux", name: "Linux" },
  { id: "4", slug: "yapay-zeka", name: "Artificial intelligence" },
];

export const COURSES = [
  {
    id: "1",
    slug: "ethereum-ve-solidity",
    name: "Ethereum and Solidity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "300",
    imageUrl: "/course-images/ethereum-and-solidity.webp",
    instructor: {
      name: "Baturalp Güvenç",
    },
    category: CATEGORIES.find((c) => c.slug === "blokzincir"),
  },
  {
    id: "2",
    slug: "akilli-sozlesme-guvenligi",
    name: "Smart Contract Security",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "500",
    imageUrl: "/course-images/smart-contract-security.jpg",
    instructor: {
      name: "Mehmet Hayırlı",
    },
    category: CATEGORIES.find((c) => c.slug === "blokzincir"),
  },
  {
    id: "3",
    slug: "next-js-ile-onyuz-uygulamalari-gelistirme",
    name: "Developing Frontend Applications with Next.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "200",
    imageUrl: "/course-images/nextjs.jpg",
    instructor: {
      name: "Furkan Ayvaz",
    },
    category: CATEGORIES.find((c) => c.slug === "onyuz"),
  },
  {
    id: "4",
    slug: "pardus-a-giris",
    name: "Introduction to Pardus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "150",
    imageUrl: "/course-images/pardus.jpg",
    instructor: {
      name: "Berk Çiçek",
    },
    category: CATEGORIES.find((c) => c.slug === "linux"),
  },
  {
    id: "5",
    slug: "yapay-zekaya-giris",
    name: "Introduction to Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "250",
    imageUrl: "/course-images/ai.png",
    instructor: {
      name: "Muhammed Akıncı",
    },
    category: CATEGORIES.find((c) => c.slug === "yapay-zeka"),
  },
  {
    id: "6",
    slug: "react-js-temelleri",
    name: "React.js Fundamentals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "250",
    imageUrl: "/course-images/reactjs.jpg",
    instructor: {
      name: "Recep Akkaya",
    },
    category: CATEGORIES.find((c) => c.slug === "onyuz"),
  },
  {
    id: "7",
    slug: "avalanche-ile-merkeziyetsiz-uygulamalar",
    name: "Decentralized Applications with Avalanche",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
    price: "450",
    imageUrl: "/course-images/avalanche.png",
    instructor: {
      name: "Ali Gedikli",
    },
    category: CATEGORIES.find((c) => c.slug === "blokzincir"),
  },
];
