import React, {useEffect} from 'react';
import axios from 'axios';

const App = () => {

    const getJeopartyTest = () => {
        axios.get('/api/jeopartyTest')
          .then((data) => {
            console.log('random jeopardy question: ', data);
          })
          .catch((err) => console.log(err));
    }

    useEffect(() => getJeopartyTest(), []);
    return (
        <div>
        <h1>This is Jeoparty!</h1>
        <div>Welcome to Jeoparty, an interactive game where you get to practice previous Jeoparty questions. I'm your host, Alex Trebek.</div>
        </div>
            
    )
}

export default App;