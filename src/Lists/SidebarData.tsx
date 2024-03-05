import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { ImProfile } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { GiFire } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { IconType } from 'react-icons';
import { ReactNode } from 'react';

interface SidebarDataInterface {
  title: string
  path: string
  icon: ReactNode
  cName: string
}

const SidebarData: SidebarDataInterface[] = [
    {
        title: 'Home',
        path: '/react-ts-blog-app',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'New Blog',
        path: '/newblog',
        icon: <FaPen />,
        cName: 'nav-text'
      },
      {
        title: 'Your Blogs',
        path: '/yourBlogs',
        icon: <ImProfile />,
        cName: 'nav-text'
      },
      {
        title: 'Recommended',
        path: '/recommended',
        icon: <FaRegFaceLaughWink />,
        cName: 'nav-text'
      },
      {
        title: 'Trending',
        path: '/trending',
        icon: <GiFire />,
        cName: 'nav-text'
      },
      {
        title: 'Discover',
        path: '/discover',
        icon: <GiArchiveResearch />,
        cName: 'nav-text'
      },
      {
        title: 'Saved',
        path: '/saved',
        icon: <FaBookmark />,
        cName: 'nav-text'
      },
      {
        title: 'Your Profile',
        path: '/yourProfile',
        icon: <CgProfile />,
        cName: 'nav-text'
      },
      {
        title: 'Logout',
        path: '/logout',
        icon: <MdLogout />,
        cName: 'nav-text'
      },
]

export default SidebarData