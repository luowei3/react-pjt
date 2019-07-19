import React from 'react';
import PropTypes from 'prop-types';

class CheckList extends React.Component {
    render () {
        let tasks = this.props.tasks.map((task) => (
            <li key={task.id} className="checklist__task">
                <input type="checkbox" defaultChecked={task.done} 
                        onChange={this.props.taskCallbacks.toggle.bind(this)}/>
                {task.name}
                <a href="#" className="checklist__task--remove" 
                            onClick={this.props.taskCallbacks.delete.bind(this)}/>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                {/* <input type="text" className="checklist--add-task" placeholder="Type then hit Enter to add a task" /> */}
                <br/>
                <br/>
                <a href="#" className="button"> Add task </a>
                <br/>
                <br/>
            </div>
        );
    }
}


CheckList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,    
};

export default CheckList;