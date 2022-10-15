import React from 'react';
import Image from 'next/image';
import { medium_cover2, medium_cover3, medium_cover4, medium_cover5, medium_cover6, medium_cover7 } from '../../public/resource';
import { RightOutlined, CaretRightOutlined, StarOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { MenuTop } from '../components';
import Link from 'next/link';
import Styles from "../../styles/HomePage.module.scss";

const Index = () => {
    return (
        <div>
            <div className={Styles.bodyPage}>
                <MenuTop />
            </div>
            <div className={Styles.BodyPage}>
                <div className={Styles.MainPage}>
                    <div className={Styles.MulitipleCategory}>
                        <h1 className={Styles.titleCategory}>Explore</h1>
                        <div className={Styles.Box_listCategory}>
                            <ul>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Action</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Adventure</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Animation</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Biography</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Comedy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a href='#'><RightOutlined /> Crime</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.ListMovie}>
                        <div className={Styles.BoxtitleMovie}>
                            <h1 className={Styles.titleListMovie}>Action</h1>
                            <div className={Styles.LineMovie}></div>
                        </div>
                        <div className={Styles.BoxInforMovie}>
                            <div className={Styles.BoxItemMovies}>
                                <div>
                                    <div className={Styles.ItemsMovies_PicThumb}>
                                        <Image src={medium_cover2} alt="thumble movies"/>
                                    </div>
                                    <div className={Styles.ItemsMovies_BtnPlay}>
                                        <a href='#'>
                                        <PlayCircleOutlined />
                                        </a>
                                    </div>
                                    <div className={Styles.ItemsMovies_titleMovies}>
                                        <p>Vengeance Is Mine, All Others Pay Cash</p>
                                    </div>
                                    <div className={Styles.ItemsMovies_dateAndStar}>
                                        <p>2021</p>
                                        <p><StarOutlined /></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <Image src={medium_cover2} alt="thumble movies"/>
                                    </div>
                                    <div>
                                        <a href='#'>
                                            <CaretRightOutlined />
                                        </a>
                                    </div>
                                    <div>
                                        <p>Vengeance Is Mine, All Others Pay Cash</p>
                                    </div>
                                    <div>
                                        <p>2021</p>
                                        <p><StarOutlined /></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <Image src={medium_cover2} alt="thumble movies"/>
                                    </div>
                                    <div>
                                        <a href='#'>
                                            <CaretRightOutlined />
                                        </a>
                                    </div>
                                    <div>
                                        <p>Vengeance Is Mine, All Others Pay Cash</p>
                                    </div>
                                    <div>
                                        <p>2021</p>
                                        <p><StarOutlined /></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <Image src={medium_cover2} alt="thumble movies"/>
                                    </div>
                                    <div>
                                        <a href='#'>
                                            <CaretRightOutlined />
                                        </a>
                                    </div>
                                    <div>
                                        <p>Vengeance Is Mine, All Others Pay Cash</p>
                                    </div>
                                    <div>
                                        <p>2021</p>
                                        <p><StarOutlined /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
