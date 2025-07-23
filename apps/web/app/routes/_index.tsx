import FeaturesListHomepage from "@/components/sections/homepage-feature-list";
import HeroHomepage from "@/components/sections/homepage-hero";
import { Layers, Target, Trophy, Zap } from "lucide-react";

export default function HomePage() {
  const features = {
    items: [
      {
        _title: "Challenge Mode",
        description:
          "Compete head-to-head with other CAD designers in timed challenges",
        imageUrl: "./images/challenge.jpg",
        characteristics: {
          items: [{ _title: "Time based" }, { _title: "Head-to-head" }],
        },
      },
      {
        _title: "Precision Scoring",
        description:
          "Advanced scoring system based on mass accuracy and material calculations",
        imageUrl: "./images/precision.jpg",
        characteristics: {
          items: [
            { _title: "Accuracy metrics" },
            { _title: "Material analysis" },
          ],
        },
      },
      {
        _title: "Tournament Mode",
        description: "Join tournaments to showcase your skills and win prizes",
        imageUrl: "./images/tournament.jpg",
        characteristics: {
          items: [
            { _title: "Live tournaments" },
            { _title: "Skill-based matchmaking" },
          ],
        },
      },
      {
        _title: "Leaderboard Ranking",
        description: "Track your progress and compete for the top spot",
        imageUrl: "./images/leaderboard.jpg",
        characteristics: {
          items: [
            { _title: "Accurate ranking" },
            { _title: "Progress tracking" },
          ],
        },
      },
    ],
  };

  const stats = [
    { number: "10K+", label: "Active Designers" },
    { number: "50K+", label: "Challenges Completed" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "Platform Uptime" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Mechanical Engineer",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=100",
      content:
        "CAD Arena has revolutionized how I practice and improve my design skills. The competitive element keeps me motivated!",
    },
    {
      name: "Mike Rodriguez",
      role: "Product Designer",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100",
      content:
        "The real-time challenges are incredibly engaging. I've learned more in 3 months than I did in years of solo practice.",
    },
    {
      name: "Emily Johnson",
      role: "Engineering Student",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100",
      content:
        "Perfect for students! The difficulty progression and instant feedback help me understand complex concepts quickly.",
    },
  ];

  return (
    <div className="">
      <HeroHomepage />

      <FeaturesListHomepage
        featuresCardsList={features}
        heading={{
          subtitle: "Features",
          tag: "h2",
          title: "Explore Our Platform's Features",
        }}
      />
    </div>
  );
}
