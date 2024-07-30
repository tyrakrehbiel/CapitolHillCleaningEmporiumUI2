import { FC } from 'react';
import { HeroData } from '../@types';

export interface HeroProps {
  data?: HeroData
}

const initialData: HeroData = { title: 'Loading', paragraph: 'Loading' };

export const Hero: FC<HeroProps> = (props) => {

    const { data = initialData } = props;

    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <h1>
                                    {data.title}
                                    <span></span>
                                </h1>
                                <p>{data.paragraph}</p>
                                <a
                                    href="#features"
                                    className="btn btn-custom btn-lg page-scroll"
                                >
                                    Learn More
                                </a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};