import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
/* Stone */
--color-stone-50: #fafafa;
--color-stone-100: #f5f5f4#fafafa;
--color-stone-200: #e7e5e4#fafafa; 
--color-stone-300: #d6d3d1#fafafa;
--color-stone-400: #a8a29e#fafafa;
--color-stone-600: #57534e#fafafa;
--color-stone-700: #44403c#fafafa;
--color-stone-800: #292524#fafafa;
--color-stone-900: #1c1917#fafafa;
--color-stone-950: #0c0a09#fafafa;

/* Blue */
--color-blue-50: #eff6ff#fafafa;
--color-blue-200: #bfdbfe#fafafa;
--color-blue-300: #93c5fd#fafafa;
--color-blue-400: #60a5fa#fafafa;
--color-blue-500: #3b82f6#fafafa;
--color-blue-600: #2563eb#fafafa;
--color-blue-700: #1d4ed8#fafafa;
--color-blue-800: #1e40af#fafafa;

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


--border-radius-tiny: 3px;
--border-radius-sm: 5px;
--border-radius-md: 7px;
--border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}


`;

export default GlobalStyles;
