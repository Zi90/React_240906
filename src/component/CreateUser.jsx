import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
    // const { username, email, onChange, onCreate } = props;
    return (
        <div className='createName'>
            <input 
            type="text" 
            name='username' 
            placeholder='이름' 
            onChange={onChange}
            value={username}
            />
            <input 
            type="text" 
            name='email' 
            placeholder='이메일' 
            onChange={onChange}
            value={email}
            />
            <button onClick={onCreate}>create</button>
        </div>
    );
};

export default CreateUser;