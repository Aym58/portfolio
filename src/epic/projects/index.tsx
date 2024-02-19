import { CustomCard } from 'common/card';
import AntaresScreen from 'assets/projects/antares.jpg';
import DeltaAgenceScreen from 'assets/projects/delta-agence.jpg';
import GameOfLifeScreen from 'assets/projects/game-of-life.jpg';
import CrmAppScreen from 'assets/projects/crm-app.jpg';

import './style.scss';
import { Divider } from '@chakra-ui/react';
import { TextHeader } from 'common/text-header';

export const Projects = () => {
  return (
    <div className="projects-outer-container">
      <TextHeader text="Work Projects" />
      <div className="projects-inner-container">
        <CustomCard
          maxWidth="440px"
          header="Antares"
          text="Arbitrage trading terminal"
          link="https://valsydev.com/case/arbitrage-trading-terminal"
          image={AntaresScreen}
        />
        <CustomCard
          maxWidth="440px"
          header="LLC Delta Agency"
          text="Shipping agency company website"
          link="https://www.delta-agence.com/"
          image={DeltaAgenceScreen}
        />
      </div>
      <Divider />
      <TextHeader text="Learning and Fun" />
      <div className="projects-inner-container">
        <CustomCard
          maxWidth="440px"
          header="Game of Life"
          text="Fun project creating game of life"
          link="https://pixel-game-of-life.netlify.app/"
          image={GameOfLifeScreen}
        />
        <CustomCard
          maxWidth="440px"
          header="CRM App"
          text="Full stack CRM app made for learning purposes"
          link="https://crm-fn.vercel.app"
          image={CrmAppScreen}
        />
      </div>
    </div>
  );
};
