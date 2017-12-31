import { StyleSheet } from 'react-native';

export default invite = StyleSheet.create({  
  container: {
    marginTop: 40,
  },
  
  btn: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  
  modal: {
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 4,
    height: 150,
    width: 300,
  },
  
  modal_menu_btn_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  modal_btn: {
    width: '40%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  
  modal_txt: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    fontSize: 18,
  },
  
  btn_txt: {
    textAlign: 'center',
  },
  
  guest_type_txt: {
    fontWeight: 'bold',
  }
});