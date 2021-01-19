import React, { Component, useRef, useState } from "react";
import ProfileTextarea from "../profileTextarea/profileTextarea";
import './profileHeader.css'

function ProfileHeader({user, setUser}){
  const inputFileUserProfile = useRef(null);
  const inputFileUserBackground = useRef(null);
  const [statusUpdateImage, setStatusUpdateImage] = useState(false);

  // kiểm tra nút sửa đổi button click
  const [displayEdition, setDisplayEdition] = useState(true);

  // kiểm tra field update là image profile 
  const addImageProfile = (e)=>{
      inputFileUserProfile.current.click();
      setStatusUpdateImage(false);
  };

  // kiểm tra field update là background
  const addImageBackground = (e)=>{
      inputFileUserBackground.current.click();
      setStatusUpdateImage(true);
  }

  const insertImageProfile = (e)=>{
      let files = e.target.files;
      let imagesAccept = ["image/jpeg", "image/png"];
      if(files ==null) return;
      if(imagesAccept.includes(files[0].type)){
          let reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload = (e) =>{
              let srcImage = e.target.result;
              // check src và kiểm tra field  cập nhật
                  if(srcImage != null && !statusUpdateImage){
                      setUser(prevUser =>({
                          ...prevUser,
                          imageProfile:srcImage
                      }));
                  }else{
                      setUser(prevUser =>({
                          ...prevUser,
                          imageBackground:srcImage
                  }));
              }
              insertPostImage(e);   
              console.log(user);
          };
      }else{
          alert('Không hỗ trợ định dạng tệp !');
      }
  };

  function insertPostImage(files){
      let newPost ={
          'id':Math.floor(Math.random() * 10101010101),   
          'datePublic': new Date(),
          'mode':'Công khai',
          'context':'',
          'image':files.target.result
      };
      setUser(prevUser =>({
          ...prevUser,
          post:[...prevUser.post,newPost ]
      }));
  }

  const editDescription = (e) =>{
      setDisplayEdition(false);
  } 

  // set background image
  const backgroundImage = {
      'position': 'relative',
      'margin': 'auto',
      'width': '872px',
      'height': '290px',
      'backgroundImage': `url(${user.imageBackground})`,
      'backgroundPosition': 'center'
  } 
  
  return(
      <header>
          <div class="header-background">
              <div class="container-profile bg-info" style={backgroundImage}> 
                      <div class="profile">
                          <img src={user.imageProfile} class="rounded-circle"/>
                          <div class="edit-image">
                              <div class="text" onClick={e=> addImageProfile(e)}>
                                  <i class="fa fa-camera "/>
                                  <h6>Thay ảnh</h6>
                                  <input
                                      onChange={insertImageProfile}
                                      type='file'
                                      id='profile'
                                      ref={inputFileUserProfile} 
                                      style={{display: 'none'}}
                                  />
                              </div>
                          </div>
                      </div>
                      <div class="update-background">
                          <button  class="btn btn-outline-secondary" >
                              <div class="edit" onClick={e=> addImageBackground(e)}>
                                  <i class="fa fa-camera" >Cập nhật ảnh bìa</i>
                                  <input
                                      onChange={insertImageProfile}
                                      type='file'
                                      id='background'
                                      ref={inputFileUserBackground} 
                                      style={{display: 'none'}}
                                  />
                              </div>
                          </button>
                      </div>
              </div>
          </div>
          <div class="infor-user">
              <h1 class="title-user">{user.userName}</h1>
              <span>{user.bow}</span>
              <div>
                   <div style={{display: displayEdition ? 'block' : 'none' }}>
                      {user.description}
                      <i  onClick={editDescription}  class="fa fa-edit ml-2"></i>
                   </div>
                  <br/>
                  <ProfileTextarea
                      displayEdition={displayEdition} 
                      setDisplayEdition={setDisplayEdition}
                      user={user} setUser={setUser}
                  />
              </div>
          </div>
          <hr/>
          <div class="profile-head-nav">
              <ul class="nav mr-auto">
                  <li class="nav-item">
                      <a class=" nav-link active font-weight-semi-bold" >Dòng thời gian</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link not-active  font-weight-semi-bold" >Giới thiệu</a>
                  </li>
                  <li class="nav-item">
                      <a class=" nav-link not-active  font-weight-semi-bold" >Bạn bè</a>
                  </li>
                  <li class="nav-item">
                      <a class=" nav-link not-active font-weight-semi-bold" >Ảnh</a>
                  </li>
              </ul>
              <button class="btn bg-secondary mr-4">
                  <i class="fa fa-cog"></i>
              </button>
          </div>
      </header>
  )
}

export default ProfileHeader;
