"use client";

import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

/**
 * ThemeToggle component provides a button to switch between light/dark/system modes
 * Uses MUI's built-in useColorScheme hook (NOT a custom hook)
 */
export default function ThemeToggle() {
  // useColorScheme is provided by MUI v6+ when using CssVarsProvider
  const { mode, setMode, systemMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Prevent hydration mismatch by checking if mode is loaded
  if (!mode) {
    return null;
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = (newMode: "light" | "dark" | "system") => {
    setMode(newMode);
    handleClose();
  };

  // Determine which icon to show
  const getIcon = () => {
    if (mode === "system") {
      return <SettingsBrightnessIcon />;
    }
    return mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />;
  };

  return (
    <>
      <Tooltip title="Change theme">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="theme toggle"
          aria-controls={open ? "theme-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {getIcon()}
        </IconButton>
      </Tooltip>

      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "theme-button",
        }}
      >
        <MenuItem
          onClick={() => handleModeChange("light")}
          selected={mode === "light"}
        >
          <ListItemIcon>
            <LightModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Light</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => handleModeChange("dark")}
          selected={mode === "dark"}
        >
          <ListItemIcon>
            <DarkModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dark</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => handleModeChange("system")}
          selected={mode === "system"}
        >
          <ListItemIcon>
            <SettingsBrightnessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>System {systemMode && `(${systemMode})`}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

/**
 * Simple version - just toggles between light and dark
 */
export function SimpleThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
      color="inherit"
    >
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
