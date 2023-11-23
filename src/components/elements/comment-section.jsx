/* eslint-disable no-unused-vars */
import React from "react";
import "../../assets/css/detail-menu.css";
import bookmark from "../../assets/img/bookmark.svg";
import iconLike from "../../assets/img/Vector.svg";
import Profile from "../../assets/img/profile.svg";
export default function CoomentField() {
  return (
    <>
      <section>
        <div className="comment">
          <div className="likes">
            <div className="bookmark">
              <img src={bookmark} alt="bookmark icon" />
            </div>
            <div className="like">
              <img src={iconLike} alt="Like Icon" />
            </div>
          </div>
          <div className="wrapper-comment">
            <div className="card-comment">
              <div className="profile-comment">
                <img src={Profile} alt="profile icon" />
                <div className="desc">
                  <p className="name">Ayudia</p>
                  <p className="recipes">10 Recipes</p>
                </div>
              </div>
              <div className="comment-text">
                <p>Wow, I just made this and it was delicious! Thanks for sharing!</p>
              </div>
            </div>
            <div className="card-comment">
              <div className="profile-comment">
                <img src={Profile} alt="profile icon" />
                <div className="desc">
                  <p className="name">Ayudia</p>
                  <p className="recipes">20 Recipes</p>
                </div>
              </div>
              <div className="comment-text">
                <p>So simple and delicious!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="textarea">
          <textarea placeholder="Your comment here!"></textarea>
        </div>
        <button type="button" className="btn-send">
          Send a comment
        </button>
      </section>
    </>
  );
}
