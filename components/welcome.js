

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  BackAndroid,
  TextInput,
  Text,
  Image,
  View
} from 'react-native';


export default class Welcome extends Component {

  constructor(props) {
      super(props);
      this.state = {
        moreDetails: '',
        rollNo:'',
        name:'',
        year:'',
        subject:'',
        subjectName:''
      };
  }



    componentDidMount = () => {
      BackAndroid.addEventListener('hardwareBackPress', () => {
        const array = this.props.navigator.getCurrentRoutes();
        if (array.length !== 2) {
          this.onBack();
          return true;
        } else {
          return false;
        }
      });
    };

    onBack = () => {
      const navigator = this.props.navigator;
      navigator.pop();
    };


    goToSearch = (key) => {
      const navigator = this.props.navigator;
      if(key==='rollno'){
        if(this.state.rollNo===''){
          alert("Please enter the roll no of student");
        }else{
          navigator.push({
            id: 'search',
            searchTerm: this.state.rollNo,
            type: "rollno",
            gestures: false
          });
        }
      }else if(key==='name'){
        if(this.state.name===''){
          alert("Please enter the name of student");
        }else{
          navigator.push({
            id: 'search',
            type: "name",
            searchTerm: this.state.name,
            gestures: false
          });
        }
      }else if(key==='subject'){
        if(this.state.subject===''){
          alert("Please enter the name of subject");
        }else{
          navigator.push({
            id: 'search',
            type: "subject",
            searchTerm: this.state.subject,
            gestures: false
          });
        }
      }else if(key==='year'){
        if(this.state.year===''){
          alert("Please enter the year");
        }else{
          navigator.push({
            id: 'search',
            type: "year",
            searchTerm: this.state.year,
            gestures: false
          });
        }
      }
    };

    goToReport = (type) => {
      const navigator = this.props.navigator;
      if(type==='subject'){
        if(this.state.subjectName===''){
          alert("Enter subject Name");
        }else{
          var subjectName = this.state.subjectName;
          navigator.push({
            id: 'report',
            reportType: type,
            subjectName: subjectName,
            gestures: false
          });
        }
      }else{
        navigator.push({
          id: 'report',
          reportType: type,
          gestures: false
        });
      }
    };

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:0.8, paddingLeft:10}}>
            <TextInput
                placeholder="Search by RollNo"
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({rollNo:text})}
                value={this.state.rollNo}
              />
          </View>
          <View style={{flex:0.2, padding:20}}>
          <TouchableOpacity onPress={this.goToSearch.bind(this, "rollno")}>
            <Image style={{ height: 30, width: 30}} source={require('../assets/search.png')}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:0.8, paddingLeft:10}}>
            <TextInput
                placeholder="Search By Subject"
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({subject:text})}
                value={this.state.subject}
              />
          </View>
          <View style={{flex:0.2, padding:20}}>
          <TouchableOpacity onPress={this.goToSearch.bind(this, "subject")}>
            <Image style={{ height: 30, width: 30}} source={require('../assets/search.png')}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:0.8, paddingLeft:10}}>
            <TextInput
                placeholder="Search By Name"
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({name:text})}
                value={this.state.name}
              />
          </View>
          <View style={{flex:0.2, padding:20}}>
          <TouchableOpacity onPress={this.goToSearch.bind(this, "name")}>
            <Image style={{ height: 30, width: 30}} source={require('../assets/search.png')}/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:0.8, paddingLeft:10}}>
            <TextInput
                placeholder="Search By Year"
                placeholderTextColor="white"
                onChangeText={(text) => this.setState({year:text})}
                value={this.state.year}
              />
          </View>
          <View style={{flex:0.2, padding:20}}>
          <TouchableOpacity onPress={this.goToSearch.bind(this, "year")}>
            <Image style={{ height: 30, width: 30}} source={require('../assets/search.png')}/>
          </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.button2}>
      <TouchableOpacity style={{flex:0.5, backgroundColor:'#f1f1f1', borderBottomWidth:1, borderColor:'#616161', justifyContent: 'center',
      alignItems: 'center'}} onPress={this.goToReport.bind(this, "student")}>
        <Text style={{fontSize:20, color:"#616161"}}>Generate Student Wise Report</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:0.5, backgroundColor:'#f1f1f1', padding:10}} onPress={this.goToReport.bind(this, "subject")}>
        <TextInput
            placeholder="Enter Subject Name"
            placeholderTextColor="#616161"
            onChangeText={(text) => this.setState({subjectName:text})}
            value={this.state.subjectName}
          />
          <Text style={{fontSize:20, color:"#616161", textAlign:"center"}}>Generate Subject Wise Report</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#939BE5',
  },
  textContainer: {
    flex: 0.2,
    padding: 5,
    backgroundColor: '#AB47BC',
    flexDirection: 'row'
  },
  menu1: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  menu2: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  button1: {
    flex:0.5,
    backgroundColor: '#3498db',

  },
  button2: {
    flex:0.5,
    backgroundColor: '#FAFAFA',
  },

});
