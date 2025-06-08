import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        About Me
      </Typography>
      <Typography color="text.secondary">
        I’m a Full Stack Developer with 6+ years of experience in building scalable and secure web applications. I specialize in PHP (Laravel, Symfony), JavaScript (ReactJS, Node.js), and I’m passionate about solving real-world problems through clean and efficient code.
      </Typography>
    </Container>
  );
}
