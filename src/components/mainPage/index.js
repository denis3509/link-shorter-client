import React, {useState} from 'react'
import Input from './Input'
import Paper from '@material-ui/core/Paper'
import LinksTable from './Table'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      width: 700,
      margin: '50px auto',
    },
  })
);

const MainPage = (props) => {
  const {
    isAuth,
    mainPageActions,
    shortUrl,
    table,
    errorTable,
    errorShortUrl,
  } = props;
  const classes = useStyles();
  const [url, setUrl] = useState('');
  const handleClick = () => {
    if (isAuth) {
      mainPageActions.createLinkAuth(url);
    } else {
      mainPageActions.createLink(url);
    }
  };

  return (<div>
    <Paper className={classes.paper}>
      <Input
        handleChange={(event) => setUrl(event.target.value)}
        handleClick={handleClick}
        shortUrl={shortUrl}
        errorShortUrl={errorShortUrl}
      />
    </Paper>
    {
      isAuth && <LinksTable
        table={table}
        errorTable={errorTable}
      />
    }

  </div>)
};
export default MainPage