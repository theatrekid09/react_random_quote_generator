import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Button from './Button'


function App() {
  const [quote, setQuote] = useState('');
    const anecdotes = [
    'Be yourself; everyone else is already taken. - Oscar Wilde',
    'Be the change that you wish to see in the world. - Mahatma Gandhi',
    'Many of life’s failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison',
    'If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein',
    'Don’t chase people. Be yourself, do your own thing and work hard. The right people – the ones who really belong in your life – will come to you. And stay. - Will Smith',
    'Goals on the road to achievement cannot be achieved without discipline and consistency. - Denzel Washington',
    'The only way to get out of mediocrity is to keep shooting for excellence. - Eric Thomas' ,
    'Live for each second without hesitation. - Elton John'
  ]

const generateQuote = () => {
  const random = Math.floor(Math.random() * (anecdotes.length))
   setQuote(anecdotes[random])
}
 
  return (
    <div className="App">
    <h1 className="headline">Random Quote Generator</h1>
      <Button
        handleClick={generateQuote}
        text="Click To Go To The Next Quote"
      />
      <p className="quote">{quote}</p>
    </div>
  );
}

export default App;
