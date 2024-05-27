import React from 'react'
import LogoFrame from './LogoFrame'
import { Divider } from '@nextui-org/divider'
import Navbar from './Navbar'

const LeftSideBar = () => {
  return (
	<div className={`w-60 h-full bg-slate-100 dark:bg-gray-900 px-5 shadow-xl shadow-slate-900/10`}>
		<LogoFrame />
		<Divider className={`w-full h-[2px] my-1`} />
		<Navbar />
	</div>
  )
}

export default LeftSideBar