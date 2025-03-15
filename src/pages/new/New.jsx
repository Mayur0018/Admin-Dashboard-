import React from 'react'
import "./new.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export default function New() {
  return (
    <div className='new'>
    <Sidebar />
    <div className="newConatiner">
    <Navbar />
    <div className="top">
      <h1 className='title'>Add New User</h1>
    </div>
    <div className="bottom">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1665686310934-8fab52b3821b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFufGVufDB8fDB8fHww" alt="" />
      </div>
      <div className="right">
        <form action="">
        <div className="formInput">
            <label htmlFor='file'>
            Image: <DriveFolderUploadIcon  className='icone'/>
            </label>
            <input type="file" id='file' style={{display:"none"}}/>
          </div>
          <div className="formInput">
            <label>Username</label>
            <input type="text" placeholder='John_Doe' />
          </div>
          <div className="formInput">
            <label>Name And Surname</label>
            <input type="text" placeholder='John_Doe' />
          </div>
          <div className="formInput">
            <label>Email</label>
            <input type="email" placeholder='John_Doe@gmail.com' />
          </div>
          <div className="formInput">
            <label>Phone</label>
            <input type="text" placeholder='+1 234 567 89' />
          </div>
          <div className="formInput">
            <label>Password</label>
            <input type="password"/>
          </div>
          <div className="formInput">
            <label>Address</label>
            <input type="text" placeholder='Elton St 216 NewYork'/>
          </div>
          <div className="formInput">
            <label>Country</label>
            <input type="text"  placeholder='Usa'/>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}
