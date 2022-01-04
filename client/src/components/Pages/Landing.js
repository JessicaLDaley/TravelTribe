import React from "react";
import Home from "../Pages/Home";
import LandingLayout from "../LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Home
        title="Travel Tribe"
        subtitle="Organizing a travel group is sometimes challenging. Careful planning and open communication are the keys to success. Travel Tribe is an exclusive social media application that allows group members to meet, share ideas and make plans. Post schedule updates, meeting locations and share photos to commemorate your travels. Wherever the journey takes you, Travel Tribe has your back. "
        image= "https://source.unsplash.com/collection/959652/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}