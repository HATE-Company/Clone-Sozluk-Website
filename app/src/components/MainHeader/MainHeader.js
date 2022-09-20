import { NavLink } from "react-router-dom";
import "./mainheader.scss"

const MainHeader = (props) => {

    return(
        <div className="mainheader">

            <NavLink to='/' className="mainheader__logo">
                <img src={require("../../assets/hate.png")}/>
                <h1>&nbsp; &nbsp; &nbsp; &nbsp;hate club</h1>

            </NavLink>

            <div className="mainheader__user">
                <img src={require("../../assets/notify.png")}></img>
                <NavLink to='/messages' className="mainheader__user">
                <img src={require("../../assets/message_white.png")}></img>
                </NavLink>
                <img src={require("../../assets/avatar.png")}></img>
                <div className="mainheader__user__info">
                    <h1><b>nickname</b></h1>
                    <p>xxx karma</p>

                </div>
            </div>

        </div>
    )

}


export default MainHeader;