import Person from '@mui/icons-material/Person'
import { TopBar } from '../../Components/TopBar/TopBar'
import { Feed } from '../../Components/Feed/Feed'
import{SideBar} from "../../Components/SideBar/SideBar"
import{RightBar} from "../../Components/RightBar/RightBar"
import './Home.css'
export const Home=()=>{
    return(
        <>
        {/* <Person/> */}
         <TopBar/>
         <div className="homeContainer">
            <SideBar/>
            <Feed/>
            <RightBar/>
         </div>

        </>
    )
}