import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';
import { useSkins } from '../../hooks/use.skins';
import { Card } from '../card/card';

export function List() {
  const { skins } = useSelector((state: RootState) => state.skinsState);
  const { loadSkins } = useSkins();

  useEffect(() => {
    loadSkins();
  }, [loadSkins]);

  return (
    <ul className="skins-list row list-unstyled">
      {skins.map((item) => (
        <Card key={item.name} skin={item}></Card>
      ))}
    </ul>
  );
}
