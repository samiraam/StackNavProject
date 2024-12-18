import React from 'react'
import {View,Text , Button, Stylesheet} from 'react-native'

const Details=({navigation})=>{
    return( 
        <View>
            <Text>Welcome to Details Screen</Text>
            <Button
                title= 'Go to Home page'
                onPress={()=>navigation.navigate("Home")}
            ></Button>
             <Button
                            title= 'Go to About page'
                            onPress={()=>navigation.navigate("About")}
                        ></Button>
        </View>
    )  
}

export default Details;