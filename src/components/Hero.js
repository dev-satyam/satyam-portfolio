import React from "react";
import { Container, Typography, Avatar, Box } from "@mui/material";

export default function Hero() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box textAlign="center">
        <Avatar
          src="/images/avatar.jpg"
          alt="Satyam Verma"
          sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
        />
        <Typography variant="h4" fontWeight={700}>Satyam Verma</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Senior Full Stack Developer | PHP, Node.js, ReactJS, PostgreSQL
        </Typography>
      </Box>
    </Container>
  );
}
