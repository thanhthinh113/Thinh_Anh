import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page01 from "./views/Page01";
import Page02 from "./views/Page02";
import Page03 from "./views/Page03";
import Page04 from "./views/Page04";
import Page05 from "./views/Page05";
import Page06 from "./views/Page06";
import Page07 from "./views/Page07";
import Page08 from "./views/Page08";
import Page09 from "./views/Page09";
import Page10 from "./views/Page10";
import Page11 from "./views/Page11";
import Page12 from "./views/Page12";
import Page13 from "./views/Page13";
import Page14 from "./views/Page14";
import Page15 from "./views/Page15";
import Page16 from "./views/Page16";
import Page17 from "./views/Page17";
import PageScreenViewProduct from "./views/PageScreenViewProduct";


const Stack= createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page01" component={Page01} options={{headerShown:false}}/>
        <Stack.Screen name="Page02" component={Page02} options={{headerShown:false}}/>
        <Stack.Screen name="Page03" component={Page03} options={{headerShown:false}}/>
        <Stack.Screen name="Page04" component={Page04} options={{headerShown:false}}/>
        <Stack.Screen name="Page05" component={Page05} options={{headerShown:false}}/>
        <Stack.Screen name="Page06" component={Page06} options={{headerShown:false}}/>
        <Stack.Screen name="Page07" component={Page07} options={{headerShown:false}}/>
        <Stack.Screen name="Page08" component={Page08} options={{headerShown:false}}/>
        <Stack.Screen name="Page09" component={Page09} options={{headerShown:false}}/>
        <Stack.Screen name="Page10" component={Page10} options={{headerShown:false}}/>
        <Stack.Screen name="Page11" component={Page11} options={{headerShown:false}}/>
        <Stack.Screen name="Page12" component={Page12} options={{headerShown:false}}/>
        <Stack.Screen name="Page13" component={Page13} options={{headerShown:false}}/>
        <Stack.Screen name="Page14" component={Page14} options={{headerShown:false}}/>
        <Stack.Screen name="Page15" component={Page15} options={{headerShown:false}}/>
        <Stack.Screen name="Page16" component={Page16} options={{headerShown:false}}/>
        <Stack.Screen name="Page17" component={Page17} options={{headerShown:false}}/>
        <Stack.Screen name="PageScreenViewProduct" component={PageScreenViewProduct} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


