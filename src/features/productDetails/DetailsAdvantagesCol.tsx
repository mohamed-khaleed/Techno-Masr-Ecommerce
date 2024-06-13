import advantage1 from "../../assets/images/advantage1.svg";
import advantage2 from "../../assets/images/advantage2.svg";
import advantage3 from "../../assets/images/advantage3.svg";

import AdvantageItem from "./AdvantageItem";
function DetailsAdvantagesCol() {
  return (
    <div className="third-col flex flex-col gap-3 self-start mt-8" >
    <AdvantageItem>
       <img src={advantage1} className="w-14 h-14" alt="advantage1" />
       <h4 className="text-sm text-darkBlack">Secure transfer process</h4>
    </AdvantageItem>
    <AdvantageItem>
       <img src={advantage2} className="w-14 h-14" alt="advantage1" />
       <h4 className="text-sm text-darkBlack">Payment when receiving</h4>
    </AdvantageItem>
    <AdvantageItem>
       <img src={advantage3} className="w-14 h-14" alt="advantage1" />
       <h4 className="text-sm text-darkBlack">Product as in description</h4>
    </AdvantageItem>
 </div>
  )
}

export default DetailsAdvantagesCol
