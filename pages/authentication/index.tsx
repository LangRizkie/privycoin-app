import classNames from 'classnames'
import moment from 'moment'
import type { NextPage } from 'next'
import { HTMLAttributes, useCallback, useState } from 'react'
import Styles from './authentication.module.scss'

const today: String = `Today ${moment().format('MMM DD, YYYY')}`
const navigation = ['login', 'registration']

const Authentication: NextPage = () => {
  const [posX, setPosX] = useState(Number)
  const [barWidth, setBarWidth] = useState(Number)
  const [activeNavigation, setActiveNavigation] = useState(Number)

  const styleButton = (index: Number) => classNames(
    { [Styles.active]: index == activeNavigation }
  )

  const navigationRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) active(node.children[0] as HTMLElement)
  }, []) 

  function active(el: HTMLElement | React.MouseEvent<HTMLElement>) {
    if ('currentTarget' in el) {
      setPosX(el.currentTarget.offsetLeft)
      setBarWidth(el.currentTarget.offsetWidth)
      setActiveNavigation(
        navigation.findIndex(e => e == el.currentTarget.innerText.toLowerCase())
      )
      return
    }

    setPosX(el.offsetLeft)
    setBarWidth(el.offsetWidth)
    setActiveNavigation(
      navigation.findIndex(e => e == el.innerText.toLowerCase())
    )
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.date}>
        { today }
      </div>
      <div ref={navigationRef} className={Styles.navigation}>
        {
          navigation.map((el, index) =>
            <button
              className={styleButton(index)}
              onClick={active}
              key={index}>
              {el}
            </button>
          )
        }
        <div className={Styles.navigationBar} style={
          {
            'left': posX,
            'width': barWidth
          }
        }></div>
      </div>
    </div>
  )
}

export default Authentication
