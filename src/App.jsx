import profilePic from "./assets/image.jpg";
function App() {
  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <img
  src={profilePic}
  alt="Profile"
  style={{
    width: "120px",
    height: "120px",
    borderRadius: "50%"
  }}
  />

      <h2>Pravalika</h2>

      <p>Frontend Developer</p>

      <h3>Skills</h3>

      <ul
        style={{
          listStyleType: "none",
          padding: 0
        }}
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default App;