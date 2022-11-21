import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from "react-icons/bi";

export const SecretBarData = [

    {
        title: 'My Library',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Keep reading',
        path: '/keep reading',
        icon: <IoIcons.IoMdBook />,
        cName: 'nav-text'
      },
      {
        title: 'Saved',
        path: '/saved',
        icon: <BiIcons.BiBookBookmark />,
        cName: 'nav-text'
      },
      
]