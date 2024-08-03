import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Button,
  Box,
  Paper,
  useMediaQuery,
  createTheme,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const FullScreenLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            flex: "0 1 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Paper sx={{ padding: 2, textAlign: "center" }}>Header</Paper>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ flex: "1 1 auto", display: "flex", flexDirection: "row" }}>
          {!isMobile && (
            <Box sx={{ flex: "0 1 20%" }}>
              <Paper sx={{ padding: 2, textAlign: "center", height: "100%" }}>
                Left Sidebar
              </Paper>
            </Box>
          )}
          <Box sx={{ flex: "1 1 60%" }}>
            <Paper sx={{ padding: 2, textAlign: "center", height: "100%" }}>
              Main Content
            </Paper>
          </Box>
          {!isMobile && (
            <Box sx={{ flex: "0 1 20%" }}>
              <Paper sx={{ padding: 2, textAlign: "center", height: "100%" }}>
                Right Sidebar
              </Paper>
            </Box>
          )}
        </Box>

        {/* Footer */}
        <Box sx={{ flex: "0 1 auto" }}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>Footer</Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FullScreenLayout;
