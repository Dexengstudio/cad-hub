import type { Challenge, LeaderboardEntry } from "../types";

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Parametric Bracket Optimization",
    slug: "parametric-bracket-optimization",
    description:
      "Design and optimize a lightweight parametric bracket for load-bearing applications. Focus on stiffness-to-weight ratio and manufacturability. Provide clear constraints and a parametric model that can be adjusted for different load cases.",
    shortDescription:
      "Design a lightweight, parametric bracket with optimal stiffness-to-weight ratio.",
    category: "mechanical",
    difficulty: "intermediate",
    estimatedTime: 240,
    maxParticipants: 200,
    currentParticipants: 87,
    requirements: {
      constraints: [
        "Must withstand 1kN static load with safety factor 2",
        "Max dimensions: 150 x 80 x 50 mm",
      ],
      materials: ["Aluminum 6061-T6"],
      tools: ["Parametric CAD (Fusion 360, SolidWorks, Onshape)"],
      specifications: {
        mounting_hole_diameter_mm: 8,
        bolt_pattern: "2x M8, 60mm apart",
      },
    },
    cadSoftwareRequired: ["Fusion 360", "SolidWorks", "Onshape"],
    fileFormats: [".step", ".f3d", ".sldprt"],
    maxFileSize: 50,
    maxFiles: 5,
    scoringCriteria: {
      criteria: [
        {
          name: "Stiffness-to-weight",
          weight: 0.4,
          description: "Ratio evaluation",
          maxPoints: 40,
        },
        {
          name: "Manufacturability",
          weight: 0.3,
          description: "Ease and cost to manufacture",
          maxPoints: 30,
        },
        {
          name: "Parametric quality",
          weight: 0.2,
          description: "Robustness of parameters",
          maxPoints: 20,
        },
        {
          name: "Documentation",
          weight: 0.1,
          description: "Clarity of notes & drawings",
          maxPoints: 10,
        },
      ],
    },
    maxScore: 100,
    autoScoring: false,
    status: "open",
    isPublic: true,
    isFeatured: true,
    submissionDeadline: "2025-09-30T23:59:59Z",
    thumbnailImage: "/lightweight-parametric-bracket.png",
    drawings: ["/bracket-iso-render.png", "/bracket-drawing.png"],
    totalSubmissions: 35,
    averageScore: 78.4,
    completionRate: 62.5,
    viewCount: 1250,
    tags: ["parametric", "optimization", "mechanical"],
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-08-01T10:00:00Z",
  },
  {
    id: "2",
    title: "Aerospace Wing Rib Lattice",
    slug: "aerospace-wing-rib-lattice",
    description:
      "Create an internal lattice for a composite wing rib to reduce weight while maintaining stiffness. Provide clear load paths and show how the lattice integrates with skins.",
    shortDescription:
      "Design a composite-ready lattice for an aerospace wing rib.",
    category: "aerospace",
    difficulty: "advanced",
    estimatedTime: 360,
    maxParticipants: 150,
    currentParticipants: 64,
    requirements: {
      constraints: [
        "Deflection < 2mm under 800N distributed load",
        "Keep minimum wall thickness 2.5mm",
      ],
      materials: ["Carbon Fiber Composite"],
      tools: ["Generative Design optional", "Finite Element insights helpful"],
      specifications: { rib_chord_mm: 450, rib_height_mm: 300 },
    },
    cadSoftwareRequired: ["NX", "CATIA", "SolidWorks", "Fusion 360"],
    fileFormats: [".step", ".iges"],
    maxFileSize: 80,
    maxFiles: 6,
    scoringCriteria: {
      criteria: [
        {
          name: "Weight reduction",
          weight: 0.35,
          description: "Mass vs baseline",
          maxPoints: 35,
        },
        {
          name: "Stiffness",
          weight: 0.35,
          description: "Deflection and rigidity",
          maxPoints: 35,
        },
        {
          name: "Integration",
          weight: 0.2,
          description: "Fit with skins & tooling",
          maxPoints: 20,
        },
        {
          name: "Docs",
          weight: 0.1,
          description: "Rationale & sketches",
          maxPoints: 10,
        },
      ],
    },
    maxScore: 100,
    autoScoring: false,
    status: "open",
    isPublic: true,
    submissionDeadline: "2025-10-15T23:59:59Z",
    thumbnailImage: "/aerospace-wing-rib-lattice.png",
    drawings: ["/bracket-iso-render.png", "/bracket-drawing.png"],
    totalSubmissions: 22,
    averageScore: 82.1,
    completionRate: 58.0,
    viewCount: 980,
    tags: ["aerospace", "lattice", "composites"],
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-08-01T10:00:00Z",
  },
  {
    id: "3",
    title: "Automotive Pedal Box Packaging",
    slug: "automotive-pedal-box-packaging",
    description:
      "Package a 3-pedal assembly into a compact space while ensuring ergonomic reach and manufacturability. Provide adjustable features and mounting strategy.",
    shortDescription:
      "Package an ergonomic, manufacturable 3-pedal box for a compact car.",
    category: "automotive",
    difficulty: "beginner",
    estimatedTime: 180,
    maxParticipants: 300,
    currentParticipants: 102,
    requirements: {
      constraints: [
        "Keep within 250 x 250 x 250 mm envelope",
        "Adjustable pedal travel 60–90 mm",
      ],
      materials: ["Steel", "Aluminum"],
      tools: ["Parametric CAD"],
    },
    cadSoftwareRequired: ["SolidWorks", "Fusion 360", "Onshape"],
    fileFormats: [".step", ".sldprt", ".f3d"],
    maxFileSize: 40,
    maxFiles: 5,
    scoringCriteria: {
      criteria: [
        {
          name: "Ergonomics",
          weight: 0.4,
          description: "Human factors and reach",
          maxPoints: 40,
        },
        {
          name: "Packaging",
          weight: 0.3,
          description: "Space efficiency",
          maxPoints: 30,
        },
        {
          name: "Manufacturability",
          weight: 0.2,
          description: "Fabrication readiness",
          maxPoints: 20,
        },
        {
          name: "Docs",
          weight: 0.1,
          description: "Drawings & notes",
          maxPoints: 10,
        },
      ],
    },
    maxScore: 100,
    status: "open",
    isPublic: true,
    submissionDeadline: "2025-11-01T23:59:59Z",
    thumbnailImage: "/automotive-pedal-box.png",
    drawings: ["/bracket-iso-render.png", "/bracket-drawing.png"],
    totalSubmissions: 12,
    averageScore: 75.2,
    completionRate: 40.3,
    viewCount: 730,
    tags: ["automotive", "ergonomics", "packaging"],
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-08-01T10:00:00Z",
  },
];

