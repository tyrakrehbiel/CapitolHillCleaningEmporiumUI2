import { FC } from 'react';

export type TestimonialsData = {
  img: string;
  name: string;
  text: string;
}[];

export interface TestimonialsProps {
  data?: TestimonialsData;
}


export const Testimonials: FC<TestimonialsProps> = (props) => {

    const { data = [] } = props;

    return (
        <div id="testimonials">
            <div className="container">
                <div className="section-title text-center">
                    <h2>What our clients say</h2>
                </div>
                <div className="row">
                    {data.length > 0
                        ? data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-4">
                                <div className="testimonial">
                                    <div className="testimonial-image">
                                        {' '}
                                        <img src={d.img} alt="" />{' '}
                                    </div>
                                    <div className="testimonial-content">
                                        <p>"{d.text}"</p>
                                        <div className="testimonial-meta"> - {d.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );
};
