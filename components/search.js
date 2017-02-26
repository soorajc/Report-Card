import React, { Component } from 'react';
import { passData } from '../common.js';
import {
  StyleSheet,
  Image,
  Text,
  ListView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  View
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var dataList = [];


class Search extends Component {
  constructor() {
    super();
    this.state = {
      moreDetails: '',
      dataObtained: false,
    };
  }

  getData = () => {
   var type = this.props.type;
   var data = passData();
   if(type==='rollno'){
     var rollno = this.props.searchTerm;
     var rollList = [];
     data.map(i=> {
       if(i.rollno===rollno){
         rollList.push({"name":i.name, "rollno":i.rollno, "examdata":i.examdata});
       }
     });
     if(rollList.length>0){
        this.setState({moreDetails: rollList, dataObtained:true});
     }else{
         this.setState({dataObtained:false});
     }
   }else if(type==='subject'){
     var subject = this.props.searchTerm;
     var subList = [];
     data.map(i=> {
       i.examdata.map(j=>{
         j.marks.map(k=>{
           if(k.subject===this.props.searchTerm){
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
   }else if (type==='name'){
     var name = this.props.searchTerm;
     var nameList = [];
     data.map(i=> {
       if(i.name===name){
         nameList.push({"name":i.name, "rollno":i.rollno, "examdata":i.examdata});
       }
     });
     if(nameList.length>0){
       this.setState({moreDetails: nameList, dataObtained:true});
     }else{
         this.setState({dataObtained:false});
     }
   }else if (type==='year'){
     var year = this.props.searchTerm;
     var yearList = [];
     data.map(i=> {
       i.examdata.map(j=>{
       if(j.year===year){
         yearList.push({"name":i.name, "rollno":i.rollno, "marks":j.marks, "month":j.month});
       }
       });
     });
     if(yearList.length>0){
        this.setState({moreDetails: yearList, dataObtained:true});
     }else{
         this.setState({dataObtained:false});
     }
   }
   //console.log("studentData--->6666000", sublist);
   console.log("ehaaaaaaaaaaaa!!!!", yearList);
  //  if(studentData){
  //    this.setState({moreDetails: studentData, dataObtained:true});
  //  }else{
  //    this.setState({dataObtained:false});
  //  }

 };

 componentWillMount = () =>{
   this.getData();
 }

  render() {
    if(this.state.dataObtained&&(this.props.type==='rollno' || this.props.type==='name')){
      return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{padding:20}}>
              <Text style={{color:'#FAFAFA', fontSize:20, textAlign:'center', marginBottom:5}}>Search Results</Text>
              {this.state.moreDetails.map(i=> {
               return (<View style={{backgroundColor:"#F5F5F5", padding: 20}}>
                    <Text style={{ color : '#F44336',fontSize: 18, fontWeight: 'bold'}}>{i.name}-{i.rollno}</Text>
                    {i.examdata.map(j=> {
                     return (<View style={{backgroundColor:"#FBEE79", padding: 20, borderColor:'white', borderBottomWidth:1}}>
                          <Text style={{ color : '#BA68C8',fontSize: 18, fontWeight: 'bold', marginBottom:5, textDecorationLine:'underline'}}>{j.year}-{j.month}</Text>
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
    }else if(this.state.dataObtained&&this.props.type==='subject'){
        return(
          <View style={styles.container}>
              <ScrollView>
              <View style={{padding:20, backgroundColor:'#F5F5F5'}}>
                <Text style={{color:'#F44336', fontSize:20, textAlign:'center', marginBottom:5}}>Search results for subject {this.props.searchTerm}</Text>
                {this.state.moreDetails.map(i=> {
                 return (<View style={{backgroundColor:"#FBEE79", padding: 20, borderBottomWidth:1, borderColor:'white'}}>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Name :{i.name}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Score :{i.score}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Year :{i.year}</Text>
                    </View>
              );
          })}
              </View>
              </ScrollView>
          </View>
        );

    }else if(this.state.dataObtained&&this.props.type==='year'){
        return(
          <View style={styles.container}>
              <ScrollView>
              <View style={{padding:20}}>
                <Text style={{color:'#FAFAFA', fontSize:20, textAlign:'center', marginBottom:5}}>Search results for the year {this.props.searchTerm}</Text>
                {this.state.moreDetails.map(i=> {
                 return (<View style={{backgroundColor:"#F5F5F5", padding: 20, borderBottomWidth:1, borderColor:'white'}}>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Name: {i.name}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>RollNo: {i.rollno}</Text>
                      <Text style={{ color : '#616161',fontSize: 18, fontWeight: 'bold'}}>Month: {i.month}</Text>
                      <Text style={{ color : '#BA68C8',fontSize: 18, fontWeight: 'bold',marginBottom:5,marginTop:5, textDecorationLine:'underline' }}>Mark Details</Text>
                      {
                        i.marks.map(k=>{
                          return(<Text style={{ color : '#00897B',fontSize: 18, fontWeight: 'bold'}}>{k.subject}-{k.score}</Text>)
                        })
                      }
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
  searchButton: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 18
  },
  search: {
    width: 28,
    height: 28,
  },
  subTitle: {
    color: '#BDBDBD',
    marginTop: 5
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

module.exports = Search;
