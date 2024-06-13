import Button from "../../ui/Button"

function CartTotalCol() {
  return (
    <div className="flex flex-col ">
     <div className="space-y-4 my-7 py-5 px-6 w-[26.5rem] border-2 border-solid border-lightGrey rounded-sm">
       <h3 className="text-xl text-darkBlack font-semibold">cart total</h3>
       <div className="flex items-center justify-between ">
          <p className="text-lightBlack text-sm">Deep aesthetic</p>
          <p className="text-darkBlack text-sm font-medium">2222 </p>
       </div>
       <div className="flex items-center justify-between ">
          <p className="text-lightBlack text-sm">delivery</p>
          <p className="text-darkBlack text-sm font-medium">free</p>
       </div>
       <div className="flex items-center justify-between ">
          <p className="text-lightBlack text-sm">Discount</p>
          <p className="text-darkBlack text-sm font-medium">0</p>
       </div>
       <div className="flex items-center justify-between ">
          <p className="text-lightBlack text-sm">Tax</p>
          <p className="text-darkBlack text-sm font-medium">0</p>
       </div>
       <div className=" bg-lightGrey h-[2px] m-auto"></div>
       <div className="flex items-center justify-between ">
          <p className="text-lightBlack text-xl">Total fee</p>
          <p className="text-darkBlack  font-medium text-xl">222</p>
       </div>
       <Button>
         Order now
       </Button>
    
     </div>
     <div className="space-y-4 my-2 py-5 px-6 w-[26.5rem] border-2 border-solid border-lightGrey rounded-sm">
       <h3>VAT</h3>
       <div className=" bg-lightGrey h-[2px] m-auto"></div>
       <input type="text" className="border-2 border-solid border-lightGrey rounded-sm w-full py-3 px-4" placeholder="enter the vat" />
       <button className="text-white bg-darkBlue border-2 border-solid text-sm border-darkBlue px-6 py-2 font-bold" >
            place vat
        </button>
     </div>
    </div>
   
  )
}

export default CartTotalCol
