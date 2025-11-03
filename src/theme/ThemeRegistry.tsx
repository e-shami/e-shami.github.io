"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

/**
 * ThemeRegistry component wraps the app with MUI's theme provider
 * It uses CSS Variables (cssVariables: true) for better performance
 * and enables the useColorScheme hook throughout the app
 */
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create theme with CSS Variables support
  const theme = createTheme({
    // CRITICAL: Enable CSS Variables to use useColorScheme hook
    cssVariables: {
      colorSchemeSelector: "class", // Use 'class' to sync with Tailwind's darkMode
    },

    // Define color schemes for light and dark modes
    colorSchemes: {
      light: {
        palette: {
          mode: "light",
          primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#fff",
          },
          secondary: {
            main: "#dc004e",
            light: "#f73378",
            dark: "#9a0036",
            contrastText: "#fff",
          },
          background: {
            default: "#ffffff",
            paper: "#f5f5f5",
          },
          text: {
            primary: "#000000",
            secondary: "#666666",
          },
        },
      },
      dark: {
        palette: {
          mode: "dark",
          primary: {
            main: "#90caf9",
            light: "#e3f2fd",
            dark: "#42a5f5",
            contrastText: "#000",
          },
          secondary: {
            main: "#f48fb1",
            light: "#ffc1e3",
            dark: "#bf5f82",
            contrastText: "#000",
          },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#aaaaaa",
          },
        },
      },
    },

    // Optional: Customize component defaults
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Disable uppercase transformation
            borderRadius: 8,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        },
      },
    },

    // Typography configuration
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system" // Start with system preference
      modeStorageKey="mui-mode" // LocalStorage key for persisting mode
    >
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
