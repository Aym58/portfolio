import './style.scss';

type ImageProps = {
  children?: React.ReactNode;
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  return <img className="image-item" src={src} alt={alt} />;
};
