// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import CourseCard from "./CourseCard"; // Adjust the path based on your project structure
import LessonPage from "./LessonPage"; // Adjust the path based on your project structure

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './style';
import LessonCard from './LessonCard';
import LessonPage from './LessonPage';
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components';

const Home = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Stats />
              <Business />

              {/* Manually add LessonCard components with specific lesson numbers */}
              <LessonCard lessonNumber={1} />
              <LessonCard lessonNumber={2} />
              <LessonCard lessonNumber={3} />

              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
              <Footer />
            </div>
          </div>
        </div>
      </Route>
      <Route path="/lesson/:lessonNumber">
        <LessonPage />
      </Route>
    </Switch>
  </Router>
);

export default Home;
