import { useState } from "react";
import { Camera } from "lucide-react";
import "./ProfileForm.css"; // Import the CSS file

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    street: "",
    relationshipStatus: "",
    gender: "",
    profilePicture: "",
  });
  const [isViewing, setIsViewing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsViewing(true);
  };

  return (
    <div className="profile-card">
      <div className="profile-content">
        {isViewing ? (
          <div className="profile-view">
            <div className="profile-image">
              {profile.profilePicture ? (
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="image"
                />
              ) : (
                <div className="image-placeholder">
                  <Camera size={32} className="icon" />
                </div>
              )}
            </div>
            <h2 className="profile-name">
              {profile.firstName} {profile.lastName}
            </h2>
            <p className="profile-text">{profile.street}</p>
            <p className="profile-text">
              Relationship Status: {profile.relationshipStatus}
            </p>
            <p className="profile-text">Gender: {profile.gender}</p>
          </div>
        ) : (
          <>
            <div className="image-upload-container">
              <div className="profile-image">
                {profile.profilePicture ? (
                  <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="image"
                  />
                ) : (
                  <div className="image-placeholder">
                    <Camera size={32} className="icon" />
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

            <div className="input-container">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>

            <div className="input-container">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>

            <div className="input-container">
              <label>Street</label>
              <input
                type="text"
                name="street"
                value={profile.street}
                onChange={handleChange}
                placeholder="Enter street"
              />
            </div>

            <div className="input-container">
              <label>Relationship Status</label>
              <select
                name="relationshipStatus"
                value={profile.relationshipStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="in_a_relationship">In a Relationship</option>
                <option value="married">Married</option>
                <option value="complicated">It's Complicated</option>
              </select>
            </div>

            <div className="input-container">
              <label>Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button className="submit-button" onClick={handleSubmit}>
              Save Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
