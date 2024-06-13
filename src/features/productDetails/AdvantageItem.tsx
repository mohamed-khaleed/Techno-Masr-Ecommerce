function AdvantageItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 px-8 border-lightGrey border-solid border-[0.5px] rounded-lg flex flex-col justify-center gap-4 items-center">
      {children}
    </div>
  )
}

export default AdvantageItem
