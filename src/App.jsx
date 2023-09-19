
import * as React from 'react';
import { CardPoke } from './components/Cardpokemon.jsx';
import { Navbar } from './components/navbar.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const ColorModeContext = React.createContext({ toggleColorMode: () => { } });



export function App() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>

        <Navbar />
        <div>
          <CardPoke />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

//


