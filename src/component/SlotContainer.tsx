import React, { FC, ReactNode } from 'react'

interface slotContainerProps {
    chlildren: ReactNode;
}
export const SlotContainer: FC <slotContainerProps> = ({chlildren}) => {
  return (
    <div className='bg-green-50'>
      {chlildren}
    </div>
  )
}

