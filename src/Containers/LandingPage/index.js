import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@material-ui/core';

const LandingPage = ({ logged }) => {
  return (
    <Box className="LandingPage">
      <Typography variant="h3" gutterBottom>
        Pack Planner App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Pack Planner is an online tool designed to itemize your hiking gear list
        - like a robust spreadsheet template. Plan hike with friends making a
        checklist for several people at the same. Plus much more.
      </Typography>
      <Button
        to={logged ? '/gear-list/:id' : '/login'}
        // to= `/gear-list/${id}`
        component={Link}
        variant="contained"
        color="primary"
        size="large"
      >
        Lets Plan Pack
      </Button>
    </Box>
  );
};

export default LandingPage;
