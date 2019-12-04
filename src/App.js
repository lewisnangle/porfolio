import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';
import Title from './Title';
import SocialProfiles from './SocialProfiles';
import profileImage from './assets/profile.png';


class App extends Component {

    state = {displayBio: false}

    toggleDisplayBio = () => {
        this.setState({displayBio : !this.state.displayBio})
    }


    render(){


        return (
            
            
            <div>
                <img src = {profileImage} alt = 'profile' className="profileImage" />
                <h1>Hello!</h1>
                <p>My name is Lewis. </p>
                <Title />
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