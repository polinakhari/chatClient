import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => {
  const copyText = (event) => {
    const evem = document.getElementById('link')
    evem.select();
    document.execCommand("copy");
    
  }
  return(
    <div className="textContainer"> 
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
           
          </div>
        )
        : null
    }
     <div>      
      <h1 onClick={(event) => copyText(event)} className="inviteFriend" mt-20>Get link to invite friends to the chat:</h1>
      <input id="link" type="text" value={`https://elegant-goldstine-e3061e.netlify.app/?room=${room}`}/>  
    </div>
  </div>
  )
  
};

export default TextContainer;