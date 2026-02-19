import "./Paragraph.scss";

interface ParagraphProps {
  label: string;
}

function Paragraph({ label }: ParagraphProps) {
  return <p className='bodyText'>{label}</p>;
}

export default Paragraph;
