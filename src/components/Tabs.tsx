import { useState, ReactNode } from "react";
import "./Tabs.scss";
import Tab from "./Tab";

interface TabsProps {
  children: ReactNode;
}

function Tabs({ children }: TabsProps) {
  const childrenArray = children as ReactNode[];
  const childArray = Array.isArray(childrenArray)
    ? childrenArray
    : [childrenArray];

  const [activeTab, setActiveTab] = useState(() => {
    const firstChild = childArray[0] as {
      props?: { label?: string; "data-label"?: string };
    };
    return firstChild?.props?.label ?? firstChild?.props?.["data-label"] ?? "";
  });

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  const renderChildren = () => {
    return childArray.map((child) => {
      const typedChild = child as {
        props?: { label?: string; "data-label"?: string; children?: ReactNode };
      };
      const label =
        typedChild?.props?.label ?? typedChild?.props?.["data-label"];
      if (label === activeTab) {
        return typedChild?.props?.children;
      }
      return null;
    });
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {childArray.map((child) => {
          const typedChild = child as {
            props?: { label?: string; "data-label"?: string };
          };
          const label =
            typedChild?.props?.label ?? typedChild?.props?.["data-label"];
          if (!label) return null;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">{renderChildren()}</div>
    </div>
  );
}

export default Tabs;
