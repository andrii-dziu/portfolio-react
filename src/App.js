import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const educationList = [
    {
      id: 1,
      title: "National University of Water and Environmental Engineering",
      period: "September 2013 - August 2017",
      description: "Bachelor degree in Economics and Management",
    },
    {
      id: 2,
      title: "IT Education",
      period: "April 2021 - now",
      description:
        "Studying on private courses , teacher is Senior full-stack developer with 5+ years of experience ofprogramming in different companies . Have learned HTML, CSS, JavaScript, Bootstrap, Git. Angular, Node.js, React on trainee level. Self-stuyding via Youtube, online platfoms demy and Hunter.",
    },
  ];

  return (
    <div className="wrapper">
      <div className="container-wrap">
        <Sidebar />
        <Content educationList={educationList} />
      </div>
    </div>
  );
}

export default App;
