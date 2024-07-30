import { GalleryData } from '../@types';
import { Image } from '../components/image';
import { FC } from 'react';

export interface GalleryProps {
  data?: GalleryData;
}

export const Gallery: FC<GalleryProps> = (props) => {

    const { data = [] } = props;

    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {data.length > 0
                            ? data.map((d, i) => (
                                <div
                                    key={`${d.title}-${i}`}
                                    className="col-sm-6 col-md-4 col-lg-4"
                                >
                                    <Image
                                        title={d.title}
                                        largeImage={d.largeImage}
                                        smallImage={d.smallImage}
                                    />
                                </div>
                            ))
                            : 'Loading...'}
                    </div>
                </div>
            </div>
        </div>
    );
};
