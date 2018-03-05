import React from 'react';
import { 
  StyleSheet, Text, View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
            password2: '',
        }
    }

    componentDidMount() {
        // this._loadInitialState().done();
    }

    // _loadInitialState = async () => {
        // var value = await AsyncStorage.getItem('user');
        // if (value !== null) {
        //     this.props.navigation.navigate('Profile'); 
        // }
    // }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>- REGISTER -</Text>
                    <TextInput
                        style={styles.textInput} placeholder='Username'
                        onChangeText={ (username) => this.setState({username}) }
                        udnerlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput} placeholder='Password'
                        onChangeText={ (password) => this.setState({password}) }
                        secureTextEntry={true} udnerlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput} placeholder='Repeat Password'
                        onChangeText={ (password2) => this.setState({password2}) }
                        secureTextEntry={true} udnerlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.signup}>
                        <Text>Sign up </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        );
    }

    signup = () => {

        fetch('http://YOUR_IP:3000/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                // password2: this.state.password2,
            })
        })
        
        .then((response) => response.json())
        .then ((res) => {

            alert(res.message);

            if(res.success === true) {
                alert('successssss!');
                // AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('Profile');
            }
            else {
                alert(res.message);
            }
        })
        .done();
    }


}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
});
