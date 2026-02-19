import "../stylesheets/index.scss";
import Title from "./Title";
import { PortfolioContent } from "../content/Portfolio";
import SecondaryButton from "./SecondaryButton";

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <Title label='FEATURED PROJECTS' />

      <div className='portfolio-content'>
        {PortfolioContent.contents.map((content) => {
          return (
            <div className='card' key={content.title}>
              <div>
                <img
                  className='card-image'
                  src={content.img}
                  alt={content.title}
                />
              </div>
              <div className='card-contents'>
                <h3 className='card-title'>{content.title}</h3>
                <p className='card-description'>{content.description}</p>

                <div className='tools-img'>
                  {content.tools.map((tool) => {
                    return (
                      <div className='tooltip' key={tool.name}>
                        <span className='tooltiptext'>{tool.name}</span>
                        <img
                          className='tool-image'
                          src={tool.icon}
                          alt={tool.name}
                        />
                      </div>
                    );
                  })}
                </div>
                <a
                  className='button-holder'
                  target='_blank'
                  rel='noopener noreferrer'
                  href={content.link}
                >
                  <SecondaryButton label='VIEW PROJECT' />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
