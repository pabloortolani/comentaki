import React, {useContext} from 'react';
import Time from './Time';
import {AuthContext} from './auth'
import {Container, ListGroup} from 'react-bootstrap';

const Comment = ({comment}) => {
    const auth = useContext(AuthContext);
    return (
        <ListGroup.Item>
            <span>{comment.user.name}</span> <font size="1"><Time timeStamp={comment.createdAt}/></font><br></br>
            {comment.content}
        </ListGroup.Item>
    )
}

export default Comment;