import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('@/app/components/Header'));
const Banner = lazy(() => import('@/app/components/Banner'));
const SmileSection = lazy(() => import('@/app/components/SmileSection'));
const ProcessSteps = lazy(() => import('@/app/components/ProcessSteps'));
const GetKicked = lazy(() => import('@/app/components/GetKicked'));
const TalentSection = lazy(() => import('@/app/components/TalentSection'));
const NewMaterial = lazy(() => import('@/app/components/NewMaterial'));
const CultureSection = lazy(() => import('@/app/components/CultureSection'));
const LifeSection = lazy(() => import('@/app/components/LifeSection'));
const ArtistSection = lazy(() => import('@/app/components/ArtistSection'));
const WhatSmileCanDoForYou = lazy(() => import('@/app/components/WhatSmileCanDoForYou'));
const Footer = lazy(() => import('@/app/components/Footer'));

const ComedyPage = () => {
  return (
    <div>
      <Suspense>
        <Header />
        <Banner />
        <SmileSection />
        <ProcessSteps />
        <GetKicked />
        <TalentSection />
        <NewMaterial />
        <CultureSection />
        <LifeSection />
        <WhatSmileCanDoForYou />
        <ArtistSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default ComedyPage;
