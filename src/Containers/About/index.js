import React from 'react';

import { Box, Typography } from '@material-ui/core';

export default function About() {
  return (
    <Box className="About">
      <Typography variant="h3" gutterBottom>
        Here will be the description of Pack Planner App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
}
