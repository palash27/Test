import React, { Component } from 'react'
import Cards from './Cards'
import todoData from './todoData'
import Item from './Item'
import Conditional from './Conditional'
import Navbar from './Navbar'
import Alert from './Alert'
class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      // <form>
      //   <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} />
      //   <br />
      //   <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} />
      //   <h1>{this.state.firstname}{this.state.lastname}</h1>
      // </form>
      <Navbar />
    )
  }
}
export default App
// export default class App extends Component {
//   render() {
//     const todoItem = this.todoData.map(item => <Item key={item.id} task={item} />)
//     return (
//       <div>
//         {todoItem}
//       </div>
//     )
//   }
// }
