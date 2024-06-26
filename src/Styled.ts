import { styled } from "styled-components";
//aqui eu fiz a parte da estilização da pagina, com os formatos, cores, temas e animações

export const StyledApp = styled.div `

        .Center{
            width: 100vw;
            height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 40px;
        }
        .Light{
            border-radius: 100%;
            opacity: 90%;
            background-color: var(--light-color);
        }
        .light_animation{
            animation: AnimationLight 1s alternate-reverse infinite;
        }
        .themeLight{
            background-color: FFFFE0;
            transition: 0.3s;
            font-family: "Poppins", sans-serif;
            p{
                opacity: 50%;
            }

        }
        .themeDark{
            background-color: var(--dark-color);
            transition: 0.3s;
            font-family: "Poppins", sans-serif;
            p{
                opacity: 50%;
            }

        }
        .themeText{
            color: var(--dark-color);
            transition: 0.3s;
        }
        .LightBotton{
            cursor: pointer;
        }

        @keyframes AnimationLight {
            from{
                transform: scale(1);
                box-shadow: 0px 0px 35px var(--light-color);
            }
            to{
                transform: scale(1.03);
                box-shadow: 0px 0px 25px var(--light-color);
            }
        }
        h2, p{
            color: var(--text-color);
        }

`;