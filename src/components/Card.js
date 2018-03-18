import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h2 className="card__topic">topic</h2>
        <div className="card__list">
          names list
        </div>
        <button className="card__button--like">💜</button>
        <button className="card__button--like">➕</button>
      </div>
    )
  }  
}

export default Card;
