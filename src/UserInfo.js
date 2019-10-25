import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from './auth';
import {Button, Form, Alert} from 'react-bootstrap';

const FormDisplayName = ({displayName, user}) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName);
    const [show, setShow] = useState(false);

    const onChangeName = evt => {
        setNewDisplayName(evt.target.value);
    }

    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({displayName: newDisplayName}).then(function() {
                setShow(true);
            }).catch(function(error) {
                // An error happened.
            });
        }
    }

    return (
        <div className="infos">
            <Alert show={show} variant="success">
                <Alert.Heading>Sucesso</Alert.Heading>
                <p>Display Name alterado com sucesso!</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">Fechar</Button>
                </div>
            </Alert>
            <Button className="alinhamento" variant="primary" onClick={save}>Save Display Name</Button>
            <Form.Control type="text" className="imputName" onChange={onChangeName} value={newDisplayName} /> {  }
        </div>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext);

    if(auth.user === null){
        return null;
    }

    const {displayName} = auth.user;
    const [alternativeDisplayName] = auth.user.email.split('@');
    const dn = displayName || alternativeDisplayName;

    return (
        <div>
            <FormDisplayName displayName={dn} user={auth.user} />
        </div>
    )
}

export default UserInfo;