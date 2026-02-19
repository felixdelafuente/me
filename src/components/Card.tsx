import "../stylesheets/index.scss";
import SecondaryButton from "./SecondaryButton";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  tooltip1: string;
  tool1: string;
  alt1: string;
  tooltip2: string;
  tool2: string;
  alt2: string;
  tooltip3: string;
  tool3: string;
  alt3: string;
  tooltip4: string;
  tool4: string;
  alt4: string;
  tooltip5: string;
  tool5: string;
  alt5: string;
  link: string;
}

function Card({
  image,
  alt,
  title,
  description,
  tooltip1,
  tool1,
  alt1,
  tooltip2,
  tool2,
  alt2,
  tooltip3,
  tool3,
  alt3,
  tooltip4,
  tool4,
  alt4,
  tooltip5,
  tool5,
  alt5,
  link,
}: CardProps) {
  return (
    <div className='card'>
      <div>
        <img className='card-image' src={image} alt={alt} />
      </div>
      <div className='card-contents'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        <div className='tools-img'>
          <div className='tooltip'>
            <span className='tooltiptext'>{tooltip1}</span>
            <img className='tool-image' src={tool1} alt={alt1} />
          </div>
          <div className='tooltip'>
            <span className='tooltiptext'>{tooltip2}</span>
            <img className='tool-image' src={tool2} alt={alt2} />
          </div>
          <div className='tooltip'>
            <span className='tooltiptext'>{tooltip3}</span>
            <img className='tool-image' src={tool3} alt={alt3} />
          </div>
          <div className='tooltip'>
            <span className='tooltiptext'>{tooltip4}</span>
            <img className='tool-image' src={tool4} alt={alt4} />
          </div>
          <div className='tooltip'>
            <span className='tooltiptext'>{tooltip5}</span>
            <img className='tool-image' src={tool5} alt={alt5} />
          </div>
        </div>
        <a
          className='button-holder'
          target='_blank'
          rel='noopener noreferrer'
          href={link}
        >
          <SecondaryButton label='VIEW PROJECT' />
        </a>
      </div>
    </div>
  );
}

export default Card;
