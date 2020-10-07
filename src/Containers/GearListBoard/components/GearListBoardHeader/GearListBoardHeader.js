import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../../firebase/config';
import { Box, Button, Typography } from '@material-ui/core';

const GearListBoardHeader = ({ gearLists, history }) => {
  if (!firebase.getUserCurrentName()) {
    console.log('log in, please from GearListBoard');
    history.push('/login');
    return null;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Hello {firebase.getUserCurrentName()}. You have {gearLists.length} Gear
        Lists.
      </Typography>
      <Button
        to="/create-gear-list"
        component={Link}
        variant="contained"
        color="primary"
        size="large"
      >
        Create New List
      </Button>
    </Box>
  );
};

export default GearListBoardHeader;
