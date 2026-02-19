import "./Tab.scss";

interface TabProps {
  activeTab: string;
  label: string;
  onClick: (tab: string) => void;
}

function Tab({ activeTab, label, onClick }: TabProps) {
  const handleClick = () => {
    onClick(label);
  };

  const className = `tab-list-item${
    activeTab === label ? " tab-list-active" : ""
  }`;

  return (
    <li className={className} onClick={handleClick}>
      {label}
    </li>
  );
}

export default Tab;
