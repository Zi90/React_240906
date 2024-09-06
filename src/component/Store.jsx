import React from 'react';

const Store = ({ str, onRemove }) => {
    return (
        <div className='user'>
            <h3>
                {str.store}({str.storeItem})
                <button onClick={() => onRemove(str.id)}>X</button>
            </h3>
        </div>
    );
};

export default Store;