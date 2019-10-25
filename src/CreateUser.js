import React, {useContext, useState} from 'react';
import {AuthContext} from './auth';
import {Form, Col, Button, Alert} from 'react-bootstrap';

const CreateUser = () => {
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({email: '', passwd:''});

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    if(auth.user !== null){
        return null;
    }

    return (
        <div>
            <h3>Criar Nova Conta</h3>
            {
                auth.createUser.createUserState.error !== '' &&
                <Alert variant="danger">{auth.createUser.createUserState.error}</Alert>
            }
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control value={form.email} placeholder="E-mail" onChange={onChange('email')} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSenha">
                    <Form.Control type="password" placeholder="Senha" value={form.passwd} onChange={onChange('passwd')} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBotao">
                    <Button variant="primary" onClick={() => auth.createUser.createUser(form.email,form.passwd)}>CRIAR CONTA</Button>
                </Form.Group>
            </Form.Row>

        </div>
    )
}

export default CreateUser;
