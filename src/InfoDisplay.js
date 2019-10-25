import React, {useContext} from 'react';
import {AuthContext} from './auth';
import {Col} from 'react-bootstrap';

const InfoDisplay = () => {
    const auth = useContext(AuthContext);

    if(auth.user === null){
        return null;
    }
    
    const {displayName} = auth.user;
    const [alternativeDisplayName] = auth.user.email.split('@');
    const dn = displayName || alternativeDisplayName;

    return (
        <Col className="apresentacao-nome">
            Olá  {dn+'   '} 
            <button onClick={auth.signout}>Sair</button>
        </Col>
    )
}

export default InfoDisplay;