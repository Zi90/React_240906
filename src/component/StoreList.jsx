import React, { useRef, useState } from 'react';
import Store from './Store';
import CreateStore from './CreateStore';

const StoreList = () => {

    const nextId = useRef(3);

    const [strs, setStrs] = useState([
        {
            id: 1,
            store: '월미당',
            storeItem: '쌀국수'
        },
        {
            id: 2,
            store: '역전우동',
            storeItem: '우동'
        }
    ]);
    
    const [ inputs, setInputs ] = useState({
        store : '',
        storeItem : ''
    });

    const { store, storeItem } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onCreate = ()=>{
        const str = {
            id: nextId.current,
            store : store,
            storeItem : storeItem
        }

        setStrs(strs.concat(str));

        setInputs({
            store: '',
            storeItem: ''
        })

        nextId.current += 1;
        console.log(strs);
    }

    const onRemove = (id) => {
        setStrs(strs.filter(str => str.id !== id));
    }

    return (
        <div>
            <CreateStore store={store} storeItem={storeItem} onChange={onChange} onCreate={onCreate} />
            {
                strs.map((u) => (
                    <Store str={u} key={u.id} onRemove={onRemove}/>
                ))
            }
        </div>
    );
};

export default StoreList;