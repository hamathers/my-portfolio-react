import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Project: Shin PAC",
      desc: `Develop mobile application of document management system. The system manage sent and received
        document, pinch stamp and approve documents. `,
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/8f/09/6b/8f096b7b-27e8-4647-7bfe-4529f08d5a10/e8d98b71-6cbf-45b0-b559-9dd7f41a7298_ss04.png/230x0w.webp",
      customer: "Customer: Japan"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Project: Job Market",
      desc: "Develop mobile application of job market. Develop “Đăng ký/Đăng nhập/Đăng việc/Tìm việc” function for mobile application.",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/d0/d5/26/d0d526f7-9a7c-5cb8-1e90-7dae2ad6d3fa/pr_source.png/230x0w.webp",
      customer: "Customer: Company's product"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Project: Sale Admin Portal",
      desc: "Develop management tool for candidate. This app have some function such as permission, upload/download file and CRUD",
      img: "https://live.staticflickr.com/65535/51736746858_0bb06f6873_b.jpg",
      customer: "Customer: MB bank"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.customer}</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
