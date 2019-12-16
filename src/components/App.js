import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';
import SocialProfiles from './SocialProfiles';






class App extends Component {

    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio})
    }


    render(){


        return (
            
            
            <div>

            <div style={{float:'right'}}>

            <SocialProfiles />

            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
                <h5>My name is Lewis. </h5>
             </div>
             <hr/>
             <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            {

            this.state.displayBio ? (                
                <div>
                    <p>I'm a Software Developer living in Belfast.</p>
                    <p>Check out my Github to see what i've been working on!</p>


    
                    <button  onClick={this.toggleDisplayBio}>Close</button>
                </div>
                ) : <div>
                    <button  onClick={this.toggleDisplayBio}> About Me</button>
                    
                </div>
                
            }
            </div>

        <hr/>




        </div>
        )



    }

}



export default App;