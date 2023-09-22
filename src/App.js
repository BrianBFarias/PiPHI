import './App.css';
import React from 'react';

function App() {

  const[count, setCount] = React.useState(0);

  // Define the function that you want to call.
  function logMessage() {
    var min =-40;
    var max =40;
    var randox = Math.floor(Math.random() * (max - min + 1)) + min;
    var randoy = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(document.querySelector('.invite-btn'))
    document.querySelector('.invite-btn').style.top = `${randoy}vh`;
    document.querySelector('.invite-btn').style.left = `${randox}vw`;

    var curr_click = count;
    curr_click=curr_click+1;
    setCount(curr_click);
    

    if(curr_click >= 5){
      document.querySelector('.GUY').style.display='block';
      document.querySelector('.FCM').style.display='none';
      document.querySelector('.invite-btn').style.display='none';

      setTimeout(function() {
        document.querySelector('.GUY').innerHTML='Goodluck!';
    }, 2500);
    } 

  }

  // Add the event listener outside of the App() function.
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.GUY').style.display='none';
  });

  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <div className="App">
      <header className="App-header">
        <div id="GFG">
          <h2>Please Open this link via a laptop so we can ensure you've recieved it.</h2>
          <p>Thank you and <strong>Go Gators</strong>!</p>
        </div>
      </header>
    </div>
  }

  // Call the Move_btn() function with parentheses in the onMouseOver event handler.
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="GFG">
          <h4 className='GUY'> You thought this was gonna be that easy?</h4>
          <h1 className='FCM'>Congrats!</h1>
          <button className='invite-btn' onMouseEnter={logMessage}>
            Open Match
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
