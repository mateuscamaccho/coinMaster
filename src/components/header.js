import { AiOutlineHome } from 'react-icons/ai';

import styles from './styles.module.scss';




function Header() {
    return (
        <header>
            <nav className={styles.container_menu}>
                <ul>
                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    <li>
                        <a href='https://google.com'>
                            <div className={styles.container_icon}>
                                <AiOutlineHome className={styles.menu_icon} />
                            </div>
                            <div className={styles.menu_description}> home </div>
                        </a>
                    </li>

                    

                </ul>
            </nav>
        </header>
    )
}

export default Header;