import React, { Component } from 'react';
import {
    AppRegistry,
    InputText,
    Image,
    Text,
    View,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

var Gender = t.enums({
    M : 'Male',
    F : 'Female',
    O : 'Other'
});

var Positive = t.refinement( t.Number, function (n) {
    return n>=0;
});

var Options = {
    auto: 'placeholders',
    fields: {
        RegistrationNumber: {
            label: 'Registration Number',
        },
        Name: {
            error: 'Email address is required!!'
        }
    },
};

var User = t.struct({
    Name: t.String,
    RegistrationNumber: t.Number,
    PhoneNumber: t.Number,
    Age: t.maybe(Positive),
    Email: t.maybe(t.String),
    BirthDate: t.maybe(t.Date),
    Gender: Gender,
    RememberMe: t.Boolean
});


export default class Form extends Component {
    
        constructor(props){
            super(props);
            this.state = {text: ' '}
        }

        onPressButt(){
            Alert.alert('Response recorded!')
        }
        render(){
            const resizeMode = 'center';
            return(
                <View style={styles.container}>
                    <Image 
                        style={{
                            flex: 1,
                            resizeMode,
                        }}
                    source={{uri: 'https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNational_Institute_of_Technology%2C_Karnataka&psig=AOvVaw0qnnYQpcLtMPi1hGfF0pAf&ust=1507742945902352'  }}
                    />
                    <Form 
                    type={User}
                    option={Options}
                    />
                    <TouchableOpacity onPress={this.onPressButt}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                         </View>
                    </TouchableOpacity>
                    
                </ View>
            );
        }
    
    }


var styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });



AppRegistry.registerComponent('Form', () => Form);
