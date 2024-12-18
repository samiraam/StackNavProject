import React from 'react'
import {View,Text , Button, Stylesheet} from 'react-native'

const About=({navigation})=>{
    return( 
        <View>
            <Text>Welcome to About Screen</Text>
            <Button
                title= 'Go to Home page'
                onPress={()=>navigation.navigate("Home")}
            ></Button>
             <Button
                title= 'Go to Details page'
                onPress={()=>navigation.navigate("Details")}
            ></Button>
          
        </View>
    )  
}

export default About;