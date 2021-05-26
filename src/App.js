import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import br from './br';

function App(){
    return(
        <Router>
            <div className='app'>
                
                    <Route  path='/'>
                        <Header />
                        <br />
                        <Products />
                        <Footer />
                    </Route>
                    
                
            </div>
        </Router>
    )
}


export default App;