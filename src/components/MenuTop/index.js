import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'antd';
import { SearchOutlined, AppstoreOutlined } from '@ant-design/icons';
import { logo } from '../../../public/resource';
import Styles from "../../../styles/HomePage.module.scss";

const MenuTop = () => {
    return (
        <div className={Styles.Hompage_Menu}>
            <div className={Styles.ListItem_Menu}>
                <div className={Styles.ListItem_icon_Logo}>
                    <Link href="#">
                        <a href='#'>
                            <Image src={logo} alt="logo page" />
                        </a>
                    </Link>
                </div>

                <div className={Styles.ListItem_Items}>
                    <Link href="#">
                            <a href='#'>Home</a>
                    </Link>
                    <Link href="#">
                            <a href='#'>Browse Movies</a>
                    </Link>
                </div>
            </div>
            <div className={Styles.ListItems_Right}>
                <div className={Styles.form_Search_Menu}>
                    <Input placeholder='Search' />
                    {/* <a href='#' className={Styles.btnSearch_icon}>
                        <div className={Styles.backgroup__btn}>
                            <SearchOutlined />
                        </div>
                    </a> */}
                </div>
                <div className={Styles.button_MenuOpen}>
                    <button><AppstoreOutlined /></button>
                </div>
            </div>
        </div>
    );
}

export default MenuTop;
