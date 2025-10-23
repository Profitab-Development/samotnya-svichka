import React from 'react'

interface DotIconProps {
  fill: string
  className?: string
}

const DotIcon: React.FC<DotIconProps> = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      className={className}
    >
      <circle cx="3.5" cy="3.5" r="3.5" fill={fill} />
    </svg>
  )
}

export { DotIcon }
