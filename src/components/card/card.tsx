import { Skin } from '../../models/skin';
import '../../main.scss';
import { useSkins } from '../../hooks/use.skins';
import { Link } from 'react-router-dom';

type Props = {
  skin: Skin;
};

export function Card({ skin }: Props) {
  let rarityClass;

  if (skin.rarity === 'Covert') {
    rarityClass = 'covert';
  } else if (skin.rarity === 'Mil-Spec Grade') {
    rarityClass = 'milspec';
  } else if (skin.rarity === 'Extraordinary') {
    rarityClass = 'extraordinary';
  } else if (skin.rarity === 'Restricted') {
    rarityClass = 'restricted';
  } else if (skin.rarity === 'Classified') {
    rarityClass = 'classified';
  } else {
    rarityClass = 'milspec';
  }

  const { handleDetailsPage } = useSkins();

  return (
    <li className="card">
      <div className="card-container">
        <p className="skin-name">{skin.name}</p>
        <p className={`skin-rarity ${rarityClass}`}>{skin.rarity}</p>

        <div className="image-container">
          <Link to={'/details/' + skin.id}>
            <img
              src={`http://localhost:2700/uploads/${skin.image.publicId}`}
              alt={`imagen de ${skin.name}`}
              width={400}
              height={300}
              onClick={() => handleDetailsPage(skin)}
            />
          </Link>
        </div>
      </div>
    </li>
  );
}
