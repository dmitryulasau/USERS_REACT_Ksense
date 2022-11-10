import "./App.css";
import User from "./components/User";

function App() {
  const users = [
    {
      user: "Chandler Bing",
      post: [
        "Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
        "I'm not great at the advice. Can I interest you in a sarcastic comment?",
        "If I were a guy and…did I just say 'if I were a guy?'",
      ],
      avatar:
        "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
    },
    {
      user: "Joey Tribbiani",
      post: [
        "I look a woman up and down and say, 'Hey, how you doin'?",
        "Joey doesn't share food! 🍕",
      ],
      avatar:
        "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
    },
    {
      user: "Ross Geller",
      post: ["Pivot. Pivot. Piv-ot. Piv-ot. PIVOT!"],
      avatar:
        "https://res.cloudinary.com/dulasau/image/upload/v1661875818/noAvatar_wdsdee.png",
    },
  ];

  return (
    <div className="container">
      <div className="box">
        <h1>USERS</h1>
      </div>
      <User users={users} />
    </div>
  );
}

export default App;
