import React from "react"
import "../Components/Style.css"

const Sidebar = () => {

    
    return(
        <div id="sidebar-main">
            <div id="sidebar-menu-banner">
            </div>
            <div className="sidebar-menu-categories">
                <div className="sidebar-menu-categories-link">Men</div>
                <div className="sidebar-menu-categories-link">Women</div>
                <div className="sidebar-menu-categories-link">Oversized</div>
                <div className="sidebar-menu-categories-link">Couples</div>
                <div className="sidebar-menu-categories-link">Cargo</div>
            </div>
            <hr className="sidebar-seperator"></hr>
            <div className="sidebar-menu-categories">
                <div className="sidebar-menu-categories-bottom">
                    Team
                </div>
                <div className="sidebar-menu-categories-bottom">
                    Contact us
                </div>
                <div className="sidebar-menu-categories-bottom">
                    Terms and Conditions
                </div>
            </div>
            <div id="sidebar-footer">Copyright © 2023 Wearwolf</div>
        </div>
    )
}



export default Sidebar