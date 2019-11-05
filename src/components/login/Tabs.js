import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tabs: {
      margin: '0 auto',
      display : 'flex',
      flexFlow : 'row'
    },
    tab: {
      width : '100%'
    }
  })
);
const TabsLogin = (props) => {
  const {value, setValue} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Paper square>
      <Tabs
        className={classes.tabs}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}

      >
        <Tab
          className={classes.tab}
          label="SignIn"
        />
        <Tab className={classes.tab}
             label="SignUp"
        />
      </Tabs>
    </Paper>
  );
};
export default TabsLogin