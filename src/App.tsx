import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Team } from './components/team';
import { Contact } from './components/contact';
import * as content from './content';
import SmoothScroll from 'smooth-scroll';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {

    return (
        <div>
            <Navigation />
            <Hero data={content.hero} />
            <Features data={content.features} />
            <About data={content.about} />
            <Services data={content.services} />
            <Gallery data={content.gallery} />
            <Testimonials data={content.testimonials} />
            <Team data={content.team} />
            <Contact data={content.contact} />
        </div>
    );
};

export default App;
