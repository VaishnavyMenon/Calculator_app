import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "../index.css";
const Calculator = () => {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState();
  const [display, setDisplay] = useState(1);
  const [theme, setTheme] = useState(0);

  const onClick = (content) => {
    setValue([...value, content]);
  };

  const handleReset = () => {
    setValue([]);
    setResult();
    setDisplay(1);
  };
  const handlePercentage = () => {
    const update = [...value];
    update.pop();
    return eval(update.join("") / 100);
  };

  const handleResult = () => {
    const r = value.join("");
    return eval(r);
  };

  const handleOthers = () => {
    const update = [...value];
    while (isNaN(update[update.length - 1])) {
      update.pop();
    }
    while (isNaN(update[0]) && update[0] !== "-") {
      update.shift();
    }
    return eval(update.join(""));
  };

  const handleSubmit = () => {
    const results =
      Number.isInteger(value[value.length - 1]) && Number.isInteger(value[0])
        ? handleResult()
        : value[value.length - 1] === "%"
        ? handlePercentage()
        : handleOthers();
    setDisplay(0);
    const r = Number(String(results).substring(0, 10));
    setResult(r);
  };

  const backSpaceKey = () => {
    const updateCount = [...value];
    updateCount.pop();
    setValue(updateCount);
  };

  const handleThemeChange = () => {
    setTheme((prev) => !prev);
  };

  const keys = [
    {
      content: "%",
      bg_dark: "#A1A1A1",
      bg_light: "#D9D9D9",
      text_color: "#363636",
    },
    {
      content: "/",
      bg_dark: "#FF9F0A",
      bg_light: "#0060E5",
      text_color: "#ffffff",
    },
    {
      content: 7,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 8,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 9,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: "*",
      bg_dark: "#FF9F0A",
      bg_light: "#0060E5",
      text_color: "#ffffff",
    },
    {
      content: 4,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 5,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 6,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: "-",
      bg_dark: "#FF9F0A",
      bg_light: "#0060E5",
      text_color: "#ffffff",
    },
    {
      content: 1,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 2,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: 3,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: "+",
      bg_dark: "#FF9F0A",
      bg_light: "#0060E5",
      text_color: "#ffffff",
    },
    {
      content: 0,
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
    {
      content: ".",
      bg_dark: "#D9D9D9",
      bg_light: "#FFFFFF",
      text_color: "#121212",
    },
  ];
  return (
    <div style={{ position: "relative" }}>
      <div
        className="container"
        style={{
          background: theme
            ? "linear-gradient(167deg, #191919 1.97%, #1F1F1F 70.36%, #2F2F2F 102.98%)"
            : "linear-gradient(169deg, #FFF 0%, #D9D9D9 100%)",
        }}
      >
        <div onClick={handleThemeChange}>
          {theme ? (
            <FiSun
              style={{ color: "#ffffff", fontSize: "30px", margin: "30px"}}
            />
          ) : (
            <FiMoon
              style={{ color: "#1c1c1c", fontSize: "30px", margin: "30px" }}
            />
          )}
        </div>
        <div style={{ position: "absolute", bottom: "20px", display:"flex", flexDirection:"column", gap:"50px", width:"100%"}}>
          <div className="results">
            <div
              style={
                display
                  ? { color: theme? "#ffffff": "#121212", fontSize: "46px" }
                  : { color: "#6D6B6B", fontSize: "20px", maxWidth: "300px" }
              }
            >
              {value}
            </div>
            <div
              style={{ color: theme ? "#ffffff" : "#121212", fontSize: "46px" }}
            >
              {result}
            </div>
          </div>
          <div className="keys">
          <div className="grid">
            <div
              className="button"
              onClick={handleReset}
              style={{
                background: theme ? "#A1A1A1" : "#D9D9D9",
                color: "#363636",
              }}
            >
              C
            </div>
            <div
              className="button"
              onClick={backSpaceKey}
              style={{
                background: theme ? "#A1A1A1" : "#D9D9D9",
                color: "#363636",
              }}
            >
              ←
            </div>
            {keys.map((n) => (
              <div
                className="button"
                onClick={() => onClick(n.content)}
                style={{
                  background: theme ? `${n.bg_dark}` : `${n.bg_light}`,
                  color: `${n.text_color}`,
                }}
                key={n.content}
              >
                {n.content === '*' ? 'x': n.content}
              </div>
            ))}
            <div
              className="button"
              onClick={handleSubmit}
              style={{
                background: theme ? "#FF9F0A" : "#0060E5",
                color: "#ffffff",
                width: "152px",
              }}
            >
              =
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
