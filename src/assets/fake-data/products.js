import { images } from "../images";

const productsData = [
  {
    id: "1",
    name: "Viên uống Kiện cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp (hộp 45 viên)",
    price: 295000,
    sale: 295000,
    desc: "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ giảm nguy cơ thoái hóa khớp, viêm khớp, hỗ trợ khớp vận động linh hoạt. Hỗ trợ mạnh gân cốt.",
    totalStar: 4.7,
    images: [
      images.products.kienCoVuong,
      images.products.kienCoVuong1,
      images.products.kienCoVuong2,
      images.products.kienCoVuong3,
      images.products.kienCoVuong4,
    ],
    slug: "kien-cot-vuong-cvi-45-v",
    pharmacySlug: "phuc-long",
    categorySlug: "thuc-pham-chuc-nang",
    qtySold: 40,
    reviews: ["review1", "review2"],
    warehouse: 10,
    createdAt: "09/24/2024",
    types: ["Hộp", "Viên"],
    content:
      "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ g",
  },
  {
    id: "2",
    name: "Thuốc sổ",
    price: 250000,
    sale: 200000,
    desc: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    totalStar: 5,
    images: [images.bestSeller.image1],
    slug: "thuoc-so",
    pharmacySlug: "gongcha",
    categorySlug: "cham-soc-ca-nhan",
    qtySold: 4,
    reviews: ["review1", "review2"],
    warehouse: 0,
    createdAt: "09/11/2024",
    types: ["Hộp", "Viên"],
    content:
      "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ g",
  },
  {
    id: "3",
    name: "Thuốc lắc",
    price: 250000,
    sale: 200000,
    desc: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    totalStar: 4.9,
    images: [images.bestSeller.image1],
    slug: "thuoc-lac",
    pharmacySlug: "phuc-long",
    categorySlug: "duoc-my-pham",
    qtySold: 0,
    reviews: ["review1", "review2"],
    warehouse: 50,
    createdAt: "07/24/2024",
    types: ["Hộp", "Viên"],
    content:
      "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ g",
  },
  {
    id: "4",
    name: "EtasyCandy",
    price: 250000,
    sale: 200000,
    desc: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    totalStar: 1,
    images: [images.bestSeller.image1],
    slug: "etasycandy",
    pharmacySlug: "starbucks",
    categorySlug: "thuc-pham-chuc-nang",
    qtySold: 69,
    reviews: ["review1", "review2"],
    warehouse: 96,
    createdAt: "12/21/2000",
    types: ["Hộp", "Viên"],
    content:
      "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ g",
  },
  {
    id: "5",
    name: "Viên uống Glucosamine And Chondroitin Jpanwell hỗ trợ bổ sung chất nhờn dịch khớp (120 viên)",
    price: 960000,
    sale: 768000,
    desc: "Glucosamine And Chondroitin JpanWell hỗ trợ bổ sung chất nhờn dịch khớp, giúp khớp vận động linh hoạt, hỗ trợ giảm đau khớp, khô khớp do viêm khớp và thoái hóa khớp.",
    totalStar: 3.8,
    images: [images.bestSeller.image1],
    slug: "glucosamine-and-chondroitin-jpanwell-120v",
    pharmacySlug: "starbucks",
    categorySlug: "thuc-pham-chuc-nang",
    qtySold: 96,
    reviews: ["review1", "review2"],
    warehouse: 12,
    createdAt: "08/26/2024",
    types: ["Hộp", "Viên"],
    content:
      "Kiện Cốt Vương hỗ trợ giảm triệu chứng đau nhức khớp do viêm khớp, thoái hóa khớp. Hỗ trợ g",
  },
];

localStorage.setItem("products", JSON.stringify(productsData));

const products = JSON.parse(localStorage.getItem("products"));

const getAll = () => products;

const getBySlug = (slug) => products.find((e) => e.slug === slug);

const getByPharmacySlug = (pharmacySlug) =>
  products.filter((e) => e.pharmacySlug === pharmacySlug);

const getByCategorySlug = (categorySlug) =>
  products.filter((e) => e.categorySlug === categorySlug);

const getProductsBestSeller = () => products.filter((e) => e.qtySold > 15);

const getProductsFlashSale = () =>
  products.filter((e) => 100 - (e.sale / e.price) * 100 > 15);

const getProductsHightRating = () => products.filter((e) => e.totalStar >= 4);

const getNewProducts = () =>
  products.filter(
    (e) =>
      new Date(e.createdAt) >
      new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000),
  );

const productsFunc = {
  getAll,
  getBySlug,
  getByPharmacySlug,
  getByCategorySlug,
  getProductsBestSeller,
  getProductsFlashSale,
  getProductsHightRating,
  getNewProducts,
};

export default productsFunc;
