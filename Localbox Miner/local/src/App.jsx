import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Component/Themecontext";

function App() {
  const { theme, ToggleTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <h1>keyur kanpariya</h1>
      <h3>Full stack Developer</h3>
      <p>
        A freelancer Web developer from india. i conver custom <br />
        Web design to bootstrap templates.
        <br />
        <br />i make YouTube Video and Write blogs.
      </p>

      <button onClick={ToggleTheme}>
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </button>
    </div>
  );
}

export default App;
