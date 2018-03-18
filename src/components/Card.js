import React from 'react';

class Card extends React.Component {
  render() {
    const { title, addedBy, trainers, votes } = this.props;
    const namesList = trainers.map((e, i) => <li key={i}>{e}</li>);
    
    return (
      <div className="card">
        <h2 className="card__topic">{ title }</h2>
        <div className="card__list">
          <ul>
            { namesList }
          </ul>
        </div>
        <button className="card__button">💜 { votes }</button>
        <button className="card__button">➕</button>
      </div>
    )
  }  
}

export default Card;
