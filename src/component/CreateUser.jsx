import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './createUser.css';

const CreateUser = ({ username, email, onChange, onCreate }) => {
    // const { username, email, onChange, onCreate } = props;
    return (
        <div className='createName'>
             <Form>
                <Row>
                    <Col>
                    <Form.Control                     
                    type="text" 
                    name='username' 
                    placeholder='이름' 
                    onChange={onChange}
                    value={username}/>
                    </Col>
                    <Col>
                    <Form.Control
                    type="text" 
                    name='email' 
                    placeholder='이메일' 
                    onChange={onChange}
                    value={email} />
                    </Col>
                </Row>
                </Form>
            
            <button onClick={onCreate}>create</button>
        </div>
    );
};

export default CreateUser;