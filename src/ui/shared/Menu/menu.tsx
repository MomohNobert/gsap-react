import { projects } from 'config/menu';
import { Style } from './styles';
import { MenuItems } from 'ui/containers/MenuItems/menuItems';
import { useRef } from 'react';

export function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
  const innerRef = useRef(null!);
  const outerRef = useRef(null!);
  const backgroundRef = useRef(null!);

  return (
    <>
      {isMenuOpen && (
        <Style.Container>
          <div className="project__wrapper">
            {projects.map((project) => (
              <MenuItems
                key={project.id}
                name={project.name}
                bgColor={project.color}
                src={project.image}
                outerRef={outerRef}
                innerRef={innerRef}
                backgroundRef={backgroundRef}
              />
            ))}
          </div>
          <div className="project__image--outer" ref={outerRef}>
            <div className="project__image--inner" ref={innerRef}></div>
          </div>
          <Style.Background ref={backgroundRef} />
        </Style.Container>
      )}
    </>
  );
}
