import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Link, Grid } from "@mui/material";

export default function GithubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/dev-satyam/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Latest GitHub Repositories
      </Typography>
      <Grid container spacing={3}>
        {repos.map((repo) => (
          <Grid item xs={12} sm={6} key={repo.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">
                  <Link href={repo.html_url} target="_blank" rel="noopener">
                    {repo.name}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {repo.description || "No description"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
