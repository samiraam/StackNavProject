import React from 'react'
import {View,Text , Button, Stylesheet} from 'react-native'

const Home=({navigation})=>{
    return(
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button
                title= 'Go to other page'
                onPress={()=>navigation.navigate("Details")}
            ></Button>
             <Button
                title= 'Go to About page'
                onPress={()=>navigation.navigate("About")}
            ></Button>
        </View>
    )
}

export default Home;