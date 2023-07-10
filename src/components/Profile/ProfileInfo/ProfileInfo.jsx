import React, { useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/imges/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (values) => {
    saveProfile(values);
    setEditMode(false);
  };

  return (
    <div>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div>
          <img
            src={profile.photos.large || userPhoto}
            className={s.mainPhoto}
          />
          <div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          </div>
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe || "..."}
      </div>
      <div>
        <b>Looking for a job:</b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Looking for a job description:</b>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Full name:</b> {profile.fullName}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
