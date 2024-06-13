import DetailsAdvantagesCol from "./DetailsAdvantagesCol";
import DetailsGalleryCol from "./DetailsGalleryCol";
import DetailsProductCol from "./DetailsProductCol";
function DetailsInformation() {
  return (
    <div className="flex items-center justify-around">
      <DetailsGalleryCol />
      <DetailsProductCol />
      <DetailsAdvantagesCol />
    </div>
  );
}

export default DetailsInformation;
