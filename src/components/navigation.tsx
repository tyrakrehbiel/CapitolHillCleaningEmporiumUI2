import { FC } from "react";

export interface NavigationData {
  logo: string;
  links: {
    href: string;
    label: string;
  }[];
}

export interface NavigationProps {
  data?: NavigationData;
}

const initialData: NavigationData = {
  logo: "React Landing Page",
  links: [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'contact' },
  ]
}

export const Navigation: FC<NavigationProps> = (props) => {

  const { data = initialData } = props;

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {data.logo}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {data.links.map(link => (
              <li>
                <a href={link.href} key={`nav-link-${link.label}`} className="page-scroll">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
