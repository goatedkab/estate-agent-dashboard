// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilCreateDashboard,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    type: "menuTitle",
    heading: "Tools",
    chunk: 1,
  },
  {
    type: "menuItem",
    icon: UilCreateDashboard,
    heading: "Overview",
    chunk: 1,
  },
  {
    type: "menuItem",
    icon: UilEstate,
    heading: "Listings",
    chunk: 1,
  },
  {
    type: "menuItem",
    icon: UilUsersAlt,
    heading: "Messages",
    chunk: 1,
  },
  // {
  //   type: "menuItem",
  //   icon: UilClipboardAlt,
  //   heading: "Calendar",
  //   chunk: 1,
  // },
  {
    type: "menuTitle",
    heading: "Other",
    chunk: 2,
  },
 

  {
    type: "menuItem",
    icon: UilClipboardAlt,
    heading: 'Documents',
    chunk: 2,
  },
  {
    type: "menuItem",
    icon: UilChart,
    heading: 'Analytics',
    chunk: 2,
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "white",
      boxShadow: "var(--boxShadow)",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "white",
      boxShadow: "var(--boxShadow)",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "white",
      boxShadow: "var(--boxShadow)",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "white",
      boxShadow: "var(--boxShadow)",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
