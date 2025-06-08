import React from "react";
import { Container, Typography, Link } from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can reach me via email:
      </Typography>
      <Link href="mailto:satyamv57@gmail.com" underline="hover">
        satyamv57@gmail.com
      </Link>
    </Container>
  );
}
