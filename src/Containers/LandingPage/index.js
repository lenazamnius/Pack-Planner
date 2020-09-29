import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@material-ui/core';

const LandingPage = () => {
  return (
    <Box className="LandingPage">
      <Typography variant="h3" gutterBottom>
        Here will be the description of Pack Planner App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Button
        to="/login"
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
