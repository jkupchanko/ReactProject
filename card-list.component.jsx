import { Component } from "react";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
            <div className="card-list">
                {monsters.map(monster => {
                    const {name, email, id} = monster;
                    return (
                    <div className="card-container">
                      <img 
                        alt={`monster ${name}`} 
                        src={`https://robohash.org/${id}1?set=set2`}
                      />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                )})}
            </div>
        
        )
    }
}
export default CardList;