export function getChallengeBySlug(slug: string) {
  return challenges.find((c) => c.slug === slug);
}

export function getChallengesByCategory(category: string) {
  return challenges.filter((c) => c.category === category);
}

export const leaderboards: Record<string, LeaderboardEntry[]> = {
  "parametric-bracket-optimization": [
    {
      rank: 1,
      participantId: "u_12",
      name: "Alex Kim",
      score: 92.4,
      elapsedSeconds: 732,
      software: "Fusion 360",
      submittedAt: "2025-08-05T13:00:00Z",
    },
    {
      rank: 2,
      participantId: "u_07",
      name: "Priya Patel",
      score: 88.9,
      elapsedSeconds: 980,
      software: "SolidWorks",
      submittedAt: "2025-08-04T16:10:00Z",
    },
    {
      rank: 3,
      participantId: "u_31",
      name: "Diego Lopez",
      score: 85.2,
      elapsedSeconds: 1204,
      software: "Onshape",
      submittedAt: "2025-08-02T11:45:00Z",
    },
    {
      rank: 4,
      participantId: "u_34",
      name: "Sam Chen",
      score: 83.0,
      elapsedSeconds: 1506,
      software: "Fusion 360",
      submittedAt: "2025-08-01T10:00:00Z",
    },
  ],
  "aerospace-wing-rib-lattice": [
    {
      rank: 1,
      participantId: "u_44",
      name: "Jordan Lee",
      score: 94.1,
      elapsedSeconds: 1650,
      software: "NX",
      submittedAt: "2025-08-07T09:25:00Z",
    },
    {
      rank: 2,
      participantId: "u_52",
      name: "Chen Wei",
      score: 90.5,
      elapsedSeconds: 1902,
      software: "CATIA",
      submittedAt: "2025-08-06T18:40:00Z",
    },
  ],
  "automotive-pedal-box-packaging": [
    {
      rank: 1,
      participantId: "u_23",
      name: "Taylor Smith",
      score: 86.7,
      elapsedSeconds: 1101,
      software: "SolidWorks",
      submittedAt: "2025-08-03T15:20:00Z",
    },
  ],
};

// Targets for mass scoring (grams)
export const targetMassByChallenge: Record<string, number> = {
  "parametric-bracket-optimization": 120.5,
  "aerospace-wing-rib-lattice": 920.0,
  "automotive-pedal-box-packaging": 1450.0,
};
