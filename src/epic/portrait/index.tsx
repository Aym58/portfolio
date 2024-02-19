import { Text } from 'common/text';
import './style.scss';
import { TextHeader } from 'common/text-header';

export const Portrait = () => {
  return (
    <div className="portrait-outer-container">
      <TextHeader text="About Me" />
      <div className="portrait-inner-container">
        <Text text="I have always been interested in software since a young age. I had great programming classes in my high school, where I was learning HTML, CSS, Pascal, C#, and JavaScript. I built my first website at the age of 15, and since then it has been my hobby and freelance job at student ages" />
      </div>
      <TextHeader text="Career Path" />
      <div className="portrait-inner-container">
        <Text text="After graduating from university, I started my career path with an Internship as a Front-End developer. After that, I got my first job, where I learned the backend and became a Full-Stack Web developer, utilizing a stack of JavaScript, TypeScript, React and Node.js" />
        <Text text="In my last position at a startup, I took the lead role in developing a desktop trading terminal, involving complex architecture solutions, data visualization and high load performance optimization" />
      </div>
    </div>
  );
};
