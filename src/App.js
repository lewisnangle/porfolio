import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {

    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio})
    }


    render(){


        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Lewis. I'm a Software Engineer.</p>
            {
            this.state.displayBio ? (                
                <div>
                    <p>Currently living in Belfast</p>
                    <p>.. .. .. ..</p>
                    <p>.. .. .. ..</p>
                    <p>.. .. .. ..</p>
                    <p>.. .. .. ..</p>
                    <button onClick={this.toggleDisplayBio}>Read Less</button>
                </div>
                ) : <div>
                    <button onClick={this.toggleDisplayBio}> Read more</button>
                </div>
        }

        <hr/>

        <Projects />

        <hr/>

        <SocialProfiles />
        
            </div>
        )



    }

}


export default App;