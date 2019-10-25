import React, {useState, useContext} from 'react';
import {useDatabasePush} from './dataBase';
import firebase from './firebase';
import {AuthContext} from './auth';
import {Button, Form, Row, Col} from 'react-bootstrap';

const NewComment = () => {
    const [,save] = useDatabasePush('comments');
    const [comment, setComment] = useState('');
    const auth = useContext(AuthContext);

    if(auth.user === null){
        return null;
    }

    const {displayName} = auth.user;
    const [alternativeDisplayName] = auth.user.email.split('@');

    const createComment = () => {
        if(comment != ''){
        save({
            content: comment,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            user:{
            id: auth.user.uid,
            name: displayName || alternativeDisplayName
            }
        });
        setComment('');
        }
    }

    return (
        <Row>
            <Col>
                <Form.Control as="textarea" value={comment} onChange={evt => setComment(evt.target.value)} />
            </Col>
            <Col>
                <Button variant="secondary" onClick={createComment}>Comentar</Button>
            </Col>
        </Row>
    )
}

export default NewComment;