import { images } from "../images";

const pharmacyData = [
  {
    id: "1",
    name: "Phước Thiện Pharmacy",
    uri: images.pharmacy.phuocThien,
    slug: "phuoc-thien",
    desc: "Tự hào là hệ thống nhà thuốc bán lẻ lớn nhất tại Đà Nẵng",
    address: ["364 Hoàng Diệu, Hải Châu, Đà Nẵng"],
    hotline: ["0236 3827 772", "0236 3816 699"],
  },
  {
    id: "2",
    name: "Nhà thuốc Thanh Sương",
    uri: images.pharmacy.thanhSuong,
    slug: "thanh-suong",
    desc: "Uy tín, chất lượng cung cấp những sản phẩm thuốc chất lượng cao",
    address: ["342 Trưng Nữ Vương, Hải Châu, Đà Nẵng"],
    hotline: ["0236 3 550 731"],
  },
  {
    id: "3",
    name: "Nhà thuốc Darphaco",
    uri: images.pharmacy.dapharco,
    slug: "darphaco",
    desc: "Darphaco phủ sóng trên khắp nẽo đường Đà Nẵng",
    address: ["02 Phan Đình Phùng, Hải Châu, Đà Nẵng"],
    hotline: ["0236 3821 642", "0236 810 735"],
  },
  {
    id: "4",
    name: "Nhà thuốc Phano",
    uri: images.pharmacy.phano,
    slug: "phano",
    desc: "An tâm chất lượng & giá cả khi mua hàng",
    address: ["361 Trưng Nữ Vương, Hải Châu, Đà Nẵng"],
    hotline: ["02366562266"],
  },
  {
    id: "5",
    name: "Nhà thuốc Hồng Đức",
    uri: images.pharmacy.hongDuc,
    slug: "hong-duc",
    desc: "Đội ngũ dược sĩ trẻ luôn tận tình tư vấn cho khách hàng",
    address: ["282 Ông Ích Khiêm, Thanh Khê, Đà Nẵng"],
    hotline: ["0236 3837 508", "0236 3821 301"],
  },
  {
    id: "6",
    name: "Nhà thuốc Minh Thiện",
    uri: images.pharmacy.minhThien,
    slug: "minh-thien",
    desc: "Cam kết cung cấp thuốc đảm bảo chất lượng, đúng giá cho khách hàng",
    address: ["140 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng"],
    hotline: ["090 589 92 56"],
  },
  {
    id: "7",
    name: "WellCare Pharmacy",
    uri: images.pharmacy.wellcare,
    slug: "wellcare",
    desc: "Dược sĩ chuyên môn cao, danh mục sản phẩm đa dạng.",
    address: ["178 Nguyễn Hữu Thọ, Hải Châu, Đà Nẵng"],
    hotline: ["0355 455 839"],
  },
];

localStorage.setItem("pharmacy", JSON.stringify(pharmacyData));

const pharmacy = JSON.parse(localStorage.getItem("pharmacy"));

const getAll = () => pharmacy;

const getBySlug = (slug) => pharmacy.find((e) => e.slug === slug);

const pharmacyFunc = {
  getAll,
  getBySlug,
};

export default pharmacyFunc;
