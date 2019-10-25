import React, {useContext} from 'react';
import {useDatabase} from './dataBase'
import Comment from './Comment';
import {ListGroup} from 'react-bootstrap';
import {AuthContext} from './auth';

const Comments = () => {
    const auth = useContext(AuthContext);
    const data = useDatabase('comments');
    
    if(auth.user === null){
        return null;
    }
    
    if(!data){
        return <p>Nenhum Comentário enviado até o momento</p>
    }
    const ids = Object.keys (data);

    if(ids.length === 0){
        return <p>Carregando...</p>
    }
    
    return ids.map(id => {
        return <Comment key={id} comment={data[id]} />
    })
}

export default Comments;