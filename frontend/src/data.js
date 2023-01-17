import { FiSun } from "react-icons/fi";
import {
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineHome,
} from "react-icons/ai";

export const sideBarItems = [
  {
    title: "My Day",
    icon: <FiSun />,
    path: "",
  },
  {
    title: "Important",
    icon: <AiOutlineStar />,
    path: "important",
  },
  {
    title: "Planned",
    icon: <AiOutlineCalendar />,
    path: "planned",
  },
  {
    title: "Assigned to me",
    icon: <AiOutlineUser />,
    path: "assignedToMe",
  },
  {
    title: "Tasks",
    icon: <AiOutlineHome />,
    path: "tasks",
  },
];
