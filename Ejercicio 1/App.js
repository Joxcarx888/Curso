import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={[styles.container, styles.homeBackground]}>
      <Text style={styles.title}>Pantalla Principal</Text>
    </View>
  );
}

function NewScreen() {
  return (
    <View style={[styles.container, styles.newBackground]}>
      <Text style={styles.title}>Nueva Pantalla</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={[styles.container, styles.settingsBackground]}>
      <Text style={styles.title}>Configuración</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#FF6347', // Tomato
            tabBarInactiveTintColor: '#666',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 0,
              elevation: 5, // sombra en Android
              shadowOpacity: 0.1, // sombra en iOS
              height: 60,
              paddingBottom: 5,
              paddingTop: 5,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';
              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Nuevo') {
                iconName = focused ? 'car' : 'car-outline';
              } else if (route.name === 'Ajustes') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Nuevo" component={NewScreen} />
          <Tab.Screen name="Ajustes" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBackground: {
    backgroundColor: '#E8F0FE',
  },
  newBackground: {
    backgroundColor: '#FEF3E8',
  },
  settingsBackground: {
    backgroundColor: '#E8F6F3',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});
