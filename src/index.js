import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import Projects from './components/Projects';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
<Router history = {createBrowserHistory()}>
    <Switch>
        <Route exact path= '/' render={() => <Header><App /></Header>  } />
        <Route path= '/jokes' render={()=> <Header><Jokes /></Header>  } />
        <Route path = '/projects' render={()=> <Header><Projects /></Header>  } />
    </Switch>
</Router>,
document.getElementById('root')
);


/*

//How a promise works
new Promise((resolve,reject) => {

    return reject(new Error('no Bears'));
    setTimeout(() => {
    resolve('Bears, Beets, battlestar galactica');

},2000)}).then(quote=> {
    console.log(quote);
}).catch(error => console.log('error',error));


*/


