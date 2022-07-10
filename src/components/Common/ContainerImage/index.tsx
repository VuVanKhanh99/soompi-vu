import React, { CSSProperties } from 'react'

export interface ContainerImage {
  styles?: CSSProperties
  className?: string
  src: string
}
function ContainerImage({ styles, className, src }: ContainerImage) {
  return <img style={styles} className={className} src={src} />
}

export default ContainerImage
