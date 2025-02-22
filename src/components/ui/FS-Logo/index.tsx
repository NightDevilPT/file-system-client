import { Image } from '@nextui-org/image'
import React from 'react'

import logo from '../../../assets/logo.png'

const FSLogoFrame = () => {
  return (
	<div className={`w-auto h-auto flex justify-center items-center gap-3`}>
		<div className={`w-14 h-14`}>
			<Image src={logo.src} className='w-full h-full object-cover' />
		</div>
		<div className={`w-auto h-auto grid-cols-1`}>
			<h1 className={`text-xl font-rubik font-bold text-foreground-600`}>Cloudify</h1>
			<span className={`text-sm font-rubik font-bold text-foreground-400`}>Storage Provider</span>
		</div>
	</div>
  )
}

export default FSLogoFrame