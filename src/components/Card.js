import React from 'react';
import './Card.css';

const Card = ({ name, username, email, address, id }) => {
    
    return (
        
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Username: {username}</p>
                <p>City: {address}</p>
            </div>
        </div>
    );
}

export default Card;