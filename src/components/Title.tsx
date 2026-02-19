import "./Title.scss";

interface TitleProps {
  label: string;
}

function Title({ label }: TitleProps) {
  return <h2 className='headerText'>{label}</h2>;
}

export default Title;
