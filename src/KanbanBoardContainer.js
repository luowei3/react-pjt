import React from 'react';
import KanbanBoard from './KanbanBoard'

class KanbanBoardContainer extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards: []
        };
    }

    addTask(cardId, taskName){
        console.log("add task");
    }
    deleteTask(cardId, taskId, taskIndex){
        console.log("delete task");
    }
    toggleTask(cardId, taskId, taskIndex){
        console.log("toggle task");
    }

    render() {
        return (
            < KanbanBoard cards={this.props.cards}
                        taskCallbacks={{
                            toggle:  this.toggleTask.bind(this),
                            delete: this.deleteTask.bind(this),
                            add: this.addTask.bind(this)
                        }}
            />
        )
    }
}

export default KanbanBoardContainer;