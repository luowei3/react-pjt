import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends React.Component {
    render() {
        var cards = this.props.cards.map((card) => {
            return<Card key={card.id}  //TODO: key作用，设置为什么值合适
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        color={card.color}
                        tasks={card.tasks}
                        taskCallbacks={this.props.taskCallbacks}
                    />
        });
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

List.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    taskCallbacks: PropTypes.object
}
export default List;