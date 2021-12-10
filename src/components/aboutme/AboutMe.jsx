import "./aboutme.scss";

export default function AboutMe() {
  const data = [
    {
      id: 1,
      name: "Professional Summary",
      img: "assets/professional-summary.png",
      desc: [
        "Have 2 years experienced in software development",
        "Performed developer role in projects.",
        "Cooperative and able to perform within a team-oriented atmosphere",
      ],
    },
    {
      id: 2,
      name: "Software",
      img: "assets/software.jpeg",
      desc: [
        "Programming Languages: HTML/Javascript/CSS, React Native.",
        "Programming Tools: SVN, Git/Source Tree, Visual Studio Code",
        "Browsers: Chrome, Firefox, Safari",
      ],
      featured: true,
    },
    {
      id: 3,
      name: "Operating systems",
      img: "assets/os.png",
      desc: ["Windows", "Linux", "MacOS"],
    },
  ];
  return (
    <div className="aboutme" id="aboutme">
      <h1>About me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
            </div>
            {d.desc.map((des) => (
              <div className="center">
                <span>&#10003; </span>
                {des}
                <br />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
