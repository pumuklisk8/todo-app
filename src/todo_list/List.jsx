import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>{this.props.list.listName}</h1>
                <ul className="list-group">
                    {this.props.list.items.map(item =>
                        <ListItem 
                            key={item.id} 
                            parentId={this.props.list.id}
                            item={item} 
                            onChangeStatus={this.props.onChangeStatus} 
                        />    
                    )}
                </ul>
            </React.Fragment>
        );
    }
}
 
export default List;