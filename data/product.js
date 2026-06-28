import classicbag from "../src/assets/classicbag.jpeg";
import iwatch from "../src/assets/iwatch.jpeg";
import linenShirt from "../src/assets/linenShirt.jpeg";
import whiteSneaker from "../src/assets/whiteSneaker.jpeg";

const product = [
  {
    id: 1,
    badge: "-20%",
    name: "Linen Relaxed Shirt",
    price: "$39.9",
    oldPrice: "$49.5",
    image: linenShirt,
  },

  {
    id: 2,
    badge: "New",
    name: "Classic Leather Tote",
    price: "$79.9",
    image: classicbag,
  },

  {
    id: 3,
    name: "Minimal White Sneakers",
    price: "$59.9",
    image: whiteSneaker,
  },

  {
    id: 4,
    badge: "Black I-Watch",
    name: "Classic Leather Tote",
    price: "$90.29",
    image: iwatch,
  },
];

export default product;
