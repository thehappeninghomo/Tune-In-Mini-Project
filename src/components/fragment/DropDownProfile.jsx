import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {AccountBox} from "@material-ui/icons";

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div  className="dropdown-profile">
            <HoverButton className="hoverButton" Icon={AccountBox} variant={"text"} text={"Profile"}/>
            {/*<HoverButton Icon={Explore} variant={"text"} text={"About"}/>*/}
        </div>
    );
}
export default DropDownProfile;