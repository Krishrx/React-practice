import React,{useState} from 'react'

function ProfilePhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file)); 
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </div>
  )
}

export default ProfilePhoto