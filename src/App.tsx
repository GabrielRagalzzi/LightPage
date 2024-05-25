import { useState} from "react";
import { StyledApp } from "./Styled";
import { FaRegLightbulb } from "react-icons/fa6";
//importação do icone de lâmpada

function App() {  

  const[dark, setDark] = useState<boolean>(false);
  //estado da luz
  const[theme, setTheme] = useState<boolean>(false);
  //estado do tema
  const[text, setText] = useState<string>("It's dark, turn on the light");
  //estado do texto para mudar de acordo com o tema


  const toggleListening = () => {
      setDark( prevDark => !prevDark)
  }
  //função para ascender a luz

  const themeLight = () => {
      setTheme(prevTheme => !prevTheme)
  }
    //função para a troca do tema com click

  return (
    <StyledApp>
           <body className={theme ? "ThemeBody themeDark" : "ThemeBody themeLight"}> 
            <div className="Center">
               <div className={dark ? "Light light_animation" : "Dark"}>
               <div className="LightBotton" onClick={toggleListening} onDoubleClick={themeLight}><FaRegLightbulb size={90} /></div>
            </div>
          <h2 className={theme ? "textTheme" : "textTheme themeText"}>{theme ? text : "It's light, turn on the dark"}</h2>
          <p className={theme ? "textTheme" : "textTheme themeText"}>Doudle Click for turn</p>
        </div>
            </body> 
    </StyledApp>
    //ainda não está pronto, ainda haverá ajustes, essa versão é afim de fazer os comentarios e observar oque foi feito
  )
}

export default App
