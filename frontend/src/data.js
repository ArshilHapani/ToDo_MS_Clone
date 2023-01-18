import { FiSun } from "react-icons/fi";
import { AiOutlineStar, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { CgMenuBoxed } from "react-icons/cg";

export const sideBarItems = [
  {
    title: "My Day",
    icon: <FiSun />,
    path: "/",
  },
  {
    title: "Important",
    icon: <AiOutlineStar />,
    path: "/important",
  },
  {
    title: "Planned",
    icon: <CgMenuBoxed />,
    path: "/planned",
  },
  {
    title: "Assigned to me",
    icon: <AiOutlineUser />,
    path: "/assignedToMe",
  },
  {
    title: "Tasks",
    icon: <AiOutlineHome />,
    path: "/tasks",
  },
];
