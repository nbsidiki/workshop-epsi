import React, { useState } from 'react'

interface ITab {
  title: string
  imgSrc?: string
}

interface ITabs {
  tabs: ITab[]
  onTabChange: (index: number) => void
  theme?: 'black' | 'white'
  initialTabIndex?: number
  tabContentDirection?: 'row' | 'column'
  displayImageInResponsive?: boolean
  borders?: boolean
  tabsUlClassName?: string
}

const Tabs: React.FC<ITabs> = ({
  theme = 'black',
  tabs,
  onTabChange,
  initialTabIndex = 0,
  tabContentDirection = 'column',
  borders = true,
  tabsUlClassName = ''
}) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex)

  const handleTabSelect = (index: number) => {
    setSelectedTab(index)
    onTabChange(index)
  }

  return (
    <div className={`tabs-list`}>
      <ul className={`tabs ${theme} ${tabContentDirection === 'row' ? 'contentFlexRow' : ''} ${tabsUlClassName}`}>
        {tabs.map((tab, index) => {
          const isSelectedTab = index === selectedTab
          const className = `${isSelectedTab ? 'active' : ''}`
          return (
            <li
              key={index}
              onClick={() => handleTabSelect(index)}
              className={`${className}`}
              style={borders ? {} : { border: 0 }}
            >
              {tab.imgSrc && (
                <img src={tab.imgSrc} className={`icon mb-10 ${tabContentDirection === 'row' ? 'mr-10' : ''}`} />
              )}
              <span className="tab-title">{tab.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tabs
