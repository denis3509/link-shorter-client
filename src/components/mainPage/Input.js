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
    flex: 4,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    width :100,
    height : 50,
    marginTop : 20,
    float : 'right',
    flex :1,
  }
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const {
    handleChange,
    shortUrl,
    url,
    errorShortUrl, handleClick
  } = props;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'stretch'}}>
      <TextField
        id="outlined-name"
        label="Url"
        className={classes.textField}
        value={url}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        type="text"

      />
      <Button onClick={handleClick} variant="contained" color="primary" className={classes.button}>
        shorten
      </Button>
      </div>
      <TextField
        id="outlined-name"

        className={classes.textField}
        value={shortUrl}
        margin="normal"
        variant="outlined"
        type="text"
        readOnly
      />
      {errorShortUrl && <Typography variant="body1" gutterBottom>
        {errorShortUrl}
      </Typography>}

    </form>
  );
}