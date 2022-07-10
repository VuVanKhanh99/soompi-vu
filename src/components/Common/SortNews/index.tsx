import React, { ReactNode, useState } from 'react'
import { typeSortNew } from '../../../configs'
import { DownOutlined } from '@ant-design/icons'
import { FaSortDown } from 'react-icons/fa'
import styles from './styles.module.scss'

function SortNews() {
  const [typeSort, setTypeSort] = useState<string>(typeSortNew[0])

  const setSort = (item: string) => {
    item && setTypeSort(item)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        {typeSort}
        <FaSortDown className={styles.dropIcon} />
      </button>
      <div className={styles.dropdownContent}>
        {typeSortNew.map((item: string) => (
          <p key={item} onClick={() => setSort(item)} className={styles.uppercase}>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SortNews
