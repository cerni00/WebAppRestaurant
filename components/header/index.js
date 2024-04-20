import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../actions/authActions';

const Header = ({ user, logout }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.link}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register New Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  logout: logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
