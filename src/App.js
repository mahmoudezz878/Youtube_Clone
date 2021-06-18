import React, {useState, useMemo, useContext} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import Router from './router';
import { EssentialContext } from './contexts/EssentialContext';
import "./assets/css/App.css";

function App() {

  const { darkmode, setDarkmode } = useContext(EssentialContext);

 
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkmode ? "dark" : "light",
        },
      }),
    [darkmode],
  );

  return (
    <ThemeProvider theme={theme} >
      <Paper style={{minHeight: "100vh"}}>
        <div className="App">
            <Router />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
