type CircleIconItemProps = {
  color?: string
  onClick?: () => void | Promise<void>; // Allow both void and Promise<void> return types
  children: React.ReactNode
  
}
function CircleIconItem({color = 'white',onClick,children}: CircleIconItemProps) {
  return (
    <div className={`bg-${color}  flex w-12 h-12  items-center justify-center  rounded-full`} onClick={onClick}>
      {children}
    </div>
  )
}

export default CircleIconItem
