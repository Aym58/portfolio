import './style.scss';

interface ITextItem {
  text: string;
}

export const Text = ({ text }: ITextItem) => {
  return <p className="text">{text}</p>;
};
