import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Explored 50+ Countries Across 6 Continents 🌍",
  "5+ Years of Full-Time Nomadic Living",
  "Guided 1,000+ Travelers to Plan Their Adventures",
  "Published Travel Guides Reaching 100K+ Readers",
  "Specialist in Sustainable and Ethical Travel 🌿",
  "Collaborated with Renowned Travel Blogs and Brands ✈️",
  "Captured 10K+ Stunning Travel Photos 📸",
  "Inspired a Community of 20K+ Like-Minded Nomads",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
