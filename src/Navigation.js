import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import AddPaciente from "./screens/AddPaciente";
import Pacientes from "./screens/Pacientes";
import ViewPaciente from "./screens/ViewPaciente";
import Doctores from "./screens/Doctores";
import AddDoctor from "./screens/AddDoctor";
import ViewDoctores from "./screens/ViewDoctores";
import Citas from "./screens/Citas";
import AddCitas from "./screens/AddCitas";
import ViewCitas from "./screens/ViewCitas";
import Login from "./screens/Login";
import SingUp from "./screens/SingUp";
import Splash from "./screens/splash"

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Citas" component={Citas} />
      <Stack.Screen name="AddCitas" component={AddCitas} />
      <Stack.Screen name="ViewCitas" component={ViewCitas} />
      <Stack.Screen name="Doctores" component={Doctores} />
      <Stack.Screen name="AddDoctor" component={AddDoctor} />
      <Stack.Screen name="ViewDoctores" component={ViewDoctores} />
      <Stack.Screen name="Pacientes" component={Pacientes} />
      <Stack.Screen name="AddPaciente" component={AddPaciente} />
      <Stack.Screen name="ViewPaciente" component={ViewPaciente} />
    </Stack.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}