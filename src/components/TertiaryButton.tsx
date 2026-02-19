import "./TertiaryButton.scss";

interface TertiaryButtonProps {
  label: string;
}

function TertiaryButton({ label }: TertiaryButtonProps) {
  return (
    <button className='tertiaryButton' type='button'>
      {label}
    </button>
  );
}

export default TertiaryButton;
