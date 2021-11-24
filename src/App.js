import Card from "./components/Card/Card";
import avatar from "./img/avatar.svg";
import "./App.css";

function App() {
  let data = [
    {
      name: "Muhammad Dafiq Arba",
      batch: "Prodemy #7",
      email: "dafiqarba@gmail.com",
      education: "T. Telekomunikasi",
      mobile: "085858727957",
      skills: "HTML, CSS, JS, ReactJS",
      avatar: avatar,
      twitter: "https://twitter.com/dafiqarba",
      github: "https://github.com/dafiqarba",
      instagram: "https://instagram.com/dafiqarba",
      label1: "Email",
      label2: "Nomor HP",
      label3: "Pendidikan",
      label4: "Keahlian",
    },
  ];

  return (
    <div className="container">
      <Card detail={data[0]} />
    </div>
  );
}

export default App;
