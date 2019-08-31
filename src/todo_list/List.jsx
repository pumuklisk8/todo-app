import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
    render() { 
        return (
            <React.Fragment>
                <h2 className={this.toggleDisplay()}><span className="badge badge-secondary">{this.props.list.listName}</span></h2>
                <ul className="list-group">
                    {this.props.list.items.map(item =>
                        <ListItem 
                            key={item.id} 
                            parentId={this.props.list.id}
                            item={item}
                            isArchives={this.props.isArchives}
                            onChangeStatus={this.props.onChangeStatus} 
                        />    
                    )}
                </ul>
            </React.Fragment>
        );
    }

    toggleDisplay() {
        let classes = "m3 ";
        return this.props.list.items.length > 0 ? classes : classes + "d-none";
    }
}
 
export default List;