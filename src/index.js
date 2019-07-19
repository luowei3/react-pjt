import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer'
import SearchComponent from './myComponent/search'


let cardList = [
    {
        id: 1,
        title: "Read the book",
        description: "I shoud read the whole book",
        color: '#bd8d31',
        status: "in-progress", 
        tasks: [
            {
                id: 1,
                name: "in-progress task 1",
                done: true
            },
            {
                id: 2,
                name: "in-progress task 2",
                done: true
            },
            {
                id: 3,
                name: "in-progress task 3",
                done: false
            }
        ]
    },
    {
        id: 2,
        title: "Write some code",
        description: "I love coding ",
        color: '#3a7e28',
        status: "todo", 
        tasks: [
            {
                id: 1,
                name: "todo task 1",
                done: true
            },
            {
                id: 2,
                name: "todo task 2",
                done: true
            },
            {
                id: 3,
                name: "todo task 3",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "Write some code",
        description: "What I have done",
        color: "#2a7eff",
        status: "done",
        tasks: [
            {
                id: 1,
                name: "done task 1",
                done: true
            },
            {
                id: 2,
                name: "done task 2",
                done: true
            },
            {
                id: 3,
                name: "done task 3",
                done: false
            }
        ]
    },

];
ReactDOM.render(<KanbanBoardContainer cards={cardList}/>, document.getElementById("root"));
////////////////////////////////////////////////////////////////////////////////////
// let contacts = [
//     {name: "name-AB", email: "email-1"},
//     {name: "name-BC", email: "email-2"},
//     {name: "name-CD", email: "email-3"},
//     {name: "name-DE", email: "email-4"},
//     {name: "name-EF", email: "email-5"},
//     {name: "name-FG", email: "email-6"},                        
// ]

// ReactDOM.render(<SearchComponent contacts={contacts}/>, document.getElementById('root'));

