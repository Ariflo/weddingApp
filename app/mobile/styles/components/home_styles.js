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
    alignItems: 'center',
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
  
  thumbnail: {
    alignSelf: 'center',
    marginTop: 20,
    width: 300,
    height: 220,
  },
  
  location_time_container: {
    alignItems: 'center',
  },
  
  location_header: {
    marginTop: 20,
    fontFamily: 'American Typewriter',
    color: '#28323D',
    fontWeight: 'bold',
    fontSize: 20,
  },
  
  location: {
    color: '#28323D',
    fontWeight: 'bold',
  },
  
  time: {
    marginTop: 10,
    fontFamily: 'Baskerville-Italic',
    color: '#28323D',
    fontSize: 18,
    fontWeight: '700',
  }
});