import { StyleSheet } from 'react-native';

export default home = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
  },
  
  date: {
    fontFamily: 'Zapfino',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 22,
  },
  
  countdown: {
    alignItems: "center",
    flexDirection: "row",
  },
  
  countdown_num_container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  
  date_box: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    backgroundColor:'#28323D',
    marginHorizontal: 10,
  },
  
  date_txt: {
    color: '#fff',
    fontSize: 30,
  },
  
  date_title: {
    fontSize: 14,
  },
});