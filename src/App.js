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
    },
    {
      label1: "Email",
      label2: "Nomor HP",
      label3: "Pendidikan",
      label4: "Keahlian",
    },
    {
      twitter: "https://twitter.com/dafiqarba",
      github: "https://github.com/dafiqarba",
      instagram: "https://instagram.com/dafiqarba",
    },
    {
      avatar: avatar,
    },
  ];

  return (
    <div className="container">
      <Card items={data} />
    </div>
  );
}

export default App;
