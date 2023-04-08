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
        <h2>Welcome to Jeoparty, an interactive game where you get to practice previous Jeoparty questions. I'm your host, Alex Trebek.</h2>
        <h3>Category</h3>
        <div>{jeopartyTest.category}</div>
        <h3>Question</h3>
        <div>{jeopartyTest.clue}</div>
        <h3>Answer</h3>
        <div>What is {jeopartyTest.response}?</div>
        </div>
            
    )
}

export default App;