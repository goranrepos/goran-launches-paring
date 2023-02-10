import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ICore, IFailure } from '../../Types';

export interface ISPaceXCard {
  id: string;
  name: string;
  formattedDate: string;
  imgSrc: string;
  success: boolean;
  failures: IFailure[];
  cores: [
    {
      core: ICore;
    }
  ];
}

const SpaceXCard = ({ id, name, formattedDate, imgSrc, success, failures, cores }: ISPaceXCard) => {
  return (
    <div className={styles.item} key={id}>
      <h2>Name: {name}</h2>
      <p>Date: {formattedDate}</p>
      <p>Core Serial: {cores[0].core.serial}</p>
      <Image alt={name} src={imgSrc} width="200" height="200" />
      {success && <p>Success</p>}
      {failures[0] && (
        <>
          {failures[0]?.altitude && <p>Failures Altitude: {failures[0]?.altitude}</p>}
          {failures[0]?.reason && <p>Failures Reason: {failures[0]?.reason}</p>}
          {failures[0]?.time && <p>Failures Time: {failures[0]?.time}</p>}
        </>
      )}
    </div>
  );
};
export default SpaceXCard;
