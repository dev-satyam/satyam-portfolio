import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      <title>Satyam Verma | Full Stack Developer</title>
      <meta name="description" content="Portfolio of Satyam Verma - Full Stack Developer specialized in PHP, Laravel, NodeJS, and ReactJS." />
      <meta property="og:title" content="Satyam Verma | Full Stack Developer" />
      <meta property="og:description" content="Portfolio of Satyam Verma - Full Stack Developer." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/avatar.jpg" />
      <meta property="og:url" content="https://satyam-verma.netlify.app" />
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Satyam Verma",
            "url": "https://satyam-verma.netlify.app",
            "sameAs": [
              "https://github.com/dev-satyam",
              "https://linkedin.com/in/satyam-verma-a9648a144"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Kellton Tech"
            }
          }
        `}
      </script>
    </Helmet>
  );
}
