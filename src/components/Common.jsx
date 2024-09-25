import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Common = () => {
  const Item = [
    { image: images.common.icon1, url: "/", title: "Cần mua thuốc" },
    { image: images.common.icon2, url: "/", title: "Tư vấn với Dược sĩ" },
    { image: images.common.icon3, url: "/", title: "Tìm nhà thuốc" },
    { image: images.common.icon4, url: "/", title: "Đơn của tôi" },
    { image: images.common.icon5, url: "/", title: "Tiêm Vaccine" },
    { image: images.common.icon6, url: "/", title: "Kiểm tra sức khoẻ" },
  ];
  return (
    <div className="container m-auto my-4 grid grid-cols-12 gap-4 items-center">
      {Item.map((item, index) => (
        <Link
          key={index}
          to={item.url}
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 mx-4 sm:m-0 flex items-center gap-2 bg-white rounded-lg shadow-md py-5 px-5 h-[6rem]"
        >
          <img src={item.image} alt="icon" className="h-12" />
          <p className="text-md font-bold">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Common;
