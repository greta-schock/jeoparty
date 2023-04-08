import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
    const [jeopartyTest, setJeopartyTest] = useState([]);

    const getJeopartyTest = () => {
        axios.get('/api/jeopartyTest')
          .then((data) => {
            console.log('random jeopardy question: ', data.data);
            const jeopardyObj = data.data[0];
            setJeopartyTest(jeopardyObj);
          })
          .catch((err) => console.log(err));
    }

    useEffect(() => getJeopartyTest(), []);
   
    return (
        <div>
        <h1>This is Jeoparty!</h1>
        <div>Welcome to Jeoparty, an interactive game where you get to practice previous Jeoparty questions. I'm your host, Alex Trebek.</div>
        <div>{console.log('in div data:', jeopartyTest.id)}</div>
        </div>
            
    )
}

export default App;