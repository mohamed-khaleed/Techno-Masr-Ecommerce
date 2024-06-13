import image1 from '../../assets/images/Logo.svg';
function FormsImage() {
  return (
    <div
    className="flex flex-col bg-mainColor justify-center items-center bg-cover bg-center text-white p-8 h-screen"
  >
   <img src={image1} alt="logo" />
  </div>
  )
}

export default FormsImage

