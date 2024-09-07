import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
/* Stone */
--color-stone-50: #fafafa,
--color-stone-100: #f5f5f4,
--color-stone-200: #e7e5e4, 
--color-stone-300: #d6d3d1,
--color-stone-400: #a8a29e,
--color-stone-600: #57534e,
--color-stone-700: #44403c,
--color-stone-800: #292524,
--color-stone-900: #1c1917,
--color-stone-950: #0c0a09,

/* Blue */
--color-blue-50: #eff6ff,
--color-blue-200: #bfdbfe,
--color-blue-300: #93c5fd,
--color-blue-400: #60a5fa,
--color-blue-500: #3b82f6,
--color-blue-600: #2563eb,
--color-blue-700: #1d4ed8,
--color-blue-800: #1e40af,

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

`;

export default GlobalStyles;
