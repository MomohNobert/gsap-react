import { projects } from 'config/menu';
import { Style } from './styles';
import { MenuItems } from 'ui/containers/MenuItems/menuItems';

export function Menu() {
  return (
    <Style.Container>
      <div className="project__wrapper">
        {projects.map((project) => (
          <MenuItems
            key={project.id}
            name={project.name}
            bgColor={project.color}
            src={project.image}
          />
        ))}
      </div>
      <div className="project__image--outer">
        <div className="project__image--inner"></div>
      </div>
      <Style.Background />
    </Style.Container>
  );
}
