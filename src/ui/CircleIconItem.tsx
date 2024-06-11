type CircleIconItemProps = {
  color?: string
  children: React.ReactNode
}
function CircleIconItem({color = 'white', children}: CircleIconItemProps) {
  return (
    <div className={`bg-${color} flex items-center justify-center w-12 h-12 rounded-full`}>
      {children}
    </div>
  )
}

export default CircleIconItem
