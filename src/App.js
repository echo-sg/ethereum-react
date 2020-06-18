import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
// import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config'
// import TodoList from './TodoList'

class App extends Component {

componentDidMount(){
  this.loadBlockchainData()
}

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    console.log("network:", network)
    const accounts = await web3.eth.getAccounts()
    this.setState({account :accounts[0]})
  }

constructor(props)
{
  super(props)
  this.state = {account : ''}
}
  render() {
    return (
      <div className = "container">
          <h1>Hello, World !!</h1>
    <p>yout account : {this.state.account}</p>
      </div>
    );
  }
}

export default App;
