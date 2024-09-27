import { images } from "../images";

const categoriesData = [
  {
    id: "1",
    name: "Thực phẩm chức năng",
    uri: images.categories.banner1,
    slug: "thuc-pham-chuc-nang",
    desc: "description",
  },
  {
    id: "2",
    name: "Vật tư y tế",
    uri: images.categories.banner1,
    slug: "vat-tu-y-te",
    desc: "description",
  },
  {
    id: "3",
    name: "Dược mỹ phẩm",
    uri: images.categories.banner1,
    slug: "duoc-my-pham",
    desc: "description",
  },
  {
    id: "4",
    name: "Chăm sóc cá nhân",
    uri: images.categories.banner1,
    slug: "cham-soc-ca-nhan",
    desc: "description",
  },
  {
    id: "5",
    name: "Nhà thuốc tại các khu vực",
    uri: images.categories.banner1,
    slug: "nha-thuoc-tai-ca-khu-vuc",
    desc: "description",
  },
  {
    id: "6",
    name: "Ưu đãi hiện có",
    uri: images.categories.banner1,
    slug: "uu-dai-hien-co",
    desc: "description",
  },
];

localStorage.setItem("categories", JSON.stringify(categoriesData));

const categories = JSON.parse(localStorage.getItem("categories"));

const getAll = () => categories;

const getBySlug = (slug) => categories.find((e) => e.slug === slug);

const categoriesFunc = {
  getAll,
  getBySlug,
};

export default categoriesFunc;
