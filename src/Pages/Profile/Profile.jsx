import { Feed } from '../../Components/Feed/Feed'
import { RightBar } from '../../Components/RightBar/RightBar'
import { SideBar } from '../../Components/SideBar/SideBar'
import { TopBar } from '../../Components/TopBar/TopBar'
import './Profile.css'
export const Profile = () => {
  return (
    <>
    <TopBar/>
    <div className="profile">
      <SideBar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="src/assets/post/10.jpg" alt="" className="profileCoverImg" />
            <img src="src/assets/person/1.jpg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Mike</h4>
            <span className="profileInfoDesc">Hello Friends its me MIKE!😁</span>
          </div>
        </div>
        <div className="profileRightButton">
          <Feed/>
          <RightBar/>
        </div>
      </div>
    </div>
    </>
  )
}
