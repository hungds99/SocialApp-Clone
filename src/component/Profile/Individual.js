import React, { Component, useEffect } from 'react';
import './style.css';
import Header from './Header';
import { useState } from 'react';
import defaultUser from './default-users.png';
import defaultCover from './default-cover.jpg';
function Individual(){

     // information user
    const userInfor = {
        phone:'0585304043',
        password:'abcxyz',
        idUser:'1',
        userName:'Võ Văn Thành',
        sex:'nam',
        dateOfBirth:'10/01/1999',
        imageProfile:defaultUser,
        // tình trạng mối quan hệ
        status:'Đọc thân',
        imageBackground:defaultCover,
        bow:'Ma kết',
        description:'Thanh dep trai ',
        currentCity: 'Đà Nẵng',
        homeTown :'Ninh Thuận',
        follow:'6',
        // thông tinh công việc
        work:{},
        //thông tinh trường học
        school:{},
         // thông tinh những bài post đã đăng
        post:[]
    };

    const [user, setUser] = useState(userInfor);

    return(
        <div class="container-body">
            <Header user={user} setUser={setUser}/>
        </div>
    )
}


export default Individual;