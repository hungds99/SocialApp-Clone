import React, { Component, useEffect } from 'react';
import { useState } from 'react';

function ProfileTextarea({user, setUser, displayEdition, setDisplayEdition}){
    const [text, setText] = useState(user.description);
    const [count, setCount] = useState(100 - text.length);

    useEffect(() => {
        setCount(100 - text.length);
    }, [count, text])

    const setValueInDescription = (e) =>{
        let value = e.target.value;
        setText(value);
    }

    const cancelEditDescription = () =>{
        setDisplayEdition(true);
    }

    const submitDescription = () =>{
        setUser(prevUser =>({
            ...prevUser,
            description:text
        }));
        cancelEditDescription();
    }

    // set css field edit
    const setEdit = {
        'margin-top':'5px',
        'display':'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    }

    // set css button
    const setButton = {
        'padding': '3px 5px',
        'marginLeft':'5px'
    }

    return(
       <div style={{display: displayEdition ? 'none' : 'block' }}>
            <textarea type="text" 
                className="form-control border-0 text-center mt-1" 
                placeholder="Mô tả về bạn ..."
                maxLength="100"
                onChange={setValueInDescription}>
                {user.description}
            </textarea>
            <div class="mt-2 mb-1">
                Còn {count} ký tự
            </div>
            <div style={setEdit}>
                <button style={setButton} onClick={submitDescription} className="btn btn-success">Lưa thay đổi</button>
                <button style={setButton} onClick={cancelEditDescription} className="btn btn-light text-dark ml-2">Hủy</button>
            </div>
       </div>
    )
}

export default ProfileTextarea;
