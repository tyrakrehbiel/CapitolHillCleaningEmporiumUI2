
import { Box, ThemeProvider } from '@mui/material';

import { theme } from './styles/theme';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
// import { Navigation } from './components/navigation';
// import { Hero } from './components/hero';
// import { Features } from './components/features';
// import { About } from './components/about';
// import { Services } from './components/services';
// import { Gallery } from './components/gallery';
// import { Testimonials } from './components/testimonials';
// import { Team } from './components/team';
// import { Contact } from './components/contact';
// import * as content from './content';


// todo: add padding to the top of app content dynamically based on navigation height
// todo: uncommeent sections
const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Box sx={{ minHeight: '100vh' }}>
                Content
                {/* <Hero data={content.hero} />
                <Features data={content.features} />
                <About data={content.about} />
                <Services data={content.services} />
                <Gallery data={content.gallery} />
                <Testimonials data={content.testimonials} />
                <Team data={content.team} />
                <Contact data={content.contact} /> */}
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
