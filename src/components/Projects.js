import React from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              elevation={3}
              sx={{ p: 3, borderRadius: 3 }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {project.name}
                </a>
              </Typography>
              <Typography color="text.secondary">
                {project.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
