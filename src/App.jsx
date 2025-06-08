import React from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Button,
  Box,
  Chip,
  Paper,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

const skills = [
  "Laravel",
  "Symfony",
  "CodeIgniter",
  "Node.js",
  "ReactJS",
  "Redux",
  "JavaScript",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Firebase",
  "Docker",
  "HTML",
  "CSS",
  "Git",
  "Jenkins",
];

const projects = [
  {
    name: "Avanse",
    link: "https://avanse.com/",
    description:
      "Loan Management System built with Laravel & ReactJS integrating KYC, eNACH, and Razorpay.",
  },
  {
    name: "Flambook",
    link: "https://flambook.com/",
    description:
      "Photo book web app using Laravel and Fabric.js with Stripe and S3 integration.",
  },
  {
    name: "Innodesigns",
    link: "https://innodesigns.in/",
    description:
      "Multivendor eCommerce platform with custom order flow and analytics dashboard.",
  },
  {
    name: "Consult From Home",
    link: "#",
    description:
      "Teleconsultation platform supporting real-time video and analytics.",
  },
];

export default function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Avatar
          alt="Satyam Verma"
          src="https://avatars.githubusercontent.com/u/dev-satyam"
          sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
        />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Satyam Verma
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Senior Full Stack Developer | PHP, Node.js, ReactJS, PostgreSQL
        </Typography>
        <Box mt={2}>
          <Button
            href="mailto:satyamv57@gmail.com"
            startIcon={<Email />}
            variant="outlined"
            sx={{ mx: 1 }}
          >
            Email
          </Button>
          <Button
            href="https://github.com/dev-satyam"
            startIcon={<GitHub />}
            variant="outlined"
            sx={{ mx: 1 }}
          >
            GitHub
          </Button>
          <Button
            href="https://linkedin.com/in/satyam-verma-a9648a144"
            startIcon={<LinkedIn />}
            variant="outlined"
            sx={{ mx: 1 }}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>

      {/* Skills */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} color="primary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Projects */}
      <Box mb={5}>
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
      </Box>

      {/* Footer */}
      <Box textAlign="center" pt={5}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Satyam Verma. Built with React & Material UI.
        </Typography>
      </Box>
    </Container>
  );
}
