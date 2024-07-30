import { FC } from 'react';

export interface ImageProps {
  title: string;
  largeImage: string;
  smallImage: string;
}

export const Image: FC<ImageProps> = (props) => {

    const { title, largeImage, smallImage } = props;

    return (
        <div className="portfolio-item">
            <div className="hover-bg">
                {' '}
                <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
                    <div className="hover-text">
                        <h4>{title}</h4>
                    </div>
                    <img src={smallImage} className="img-responsive" alt={title} />{' '}
                </a>{' '}
            </div>
        </div>
    );
};