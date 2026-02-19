import { ReactNode } from "react";

interface TabContentProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export function TabContent({ children, className }: TabContentProps) {
  return <div className={className}>{children}</div>;
}

TabContent.displayName = "TabContent";

export default TabContent;
