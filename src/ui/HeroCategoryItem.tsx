import HeadPhone from "../assets/images/headPhone.svg";
type HeroCategoryItemProps = {
  category: string;
  image?: string;
};
function HeroCategoryItem({
  category,
  image = HeadPhone,
}: HeroCategoryItemProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border bg-white border-solid border-[#C9CFD2] px-3 py-6">
      <img src={image} alt="headphone" />
      <h3 className="font-medium text-darkBlack">{category}</h3>
    </div>
  );
}

export default HeroCategoryItem;
