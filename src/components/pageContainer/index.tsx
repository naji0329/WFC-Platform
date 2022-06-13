import { ReactNode, FC } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className='container h-full flex-grow m-auto'>
      {children}
    </div>
  );
};
