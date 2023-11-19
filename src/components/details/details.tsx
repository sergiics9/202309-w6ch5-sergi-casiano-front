import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

export function Details() {
  const { currentSkin } = useSelector((state: RootState) => state.skinsState);

  let rarityClass;

  if (currentSkin?.rarity === 'Covert') {
    rarityClass = 'covert';
  } else if (currentSkin?.rarity === 'Mil-Spec Grade') {
    rarityClass = 'milspec';
  } else if (currentSkin?.rarity === 'Extraordinary') {
    rarityClass = 'extraordinary';
  } else if (currentSkin?.rarity === 'Restricted') {
    rarityClass = 'restricted';
  } else if (currentSkin?.rarity === 'Classified') {
    rarityClass = 'classified';
  } else {
    rarityClass = 'milspec';
  }

  return (
    <li>
      <div className="details-container">
        <p className="skin-name">{currentSkin?.name}</p>
        <p className={`skin-rarity ${rarityClass}`}>{currentSkin?.rarity}</p>
        <div className="info-container">
          <p>{currentSkin?.description}</p>
        </div>
        <div className="image-container">
          <img
            src={currentSkin?.image}
            alt={currentSkin?.collections_name}
            height="300"
            width="400"
          />
        </div>
        <p className="collection-name">
          Collection: {currentSkin?.collections_name}
        </p>
        <div className="image-container">
          <img
            src={currentSkin?.collections_image}
            alt={currentSkin?.collections_name}
            height="300"
            width="400"
          />
        </div>
      </div>
      <Link to={'/'}>
        <button className="details-goback">Home</button>
      </Link>
    </li>
  );
}
