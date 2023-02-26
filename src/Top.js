import React, { useState } from 'react'
import copy from "copy-to-clipboard";
import {  FaInstagram } from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {BiCopy} from 'react-icons/bi'
import { IoIosShareAlt } from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
export default function Top({quotestext,author}) {
    const [isCopy,setIsCopy]=useState(false)
    const copyToClipboard = () => {
        copy(quotestext);
        setIsCopy(true)
     }
    return (
        <div className='top'>
            <a href='https://www.youtube.com/@antochurchantonyarpuram7440' target='_blank' rel="noreferrer">
                <AiFillYoutube />
            </a>
            <a href='https://www.instagram.com/antonyarpuram/' target='_blank' rel="noreferrer">
            <FaInstagram />
            </a>
            <span className="share-mobile">
            <a href={"whatsapp://send?text="+quotestext+"✨%0a %09 -"+author} target='_blank' rel="noreferrer" data-action="share/whatsapp/share">
            <IoIosShareAlt />
            </a>
            </span>
            <span className='share-pc'>
            {
                (isCopy)
                ?<span className='tick'>
                    <TiTick />
                </span>
                :<BiCopy onClick={copyToClipboard} />
            }
            </span>
        </div>
    )
}
