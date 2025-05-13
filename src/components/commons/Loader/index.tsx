import React from 'react'

const Loader: React.FC = () => {
  const barClass =
    'w-[10px] h-[16px] bg-primary dark:bg-primary shadow-md shadow-primary dark:shadow-primary/30'

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center gap-[3px]">
        <div className={`${barClass} animate-[rectangleOneAnim_0.9s_ease-in-out_infinite]`} />
        <div className={`${barClass} animate-[rectangleTwoAnim_0.9s_ease-in-out_infinite_0.1s]`} />
        <div
          className={`${barClass} animate-[rectangleThreeAnim_0.9s_ease-in-out_infinite_0.2s]`}
        />
        <div className={`${barClass} animate-[rectangleFourAnim_0.9s_ease-in-out_infinite_0.3s]`} />
        <div className={`${barClass} animate-[rectangleFiveAnim_0.9s_ease-in-out_infinite_0.4s]`} />
      </div>
    </div>
  )
}

export default Loader
