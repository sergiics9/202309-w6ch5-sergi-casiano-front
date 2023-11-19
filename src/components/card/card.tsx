import { Skin } from '../../models/skin';
import '../../main.scss';

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

  return (
    <li className="skin-card">
      <div className="card-container">
        <p className="skin-name">{skin.name}</p>
        <p className={`skin-rarity ${rarityClass}`}>{skin.rarity}</p>

        <div className="image-container">
          <img
            src={skin.image}
            alt={`imagen de ${skin.name}`}
            width={400}
            height={300}
          />
        </div>
      </div>
    </li>
  );
}