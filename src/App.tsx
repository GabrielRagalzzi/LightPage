import { useState} from "react";
import { StyledApp } from "./Styled";
import { FaRegLightbulb } from "react-icons/fa6";

function App() {  

  const[dark, setDark] = useState<boolean>(false);
  const[theme, setTheme] = useState<boolean>(false);
  const[text, setText] = useState<string>("It's dark, turn on the light");


  const toggleListening = () => {
      setDark( prevDark => !prevDark)
  }
  const themeLight = () => {
      setTheme(prevTheme => !prevTheme)
  }

  return (
    <StyledApp>
           <body className={theme ? "ThemeBody themeDark" : "ThemeBody themeLight"}> 
            <div className="Center">
               <div className={dark ? "Light light_animation" : "Dark"}>
               <div className="LightBotton" onClick={toggleListening} onDoubleClick={themeLight}><FaRegLightbulb size={90} /></div>
            </div>
          <h2 className={theme ? "textTheme" : "textTheme themeText"}>{theme ? text : "It's light, turn on the dark"}</h2>
        </div>
            </body>
    </StyledApp>
  )
}

export default App
