import './style.scss';

interface IPageLayout {
  children?: React.ReactNode;
  alignX?: 'center' | 'left' | 'right';
  alignY?: 'center' | 'top' | 'bottom';
}

export const PageLayout = ({
  children,
  alignX = 'left',
  alignY = 'top',
}: IPageLayout) => {
  return <div className={`page page-${alignX}-${alignY}`}>{children}</div>;
};
