import React, {useState} from 'react'
import Tabs from './Tabs'
import Paper from '@material-ui/core/Paper'
import SignIn from './SignIn'
import SignUp from './SignUp'
const Login = (props) => {
  const {message, error, userActions} =props;
  const [activeTab, setActiveTab] = useState(0);
  const [values, setValues] = React.useState({
    userName: '',
    email: '',
    password:'',

  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickSignUp = ()=> {
    const { email,userName, password} = values;
    userActions.signUp(email,userName, password, (success)=>{
      if(success) setActiveTab(0);
    });

  };
  const handleClickSignIn= ()=>{
    const { email, password} = values;
    userActions.signIn(email, password,(success)=>{
      if (success) document.location.href='/mainPage';
    });

  };

  return (
    <Paper style={{margin: '100px auto', width : '500px'}}>
      <Tabs
        value={activeTab}
        setValue={setActiveTab}
      />
      {(activeTab===0) && <SignIn
        error={error}
        message={message}
        values={values}
        setValues={setValues}
        handleChange={handleChange}
        handleClick={handleClickSignIn}
      />}
      {(activeTab===1) && <SignUp
        error={error}
        message={message}
        values={values}
        handleChange={handleChange}
        handleClick={handleClickSignUp}
      />}
    </Paper>

  )
};
export default Login