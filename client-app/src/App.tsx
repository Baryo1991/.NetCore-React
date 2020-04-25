import React,{Component} from 'react';
import './App.css';
import axios from 'axios'
import { Header, Icon } from 'semantic-ui-react'

class App extends Component{



    state= {
      values:[]
    }
    componentDidMount() {
      axios.get('http://localhost:5000/api/values')
        .then(response=>{
          this.setState({values:response.data})
          console.log(response.data)
        })
    }
    render() {
      return (
        <div >
            <Header as='h2'>
              <Icon name='settings'/>
              <Header.Content>Reactivities</Header.Content>
            </Header>
          <ul style={{listStyle:"none"}}>
            {this.state.values.map((value:any)=>{
             return <li key={value.id}>{value.name}</li>
            })}
          </ul>
        </div>
      )
    }
    
}
export default App;
