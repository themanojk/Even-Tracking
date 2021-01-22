import React, { useState, useEffect} from 'react';
import { View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
import { ILoginState } from 'app/models/reducers/login';
//import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const loggedInUserName = useSelector((state: IState) => state.loginReducer.username);
  const dispatch = useDispatch();
  const onLogin = () => {
    if(!name) setError(true)
    dispatch(loginActions.requestLogin(name, '1234'));
  }
  //const onForgot = () => NavigationService.navigate('ForgotPassword');
  useEffect(() => { 
    if(name) setError(false)
  }, [name])
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Logged in user : {loggedInUserName}</Text>
        <TextInput
        label="Enter Your Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.tiName}
        error={error}
        />
        <Button icon="login" mode="outlined" onPress={onLogin}>
          View Events
        </Button>
    </View>
  );
};

export default Login;
