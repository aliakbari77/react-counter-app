import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 1,
        tags: ['tag1', 'tag2', 'tag3']
     } 
    render() { 
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className='btn btn-secondary m-2'>Increment</button>
                <ul>
                    { this.createList() }
                </ul>
            </React.Fragment>
        );
    }

    createList(){
        let tags = this.state.tags.map(tag => <li key={tag}> { tag }</li>)
        return tags
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-'
        classes += this.state.count === 0 ? 'warning' : 'primary'
        return classes
    }

    formatCount(){
        let { count } = this.state
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;