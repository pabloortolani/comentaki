import React, {useContext, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AuthContext} from './auth';
import InfoDisplay from './InfoDisplay';

const Header = () => {
    const auth = useContext(AuthContext);

    return (
        <div className="header-site">
            <Container>
                <Row>
                    <Col>COMENTAKI</Col>
                    <InfoDisplay />
                </Row>
            </Container>
        </div>
    )
}

export default Header;