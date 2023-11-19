import { Skin } from '../../models/skin';
import '../../main.scss';

type Props = {
  skin: Skin;
};

export function Card({ skin }: Props) {
  const rarityClass =
    skin.rarity === 'Covert'
      ? 'covert'
      : skin.rarity === 'Mil-Spec Grade'
      ? 'milspec'
      : skin.rarity === 'Extraordinary'
      ? 'extraordinary'
      : skin.rarity === 'Restricted'
      ? 'restricted'
      : skin.rarity === 'Classified'
      ? 'classified'
      : 'cmun';

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
