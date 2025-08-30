import React, { useState, useEffect } from 'react';

function ProfileCard({ studentEmail }) {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
  fetch(`http://localhost:5000/api/studentdash/profile/${studentEmail}`)
    .then((res) => res.json())
    .then((data) => setProfile(data))
    .catch((err) => console.error('❌ Failed to load profile:', err));
}, [studentEmail]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      // Save
      fetch(`http://localhost:5000/api/student/profile/${profile.roll}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profile)
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          console.log('✅ Profile updated');
        })
        .catch((err) => console.error('❌ Update error:', err));
    }
    setIsEditing(!isEditing);
  };

  if (!profile) {
    return <p className="text-center">Loading profile...</p>;
  }

  return (
    <div className="p-3 border rounded bg-white shadow-sm text-center">
      <img
        src={
          profile.image
            ? `http://localhost:5000/images/${profile.image}`
            : 'https://via.placeholder.com/120x130'
        }
        className="rounded-circle mb-3 border"
        alt="Profile"
        height="130"
        width="120"
        style={{ objectFit: 'cover' }}
      />

      {isEditing ? (
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="form-control text-center fw-semibold mb-2"
        />
      ) : (
        <h5 className="fw-semibold">{profile.name}</h5>
      )}

      <hr />
      <div className="text-start small">
        {['course', 'batch', 'branch', 'roll', 'phone', 'email'].map((field) => (
          <p key={field}>
            <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleChange}
                className="form-control form-control-sm mb-2"
              />
            ) : (
              profile[field]
            )}
          </p>
        ))}

        <p>
          <strong>Address:</strong><br />
          {isEditing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          ) : (
            profile.address &&
            profile.address.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br /></span>
            ))
          )}
        </p>
      </div>

      <button className="btn btn-warning mt-2 w-100" onClick={handleToggleEdit}>
        <i className={`bi ${isEditing ? 'bi-check-circle-fill' : 'bi-pencil-square'}`}></i>
        {isEditing ? ' Save' : ' Request Edit'}
      </button>
    </div>
  );
}

export default ProfileCard;
