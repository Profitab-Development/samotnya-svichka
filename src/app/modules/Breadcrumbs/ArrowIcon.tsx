'use client'
import React from 'react'

interface ArrowIconProps {
  fill: string
  className?: string
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M11.1109 18.8237C11.2321 18.9372 11.3927 19.0003 11.5595 19C11.7256 19.0014 11.885 18.9346 11.9996 18.8153C12.1206 18.6984 12.1889 18.538 12.1889 18.3705C12.1889 18.203 12.1206 18.0426 11.9996 17.9257L7.17478 13.1417H18.3652C18.7158 13.1417 19 12.8599 19 12.5122C19 12.1646 18.7158 11.8828 18.3652 11.8828H7.17293L12.0081 7.07373C12.1291 6.95683 12.1973 6.79642 12.1973 6.62891C12.1973 6.4614 12.1291 6.30099 12.0081 6.18409C11.7602 5.93864 11.3587 5.93864 11.1109 6.18409L5.18566 12.0591C4.93811 12.3048 4.93811 12.703 5.18566 12.9487L11.1109 18.8237Z"
        fill={fill}
      />
    </svg>
  )
}

export { ArrowIcon }
