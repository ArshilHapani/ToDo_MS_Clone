import { FiSun } from "react-icons/fi";
import { AiOutlineStar, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { CgMenuBoxed, CgMoveRight } from "react-icons/cg";
import {
  FaRegCalendarAlt,
  FaRegCalendarPlus,
  FaRegCheckCircle,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi2";
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

export const noteContextMenuItems = [
  {
    logo: <FiSun />,
    desc: "Add to My Day",
    shc: "Ctrl+T",
    hr: "",
  },

  {
    logo: <AiOutlineStar />,
    desc: "Mark as important",
    shc: "",
    hr: "",
  },
  {
    logo: <FaRegCheckCircle />,
    desc: "Mark as completed",
    shc: "Ctrl+D",
    hr: <hr />,
  },
  {
    logo: <FaRegCalendarPlus />,
    desc: "Due today",
    shc: "",
    hr: "",
  },
  {
    logo: <FaRegCalendarPlus />,
    desc: "Due tomorrow",
    shc: "",
    hr: "",
  },
  {
    logo: <FaRegCalendarAlt />,
    desc: "Pick a date",
    shc: "",
    hr: <hr />,
  },
  {
    logo: <CgMoveRight />,
    desc: "Move task to",
    shc: <HiChevronRight />,
    hr: <hr />,
  },
];
