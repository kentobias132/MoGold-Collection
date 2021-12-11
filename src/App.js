import React from "react";
import './App.css';
import HomePage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HAtsPage = () => {
    return(
        <div>
            {/* <HomePage />  */}
            <h1>HATS PAGE</h1>
        </div>
    )
};

function App() {
    return(
        <div>
            
                <Route exact path='/' component= {HomePage} />
                <Route exact path='/hatpage' component= {HAtsPage} />
            
        </div>
    )
}


export default App;




// class app extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: [],
//             searchFilled: ''
//         }
//     };

//     componentDidMount(){
//         this.setState({robots: robots})
//         // fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(user => {this.setState({robots: user})})
        
//     }

//     searchInput = (event) =>{
//         this.setState({searchFilled: event.target.value}) 
//     }

//     render(){
//         const filterArray = this.state.robots.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchFilled.toLowerCase())
//         });

//         if (this.state.robots.length === 0) {
//             return(
//                 <h1 className= 'p3 tc'>Loading...</h1>
//             )
            
//         } else{
//             return(
//                 <div className= 'tc'>
//                 <h1 className= 'f1'>RoboFriend</h1>
//                 <Search searchWord = {this.searchInput} />
//                 <Scroll>
//                     <ErrorHandler>
//                         <CardList robots ={filterArray} />
//                     </ErrorHandler>
//                 </Scroll>
//             </div>
//             )
//         }   

//     }    
// }
