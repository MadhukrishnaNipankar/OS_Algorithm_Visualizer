import React from 'react'
import styles from '../styles/card.module.css'

export default function Algorithm_Card({name}) {
  return (
    <>
        <div className={styles.main}>
            <div className={styles.Card}>{name}</div>
        </div>
    </>
  )
}
