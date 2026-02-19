import "./SecondaryButton.scss";

interface SecondaryButtonProps {
  label: string;
}

function SecondaryButton({ label }: SecondaryButtonProps) {
  return (
    <button className='secondaryButton' type='button'>
      {label}
    </button>
  );
}

export default SecondaryButton;
