import { images } from "../images";

const accountsData = [
  {
    id: "1",
    fullName: "Admin",
    username: "admin",
    password: "admin",
    avt: images.accounts.avt1,
    slug: "admin",
    desc: "description",
    likeList: [{ productId: "1" }, { productId: "5" }, { productId: "6" }],
    cart: [],
    role: "admin",
  },
  {
    id: "2",
    fullName: "EtasyCandy",
    username: "user",
    password: "user",
    avt: images.accounts.avt1,
    slug: "user",
    desc: "description",
    likeList: [{ productId: "2" }, { productId: "4" }],
    cart: [],
    role: "user",
  },
  {
    id: "3",
    fullName: "EtasyCandy",
    username: "user1",
    password: "user1",
    avt: images.accounts.avt1,
    slug: "user",
    desc: "description",
    likeList: [{ productId: "2" }, { productId: "4" }],
    cart: [],
    role: "user",
  },
];

localStorage.setItem("accounts", JSON.stringify(accountsData));

const accounts = JSON.parse(localStorage.getItem("accounts"));

const getAll = () => accounts;

const getById = (id) => accounts.find((acc) => acc.id === id);

const login = (req) => {
  const acc = accounts.find(
    (acc) => acc.username === req.username && acc.password === req.password,
  );
  if (!acc) {
    return {
      code: 401,
      message: "Tài khoản hoặc mật khẩu không đúng.",
    };
  } else {
    return { code: 200, message: "Đăng nhập thành công", data: acc };
  }
};

const accFunc = {
  login,
  getAll,
  getById,
};

export default accFunc;
