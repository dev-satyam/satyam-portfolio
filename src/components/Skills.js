import React from "react";
import { Container, Grid, Typography, Chip } from "@mui/material";
import skills from "../data/skills";

export default function Skills() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" color="primary" />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
