import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: 'auto 20px auto 0',
  },
}));

const EditIconButton = ({ size }) => {
  const classes = useStyles();

  return (
    <IconButton
      aria-label="delete"
      color="default"
      className={classes.margin}
      onClick={() => console.log('Clicked edit button')}
    >
      <EditIcon fontSize={size} />
    </IconButton>
  );
};

export default EditIconButton;
