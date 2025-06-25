import React from 'react'; import { 
View, Text, FlatList, Image, StyleSheet 
} from 'react-native';
import { NavigationContainer } from 
'@react-navigation/native'; import { 
createBottomTabNavigator } from 
'@react-navigation/bottom-tabs'; import 
{ Ionicons, FontAwesome5, MaterialIcons 
} from '@expo/vector-icons';
// ✅ Your existing notification list
const notifications =[{
    id: '1',
    user: 'John Doe',
    action: 'liked your post',
    time: '2h',
    avatar: 
    'https://randomuser.me/api/portraits/men/1.jpg',
  },
  { id: '2', user: 'Emily Smith', 
    action: 'commented: "Awesome!"', 
    time: '3h', avatar: 
    'https://randomuser.me/api/portraits/women/2.jpg',
  },
  { id: '3', user: 'Michael Brown', 
    action: 'sent you a friend request', 
    time: '5h', avatar: 
    'https://randomuser.me/api/portraits/men/3.jpg',
  },
  { id: '4', user: 'Sarah Johnson', 
    action: 'mentioned you in a comment',
    time: '1d', avatar: 
    'https://randomuser.me/api/portraits/women/4.jpg',
  },
];
// ✅ Notification page UI
function NotificationsPage() { const 
  renderItem = ({ item }) => (
    <View style={styles.card}> <Image 
      source={{ uri: item.avatar }} 
      style={styles.avatar} /> <View 
      style={styles.textContainer}>
        <Text style={styles.message}> 
          <Text 
          style={styles.user}>{item.user} 
          </Text> {item.action}
        </Text> <Text 
        style={styles.time}>{item.time}</Text>
      </View> </View> ); return ( <View 
    style={styles.container}>
      <Text 
      style={styles.header}>Notifications</Text> 
      <FlatList
        data={notifications} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id} 
        showsVerticalScrollIndicator={false}
      /> </View> );
}
// ✅ Dummy placeholder pages for other 
// tabs
function HomeScreen() { return 
  <CenterText label="Home" />;
}
function FriendsScreen() { return 
  <CenterText label="Friends" />;
}
function MarketplaceScreen() { return 
  <CenterText label="Marketplace" />;
}
function StudyScreen() { return 
  <CenterText label="Study" />;
}
function MenuScreen() { return 
  <CenterText label="Menu" />;
}
// Helper component to center text
function CenterText({ label }) { return 
  (
    <View style={{ flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' }}>
      <Text>{label} Page</Text> </View> 
  );
}
const Tab = createBottomTabNavigator(); 
export default function 
NotificationScreen() {
  return ( <NavigationContainer> 
      <Tab.Navigator
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') 
            return <Ionicons 
            name="home-outline" 
            size={size} color={color} 
            />;
            if (route.name === 
            'Friends') return <Ionicons
            name="people-outline" 
            size={size} color={color} 
            />;
            if (route.name === 
            'Marketplace') return 
            <FontAwesome5 name="store" 
            size={size} color={color} 
            />;
            if (route.name === 
            'Notifications') return 
            <Ionicons 
            name="notifications-outline" 
            size={size} color={color} 
            />;
            if (route.name === 
            'Study') return 
            <MaterialIcons 
            name="menu-book" size={size} 
            color={color} />;
            if (route.name === 'Menu') 
            return <Ionicons 
            name="menu-outline" 
            size={size} color={color} 
            />;
          },
          tabBarActiveTintColor: 
          '#1877F2', 
          tabBarInactiveTintColor: 
          'gray', headerShown: false,
        })}
      >
        <Tab.Screen name="Home" 
        component={HomeScreen} /> 
        <Tab.Screen name="Friends" 
        component={FriendsScreen} /> 
        <Tab.Screen name="Marketplace" 
        component={MarketplaceScreen} /> 
        <Tab.Screen name="Notifications" 
        component={NotificationsPage} /> 
        <Tab.Screen name="Study" 
        component={StudyScreen} /> 
        <Tab.Screen name="Menu" 
        component={MenuScreen} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: 
  '#fff', padding: 15 }, header: { 
  fontSize: 24, fontWeight: 'bold', 
  marginBottom: 20 }, card: { 
  flexDirection: 'row', marginBottom: 
  20, alignItems: 'center' }, avatar: { 
  width: 50, height: 50, borderRadius: 
  25 }, textContainer: { marginLeft: 12, 
  flex: 1 }, message: { fontSize: 16, 
  color: '#333' }, user: { fontWeight: 
  'bold' }, time: { fontSize: 12, color: 
  '#777', marginTop: 4 },
});
