import { Users } from '../../Dummy'
import { OnlineFriend } from '../OnlineFriend/OnlineFriend'
import './RightBar.css'
export const RightBar = () => {
  return (
    <>
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>This is</b> <b>Gift</b> <b>from 3 Other friends</b> <b>which have birtday Today.</b>
          </span>
          </div>
          <img src="src/assets/person/6.jpg" alt="" className='rightbarAd'/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            { Users.map((u) => (
            <OnlineFriend key={u.id} user={u}/>
            ))}
          </ul>
      </div>
    </div>
    </>
  )
}