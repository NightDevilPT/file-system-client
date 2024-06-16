import { Image } from '@nextui-org/image'
import React from 'react'

import logo from '../../../assets/logo.png'

const FSLogoFrame = () => {
  return (
	<div className={`w-auto h-auto flex justify-center items-center gap-5`}>
		<div className={`w-20 h-20`}>
			<Image src={logo.src} className='w-full h-full object-cover' />
		</div>
		<div className={`w-auto h-auto grid-cols-1`}>
			<h1 className={`text-2xl font-rubik font-bold text-foreground-600`}>Cloudify</h1>
			<span className={`text-base font-rubik font-bold text-foreground-400`}>Storage Provider</span>
		</div>
	</div>
  )
}

export default FSLogoFrame