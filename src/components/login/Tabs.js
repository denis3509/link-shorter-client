import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabsLogin = (props) => {
 const {value, setValue} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        style={{margin: '0 auto'}}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="SignIn" />
        <Tab label="SignUp" />
      </Tabs>
    </Paper>
  );
};
export default TabsLogin