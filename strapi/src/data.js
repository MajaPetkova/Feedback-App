import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaCreditCard,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";

import { nanoid } from "nanoid";
const sublinks = [
  {
    pageId: nanoid(),
    page: "products",
    links: [
      {
        id: nanoid(),
        label: "payment",
        icon: <Fa500Px />,
        url: "/products",
      },
      {
        id: nanoid(),
        label: "terminal",
        icon: <FaAccusoft />,
        url: "/products",
      },
      {
        id: nanoid(),
        label: "connect",
        icon: <FaCreditCard />,
        url: "/products",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "developers",
    links: [
      { id: nanoid(), label: "plugins", icon: <FaDocker />, url: "/products" },
      { id: nanoid(), label: "libraries", icon: <FaBitcoin />, url: "/products" },
      { id: nanoid(), label: "help", icon: <FaAdversal />, url: "/products" },
      { id: nanoid(), label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    pageId: nanoid(),
    page: "company",
    links: [
      { id: nanoid(), label: "about", icon: <FaBtc />, url: "/products" },
      {
        id: nanoid(),
        label: "customers",
        icon: <FaBriefcase />,
        url: "/products",
      },
    ],
  },
];

export default sublinks;
