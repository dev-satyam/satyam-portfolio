import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import experience from "../data/experience";

export default function Experience() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Experience
      </Typography>
      {experience.map((exp, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h6" fontWeight={600}>{exp.role} - {exp.company}</Typography>
          <Typography variant="subtitle2" color="text.secondary">{exp.duration}</Typography>
          <List>
            {exp.work.map((point, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemText primary={`• ${point}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Container>
  );
}
