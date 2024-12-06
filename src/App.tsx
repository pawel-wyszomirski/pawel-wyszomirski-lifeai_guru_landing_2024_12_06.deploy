import React from 'react';
import { HeroSection } from './components/HeroSection';
import { TransformationSection } from './components/TransformationSection';
import { SocialProofSection } from './components/social-proof/SocialProofSection';
import { CourseTimeline } from './components/course-timeline/CourseTimeline';
import { RegistrationModal } from './components/RegistrationModal';
import { FacebookPixel } from './components/tracking/FacebookPixel';
import { GoogleTagManager } from './components/tracking/GoogleTagManager';
import { ConversionTracking } from './components/tracking/ConversionTracking';
import { TimeTracking } from './components/tracking/TimeTracking';
import { SiteBehaviour } from './components/tracking/SiteBehaviour';
import { CookieConsent } from './components/consent/CookieConsent';
import { CookieSettings } from './components/consent/CookieSettings';
import { PromoBanner } from './components/PromoBanner';
import { LiveVisitorsCounter } from './components/LiveVisitorsCounter';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { useRegistrationModal } from './hooks/useRegistrationModal';
import { AnalyticsProvider } from './components/tracking/AnalyticsProvider';
import { SectionTracker } from './components/tracking/SectionTracker';
import { useCheckoutPrefetch } from './hooks/useCheckoutPrefetch';
import { createLazyComponent } from './components/LazyComponent';

// Lazy loaded components
const AuthorSection = createLazyComponent(() => import('./components/author/AuthorSection'));
const ValueSummarySection = createLazyComponent(() => import('./components/ValueSummarySection'));
const GuaranteeSection = createLazyComponent(() => import('./components/guarantee/GuaranteeSection'));
const TwoPathsSection = createLazyComponent(() => import('./components/two-paths/TwoPathsSection'));
const BonusSection = createLazyComponent(() => import('./components/BonusSection'));
const FAQSection = createLazyComponent(() => import('./components/FAQSection'));
const FooterSection = createLazyComponent(() => import('./components/footer/FooterSection'));

function App() {
  const { isOpen, close } = useRegistrationModal();
  
  // Initialize checkout prefetching
  useCheckoutPrefetch();

  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-gray-900">
        <FacebookPixel />
        <GoogleTagManager />
        <ConversionTracking />
        <TimeTracking />
        <SiteBehaviour />
        <CookieConsent />
        <CookieSettings />
        <PromoBanner />
        <ScrollProgress />
        
        <div className="pt-12">
          <SectionTracker sectionId="hero" sectionName="Hero Section">
            <HeroSection />
          </SectionTracker>
          
          <SectionTracker sectionId="transformation" sectionName="Transformation Section">
            <TransformationSection />
          </SectionTracker>
          
          <SectionTracker sectionId="social-proof" sectionName="Social Proof Section">
            <SocialProofSection />
          </SectionTracker>
          
          <SectionTracker sectionId="course-timeline" sectionName="Course Timeline">
            <CourseTimeline />
          </SectionTracker>

          <SectionTracker sectionId="author" sectionName="Author Section">
            <AuthorSection />
          </SectionTracker>
          
          <SectionTracker sectionId="bonus" sectionName="Bonus Section">
            <BonusSection />
          </SectionTracker>
          
          <SectionTracker sectionId="value-summary" sectionName="Value Summary">
            <ValueSummarySection />
          </SectionTracker>
          
          <SectionTracker sectionId="guarantee" sectionName="Guarantee Section">
            <GuaranteeSection />
          </SectionTracker>
          
          <SectionTracker sectionId="two-paths" sectionName="Two Paths Section">
            <TwoPathsSection />
          </SectionTracker>
          
          <SectionTracker sectionId="faq" sectionName="FAQ Section">
            <FAQSection />
          </SectionTracker>
          
          <SectionTracker sectionId="footer" sectionName="Footer Section">
            <FooterSection />
          </SectionTracker>
        </div>

        <LiveVisitorsCounter />
        <ScrollToTop />
        <RegistrationModal isOpen={isOpen} onClose={close} />
      </div>
    </AnalyticsProvider>
  );
}

export default App;