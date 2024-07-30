import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { Team } from './components/team';
import { Contact } from './components/contact';
import appContent from './content/content.json';
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
            <Hero data={appContent.Header} />
            <Features data={appContent.Features} />
            <About data={appContent.About} />
            <Services data={appContent.Services} />
            <Gallery data={appContent.Gallery} />
            <Testimonials data={appContent.Testimonials} />
            <Team data={appContent.Team} />
            <Contact data={appContent.Contact} />
        </div>
    );
};

export default App;
