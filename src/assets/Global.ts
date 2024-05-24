import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            text-decoration: none;
            list-style: none;
            border: none;
            outline: none;
            ::selection{
                background-color: transparent;
            }
        }
        :root{
            --dark-color: #333333;
            --text-color: #DCDCDC;
            --light-color: #F0E68C;
        }
`;