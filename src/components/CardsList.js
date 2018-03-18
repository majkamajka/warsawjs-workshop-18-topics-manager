import React from 'react';
import Card from './Card';

class CardsList extends React.Component {


  render() {
    const workshops = this.props.workshops;
    console.log(workshops);
    
    const cards = workshops.map((e, i) => {
      return (
        <Card 
          {...e}
          key={ e.title }
        />
      )
    });
    
    return (
      <div className="cards-list">
      { cards }
      </div>
    )
  }  
}

export default CardsList;
