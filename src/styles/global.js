import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:0;
}

*:focus{
  outline:0;
}

html,body, #root {
  height:100%
}

body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

body,input,button{
  font:14px 'Roboto', sans-serif;
}

a{
  text-decoration:none;
}

ul{
  list-style:none;
}

button{
  cursor:pointer;
}

`;
