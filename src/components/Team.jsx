import React from "react";
import teamimg1 from "../assets/images/teamimg1.webp";
import teamimg2 from "../assets/images/teamimmg2.webp";
import teamimg3 from "../assets/images/temimg3.webp";
import teamimg4 from "../assets/images/teamimg4.webp";
import teamimg5 from "../assets/images/teamimg5.webp";
import teamimg6 from "../assets/images/teamimg6.webp";
import teamimg7 from "../assets/images/teamimg7.webp";
import teamimg8 from "../assets/images/teamimg8.webp";
const carddata = [
  {
    img: teamimg1,
    name: "James Vuong",
    post: "(Co-CEO)",
    dis: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    fullpara:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
    aos: "fade-right",
  },
  {
    img: teamimg2,
    name: "Tricia Yong",
    post: "(Co-CEO)",
    dis: "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
    para: "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
    fullpara:
      "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
      aos: "fade-left",
  },
  {
    img: teamimg3,
    name: "Kevin Li",
    post: "(CFO)",
    dis: "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
    para: "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
    fullpara:
      "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
      aos: "fade-right",
  },
  {
    img: teamimg4,
    name: "Ryan Ang",
    post: "(Lorem Ipsum)",
    dis: "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi",
    para: "products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
    fullpara:
      "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
      aos: "fade-left",
  },
  {
    img: teamimg5,
    name: "Dylan",
    post: "(Executive Producer)",
    dis: "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
    para: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
    fullpara:
      "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
      aos: "fade-right",
  },
  {
    img: teamimg6,
    name: "Ralf",
    post: "(Lorem Ipsum)",
    dis: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
    para: "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
    fullpara:
      "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim. Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
      aos: "fade-left",
  },
  {
    img: teamimg7,
    name: "Jordan Stratford",
    post: "(Creative Director)",
    dis: "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
    para: "for television with the world’s largest streaming producer.",
    fullpara:
      "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development for television with the world’s largest streaming producer.",
      aos: "fade-right",
  },
  {
    img: teamimg8,
    name: "Jae Sik Choi",
    post: "(Lorem Ipsum)",
    dis: "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
    para: "Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
    fullpara:
      "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
      aos: "fade-left",
  },
];
const Team = () => {
  const cards = carddata.map((card, i) => (
    <div className="col-lg-6 d-flex justify-content-center mb-4 pt-1" key={i}>
      <div className="teamcard" data-aos={card.aos}>
        <div className="row">
          <div className="col-sm-5 d-flex justify-content-center mb-3 mb-sm-0">
            <div className="p-0">
              <img src={card.img} alt="img1" className="w-sm-100 h-198" />
            </div>
          </div>
          <div className="col-sm-7 ">
            <div className="d-md-flex align-items-center gap-2 d-block mb-1 pb-2 justify-content-center justify-content-sm-start d-lg-block d-xl-flex">
              <h4 className=" text-white font-robotoflex fs-20  lh-24 fw-semibold text-center mb-2 mb-md-0 ">
                {card.name}
              </h4>
              <p className=" font-robotoflex text-gradient fs-16 lh-19 mb-0 text-center">
                {card.post}
              </p>
            </div>
            <p className="fs-16 text-white font-robotoflex lh-24 fw-normal opacity-70 mb-2 d-none d-sm-block">
              {card.dis}{" "}
            </p>
          </div>
        </div>
        <p className=" text-white font-robotoflex opacity-70 fs-16 lh-24 fw-normal mb-0 d-none d-sm-block">
          {card.para}
        </p>
        <p className="text-white font-robotoflex opacity-70 fs-16 lh-24 fw-normal mb-0 d-block d-sm-none text-center">
          {card.fullpara}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="py-md-5 position-relative overflow-x-clip z-1" id="team">
      <div className="team-ellipse1 z-n1"></div>
      <div className="team-ellipse2 z-n1"></div>
      <div className="container pt-2">
        <div className="d-flex justify-content-center mb-3">
          <span className="  bg-orangegradient  border-none  gradient-border-mask badge-padding">
            <span className="text-gradient z-1 font-robotoflex lh-19 fw-normal ">
              Our Team
            </span>
          </span>
        </div>
        <h2 className="text-white font-robotoflex fw-bold text-center fs-52 lh-62 mb-2 pb-md-5 pb-3">
          Behind our expertise
        </h2>
        <div className="row pb-3">{cards}</div>
      </div>
      <p className=" text-white fs-187 lh-224 font-robotoflex opacity-6 fw-bold team-text d-none d-sm-block">
        Our Team
      </p>
    </div>
  );
};

export default Team;
