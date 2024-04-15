import { Container } from '../Shared/Container';
import { SpriteIcon } from '../Shared/SpriteIcon';
import { Title } from '../Shared/Title';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Title titleTag="h1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
          velit! Voluptatum soluta nobis quos iusto ratione placeat inventore?
          Similique commodi, non voluptatibus vel magnam hic eaque amet. Iste,
          odio perferendis?
        </Title>
        <SpriteIcon
          iconName="icon-Chevron-Arrow-Left"
          className={styles.icon}
        />
      </Container>
    </footer>
  );
};
