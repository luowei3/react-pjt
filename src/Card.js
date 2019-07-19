import React from 'react';
import PropTypes from 'prop-types';
import CheckList from './CheckList'

class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: true
        }
    }
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    render () {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                    <div className="card__details">
                        {this.props.description}   
                        <CheckList cardId={this.props.id} 
                                tasks={this.props.tasks}
                                taskCallbacks={this.props.taskCallbacks}/>
                    </div>
            );    
        };

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 10,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor} />
                <div className={this.state.showDetails? "card__title--is-open" : "card__title"} 
                    onClick={this.toggleDetails.bind(this)} >
                    {this.props.title}
                </div>
                {cardDetails}
            </div>
        );
    }
}

// 自定义校验器
let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 50 ) {
            return new Error(
                `${propName} in ${componentName} is not string or longer then 50 characters`
            )
        }
    }
}


Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
};

export default Card;
