import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-success: #3FE864;
    --color-negative: #E83F5B;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

}

body{
    font-family: 'Inter', sans-serif;
    background-color: var(--grey-4);
    color: var(--grey-0);
}


.title1{
  font-size: 18px;
  font-weight: 700;
}

.title2{
  font-size: 16px;
  font-weight: 700;
}

.title3{
  font-size: 14px;
  font-weight: 700;
}

.headline{
  font-size: 12px;
  font-weight: 400;
}
.headlineBold{
  font-weight: 700;
}

//Reset
html, body, div, span, h1, h2, h3, h4, p, a, em, img, small, strong, ol, ul, li, 
fieldset, button, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, 
figure, figcaption, footer, header, menu, nav, section, audio, video, input, select, option{
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  font-size: 100%;
  text-decoration: none;
  display: block;
  line-height: 1;
  box-sizing: border-box;
  list-style: none;
  color: var(--grey-0);
}


`;
