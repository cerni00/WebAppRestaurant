import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect, ConnectedProps } from 'react-redux';
import  {RootState}  from '../../store';
import { logoutSuccess } from '../../actions/authActions';

// Define the types for props received from Redux
const mapState = (state: RootState) => ({
  user: state.auth.user,
});

const mapDispatch = {
  logout: logoutSuccess,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// Define the component
const Header: React.FC<PropsFromRedux> = ({ user, logout }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.link}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
            <Text style={styles.link}>Register New Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 10,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
});

// Connect the component to Redux
export default connector(Header);
