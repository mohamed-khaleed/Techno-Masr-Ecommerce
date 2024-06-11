interface HeroServiceItemProps {
  heading: string;
  paragraph: string;
  children: React.ReactNode;
}
function HeroServiceItem({
  heading,
  paragraph,
  children,
}: HeroServiceItemProps) {
  return (
    <div className="flex w-[17.5rem] items-center gap-3  bg-white p-3">
      {children}
      <div className="mr-1 flex flex-col gap-2">
        <h3 className="text-darkBlack text-[14px] font-medium">{heading}</h3>
        <p className="text-lightBlack text-[14px]">{paragraph}</p>
      </div>
    </div>
  );
}

export default HeroServiceItem;
