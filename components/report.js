import React, { Component } from 'react';
import { passData } from '../common.js';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from 'react-native';


class Report extends Component {

  constructor() {
    super();
    this.state = {
      moreDetails: '',
      dataObtained: false,
    };
  }

  getData = () => {
   var type = this.props.reportType;
   var data = passData();
   if(type==='student'){
     if(data.length>0){
        this.setState({moreDetails: data, dataObtained:true});
     }else{
         this.setState({dataObtained:false});
     }
   }else if(type==='subject'){
     var subList = [];
     data.map(i=> {
       i.examdata.map(j=>{
         j.marks.map(k=>{
           if(k.subject===this.props.subjectName){
             subList.push({"name":i.name, "score":k.score, "year":j.year});
           }
         });
       });
     });
     if(subList.length>0){
        this.setState({moreDetails: subList, dataObtained:true});
     }else{
         this.setState({dataObtained:false});
     }
   }
 };

 componentWillMount = () =>{
   this.getData();
 }


  render() {
    if(this.state.dataObtained&&this.props.reportType==='student'){
      return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{padding:20}}>
              <Text style={{color:'white', fontSize:20, textAlign:'center', marginBottom:5}}>Student Wise Report</Text>
              {this.state.moreDetails.map(i=> {
               return (<View style={{backgroundColor:"#F5F5F5", padding: 20}}>
                    <Text style={{ color : '#D32F2F',fontSize: 18, fontWeight: 'bold'}}>{i.name}-{i.rollno}</Text>
                    {i.examdata.map(j=> {
                     return (<View style={{backgroundColor:"#FBEE79", padding: 20, borderColor:'white', borderBottomWidth:1}}>
                          <Text style={{ color : '#BDBDBD',fontSize: 18, fontWeight: 'bold', marginBottom:5, textDecorationLine:'underline'}}>{j.year}-{j.month}</Text>
                          {
                            j.marks.map(k=>{
                              return(<Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>{k.subject}-{k.score}</Text>)
                            })
                          }
                        </View>
                  );
              })}
                  </View>
            );
        })}
            </View>
            </ScrollView>
        </View>
      );
    }else if(this.state.dataObtained&&this.props.reportType==='subject'){
        return(
          <View style={styles.container}>
              <ScrollView>
              <View style={{padding:20, backgroundColor:'#F5F5F5'}}>
                <Text style={{color:'#D32F2F', fontSize:20, textAlign:'center', marginBottom:5}}>Year wise report of-{this.props.subjectName}</Text>
                {this.state.moreDetails.map((i,index)=> {
                 return (<View style={{backgroundColor:"#FBEE79", padding: 20, borderBottomWidth:1, borderColor:'white'}}>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Name: {i.name}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Score: {i.score}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Year: {i.year}</Text>
                    </View>
              );
          })}
              </View>
              </ScrollView>
          </View>
        );

    }else{
      return(
        <View style={styles.container2}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color:'white', textAlign:'center'}}>Sorry Student Not Found!!!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  container2: {
    flex: 1,
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 30,
    color:'white',
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#CFD8DC',
    fontSize: 20,
    marginBottom: 5,
  },
});

module.exports = Report;
