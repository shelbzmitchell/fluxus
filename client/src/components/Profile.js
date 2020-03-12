import React from "react";

function Profile() {
  return (
    <>
      <section className="profile">
        <div className="profile__left">
          <h1>Jannik Forsyth</h1>
          <div className="profile__site">https://joancornella.net/en/</div>
          <div className="profile__collab">
            <p className="profile__collab-text">Open to Collaborate?</p>
            <p className="profile__collab-answer">True</p>
          </div>
          <div className="profile__location">
            <p className="profile__city">Vancouver</p>
            <p className="profile__province">BC</p>
            <p className="profile__country">Canada</p>
          </div>
          <div className="profile__medium">
            Oil Painting, Photography, Video
          </div>
          <div className="profile__style">Surrealism, Abstract, Weird Shit</div>
          <div className="profile__bio">
            My work is a mixture of lorem ipsum and whatever all the things.
            I've been based in Vancouver my whole life and am very excited to
            start creating sculptures out of tinfoil
          </div>
          <div className="profile__photo"></div>
          <div className="profile__art-photo"></div>
        </div>
        <div className="profile__right"></div>
      </section>
    </>
  );
}

export default Profile;
