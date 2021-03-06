import React, {useContext, useState} from 'react';
import {AuthContext} from './auth';
import {Form, Col, Button, Alert} from 'react-bootstrap';

const SignInUser = () => {
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
            <h3>Entrar na sua conta</h3>
            {
                auth.signInUser.signInUserState.error !== '' &&
                <Alert variant="danger">{auth.signInUser.signInUserState.error}</Alert>
            }
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control value={form.email} placeholder="E-mail" onChange={onChange('email')} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSenha">
                    <Form.Control type="password" placeholder="Senha" value={form.passwd} onChange={onChange('passwd')} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBotao">
                    <Button variant="primary" onClick={() => auth.signInUser.signInUser(form.email,form.passwd)}>ENTRAR</Button>
                </Form.Group>
            </Form.Row>
        </div>
    )
}

export default SignInUser;
