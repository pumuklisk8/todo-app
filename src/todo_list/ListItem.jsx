import React, { Component } from 'react';

class ListItem extends Component {
    render() { 
        const {id, subject, deadline, text} = this.props.item;
        
        return (
            <li className="list-group-item">
                <div>
                    <input 
                        type="checkbox" 
                        onChange={ () => this.props.onChangeStatus(id, this.props.parentId)} 
                        checked={this.props.isArchives !== undefined ? true : false} className="m-3" />
                    {subject}
                    <div className="ml-5"> 
                        <span className="badge badge-secondary badge-danger">{deadline}</span>
                        - {text}
                    </div>
                </div>
                
            </li>
        );
    }

    
}
 
export default ListItem;