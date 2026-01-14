import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import '../assets/CSS/Profile.css'
import React, { useState, useRef } from 'react'


function Profile()
{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => 
    {
        const file = e.target.files[0];
        if (file) 
        {
            const reader = new FileReader();
            reader.onloadend = () => 
            {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChangeImage = () => 
    {
        fileInputRef.current?.click();
    };

    return(
        <>
            <Header />
            <div class="profile-container">
                <form id="checkout-form" ref={formRef}>
                    <div class="profile-avatar-section">
                        <div class="avatar-wrapper">
                            <img src={preview} alt="IMG user" class="profile-avatar" />

                            <button type="button" class="change-image-btn" onClick={handleChangeImage}>
                                CHANGE IMAGE
                            </button>

                            <input ref={fileInputRef} type="file" class="file-input" accept="image/*" onChange={handleImageChange}/>
                        </div>
                        <div class="avatar-label">user</div>
                    </div>

                    <div class="profile-form-section">
                        <div class="form-group">
                            <label class="form-label">User name</label>
                            <input type="text" class="form-input" placeholder="..." value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">email</label>
                            <input type="email" class="form-input" placeholder="..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        <div class="form-group">
                            <button class="change-password-btn">
                                change password / email
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Profile;