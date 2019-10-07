import React, {useState} from 'react'
import Input from './Input'
import Paper from '@material-ui/core/Paper'
import LinksTable from './Table'
const MainPage = (props) => {
  const {
    isAuth,
    mainPageActions,
    shortUrl,
    table,
    errorTable,
    errorShortUrl,
  } = props;

  const [url, setUrl] = useState('');
  const handleClick = () => {
    if (isAuth) {
      mainPageActions.createLinkAuth(url);
    } else {
      mainPageActions.createLink(url);
    }
  };

  return (<div>
    <Paper style={{width: 700, margin : '50px auto'}}>
      <Input
        handleChange={(event) => setUrl(event.target.value)}
        handleClick={handleClick}
        shortUrl={shortUrl}
        errorShortUrl={errorShortUrl}
      />
    </Paper>
    <LinksTable
      table={table}
      errorTable={errorTable}
    />

  </div>)
};
export default MainPage