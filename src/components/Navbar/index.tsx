import React from 'react'
import styles from './styles.module.scss'
import { Image } from 'antd'
import { LogoIcon } from '../../assets'
import { ItemMenu } from '../../configs/ItemMenu'
import { NavLink } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import { BsMoonFill } from 'react-icons/bs'
import { RiUser3Fill } from 'react-icons/ri'

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.container__leftView}>
          <NavLink id="home" to="/">
            <Image preview={false} src={LogoIcon} className={styles.viewLogoMenu} />
          </NavLink>
          <div className={styles.navlink}>
            {ItemMenu[0]?.name && (
              <a href="0">
                {ItemMenu[0]?.name}
                {
                  //check submenu and display
                  //  ItemMenu[0]?.item &&
                }
              </a>
            )}
            {ItemMenu[1]?.name && <a href="1">{ItemMenu[1].name}</a>}
            {ItemMenu[2]?.name && (
              <NavLink id={ItemMenu[2].name} to="/category/video">
                {ItemMenu[2].name}
              </NavLink>
            )}
            {ItemMenu[3]?.name && <a href="3">{ItemMenu[3].name}</a>}
            {ItemMenu[4]?.name && <a href="4">{ItemMenu[4].name}</a>}
            {ItemMenu[5]?.name && <a href="5">{ItemMenu[5].name}</a>}
            {ItemMenu[6]?.name && <a href="6">{ItemMenu[6].name}</a>}
            {ItemMenu[7]?.name && <a href="7">{ItemMenu[7].name}</a>}
          </div>
        </div>
        <div className={styles.container__rightView}>
          <ImSearch size={19} />
          <BsMoonFill size={19} />
          <RiUser3Fill size={21} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
