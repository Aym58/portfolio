import './style.scss';

interface ITextHeaderItem {
  text: string;
}

export const TextHeader = ({ text }: ITextHeaderItem) => {
  return <h2 className="text-header">{text}</h2>;
};
