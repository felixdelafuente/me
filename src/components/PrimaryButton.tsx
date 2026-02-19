import "./PrimaryButton.scss";

interface PrimaryButtonProps {
  label: string;
}

function PrimaryButton({ label }: PrimaryButtonProps) {
  return (
    <button className='primaryButton headerButton' type='button'>
      {label}
    </button>
  );
}

export default PrimaryButton;
