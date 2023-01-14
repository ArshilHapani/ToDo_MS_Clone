import {FiSun} from 'react-icons/fi';
import {AiOutlineStar,AiOutlineUser,AiOutlineCalendar,AiOutlineHome} from 'react-icons/ai';


export const sideBarItems = [
    {
        title:"My Day",
        icon:<FiSun/>,
    },
    {
        title:"Important",
        icon:<AiOutlineStar/>
    },
    {
        title:"Planned",
        icon:<AiOutlineCalendar/>
    },
    {
        title:"Assigned to me",
        icon:<AiOutlineUser/>
    },
    {
        title:"Tasks",
        icon:<AiOutlineHome/>
    }

]