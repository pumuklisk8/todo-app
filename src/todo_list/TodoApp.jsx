import React, { Component } from 'react';
import List from './List';

class TodoApp extends Component {
    state = { 
        lists: [
            {
                id: 1,
                listName: "Todos",
                items: [
                    {
                        id: 1,
                        subject: 'Add item',
                        deadline: '2019.09.01.',
                        text: 'Ability to add item',
                    },
                    {
                        id: 5,
                        subject: 'Update item',
                        deadline: '2019.09.01.',
                        text: 'Ability to update item',
                    },
                    {
                        id: 6,
                        subject: 'Reorder items',
                        deadline: '2019.09.01.',
                        text: 'Add ordering with dragndrop',
                    },
                    {
                        id: 8,
                        subject: 'Add lists',
                        deadline: '2019.09.01.',
                        text: 'Ability to add more lists',
                    },
                    {
                        id: 3,
                        subject: 'Backend',
                        deadline: '2019.09.01.',
                        text: 'Save items to DB',
                    },
                ]
            }
        ],
        archived: {
            listName: "Archived",
            items: []
        }
    }

    render() { 
        return (
            <React.Fragment>
               {this.state.lists.map(list => 
                    <List 
                        key={list.id}
                        list={list}
                        onChangeStatus={this.handleArchive} 
                    />
               )}
               <List
                    isArchives={true}
                    list={this.state.archived}
                    onChangeStatus={this.handleDeArchive}
               />
            </React.Fragment>
        );
    }

    handleArchive = (id, parentId) => {
        let lists = [...this.state.lists];
        let archived = {...this.state.archived};

        // find parent list
        let targetList = lists.filter(
            list => list.id === parentId
        );
        
        // get target list index
        let targetListIndex = lists.indexOf(targetList[0]);

        // filter parent list items
        let newItems = targetList[0].items.filter( 
            item => item.id !== id
        );

        // filter archive item
        let archiveItem = targetList[0].items.filter( 
            item => item.id === id
        );

        // update parent list
        lists[targetListIndex].items = newItems;
        
        // put parent id in archived element
        archiveItem[0].originalParentId = parentId;

        // update archived list
        archived.items.push(archiveItem[0]);

        // update state
        this.setState({
            lists: lists,
            archived: archived
        });
    }

    handleDeArchive = (id) => {
        let lists = [...this.state.lists];
        let archived = {...this.state.archived};

        // fetch item
        let item = archived.items.filter(
            archive_list => archive_list.id === id
        );

        // remove item from archived
        archived.items = archived.items.filter(
            archive_list => archive_list.id !== id
        );

        // find parent list
        let parentList = lists.filter(
            list => list.id === item[0].originalParentId
        );

        // find parent list index
        let parentListIndex = this.state.lists.indexOf(parentList[0]);

        //cleanup item and update parent list item list
        delete item[0].parentId;
        parentList[0].items.push(item[0]);
        lists[parentListIndex] = parentList[0];
        
        // update state
        this.setState({
            lists: lists,
            archived: archived
        });
    }
}
 
export default TodoApp;