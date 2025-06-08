import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Satyam Verma. Built with React & Material UI.
      </Typography>
    </Box>
  );
}
