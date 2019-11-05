import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

  },
  dense: {
    marginTop: theme.spacing(2),
  },
  button : {
    margin : theme.spacing(1),
  }
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const {handleChange, values, message,error, handleClick} = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Email"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('email')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        label="Password"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('password')}
        margin="normal"
        variant="outlined"
        type="password"
      />
      <Button onClick={handleClick} variant="contained" color="primary" className={classes.button}>
        SIGN IN
      </Button>
      {message && <Typography variant="body1" gutterBottom>
        {message}
      </Typography>}
      {error && <Typography variant="body1" gutterBottom>
        {error}
      </Typography>}

    </form>
  );
}