import { images } from "../images";

const pharmacy = [
  {
    id: "1",
    name: "Nhà thuốc Phúc Long",
    uri: images.pharmacy.image1,
    slug: "phuc-long",
    desc: "description",
  },
  {
    id: "2",
    name: "Nhà thuốc Highlands",
    uri: images.pharmacy.image1,
    slug: "highlands",
    desc: "description",
  },
  {
    id: "3",
    name: "Nhà thuốc GongCha",
    uri: images.pharmacy.image1,
    slug: "gongcha",
    desc: "description",
  },
  {
    id: "4",
    name: "Nhà thuốc Coffee House",
    uri: images.pharmacy.image1,
    slug: "coffee-house",
    desc: "description",
  },
  {
    id: "5",
    name: "Nhà thuốc Starbucks",
    uri: images.pharmacy.image1,
    slug: "starbucks",
    desc: "description",
  },
  {
    id: "6",
    name: "Nhà thuốc Ông Thọ",
    uri: images.pharmacy.image1,
    slug: "ong-tho",
    desc: "description",
  },
];

const getAll = () => pharmacy;

const getBySlug = (slug) => pharmacy.find((e) => e.slug === slug);

const pharmacyFunc = {
  getAll,
  getBySlug,
};

export default pharmacyFunc;
