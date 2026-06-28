import React from "react";

// ============================================================
//  SportyQo — homepage (App.js)
//  Drop this into  src/App.js  of your Create React App project.
//  Run with:  npm start
// ============================================================

// ---- Theme tokens ----
const C = {
  bg: "#0A0A0C",        // page background (near black)
  panel: "#101013",     // stats bar / cards
  line: "#222228",      // borders
  blue: "#2F6BFF",      // primary accent
  blueDark: "#1E55E0",
  white: "#FFFFFF",
  soft: "#E8E9ED",
  muted: "#9A9AA6",     // secondary text
};

// ---- Nav links ----
const NAV = ["Home", "Sports", "Playbook", "Dugout", "Features", "Journey", "About Us"];
const ABOUT_IMG1 = "";
const ABOUT_IMG2 = "https://i.ibb.co/r25YbLHz/26.png";
const ABOUT_LINES = ["SportyQo didn't start with technology. It started with a simple observation.", "Too many athletes disappear from the game. Not because they lack talent.", "Because their journey is forgotten."];

// ---- Hero background slideshow (add more image URLs to rotate through) ----
const HERO_IMAGES = [
  { src: "https://i.ibb.co/F4rscJyp/3-BD9877-D-204-A-4981-8-FD9-37-AB09-F5-BE63.png", pos: "center top" },
];

// ---- Stats ----
const STATS = [
  { n: "10,000+", l: "Athletes", icon: "team" },
  { n: "500+", l: "Coaches", icon: "coach" },
  { n: "200+", l: "Opportunities", icon: "trophy" },
  { n: "50+", l: "Partner Institutions", icon: "bank" },
];

// ---- Supported sports ----
const SPORTS = [
  { image: "https://i.ibb.co/pjLjWPqz/s6.png",  smallIcon: "🏏", name: "Cricket",    desc: "From local matches to international leagues, track your performance and climb the ranks.", color: "#4ADE80", glow: "rgba(22,163,74,0.35)", players: "4.2K+", leagues: "320+", events: "1.1K+" },
  { image: "https://i.ibb.co/TBd2pxg1/s7.png",  smallIcon: "⚽", name: "Football",   desc: "Join leagues, improve your skills and compete with the best in football.", color: "#C2E85C", glow: "rgba(74,222,128,0.35)", players: "3.8K+", leagues: "280+", events: "980+" },
  { image: "https://i.ibb.co/QvyP1qzN/s8.png",  smallIcon: "🏀", name: "Basketball", desc: "Track your stats, join tournaments and showcase your basketball talent.", color: "#F59E0B", glow: "rgba(245,158,11,0.35)", players: "1.9K+", leagues: "150+", events: "620+" },
  { image: "https://i.ibb.co/p67gxvq2/s9.png",  smallIcon: "🏐", name: "Volleyball", desc: "Team up, train hard and rise together in exciting volleyball competitions.", color: "#22C55E", glow: "rgba(34,197,94,0.35)", players: "1.2K+", leagues: "120+", events: "430+" },
  { image: "https://i.ibb.co/TDYTn9Rj/s10.png", smallIcon: "🏸", name: "Badminton",  desc: "Play, compete and improve your game with players across your city.", color: "#4ADE80", glow: "rgba(22,163,74,0.35)", players: "2.1K+", leagues: "110+", events: "400+" },
  { image: "https://i.ibb.co/CKjmRHC1/s13.png", smallIcon: "🤼", name: "Kabaddi",    desc: "Engage in traditional combat sport, join leagues and dominate the field.", color: "#EC4899", glow: "rgba(236,72,153,0.35)", players: "1.5K+", leagues: "80+", events: "300+" },
  { image: "https://i.ibb.co/95b0hCg/s12.png",  smallIcon: "🏊", name: "Swimming",   desc: "Track your times, join meets and improve your performance in the water.", color: "#06B6D4", glow: "rgba(6,182,212,0.35)", players: "650+", leagues: "60+", events: "250+" },
  { image: "https://i.ibb.co/v6x5n7gC/s11.png", smallIcon: "🎾", name: "Tennis",     desc: "Join tennis leagues, track your progress and compete in tournaments.", color: "#EAB308", glow: "rgba(234,179,8,0.35)", players: "890+", leagues: "95+", events: "310+" },
];

// small icons for the per-card stats (players / leagues / events)
const STAT_ICONS = {
  Players: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 8.5a2.5 2.5 0 0 1 0 5M17.5 20c0-2.5-1-4.6-2.5-5.6" /></svg>,
  Leagues: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /><path d="M12 13v4M9 20h6M10 20l.4-3M14 20l-.4-3" /></svg>,
  Events: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg>,
};

// ---- The Playbook section ----
const PLAYBOOK_IMG = "https://i.ibb.co/MkF4S3st/IMG-6889.jpg"; // paste an image URL here to replace the placeholder
const FB_HERO_IMG = "https://i.ibb.co/xSy4gQ9k/10.png";
const FB_MEASURE_IMG = "https://i.ibb.co/d4G0dYg0/Screenshot-23-6-2026-213736.jpg";
const FB_VIS_IMG = "https://i.ibb.co/hTg0XXD/11.png";
const BB_HERO_IMG = "https://i.ibb.co/TD4K5yRJ/12.png";
const BB_MEASURE_IMG = "https://i.ibb.co/FkrpW7t9/Screenshot-23-6-2026-22850.jpg";
const BB_OPP_IMG = "https://i.ibb.co/G4nDKjSq/Screenshot-23-6-2026-222059.jpg";
const VB_HERO_IMG = "https://i.ibb.co/q3G4F2hg/13.png";
const VB_MEASURE_IMG = "https://i.ibb.co/1tRQ36fZ/14.png";
const VB_BANNER_IMG = "https://i.ibb.co/yFKPNXcQ/Screenshot-23-6-2026-224230.jpg";
const VB_VIS_IMG = "https://i.ibb.co/gMPt3JRr/15.png";
const VB_MEASURE = [["", "Serves", "https://i.ibb.co/v6QW7pcc/Screenshot-23-6-2026-224132.jpg"], ["", "Sets", "https://i.ibb.co/Hfg6PsH3/Screenshot-23-6-2026-224139.jpg"], ["", "Spikes", "https://i.ibb.co/Q7X1MP0v/Screenshot-23-6-2026-224147.jpg"], ["", "Blocks", "https://i.ibb.co/ZRBVWZcB/Screenshot-23-6-2026-22422.jpg"], ["", "Defence", "https://i.ibb.co/MkyNx8jv/Screenshot-23-6-2026-224211.jpg"], ["", "Match Impact", "https://i.ibb.co/HTmpdBjm/Screenshot-23-6-2026-224217.jpg"]];
const BM_HERO_IMG = "https://i.ibb.co/pj33rH6L/16.png";
const BM_BANNER_IMG = "https://i.ibb.co/mC5RJS08/Screenshot-23-6-2026-231048.jpg";
const BM_OPP_IMG = "https://i.ibb.co/Kz3Szh3g/Screenshot-23-6-2026-23111.jpg";
const BM_MEASURE = [["", "Smashes", "https://i.ibb.co/zVBsrSrw/Screenshot-23-6-2026-23101.jpg"], ["", "Rallies", "https://i.ibb.co/JwQ6hyQg/Screenshot-23-6-2026-23108.jpg"], ["", "Footwork", "https://i.ibb.co/0VdmG8Pd/Screenshot-23-6-2026-231015.jpg"], ["", "Defence", "https://i.ibb.co/mF6BgWGx/Screenshot-23-6-2026-231022.jpg"], ["", "Match Impact", "https://i.ibb.co/XZbCnkGc/Screenshot-23-6-2026-231035.jpg"]];
const BM_OPPS = [["", "Academies", "https://i.ibb.co/WNH1YTR0/Screenshot-23-6-2026-231236.jpg"], ["", "Trials", "https://i.ibb.co/tTqjPdrk/Screenshot-23-6-2026-231243.jpg"], ["", "Scholarships", "https://i.ibb.co/hxZHB0h8/Screenshot-23-6-2026-231251.jpg"], ["", "Competitions", "https://i.ibb.co/fzWCwbVX/Screenshot-23-6-2026-23130.jpg"], ["", "Coaches", "https://i.ibb.co/1YFq3kHy/Screenshot-23-6-2026-231310.jpg"], ["", "Sponsors", "https://i.ibb.co/0yDnGcp7/Screenshot-23-6-2026-231319.jpg"]];
const KB_HERO_IMG = "https://i.ibb.co/CpTBzTns/19.png";
const KB_BANNER_IMG = "https://i.ibb.co/jPt8T84d/Screenshot-23-6-2026-235127.jpg";
const KB_OPP_IMG = "https://i.ibb.co/cXh0QJGr/Screenshot-23-6-2026-234839.jpg";
const KB_MEASURE = [["", "Raid Points", "https://i.ibb.co/21P6SjDC/Screenshot-23-6-2026-234734.jpg"], ["", "Tackle Points", "https://i.ibb.co/cSG81cZG/Screenshot-23-6-2026-234741.jpg"], ["", "Success Rate", "https://i.ibb.co/JFcYXtcd/Screenshot-23-6-2026-234750.jpg"], ["", "Agility", "https://i.ibb.co/8Lf2K4SZ/Screenshot-23-6-2026-23480.jpg"], ["", "Game Sense", "https://i.ibb.co/JFqHh9k2/Screenshot-23-6-2026-234810.jpg"], ["", "Match Impact", "https://i.ibb.co/cKdmWr53/Screenshot-23-6-2026-234817.jpg"]];
const KB_OPPS = [["", "Academies", "https://i.ibb.co/4CJp0NZ/Screenshot-23-6-2026-23523.jpg"], ["", "Trials", "https://i.ibb.co/kzhKx5y/Screenshot-23-6-2026-235212.jpg"], ["", "Scholarships", "https://i.ibb.co/mC2bt9R2/Screenshot-23-6-2026-235220.jpg"], ["", "Tournaments", "https://i.ibb.co/sJJRnXC9/Screenshot-23-6-2026-235227.jpg"], ["", "Scouts", "https://i.ibb.co/Z6hCy5WY/Screenshot-23-6-2026-235233.jpg"], ["", "Sponsors", "https://i.ibb.co/Mkf7fXC7/Screenshot-23-6-2026-235241.jpg"]];
const SW_HERO_IMG = "https://i.ibb.co/5x1Nf18Z/21.png";
const SW_BANNER_IMG = "https://i.ibb.co/qFBvSJCc/Screenshot-24-6-2026-9439.jpg";
const SW_OPP_IMG = "https://i.ibb.co/rGjTRbCW/Screenshot-24-6-2026-94454.jpg";
const SW_CLOSE_IMG = "";
const SW_MEASURE = [["", "Freestyle", "https://i.ibb.co/HyvCfd0/Screenshot-24-6-2026-9420.jpg"], ["", "Backstroke", "https://i.ibb.co/gMHT6HxQ/Screenshot-24-6-2026-94215.jpg"], ["", "Breaststroke", "https://i.ibb.co/RVCf2Mw/Screenshot-24-6-2026-94224.jpg"], ["", "Butterfly", "https://i.ibb.co/Lzqzy33v/Screenshot-24-6-2026-94236.jpg"], ["", "Timing", "https://i.ibb.co/9HcRKFDM/Screenshot-24-6-2026-94244.jpg"], ["", "Personal Bests", "https://i.ibb.co/G4GPH7M0/Screenshot-24-6-2026-94256.jpg"]];
const SW_OPPS = [["", "Academies", "https://i.ibb.co/v6rFDPKf/Screenshot-24-6-2026-94331.jpg"], ["", "Competitions", "https://i.ibb.co/vgN4QMg/Screenshot-24-6-2026-94338.jpg"], ["", "Trials", "https://i.ibb.co/0VXc3fBp/Screenshot-24-6-2026-94349.jpg"], ["", "Scholarships", "https://i.ibb.co/jk8RzLRR/Screenshot-24-6-2026-94418.jpg"], ["", "Coaches", "https://i.ibb.co/SDVSkzzm/Screenshot-24-6-2026-94426.jpg"], ["", "Sponsors", "https://i.ibb.co/3Y8sn8Kb/Screenshot-24-6-2026-94435.jpg"]];
const TN_HERO_IMG = "https://i.ibb.co/pSD9MvH/23.png";
const TN_BANNER_IMG = "https://i.ibb.co/PzYpS6MC/Screenshot-24-6-2026-113231.jpg";
const TN_OPP_IMG = "https://i.ibb.co/d07ZVyjb/Screenshot-24-6-2026-113249.jpg";
const TN_MEASURE = [["", "Shots", "https://i.ibb.co/gbmMfvH4/Screenshot-24-6-2026-113124.jpg"], ["", "Accuracy", "https://i.ibb.co/WvrG23bq/Screenshot-24-6-2026-113135.jpg"], ["", "Footwork", "https://i.ibb.co/BHZqrnr9/Screenshot-24-6-2026-113145.jpg"], ["", "Defence", "https://i.ibb.co/qL9TbS6J/Screenshot-24-6-2026-113153.jpg"], ["", "Fitness", "https://i.ibb.co/wjGr6TV/Screenshot-24-6-2026-11322.jpg"], ["", "Match Impact", "https://i.ibb.co/n8gjX2Fp/Screenshot-24-6-2026-113212.jpg"]];
const TN_OPPS = [["", "Academies", "https://i.ibb.co/gbs83wL9/Screenshot-24-6-2026-11332.jpg"], ["", "Trials", "https://i.ibb.co/84zWCNn6/Screenshot-24-6-2026-113312.jpg"], ["", "Scholarships", "https://i.ibb.co/ZzGgDFqQ/Screenshot-24-6-2026-113321.jpg"], ["", "Competitions", "https://i.ibb.co/21yd9mDv/Screenshot-24-6-2026-113330.jpg"], ["", "Coaches", "https://i.ibb.co/8ndfVJGW/Screenshot-24-6-2026-113340.jpg"], ["", "Sponsors", "https://i.ibb.co/RTYZZmVN/Screenshot-24-6-2026-113348.jpg"]];
const BB_OPPS = [["", "Academies", "https://i.ibb.co/nsgL7wTb/Screenshot-23-6-2026-222119.jpg"], ["", "Trials", "https://i.ibb.co/nsk8MsMb/Screenshot-23-6-2026-222127.jpg"], ["", "Scholarships", "https://i.ibb.co/rfXH75KN/Screenshot-23-6-2026-222133.jpg"], ["", "Scouts", "https://i.ibb.co/MyZjv8pm/Screenshot-23-6-2026-222144.jpg"], ["", "Sponsors", "https://i.ibb.co/PG7mpZfX/Screenshot-23-6-2026-222150.jpg"], ["", "Tournaments", "https://i.ibb.co/pBH0Bc4q/Screenshot-23-6-2026-222158.jpg"]];
const BB_MEASURE = [["", "Points", "https://i.ibb.co/HDDqWzJv/Screenshot-23-6-2026-22744.jpg"], ["", "Assists", "https://i.ibb.co/jkgc3jKD/Screenshot-23-6-2026-22757.jpg"], ["", "Rebounds", "https://i.ibb.co/3KMgr4G/Screenshot-23-6-2026-2286.jpg"], ["", "Defence", "https://i.ibb.co/xSRK8WcX/Screenshot-23-6-2026-22813.jpg"], ["", "Hustle", "https://i.ibb.co/RT9Bz85Q/Screenshot-23-6-2026-22827.jpg"], ["", "Match Impact", "https://i.ibb.co/q3KhGmRM/Screenshot-23-6-2026-22836.jpg"]];
const FB_MEASURE = [["goal", "Goals", "https://i.ibb.co/QjT1xQwz/Screenshot-23-6-2026-213222.jpg"], ["boot", "Assists", "https://i.ibb.co/zTVL50f8/Screenshot-23-6-2026-213229.jpg"], ["passball", "Passing", "https://i.ibb.co/1ft6WZ1b/Screenshot-23-6-2026-213237.jpg"], ["shield", "Defending", "https://i.ibb.co/35dFh3m3/Screenshot-23-6-2026-213245.jpg"], ["group", "Team Contribution", "https://i.ibb.co/CK7Yn3Yn/Screenshot-23-6-2026-213257.jpg"], ["barsup", "Match Impact", "https://i.ibb.co/TBwfyx1z/Screenshot-23-6-2026-21338.jpg"]];
const FOOTER_IMG = "https://i.ibb.co/7tPrSPvc/IMG-6888.jpg"; // paste an image URL for the footer image block

const FEATURES = [
  { icon: "video", color: "#2F6BFF", title: "Performance Highlights", desc: "Upload and showcase your best moments." },
  { icon: "trophy", color: "#F59E0B", title: "Achievements & Recognition", desc: "Trophies, medals and milestones earned." },
  { icon: "chart", color: "#22C55E", title: "Rankings & Performance", desc: "Track your progress and see how you rank." },
  { icon: "cert", color: "#7B5BF0", title: "Certifications & Credentials", desc: "Verified certificates and academy recognition." },
];

const PROFILE_STATS = [
  { icon: "people", color: "#2F6BFF", n: "5K+", l: "Coach Followers" },
  { icon: "eye", color: "#2F6BFF", n: "500K+", l: "Profile Views" },
  { icon: "star", color: "#EAB308", n: "100+", l: "Connections" },
  { icon: "medal", color: "#EF4444", n: "10K+", l: "Achievements" },
];

// ---- The DugOut section ----
const DUGOUT_IMG = "https://i.ibb.co/NgB3yGpb/IMG-6898.png"; // paste an image URL here to replace the placeholder
const FEED_IMG = "https://i.ibb.co/hJJ3WdBH/unnamed.png"; // Dugout feed image (center phone)

const DUGOUT = [
  { icon: "userplus", color: "#2F6BFF", title: "Follow athletes", desc: "Keep up with the players and teams you care about, all in one feed." },
  { icon: "chat", color: "#22C55E", title: "Connect & message", desc: "Talk with coaches, fans and fellow athletes building their journey." },
  { icon: "trend", color: "#7B5BF0", title: "Watch them grow", desc: "Track milestones, rankings and standout moments as they happen." },
  { icon: "eye", color: "#F59E0B", title: "Get discovered", desc: "Put your performances in front of scouts, coaches and academies." },
];

const DUGOUT_STATS = [
  { icon: "people", color: "#2F6BFF", n: "25K+", l: "Active Athletes" },
  { icon: "chat", color: "#22C55E", n: "1.2K+", l: "Posts Daily" },
  { icon: "userplus", color: "#7B5BF0", n: "80K+", l: "Connections Made" },
  { icon: "star", color: "#F59E0B", n: "4.9", l: "Avg. Rating" },
];

// ---- CTA banner ----
const CTA_IMG = "https://i.ibb.co/G3N1P3Bh/ah.png"; // paste an image URL here to replace the placeholder

// ---- Platform features ----
const PLATFORM = [
  { icon: "AI", color: "#2F6BFF", img: "https://i.ibb.co/6cS28kYm/94149293-cca6-4f86-acca-1bacbd9c9514.png", title: "AI Performance Insights", desc: "Analyze performances, identify strengths, and get data-driven insights to improve faster." },
  { icon: "chart", color: "#22C55E", img: "https://i.ibb.co/rKqqZc5T/Screenshot-2026-06-21-214951.png", title: "Athlete Score", desc: "A standardized score that reflects your overall growth, consistency, and achievement." },
  { icon: "people", color: "#7B5BF0", img: "https://i.ibb.co/MkgNmR3J/pexels-franco-monsalvo-252430633-32101180.jpg", title: "Coach Network", desc: "Connect with verified coaches, mentors, and academies who can help you grow." },
  { icon: "folder", color: "#F59E0B", img: "https://i.ibb.co/L3rtgS9/Screenshot-2026-06-21-220041.png", title: "Digital Playbook", desc: "Store your achievements, certificates, videos, and milestones in one secure place." },
];

const TRUST = [
  { icon: "star", color: "#EAB308", strong: "4.8/5", sub: "Athlete Rating" },
  { icon: "shield", color: "#2F6BFF", strong: "Trusted by", sub: "Coaches & Academies" },
  { icon: "check", color: "#22C7DE", strong: "Secure &", sub: "Verified Profiles" },
];

// ---- Athlete Growth Score section ----
const SCORE_IMG = "https://i.ibb.co/mFN6d7yv/s16.png";     // left card image
const ANALYTICS_IMG = "https://i.ibb.co/j98g9xW7/Screenshot-21-6-2026-22657.jpg"; // bottom banner image

const LEVELS = [
  { title: "Emerging Athlete", desc: "Building skills and gaining experience.", color: "#C2825A" },
  { title: "Competitive Athlete", desc: "Competing regularly and improving.", color: "#9AA3B2" },
  { title: "Elite Athlete", desc: "Strong performance and national level.", color: "#EAB308" },
  { title: "High Performance Athlete", desc: "Top tier performance and recognition.", color: "#2F6BFF", active: true },
];

const SCORE_STATS = [
  { icon: "star", color: "#2F6BFF", n: "242", l: "Performance Rating", note: "↑ 18 pts", noteColor: "#22C55E" },
  { icon: "coach", color: "#7B5BF0", n: "4.8", l: "Coach Assessment", note: "Excellent", noteColor: "#7B5BF0" },
  { icon: "trophy", color: "#F59E0B", n: "12", l: "Tournaments Played", note: "↑ 2 this month", noteColor: "#22C55E" },
  { icon: "medal", color: "#EF4444", n: "15", l: "Achievements Unlocked", note: "View All", noteColor: "#2F6BFF" },
];

// ---- Simple process steps ----
const PROCESS = [
  { n: "01", icon: "coach", title: "Create Your Profile", desc: "Build your sporting identity with achievements, videos, certifications and performance history." },
  { n: "02", icon: "trophy", title: "Join Events & Competitions", desc: "Participate in leagues, tournaments and training programs." },
  { n: "03", icon: "chart", title: "Track Performance", desc: "Performance data, rankings and coach assessments are added to your profile." },
  { n: "04", icon: "compass", title: "Build Your Athlete Score", desc: "Measure growth through verified activity and achievements." },
  { n: "05", icon: "people", title: "Get Discovered", desc: "Gain visibility among coaches, academies and organizations." },
  { n: "06", icon: "starcircle", title: "Unlock Opportunities", desc: "Access trials, scholarships, sponsorships and development pathways." },
];

// ---- Closing banner + footer ----
const CLOSING_IMG = "https://i.ibb.co/TDpFN0PN/F18-E9-E64-2-E9-A-40-AC-ABC1-25-CED72-ACA85.png"; // paste an image URL here to replace the placeholder
const FOOTER_NAV = ["About Us", "Athletes", "Journey", "Contact"];
const footerRoute = (l) => ({ "About Us": "About", "Athletes": "Sports", "Journey": "Journey", "Contact": "Contact" }[l] || "Home");
const SOCIALS = ["instagram", "linkedin", "youtube", "x"];

// ---- sport inner-page banner images (paste URLs to replace placeholders) ----
const ACADEMY_IMG = "";
const SPONSOR_IMG = "";
const PERFORMANCE_IMG = "";

// ---- per-sport vocabulary so each sport reads naturally ----
const SPORT_TERMS = {
  Cricket: { cols: ["Runs Scored", "Wickets", "Catches / Assists"], skills: ["Batting", "Bowling", "Fielding"], playLine: "run, wicket and catch", dugoutLine: "every match, every wicket, every boundary", role: "Right Hand Batsman", topAward: "Best Batsman", bestRole: "Best Bowler", cert: "BCCI Certified Coaches", track: [["+5 to 50", "Runs Scored"], ["+5 to 20", "Wickets"], ["+2", "Per Catch"]], profile: [["324", "Runs"], ["8", "Wickets"], ["12", "Matches"]], matches: [{ opp: "XYZ School", vals: ["104 Runs", "3 Wickets", "2 Catches"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["78 Runs", "1 Wicket", "1 Catch"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["132 Runs", "2 Wickets", "3 Catches"], bd: [62, 10, 6], pts: 78 }] },
  Football: { cols: ["Goals", "Assists", "Tackles"], skills: ["Attacking", "Passing", "Defending"], playLine: "goal, assist and tackle", dugoutLine: "every match, every goal, every assist", role: "Forward · Striker", topAward: "Top Scorer", bestRole: "Best Playmaker", cert: "AIFF Licensed Coaches", track: [["+10 to 40", "Per Goal"], ["+5 to 20", "Assists"], ["+3", "Per Tackle"]], profile: [["18", "Goals"], ["11", "Assists"], ["24", "Matches"]], matches: [{ opp: "XYZ School", vals: ["2 Goals", "1 Assist", "4 Tackles"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["1 Goal", "0 Assists", "3 Tackles"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["3 Goals", "2 Assists", "5 Tackles"], bd: [62, 10, 6], pts: 78 }] },
  Basketball: { cols: ["Points", "Assists", "Rebounds"], skills: ["Scoring", "Playmaking", "Defense"], playLine: "basket, assist and rebound", dugoutLine: "every match, every basket, every rebound", role: "Shooting Guard", topAward: "Top Scorer", bestRole: "Best Defender", cert: "BFI Certified Coaches", track: [["+2 to 30", "Points"], ["+3 to 15", "Assists"], ["+2", "Per Rebound"]], profile: [["286", "Points"], ["64", "Assists"], ["20", "Matches"]], matches: [{ opp: "XYZ School", vals: ["24 Points", "6 Assists", "8 Rebounds"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["16 Points", "4 Assists", "5 Rebounds"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["31 Points", "9 Assists", "11 Rebounds"], bd: [62, 10, 6], pts: 78 }] },
  Volleyball: { cols: ["Points", "Aces", "Blocks"], skills: ["Attacking", "Serving", "Blocking"], playLine: "spike, ace and block", dugoutLine: "every match, every spike, every block", role: "Outside Hitter", topAward: "Top Scorer", bestRole: "Best Setter", cert: "VFI Certified Coaches", track: [["+2 to 25", "Points"], ["+3 to 12", "Aces"], ["+2", "Per Block"]], profile: [["198", "Points"], ["42", "Aces"], ["18", "Matches"]], matches: [{ opp: "XYZ School", vals: ["18 Points", "4 Aces", "6 Blocks"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["12 Points", "2 Aces", "3 Blocks"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["22 Points", "5 Aces", "8 Blocks"], bd: [62, 10, 6], pts: 78 }] },
  Badminton: { cols: ["Points", "Smashes", "Wins"], skills: ["Smashing", "Serving", "Defense"], playLine: "smash, rally and point", dugoutLine: "every match, every smash, every rally", role: "Singles Player", topAward: "Top Smasher", bestRole: "Best Defender", cert: "BAI Certified Coaches", track: [["+2 to 21", "Points"], ["+3 to 15", "Smashes"], ["+5", "Per Win"]], profile: [["410", "Points"], ["88", "Smashes"], ["22", "Matches"]], matches: [{ opp: "XYZ School", vals: ["21 Points", "9 Smashes", "2 Wins"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["15 Points", "5 Smashes", "1 Win"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["24 Points", "12 Smashes", "2 Wins"], bd: [62, 10, 6], pts: 78 }] },
  Kabaddi: { cols: ["Raid Points", "Tackles", "Super Tackles"], skills: ["Raiding", "Tackling", "Defense"], playLine: "raid, tackle and point", dugoutLine: "every match, every raid, every tackle", role: "Raider", topAward: "Best Raider", bestRole: "Best Defender", cert: "AKFI Certified Coaches", track: [["+1 to 10", "Raid Points"], ["+2 to 8", "Tackles"], ["+3", "Super Tackle"]], profile: [["156", "Raid Pts"], ["48", "Tackles"], ["20", "Matches"]], matches: [{ opp: "XYZ School", vals: ["12 Raid Pts", "5 Tackles", "2 Super"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["8 Raid Pts", "3 Tackles", "1 Super"], bd: [36, 5, 1], pts: 42 }, { opp: "City Lions", vals: ["15 Raid Pts", "6 Tackles", "3 Super"], bd: [62, 10, 6], pts: 78 }] },
  Swimming: { cols: ["Wins", "Medals", "Best Time"], skills: ["Speed", "Technique", "Endurance"], playLine: "lap, turn and finish", dugoutLine: "every race, every lap, every finish", role: "Freestyle Swimmer", topAward: "Fastest Swimmer", bestRole: "Best Sprinter", cert: "SFI Certified Coaches", track: [["+5 to 30", "Per Win"], ["+10", "Per Medal"], ["+5", "Personal Best"]], profile: [["14", "Wins"], ["9", "Medals"], ["26", "Races"]], matches: [{ opp: "State Meet", vals: ["1 Win", "1 Gold", "24.8s"], bd: [50, 20, 2], pts: 72 }, { opp: "District Meet", vals: ["2 Wins", "2 Silver", "25.1s"], bd: [36, 5, 1], pts: 42 }, { opp: "National Trial", vals: ["1 Win", "1 Bronze", "24.5s"], bd: [62, 10, 6], pts: 78 }] },
  Tennis: { cols: ["Aces", "Winners", "Sets Won"], skills: ["Serving", "Forehand", "Backhand"], playLine: "ace, rally and point", dugoutLine: "every match, every ace, every rally", role: "Baseline Player", topAward: "Top Server", bestRole: "Best Returner", cert: "AITA Certified Coaches", track: [["+2 to 20", "Per Ace"], ["+3 to 15", "Winners"], ["+5", "Per Set"]], profile: [["132", "Aces"], ["18", "Wins"], ["24", "Matches"]], matches: [{ opp: "XYZ Club", vals: ["8 Aces", "22 Winners", "2 Sets"], bd: [50, 20, 2], pts: 72 }, { opp: "ABC Academy", vals: ["5 Aces", "16 Winners", "2 Sets"], bd: [36, 5, 1], pts: 42 }, { opp: "City Open", vals: ["11 Aces", "28 Winners", "3 Sets"], bd: [62, 10, 6], pts: 78 }] },
};

// icons used by the Playbook feature cards and profile stats
const CR_JOURNEY = ["Gully Cricket", "School Leagues", "Box Cricket", "Club Cricket", "Corporate Leagues", "District Cricket", "State Cricket", "University Cricket", "Under16Pro", "Franchise Cricket", "International Leagues"];
const CR_PLAYBOOK = [["video", "Match Highlights"], ["trophy", "Achievements"], ["cert", "Certificates"], ["chart", "Statistics"], ["medal", "Rankings"], ["star", "Qo Score"]];
const CR_SKILLS = [["Batting", "bat"], ["Bowling", "ball"], ["Fielding", "glove"], ["Fitness", "runner"]];
const CR_COMPETE = ["Street Cricket", "Box Cricket", "Weekend Leagues", "Corporate Leagues", "School Leagues", "Club Cricket", "District Cricket", "State Tournaments", "Under16Pro", "University Cricket", "Franchise Cricket", "International Leagues"];
const CR_DUGOUT = ["Celebrate moments", "Share highlights", "Follow players", "Connect with coaches and academies"];
const CR_OPPS = [["cap", "Scholarships"], ["building", "Academies"], ["coachpin", "Coaches"], ["clipboard", "Trials"], ["binoculars", "Scouts"], ["handshake", "Sponsors"]];

function PIcon({ name, size = 22 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "video": return (<svg {...p}><rect x="3" y="6" width="12" height="12" rx="2" /><path d="m15 10 6-3v10l-6-3" /></svg>);
    case "trophy": return (<svg {...p}><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /><path d="M12 13v4M9 20h6M10 20l.4-3M14 20l-.4-3" /></svg>);
    case "chart": return (<svg {...p}><path d="M5 20V12M12 20V5M19 20v-6" /><path d="M3 20h18" /></svg>);
    case "cert": return (<svg {...p}><rect x="3" y="4" width="14" height="11" rx="2" /><path d="M6 8h8M6 11h5" /><circle cx="17" cy="16" r="3" /><path d="M17 19l-2 3 2-1 2 1-2-3" /></svg>);
    case "people": return (<svg {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 8.5a2.5 2.5 0 0 1 0 5M17.5 20c0-2.5-1-4.6-2.5-5.6" /></svg>);
    case "eye": return (<svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>);
    case "star": return (<svg {...p}><path d="M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.6 6.7 19.5l1.1-6L3.4 9.3l6-.8L12 3z" /></svg>);
    case "medal": return (<svg {...p}><circle cx="12" cy="9" r="5" /><path d="M9 13.5 7 21l5-3 5 3-2-7.5" /></svg>);
    case "userplus": return (<svg {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20c0-3.3 2.5-6 5.5-6 1.4 0 2.7.5 3.7 1.3" /><path d="M18 13.5v5M15.5 16h5" /></svg>);
    case "chat": return (<svg {...p}><path d="M21 11.5a7.5 7.5 0 0 1-10.7 6.8L4 20l1.7-5.3A7.5 7.5 0 1 1 21 11.5Z" /><path d="M8.5 11h7M8.5 14h4" /></svg>);
    case "trend": return (<svg {...p}><path d="M3 17l6-6 4 4 8-8" /><path d="M16 7h5v5" /></svg>);
    case "folder": return (<svg {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2.2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /></svg>);
    case "shield": return (<svg {...p}><path d="M12 3l8 3v5.5c0 4.8-3.4 7.8-8 9.5-4.6-1.7-8-4.7-8-9.5V6l8-3Z" /><path d="M9 11.5l2 2 4-4" /></svg>);
    case "check": return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>);
    case "calendar": return (<svg {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 9h18" /></svg>);
    case "coach": return (<svg {...p}><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.8 3.1-6.5 7-6.5s7 2.7 7 6.5" /></svg>);
    case "compass": return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z" /></svg>);
    case "starcircle": return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4z" /></svg>);
    case "badge": return (<svg {...p}><path d="M12 2.6c.8.8 2 .5 3 .9.9.5 1.1 1.7 1.9 2.3.8.6 2 .4 2.6 1.2.6.8.1 2 .5 2.9.4 1 1.5 1.4 1.5 2.5s-1.1 1.5-1.5 2.5c-.4.9.1 2.1-.5 2.9-.6.8-1.8.6-2.6 1.2-.8.6-1 1.8-1.9 2.3-1 .4-2.2.1-3 .9-.8-.8-2-.5-3-.9-.9-.5-1.1-1.7-1.9-2.3-.8-.6-2-.4-2.6-1.2-.6-.8-.1-2-.5-2.9C3.1 13.5 2 13.1 2 12s1.1-1.5 1.5-2.5c.4-.9-.1-2.1.5-2.9.6-.8 1.8-.6 2.6-1.2.8-.6 1-1.8 1.9-2.3 1-.4 2.2-.1 3-.9Z" /><path d="M9.4 11.9 12 9.8l2.6 2.1M10.3 11.5v2.6h3.4v-2.6" /></svg>);
    case "building": return (<svg {...p}><path d="M3 21h18" /><path d="M5 21V5l6-2v18" /><path d="M11 21V8h8v13" /><path d="M7.4 7v1.6M7.4 11.4v1.6M14 11v1.6M17 11v1.6M14 15v1.6M17 15v1.6" /></svg>);
    case "shieldstar": return (<svg {...p}><path d="M12 3l7 2.5V11c0 4.2-3 6.9-7 8.4-4-1.5-7-4.2-7-8.4V5.5L12 3Z" /><path d="M12 8.2l1.1 2.3 2.5.3-1.9 1.7.5 2.5L12 15.6l-2.2 1.2.5-2.5-1.9-1.7 2.5-.3z" /></svg>);
    case "scout": return (<svg {...p}><circle cx="10" cy="8" r="3" /><path d="M4.5 18.5c0-3 2.5-5.3 5.5-5.3 1.1 0 2.1.3 3 .8" /><circle cx="16.5" cy="15.5" r="3" /><path d="m19 18 2.3 2.3" /></svg>);
    case "handshake": return (<svg {...p}><path d="M2 8.5 6 7l4 3" /><path d="M22 8.5 18 7l-4.5 3.3a1.6 1.6 0 0 1-2-.1" /><path d="M10 10 7.6 12.4a1.5 1.5 0 0 0 0 2.1l.3.3a1.5 1.5 0 0 0 2.1 0L12 13" /><path d="m12 13 2.7 2.7a1.4 1.4 0 0 0 2-2L14 10.6" /><path d="m15 14.6 1.4 1.4a1.4 1.4 0 0 0 2-2L17.1 12.6" /></svg>);
    case "group3": return (<svg {...p}><circle cx="12" cy="10" r="3" /><path d="M6.5 19c0-3 2.4-5.2 5.5-5.2s5.5 2.2 5.5 5.2" /><circle cx="5" cy="9" r="2" /><circle cx="19" cy="9" r="2" /><path d="M2 16.5c0-2 1.2-3.6 3-4.1M22 16.5c0-2-1.2-3.6-3-4.1" /></svg>);
    case "person": return (<svg {...p}><circle cx="12" cy="8.5" r="3.6" /><path d="M5.5 19.5c0-3.6 2.9-6.4 6.5-6.4s6.5 2.8 6.5 6.4" /></svg>);
    case "bars": return (<svg {...p}><path d="M5 21h14" /><path d="M8 21v-5" /><path d="M12.5 21v-10" /><path d="M17 21v-14" /></svg>);
    case "share": return (<svg {...p}><circle cx="6" cy="12" r="2.5" /><circle cx="17" cy="6" r="2.5" /><circle cx="17" cy="18" r="2.5" /><path d="M8.2 10.8 14.8 7.2M8.2 13.2 14.8 16.8" /></svg>);
    case "grow": return (<svg {...p}><path d="M3 17l5-5 4 4 7-7" /><path d="M16 9h4v4" /></svg>);
    default: return null;
  }
}

// line/area chart for the Athlete Growth Score section
function GrowthChart() {
  const data = [120, 150, 170, 210, 230, 242, 270, 300, 335, 370, 410, 450];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const W = 780, H = 320, padL = 50, padR = 16, padT = 26, padB = 44, maxV = 500;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const X = (i) => padL + (i / (data.length - 1)) * plotW;
  const Y = (v) => padT + (1 - v / maxV) * plotH;
  const baseY = Y(0);
  const pts = data.map((v, i) => [X(i), Y(v)]);
  const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = "M" + X(0).toFixed(1) + " " + baseY.toFixed(1) + " " + pts.map((p) => "L" + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ") + " L" + X(data.length - 1).toFixed(1) + " " + baseY.toFixed(1) + " Z";
  const hi = 5;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2F6BFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2F6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 100, 200, 300, 400, 500].map((g) => (
        <g key={g}>
          <line x1={padL} y1={Y(g)} x2={W - padR} y2={Y(g)} stroke="#222228" strokeWidth="1" />
          <text x={padL - 10} y={Y(g) + 4} textAnchor="end" fill="#8A93AD" fontSize="12">{g}</text>
        </g>
      ))}
      <path d={area} fill="url(#growthFill)" />
      <path d={line} fill="none" stroke="#2F6BFF" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <line x1={X(hi)} y1={Y(data[hi])} x2={X(hi)} y2={baseY} stroke="#2F6BFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.55" />
      {pts.map((p, i) => (
        <g key={i}>
          {i !== hi && <text x={p[0]} y={p[1] - 12} textAnchor="middle" fill="#C9CAD2" fontSize="12" fontWeight="600">{data[i]}</text>}
          <circle cx={p[0]} cy={p[1]} r={i === hi ? 6 : 4} fill={i === hi ? "#fff" : "#2F6BFF"} stroke="#2F6BFF" strokeWidth="2" />
          <text x={p[0]} y={baseY + 22} textAnchor="middle" fill={i === hi ? "#2F6BFF" : "#8A93AD"} fontSize="12" fontWeight={i === hi ? 700 : 400}>{months[i]}</text>
        </g>
      ))}
      <g>
        <rect x={X(hi) - 22} y={Y(data[hi]) - 42} width="44" height="24" rx="6" fill="#2F6BFF" />
        <text x={X(hi)} y={Y(data[hi]) - 25} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">{data[hi]}</text>
      </g>
    </svg>
  );
}

// footer social icons
function SocialIcon({ name }) {
  const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "instagram": return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" /></svg>);
    case "linkedin": return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" /></svg>);
    case "youtube": return (<svg {...p}><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" /></svg>);
    case "x": return (<svg {...p}><path d="M5 5l14 14M19 5L5 19" /></svg>);
    default: return null;
  }
}

// ---- Tiny inline icon set (blue line icons) ----
function ContactIcon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "pin") return (<svg {...common}><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
  if (name === "mail") return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
  return (<svg {...common}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" /></svg>);
}

function Icon({ name }) {
  const p = { width: 30, height: 30, fill: "none", stroke: C.blue, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "team":
      return (<svg viewBox="0 0 24 24" {...p}><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" /><circle cx="17" cy="9" r="2.2" /><path d="M16 14c3 .3 6 2.4 6 6" /></svg>);
    case "coach":
      return (<svg viewBox="0 0 24 24" {...p}><circle cx="12" cy="8" r="3.2" /><path d="M5 21c0-4 3.1-7 7-7s7 3 7 7" /></svg>);
    case "trophy":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a3 3 0 0 0 3 3" /><path d="M17 6h3v1a3 3 0 0 1-3 3" /><path d="M12 14v4M8 21h8M9 21l.5-3M15 21l-.5-3" /></svg>);
    case "bank":
      return (<svg viewBox="0 0 24 24" {...p}><path d="M3 9 12 4l9 5" /><path d="M5 9v8M9 9v8M15 9v8M19 9v8" /><path d="M3 21h18" /></svg>);
    default:
      return null;
  }
}

function PerfSkIcon({ name }) {
  const c = { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "bat") return (<svg {...c}><rect x="12.6" y="2.6" width="5.4" height="12.5" rx="2.7" transform="rotate(45 15.3 8.85)" /><line x1="9.6" y1="12.2" x2="6.4" y2="15.4" /><circle cx="5.3" cy="17.1" r="1.8" /></svg>);
  if (name === "ball") return (<svg {...c}><circle cx="12" cy="12" r="8.5" /><path d="M8.4 4.6c2.6 4.4 2.6 10.4 0 14.8" /><path d="M15.6 4.6c-2.6 4.4-2.6 10.4 0 14.8" /></svg>);
  if (name === "glove") return (<svg {...c}><path d="M8 21v-5.5M8 15.5v-4a1.4 1.4 0 012.8 0v2.8M10.8 14.3V9a1.4 1.4 0 012.8 0v5M13.6 14V10.5a1.4 1.4 0 012.8 0V15a6 6 0 01-6 6H9.2a1.6 1.6 0 01-1.6-1.6" /><path d="M6.7 16.3l-1.9-1.9a1.3 1.3 0 011.9-1.9l1.4 1.4" /></svg>);
  return (<svg {...c}><circle cx="14.8" cy="4.6" r="2.2" /><path d="M13.6 8.4l-2.6 4 3.1 2.2-1.3 5.4" /><path d="M11 12.4l-4.4 1.1" /><path d="M13.6 14.6l4 1.1 1.4 3.4" /></svg>);
}

function OppIcon({ name }) {
  const c = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "cap") return (<svg {...c}><path d="M12 4L2 8.5l10 4.5 10-4.5z" /><path d="M6 11v4.6c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V11" /><line x1="22" y1="8.5" x2="22" y2="13.5" /></svg>);
  if (name === "building") return (<svg {...c}><path d="M4 21V10l8-5 8 5v11" /><line x1="3" y1="21" x2="21" y2="21" /><line x1="8.5" y1="21" x2="8.5" y2="12.5" /><line x1="12" y1="21" x2="12" y2="12.5" /><line x1="15.5" y1="21" x2="15.5" y2="12.5" /><path d="M12 2.5v2.5" /></svg>);
  if (name === "coachpin") return (<svg {...c}><path d="M12 2a6.5 6.5 0 00-6.5 6.5c0 4.5 6.5 11 6.5 11s6.5-6.5 6.5-11A6.5 6.5 0 0012 2z" /><circle cx="12" cy="8" r="2.2" /><path d="M8.5 13a3.6 3.6 0 017 0" /></svg>);
  if (name === "clipboard") return (<svg {...c}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3.2A1.2 1.2 0 0110.2 2h3.6A1.2 1.2 0 0115 3.2V4" /><path d="M8 10.4l1.3 1.3 2.2-2.2" /><path d="M8 15.4l1.3 1.3 2.2-2.2" /><line x1="13.6" y1="10.6" x2="16.4" y2="10.6" /><line x1="13.6" y1="15.6" x2="16.4" y2="15.6" /></svg>);
  if (name === "binoculars") return (<svg {...c}><circle cx="6.5" cy="15.5" r="3.6" /><circle cx="17.5" cy="15.5" r="3.6" /><path d="M5 12.4L7 6h2.6l.4 6" /><path d="M19 12.4L17 6h-2.6l-.4 6" /><line x1="10" y1="14" x2="14" y2="14" /></svg>);
  if (name === "handshake") return (<svg {...c}><path d="M2.5 8.5l3.5-1.5 3.5 2.5" /><path d="M21.5 8.5L18 7l-4 3" /><path d="M6 7l1.8 7a1.3 1.3 0 002.3.4l.4-.5" /><path d="M10 12.5l2 2a1.3 1.3 0 002-1.9" /><path d="M12.5 14.2l1.6 1.6a1.2 1.2 0 001.9-1.6L18 10.5" /></svg>);
  return (<svg {...c}><rect x="3" y="7.5" width="18" height="12.5" rx="2" /><path d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5" /><line x1="3" y1="12.5" x2="21" y2="12.5" /></svg>);
}

function ScoreRing({ value, color, size, label }) {
  const v = value || 82, col = color || "#22C55E", sz = size || 130;
  const r = (sz - 16) / 2, circ = 2 * Math.PI * r, off = circ * (1 - v / 100);
  return (
    <svg width={sz} height={sz} viewBox={"0 0 " + sz + " " + sz}>
      <circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke="#262E47" strokeWidth="9" />
      <circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke={col} strokeWidth="9" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off} transform={"rotate(-90 " + (sz / 2) + " " + (sz / 2) + ")"} />
      <text x="50%" y={label ? "45%" : "52%"} textAnchor="middle" dominantBaseline="middle" fontFamily="Poppins, sans-serif" fontSize={sz * 0.3} fontWeight="800" fill="#fff">{v}</text>
      {label ? <text x="50%" y="66%" textAnchor="middle" fontSize="11" fontWeight="600" fill={col}>{label}</text> : null}
    </svg>
  );
}

function SportPage({ sport, onNav, onBack }) {
  const NAME = sport.name.toUpperCase();
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={styles.crHero}>
        <div style={styles.wrap}>
          <div style={styles.crHeroEy}>{NAME}</div>
          <h1 style={{ ...styles.crHeroH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Every Ball.<br />Every Step Forward.</h1>
          <div style={styles.crHeroLine} />
          <p style={styles.crHeroP}>From gully cricket to international leagues,<br />every performance tells a story.</p>
          <p style={styles.crHeroSub}>Build your identity. Track your journey. Unlock opportunities.</p>
          <div style={{ marginTop: 30 }}><button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          <div style={styles.crMouseWrap}>
            <div style={styles.crMouse}><div style={styles.crMouseDot} /></div>
            <div style={styles.crChevron} />
          </div>
        </div>
      </section>

      <section style={{ ...styles.crSection, paddingTop: 20 }}>
        <div style={styles.wrap}>
          <div style={{ textAlign: "center" }}>
            <div style={{ ...styles.crEy, color: C.blue }}>Your Journey</div>
            <h2 style={styles.crH2}><span style={{ color: "#22C55E" }}>From Gully Cricket To International Leagues.</span></h2>
            <p style={styles.crLead}>Every match matters.</p>
            <p style={styles.crLead2}>Whether you are playing with friends on weekends or competing under stadium lights, your journey deserves to be remembered.</p>
          </div>
          <div className="cr-timeline" style={styles.crTimeline}>
            {CR_JOURNEY.map((j, i) => (
              <div key={j} style={styles.crTlItem}>
                <div style={styles.crTlNum}>{String(i + 1).padStart(2, "0")}</div>
                <div style={styles.crTlLabel}>{j}</div>
              </div>
            ))}
          </div>
          <div className="cr-track" style={styles.crTrack}>
            <div style={styles.crTrackLine} />
            {CR_JOURNEY.map((j) => (<div key={j} style={styles.crTrackCell}><div style={styles.crStem} /><div style={styles.crTlDot} /></div>))}
          </div>
          <p style={styles.crJourneyFoot}><span style={{ color: C.blue }}>SportyQo</span> helps you track your journey, no matter where the game takes you.</p>
        </div>
      </section>

      <section style={styles.crSection}>
        <div className="cr-split" style={{ ...styles.wrap, display: "grid", gridTemplateColumns: "1fr 0.85fr 0.8fr", gap: 40, alignItems: "center" }}>
          <div style={{ paddingLeft: "0px" }}>
            <div style={{ ...styles.crEy, color: "#F59E0B" }}>Playbook</div>
            <h2 style={{ ...styles.crH2L, fontSize: "clamp(30px,4.4vw,50px)" }}>Your Journey.<br />Your Legacy.</h2>
            <p style={{ ...styles.crP, fontSize: "clamp(16px,1.8vw,21px)" }}>Everything you've achieved.<br />In one place.</p>
            <button style={{ ...styles.crBtnOutline, color: "#F59E0B", borderColor: "#F59E0B", textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Open Playbook <Arrow /></button>
          </div>
          <div style={{ minHeight: 380, borderRadius: 14, transform: "translateX(-22px)", background: "center/cover no-repeat url(https://i.ibb.co/B0XyFTj/Gemini-Generated-Image-d6gszxd6gszxd6gs.png)" }} />
          <div style={styles.crPlayList}>
            {CR_PLAYBOOK.map((it) => (
              <div key={it[1]} style={styles.crPlayItem}><span style={{ color: "#F59E0B", display: "flex" }}><PIcon name={it[0]} size={18} /></span>{it[1]}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.crSection}>
        <div className="cr-split2" style={{ ...styles.wrap, ...styles.crSplit2 }}>
          <div>
            <div style={{ ...styles.crEy, color: C.blue }}>Performance</div>
            <h2 style={styles.crH2L}><span style={{ color: "#22C55E" }}>Progress You Can</span> <span style={{ color: C.blue }}>Measure.</span></h2>
            <p style={styles.crP}>Not every story is written in runs.<br />Track growth across every phase of the game.</p>
            <button style={{ ...styles.crBtnGhost, color: C.blue, textTransform: "uppercase", letterSpacing: "1px", fontSize: 17 }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>View Performance <Arrow /></button>
          </div>
          <div style={styles.crPerfRight}>
            {CR_SKILLS.map((s) => (
              <div key={s[0]} style={styles.crPerfItem}>
                <div style={styles.crPerfIcon}><PerfSkIcon name={s[1]} /></div>
                <div style={styles.crSkillLbl}>{s[0]}</div>
              </div>
            ))}
            <div style={styles.crPerfItem}>
              <ScoreRing value={82} color="#2F6BFF" size={118} label="" />
              <div style={styles.crSkillLbl}>Qo Score</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.crSection, background: "#0d0d12" }}>
        <div className="cr-compwrap" style={{ ...styles.wrap, ...styles.crCompeteWrap }}>
          <div>
            <div style={{ ...styles.crEy, color: C.blue }}>Compete</div>
            <h2 style={styles.crH2L}>Cricket Lives<br />Everywhere.</h2>
            <p style={{ ...styles.crP, marginBottom: 0 }}>Because greatness can begin anywhere.</p>
          </div>
          <div className="cr-compete" style={styles.crCompete}>
            {CR_COMPETE.map((c) => (<div key={c} className="cr-cell" style={styles.crCompeteItem}>{c}</div>))}
          </div>
        </div>
      </section>

      <section style={styles.crDugBand}>
        <div className="cr-dugband" style={{ ...styles.wrap, ...styles.crDugBand2 }}>
          <div style={{ paddingTop: 28, transform: "translateY(72px)" }}>
            <div style={{ ...styles.crEy, color: "#7B5BF0" }}>Dugout</div>
            <h2 style={{ ...styles.crH2L, fontSize: "clamp(30px,4.4vw,46px)" }}><span style={{ color: "#22C55E" }}>Stay Connected.</span><br /><span style={{ color: C.blue }}>Stay Discovered.</span></h2>
            <div style={styles.crDugList}>
              {CR_DUGOUT.map((d) => (<div key={d} style={styles.crDugItem}><span style={{ color: "#7B5BF0" }}>&#9678;</span> {d}</div>))}
            </div>
            <button style={{ ...styles.crBtnGhost, color: "#7B5BF0", textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Enter The Dugout <Arrow /></button>
          </div>
          <div style={styles.crDugPhoneWrap}>
            <div style={{ ...styles.crDugPhone2, marginLeft: -120, background: FEED_IMG ? ("center/cover no-repeat url(" + FEED_IMG + ")") : "linear-gradient(160deg, rgba(123,91,240,0.32), #0c0c10)" }} />
          </div>
          <div style={{ paddingTop: 28, transform: "translate(58px,72px)" }}>
            <div style={{ paddingLeft: "clamp(0px,3vw,50px)" }}>
              <div style={{ ...styles.crEy, color: "#F59E0B" }}>Opportunities</div>
              <h2 style={styles.crH2L}>Visibility Creates<br />Opportunity.</h2>
              <p style={styles.crP}>Talent deserves recognition.</p>
            </div>
            <div className="cr-oppgrid" style={styles.crOppGrid}>
              {CR_OPPS.map((o) => (<div key={o[1]} style={styles.crOppItem}><div style={styles.crOppIcon}><OppIcon name={o[0]} /></div><div style={styles.crOppLbl}>{o[1]}</div></div>))}
            </div>
            <button style={{ ...styles.crBtnGhost, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "1px", marginTop: 24, marginLeft: "clamp(0px,3vw,50px)" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Explore Opportunities <Arrow /></button>
          </div>
        </div>
      </section>

      <section style={styles.crClosing}>
        <div style={styles.wrap}>
          <h2 style={{ ...styles.crClosingH, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Every Ball.<br />Every Step Forward.</h2>
          <p style={styles.crClosingSub}>Because every player deserves an identity.</p>
          <p style={styles.crClosingSub2}>From gully cricket to international leagues, your journey deserves to be remembered.</p>
          <div style={{ marginTop: 28 }}><button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PBIcon({ name }) {
  const c = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "camera") return (<svg {...c}><path d="M3 8a2 2 0 012-2h2l1.5-2h7L17 6h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><circle cx="12" cy="12.5" r="3.2" /></svg>);
  if (name === "group") return (<svg {...c}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 5a3 3 0 010 6M21 20a6 6 0 00-4-5.6" /></svg>);
  if (name === "doc") return (<svg {...c}><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v4h4" /><path d="M9 13h6M9 17h6" /></svg>);
  if (name === "trophy") return (<svg {...c}><path d="M7 4h10v4a5 5 0 01-10 0z" /><path d="M7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" /><path d="M10 14h4M9 20h6M12 14v6" /></svg>);
  if (name === "play") return (<svg {...c}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /></svg>);
  return (<svg {...c}><path d="M12 3l2.4 5.3L20 9l-4 3.9L17 19l-5-3-5 3 1-6.1L4 9l5.6-.7z" /></svg>);
}

const PB_GALLERY = ["https://i.ibb.co/39nzrqY3/Screenshot-2026-06-22-225947.png", "https://i.ibb.co/LDJZxxf5/Screenshot-2026-06-22-225959.png", "https://i.ibb.co/dspFbr93/Screenshot-2026-06-22-230009.png", "https://i.ibb.co/chsBV3gC/Screenshot-2026-06-22-230033.png", "https://i.ibb.co/Dfs0CwLZ/Screenshot-2026-06-22-230049.png", "https://i.ibb.co/VYR7g0b1/Screenshot-2026-06-22-230102.png", "https://i.ibb.co/Fb2gqzp4/Screenshot-2026-06-22-230114.png", "https://i.ibb.co/GvX4D6CW/Screenshot-2026-06-22-230125.png", "https://i.ibb.co/8DZM7yKh/Screenshot-2026-06-22-230140.png"];
const PB_FEATURES = [["camera", "Playing Photos"], ["group", "Team Photos"], ["doc", "Certificates"], ["trophy", "Trophies"], ["play", "Videos"], ["star", "Achievements"]];
const PB_TIMELINE = [["2026", "School Cricket", "First match, first dream."], ["2028", "District Selection", "Hard work started paying off."], ["2030", "Best Batsman", "Recognition that motivated."], ["2032", "Century", "A moment to remember."], ["2035", "Champion", "Built for bigger challenges."]];
const PB_SHARE = [["Certified Coaches", "https://i.ibb.co/bgD2Br25/Screenshot-23-6-2026-121014.jpg"], ["Academies", "https://i.ibb.co/hR99wjzG/Screenshot-23-6-2026-121030.jpg"], ["Leagues", "https://i.ibb.co/BV8JTBkm/Screenshot-23-6-2026-121040.jpg"], ["Scouts", "https://i.ibb.co/7xQF82Tf/Screenshot-23-6-2026-121052.jpg"], ["Sponsors", "https://i.ibb.co/67ydcbFF/Screenshot-23-6-2026-121133.jpg"], ["Competitors", "https://i.ibb.co/WWWq26kY/Screenshot-23-6-2026-121142.jpg"]];
const PB_TAGS = ["Playing Photos", "Team Photos", "Certificates", "Videos", "Statistics", "Trophies", "Achievements", "Qo Score", "Coach Recommendations", "League History"];
const PB_HERO_IMG = "https://i.ibb.co/G3M1NNG0/ab.png";

function PlaybookPage({ onNav, onBack }) {
  const tints = ["rgba(47,107,255,0.22)", "rgba(34,197,94,0.18)", "rgba(245,158,11,0.18)", "rgba(123,91,240,0.18)", "rgba(47,107,255,0.18)", "rgba(34,197,94,0.2)", "rgba(245,158,11,0.16)", "rgba(47,107,255,0.2)", "rgba(123,91,240,0.2)"];
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Playbook" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.pbHeroSec, background: PB_HERO_IMG ? ("linear-gradient(90deg, rgba(8,8,11,0.94), rgba(8,8,11,0.15) 60%, rgba(8,8,11,0) 80%), right 30%/cover no-repeat url(" + PB_HERO_IMG + ")") : "transparent" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.pbHeroText}>
            <div style={styles.pbEy}>Playbook</div>
            <h1 style={{ ...styles.pbH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Your Journey.<br />Your Legacy.</h1>
            <p style={styles.pbHeroP}>Every moment. Every milestone.<br />In one place.</p>
            <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Open Your Playbook <Arrow /></button>
          </div>
        </div>
      </section>

      <section style={{ ...styles.pbSection, borderTop: "none" }}>
        <div className="pb-tri" style={{ ...styles.wrap, ...styles.pbTriGrid }}>
          <div>
            <h2 style={{ ...styles.pbH2, fontSize: "clamp(30px,4.4vw,46px)" }}>Built To Remember Every Chapter.</h2>
            <p style={{ ...styles.pbSmall, fontSize: 17 }}>From your first tournament to your biggest achievement, your Playbook grows with you.</p>
          </div>
          <div style={styles.pbFeatList}>
            {PB_FEATURES.map((f) => (
              <div key={f[1]} className="pb-feat-item" style={styles.pbFeatItem}><span style={styles.pbFeatIcon}><PBIcon name={f[0]} /></span>{f[1]}</div>
            ))}
          </div>
          <div style={styles.pbGallery}>
            {PB_GALLERY.map((src, i) => (
              <div key={i} style={{ ...styles.pbTile, background: "center/cover no-repeat url(" + src + ")" }} />
            ))}
          </div>
        </div>
      </section>

      <section style={styles.pbSection}>
        <div className="pb-jour" style={{ ...styles.wrap, ...styles.pbJourGrid }}>
          <h2 style={{ ...styles.pbH2, color: C.blue }}>A Journey<br />That&apos;s Yours.</h2>
          <div className="pb-timeline" style={styles.pbTimeline}>
            <div className="pb-tlline" style={styles.pbTlLine} />
            {PB_TIMELINE.map((t) => (
              <div key={t[0]} style={styles.pbTlItem}>
                <div style={styles.pbTlYear}>{t[0]}</div>
                <div style={styles.pbTlDot} />
                <div style={styles.pbTlTitle}>{t[1]}</div>
                <div style={styles.pbTlDesc}>{t[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.pbSection}>
        <div className="pb-share" style={{ ...styles.wrap, ...styles.pbShareGrid }}>
          <div>
            <h2 style={styles.pbH2}>Share With Those<br />Who Matter.</h2>
            <p style={styles.pbSmall}>Show your journey to the right people and create real opportunities.</p>
          </div>
          <div className="pb-shareicons" style={styles.pbShareIcons}>
            {PB_SHARE.map((s) => (
              <div key={s[0]} style={styles.pbShareItem}><div style={{ ...styles.pbShareIcon, border: "none", background: "center/cover no-repeat url(" + s[1] + ")" }} />{s[0]}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.pbSection}>
        <div style={styles.wrap}>
          <div className="pb-one" style={styles.pbOneGrid}>
            <h2 style={{ ...styles.pbH2L, color: "#22C55E" }}>One Link.<br />Your Entire Career.</h2>
            <p style={{ ...styles.pbSmall, fontSize: 18.5 }}>Everything in your Playbook becomes a powerful profile that represents you — everywhere.</p>
          </div>
          <div style={styles.pbTags}>
            {PB_TAGS.map((t) => (<span key={t} style={styles.pbTag}>{t}</span>))}
          </div>
        </div>
      </section>

      <section style={styles.pbClosing}>
        <div style={styles.wrap}>
          <h2 style={{ ...styles.pbClosingH, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Every Achievement<br />Deserves To Be Seen.</h2>
          <div style={{ marginTop: 32 }}><button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Playbook <Arrow /></button></div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const DG_FEATURES = [["video", "Share Moments", "Post photos, reels and match highlights."], ["people", "Follow Athletes", "Stay updated with teammates and competitors."], ["userplus", "Connect With Coaches", "Build relationships that help you grow."], ["trophy", "Discover Opportunities", "See trials, tournaments and scholarships."]];
const DG_FEED = [["Rahul Sharma", "78 runs", "3.2K", "2.4K"], ["Bengaluru Torpedoes", "Won 3-0", "1.8K", "1.6K"], ["Stadium FC", "Trials Announced", "1.2K", "1.2K"]];
const DG_MORE = [["person", "Coaches", "Share drills, insights and guidance.", "https://i.ibb.co/M5Vk9q1R/Screenshot-2026-06-23-110730.png"], ["bars", "Academies", "Showcase programs, events and updates.", "https://i.ibb.co/53xdTyz/Screenshot-2026-06-23-110744.png"], ["person", "Players", "Celebrate journeys and performances.", "https://i.ibb.co/zWCDVNMM/Screenshot-2026-06-23-110755.png"]];
const DG_MOMENTS = [["https://i.ibb.co/XZcN8GNX/Screenshot-23-6-2026-112854.jpg", "Rahul Sharma", "scored 78 runs", "2h ago", "2.4K"], ["https://i.ibb.co/20pTkc4n/Screenshot-23-6-2026-11292.jpg", "Bengaluru Torpedoes won", "3-0", "3h ago", "1.8K"], ["https://i.ibb.co/jPMrHxw4/Screenshot-23-6-2026-112911.jpg", "Stadium FC", "trials announced for U18", "4h ago", "1.2K"], ["https://i.ibb.co/d0dGzDc7/Screenshot-23-6-2026-112925.jpg", "New reel uploaded", "by Ananya", "5h ago", "890"], ["https://i.ibb.co/Jj478Ndv/Screenshot-23-6-2026-112933.jpg", "U16Pro League", "Finals this weekend!", "6h ago", "1.5K"]];
const DG_NOTIFS = [["Coach Arjun", "Posted a new drill", "2h ago", "11"], ["Stadium FC Academy", "Trials announced!", "4h ago", "33"], ["Ananya Rao", "Uploaded a new reel", "6h ago", "47"]];
const DG_HERO_IMG = "https://i.ibb.co/jZDyKKb3/ac.png";
const DG_COMM_IMG = "https://i.ibb.co/60R9PdRy/Screenshot-23-6-2026-102016.jpg";
const DG_ACH_IMG = "https://i.ibb.co/jZPqJL4W/ad.png";
const DG_CLOSE_IMG = "https://i.ibb.co/fYRRGJcC/ae.png";
const DG_TROPHY_IMG = "";

function DugoutPage({ onNav, onBack }) {
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Dugout" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.dgHeroSec, background: DG_HERO_IMG ? ("linear-gradient(90deg, rgba(8,8,11,0.96) 0%, rgba(8,8,11,0.86) 34%, rgba(8,8,11,0.25) 60%, rgba(8,8,11,0) 82%), right center/cover no-repeat url(" + DG_HERO_IMG + ")") : "transparent" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.dgHeroText}>
            <div style={styles.dgEy}>The Dugout</div>
            <h1 style={{ ...styles.dgH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Stay Connected.<br />Stay Discovered.</h1>
            <p style={styles.dgHeroP}>Follow athletes, coaches and academies. Share moments, celebrate achievements and discover opportunities across the sporting community.</p>
            <div style={styles.dgBtnRow}>
              <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Enter The Dugout <Arrow /></button>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.dgSection}>
        <div className="dg-grid" style={{ ...styles.wrap, ...styles.dgSecGrid }}>
          <div>
            <div style={styles.dgEy2}>Built For Connection</div>
            <h2 style={styles.dgH2}>Your Sporting Community.</h2>
            <div style={styles.dgFeatGrid}>
              {DG_FEATURES.map((f) => (
                <div key={f[1]} style={styles.dgFeatCard}>
                  <div style={styles.dgFeatIcon}><PIcon name={f[0]} size={20} /></div>
                  <div style={styles.dgFeatTitle}>{f[1]}</div>
                  <div style={styles.dgFeatDesc}>{f[2]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...styles.dgCommImg, background: DG_COMM_IMG ? ("url(" + DG_COMM_IMG + ") center/contain no-repeat #000") : "linear-gradient(160deg, rgba(47,107,255,0.22), #0c0c10)" }} />
        </div>
      </section>

      <section style={{ ...styles.dgAchSec, background: DG_ACH_IMG ? ("linear-gradient(90deg, rgba(8,8,11,0.93) 0%, rgba(8,8,11,0.45) 28%, rgba(8,8,11,0.12) 50%, rgba(8,8,11,0.55) 78%, rgba(8,8,11,0.92) 100%), center 10%/cover no-repeat url(" + DG_ACH_IMG + ")") : "linear-gradient(120deg,#0c1322,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div className="dg-ach" style={styles.dgAchRow}>
            <div style={styles.dgAchLeft}>
              <h2 style={styles.dgAchH2}>Every Achievement<br />Deserves To Be Seen.</h2>
              <div style={{ width: 50, height: 3, background: C.blue, borderRadius: 2, margin: "18px 0 20px" }} />
              <p style={styles.dgAchP}>From match-winning performances to personal bests, showcase your journey and inspire others.</p>
            </div>
            <div style={styles.dgAchColR}>
              <div style={styles.dgAchCard}>
                <span style={styles.dgTrophyIcon}>&#127942;</span>
                <div>
                  <div style={styles.dgAchName}>Rahul Sharma</div>
                  <div style={styles.dgAchWon}>won Player of the Match</div>
                  <div style={styles.dgAchMeta}>U16 Cricket League</div>
                  <div style={styles.dgAchTime}>Today</div>
                </div>
              </div>
              <div style={{ ...styles.dgAchCard, gap: 30 }}>
                <span style={styles.dgAchStat}><span style={{ color: "#ef4444", fontSize: 16 }}>&#10084;</span> 2,400</span>
                <span style={styles.dgAchStat}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.6 8.6 0 0 1-3.9-.9L3 21l1.9-5.6A8.4 8.4 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5Z" /></svg> 132</span>
              </div>
              <div style={styles.dgAchCard}>
                <span style={styles.dgPlayCirc}>&#9654;</span>
                <div>
                  <div style={styles.dgAchName2}>Match highlight uploaded</div>
                  <div style={styles.dgAchTime}>Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.dgSection}>
        <div className="dg-more" style={{ ...styles.wrap, ...styles.dgMoreGrid }}>
          <div>
            <h2 style={{ ...styles.dgH2, whiteSpace: "nowrap" }}>More Than A Feed.</h2>
            <div style={{ width: 50, height: 3, background: C.blue, borderRadius: 2, margin: "0 0 18px" }} />
            <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7 }}>A community that supports, guides and grows together.</p>
          </div>
          <div className="dg-morecards" style={styles.dgMoreCards}>
            {DG_MORE.map((m) => (
              <div key={m[1]} style={{ ...styles.dgMoreCard, background: m[3] ? ("center/cover no-repeat url(" + m[3] + ")") : "linear-gradient(160deg, rgba(47,107,255,0.2), #0c0c10)" }}>
                <div style={styles.dgMoreShade} />
                <div style={styles.dgMoreInner}>
                  <div style={styles.dgMoreIcon}><PIcon name={m[0]} size={22} /></div>
                  <div>
                    <div style={styles.dgMoreTitle}>{m[1]}</div>
                    <div style={styles.dgMoreDesc}>{m[2]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.dgSection}>
        <div className="dg-mom" style={{ ...styles.wrap, ...styles.dgMomGrid }}>
          <h2 style={{ ...styles.dgH2, whiteSpace: "nowrap" }}>Real Moments.<br />Real Connections.</h2>
          <div className="dg-momrow" style={styles.dgMomRow}>
            {DG_MOMENTS.map((m) => (
              <div key={m[1]} className="dg-momchip" style={styles.dgMom}>
                <div style={styles.dgMomTop}>
                  <div style={{ ...styles.dgMomIcon, background: m[0] ? ("center/cover no-repeat url(" + m[0] + ")") : "linear-gradient(150deg, rgba(47,107,255,0.45), #15151c)" }} />
                  <div>
                    <div style={styles.dgMomName}>{m[1]}</div>
                    <div style={styles.dgMomDetail}>{m[2]}</div>
                    <div style={styles.dgMomTime}>{m[3]}</div>
                  </div>
                </div>
                <div style={styles.dgMomLikes}><span style={{ color: "#ef4444", fontSize: 14 }}>&#10084;</span> {m[4]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.dgCloseSec, background: DG_CLOSE_IMG ? ("center 30%/cover no-repeat url(" + DG_CLOSE_IMG + ")") : "linear-gradient(120deg,#0c1322,#0a0a0c)" }}>
        <div className="dg-close" style={{ ...styles.wrap, ...styles.dgCloseRow, width: "100%" }}>
          <div>
            <h2 style={{ ...styles.dgClosingH, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Stay Connected.<br />Stay Discovered.</h2>
            <p style={styles.dgCloseP}>Because opportunities begin with visibility.</p>
          </div>
          <div style={styles.dgCloseRight}>
            <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Enter The Dugout <Arrow /></button>
            <div style={styles.dgCloseIcons}>
              <div style={styles.dgCloseIcon}><span style={{ color: C.blue, display: "flex" }}><PIcon name="people" size={22} /></span><span style={{ color: C.soft }}>Connect</span></div>
              <div style={styles.dgCloseDiv} />
              <div style={styles.dgCloseIcon}><span style={{ color: C.blue, display: "flex" }}><PIcon name="share" size={22} /></span><span style={{ color: C.soft }}>Share</span></div>
              <div style={styles.dgCloseDiv} />
              <div style={styles.dgCloseIcon}><span style={{ color: C.blue, display: "flex" }}><PIcon name="grow" size={22} /></span><span style={{ color: C.soft }}>Grow</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FtIcon({ name }) {
  const c = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "brain") return (<svg {...c}><path d="M12 5a2.5 2.5 0 00-4.9-.7A2.5 2.5 0 005 8a2.5 2.5 0 00-.5 4.5A2.5 2.5 0 007 16a2.5 2.5 0 005 .4z" /><path d="M12 5a2.5 2.5 0 014.9-.7A2.5 2.5 0 0119 8a2.5 2.5 0 01.5 4.5A2.5 2.5 0 0117 16a2.5 2.5 0 01-5 .4z" /></svg>);
  if (name === "bars") return (<svg {...c} strokeWidth="2.4"><line x1="6" y1="20" x2="6" y2="13" /><line x1="12" y1="20" x2="12" y2="8" /><line x1="18" y1="20" x2="18" y2="4" /></svg>);
  if (name === "target") return (<svg {...c}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1.1" fill="currentColor" /></svg>);
  if (name === "group") return (<svg {...c}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 5a3 3 0 010 6M21 20a6 6 0 00-4-5.6" /></svg>);
  if (name === "play") return (<svg {...c}><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" /></svg>);
  if (name === "crown") return (<svg {...c}><path d="M4 18h16M5 8l3.5 4L12 6l3.5 6L19 8l-1.5 10h-11z" /></svg>);
  return null;
}

const FT_ITEMS = [
  ["brain", "AI Match Analysis", "Reads every performance and helps you understand your game.", ["AI Insights", "Match Trends", "Personalised Feedback"], "https://i.ibb.co/RmwYdCD/Screenshot-23-6-2026-122834.jpg"],
  ["bars", "Live Performance Metrics", "Track every stat, every match and every season.", ["Runs", "Wickets", "Win Rate", "Progress"], "https://i.ibb.co/BKdHDCRs/Screenshot-23-6-2026-122848.jpg"],
  ["target", "Skill Development Plans", "Train with purpose, not just repetition.", ["Goals", "Weekly Plans", "Milestones"], "https://i.ibb.co/VWP4s4JZ/Screenshot-23-6-2026-123149.jpg"],
  ["qo", "Qo Score", "India's standardized performance rating system.", ["Performance", "Rankings", "Recognition"], "https://i.ibb.co/gFBV0B1N/Screenshot-23-6-2026-122927.jpg"],
  ["group", "Coach Network", "Connect with verified coaches and academies.", ["Mentorship", "Feedback", "Growth"], "https://i.ibb.co/N2zrsMgR/Screenshot-23-6-2026-122943.jpg"],
  ["play", "Playbook", "A digital record of your sporting journey.", ["Highlights", "Achievements", "Certificates", "Videos"], "https://i.ibb.co/VcGjVNbW/Screenshot-23-6-2026-12303.jpg"],
  ["crown", "Opportunities", "Visibility that creates possibilities.", ["Scholarships", "Trials", "Sponsors", "Scouts"], "https://i.ibb.co/xtGnVsgX/Screenshot-23-6-2026-123017.jpg"],
];

function FeaturesPage({ onNav, onBack }) {
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Features" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={styles.ftHero}>
        <div style={styles.wrap}>
          <div style={styles.ftEy}>The SportyQo Advantage</div>
          <h1 style={{ ...styles.ftH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Performance.<br />Progress.<br />Opportunities.</h1>
          <p style={styles.ftSub}>Everything athletes need. Nothing they don&apos;t.</p>
        </div>
      </section>

      <section style={styles.ftList}>
        <div style={styles.wrap}>
          {FT_ITEMS.map((f) => (
            <div key={f[1]} className="ft-row" style={styles.ftRow}>
              <div style={styles.ftIconBox}>{f[4] ? <img src={f[4]} alt="" style={styles.ftIconImg} /> : (f[0] === "qo" ? <div style={styles.ftQo}>82</div> : null)}</div>
              <div>
                <div style={styles.ftTitle}>{f[1]}</div>
                <div style={styles.ftDesc}>{f[2]}</div>
              </div>
              <div style={styles.ftTags}>
                {f[3].map((t, i) => (<React.Fragment key={t}>{i > 0 ? <span style={styles.ftDotSep}>&bull;</span> : null}<span>{t}</span></React.Fragment>))}
              </div>
              <div style={styles.ftArrow}><Arrow /></div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.ftClosing}>
        <div style={styles.wrap}>
          <h2 style={styles.ftClosingH}>Everything You Need.<br />Nothing You Don&apos;t<span style={{ color: C.blue }}>.</span></h2>
          <div style={{ marginTop: 30 }}><button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px" }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function JrIcon({ name }) {
  const c = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "person") return (<svg {...c}><circle cx="12" cy="8" r="4" /><path d="M5 20a7 7 0 0114 0" /></svg>);
  if (name === "trophy") return (<svg {...c}><path d="M7 4h10v4a5 5 0 01-10 0z" /><path d="M7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" /><path d="M10 14h4M9 20h6M12 14v6" /></svg>);
  if (name === "bars") return (<svg {...c} strokeWidth="2.2"><line x1="6" y1="20" x2="6" y2="13" /><line x1="12" y1="20" x2="12" y2="8" /><line x1="18" y1="20" x2="18" y2="4" /></svg>);
  if (name === "eye") return (<svg {...c}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>);
  return (<svg {...c}><path d="M12 3l2.4 5.3L20 9l-4 3.9L17 19l-5-3-5 3 1-6.1L4 9l5.6-.7z" /></svg>);
}

function JrVisual({ i }) {
  const S = { stroke: "#5b6580", strokeWidth: 1.6, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  if (i === 0) return (<svg width="118" height="146" viewBox="0 0 118 146"><rect x="22" y="6" width="74" height="134" rx="12" {...S} /><line x1="40" y1="14" x2="58" y2="14" stroke="#2F6BFF" strokeWidth="2" strokeLinecap="round" /><circle cx="44" cy="46" r="11" {...S} /><line x1="62" y1="42" x2="86" y2="42" {...S} /><line x1="62" y1="52" x2="80" y2="52" {...S} /><circle cx="36" cy="78" r="3" {...S} /><line x1="46" y1="78" x2="86" y2="78" {...S} /><circle cx="36" cy="94" r="3" {...S} /><line x1="46" y1="94" x2="86" y2="94" {...S} /><circle cx="36" cy="110" r="3" {...S} /><line x1="46" y1="110" x2="86" y2="110" {...S} /></svg>);
  if (i === 1) return (<svg width="220" height="120" viewBox="0 0 220 120"><path d="M20 92 Q110 36 200 92" {...S} /><path d="M40 100 Q110 60 180 100" {...S} /><ellipse cx="110" cy="100" rx="56" ry="10" {...S} /><line x1="36" y1="56" x2="36" y2="40" {...S} /><line x1="184" y1="56" x2="184" y2="40" {...S} /><circle cx="30" cy="34" r="1.5" fill="#5b6580" stroke="none" /><circle cx="36" cy="34" r="1.5" fill="#5b6580" stroke="none" /><circle cx="42" cy="34" r="1.5" fill="#5b6580" stroke="none" /><circle cx="178" cy="34" r="1.5" fill="#5b6580" stroke="none" /><circle cx="184" cy="34" r="1.5" fill="#5b6580" stroke="none" /><circle cx="190" cy="34" r="1.5" fill="#5b6580" stroke="none" /></svg>);
  if (i === 2) {
    const r = 64, circ = 2 * Math.PI * r, off = circ * 0.18;
    return (<svg width="160" height="160" viewBox="0 0 160 160"><circle cx="80" cy="80" r={r} fill="none" stroke="#222a40" strokeWidth="5" /><circle cx="80" cy="80" r={r} fill="none" stroke="#2F6BFF" strokeWidth="5" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off} transform="rotate(-90 80 80)" /><text x="80" y="64" textAnchor="middle" fontSize="13" fill="#9A9AA6" fontFamily="Inter, sans-serif">Qo Score</text><text x="80" y="102" textAnchor="middle" fontSize="38" fontWeight="800" fill="#fff" fontFamily="Poppins, sans-serif">82</text></svg>);
  }
  if (i === 3) return (<svg width="150" height="150" viewBox="0 0 150 150"><circle cx="68" cy="48" r="18" {...S} /><path d="M48 44 Q68 22 90 40" {...S} /><path d="M38 120 Q68 78 98 120" {...S} /><rect x="96" y="64" width="34" height="46" rx="3" {...S} /><line x1="103" y1="76" x2="123" y2="76" {...S} /><line x1="103" y1="86" x2="123" y2="86" {...S} /><line x1="103" y1="96" x2="118" y2="96" {...S} /></svg>);
  return (<svg width="140" height="160" viewBox="0 0 140 160"><rect x="36" y="14" width="62" height="138" {...S} /><path d="M36 14 L74 26 L74 142 L36 152 Z" {...S} /><path d="M74 26 L128 152 L74 142 Z" fill="rgba(47,107,255,0.12)" stroke="none" /><circle cx="66" cy="86" r="2.4" fill="#5b6580" stroke="none" /></svg>);
}

const JR_STEPS = [["person", "Create Your Profile", "Build your sporting identity in just a few minutes."], ["trophy", "Play And Compete", "Join any league and compete from local games to big stages."], ["bars", "Build Your Qo Score", "Your performance is tracked. Your progress is measured."], ["eye", "Get Recognized", "Get discovered by coaches, scouts and academies."], ["star", "Unlock Opportunities", "Scholarships, trials, sponsors and professional opportunities await you."]];

function JourneyPage({ onNav, onBack }) {
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Journey" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={styles.jrHero}>
        <div style={styles.wrap}>
          <div style={styles.jrEy}>excellence</div>
          <h1 style={{ ...styles.jrH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Your Journey<br />Starts Here.</h1>
          <div style={styles.jrUnder} />
          <p style={styles.jrSub}>Create. Compete. Progress. Get Discovered.</p>
        </div>
      </section>

      <section style={styles.jrSteps}>
        <div style={styles.wrap}>
          {JR_STEPS.map((st, i) => (
            <div key={st[1]} className="jr-step" style={styles.jrStep}>
              <div style={styles.jrNum}>{"0" + (i + 1)}</div>
              <div style={styles.jrIconCol}>
                <div style={styles.jrCircle}><JrIcon name={st[0]} /></div>
                {i < 4 ? <><div style={styles.jrLine} /><div style={styles.jrDot} /></> : null}
              </div>
              <div style={styles.jrText}>
                <div style={styles.jrStepLabel}>Step 0{i + 1}</div>
                <h3 style={styles.jrTitle}>{st[1]}</h3>
                <p style={styles.jrDesc}>{st[2]}</p>
              </div>
              <div className="jr-visual" style={styles.jrVisual}><JrVisual i={i} /></div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.jrClosing}>
        <div style={styles.wrap}>
          <h2 style={styles.jrClosingH}>Your Journey Never Stops<span style={{ color: C.blue }}>.</span></h2>
          <p style={styles.jrClosingSub}>Every player deserves an identity.</p>
          <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FbMIcon({ name }) {
  const p = { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "goal": return (<svg {...p}><path d="M3 19V7h18v12" /><path d="M3 19h18" /><path d="M7.5 7v12M12 7v12M16.5 7v12M3 11h18M3 15h18" /><circle cx="18" cy="17.6" r="1.3" fill="currentColor" stroke="none" /></svg>);
    case "boot": return (<svg {...p}><path d="M3 8c2.6 0 4.4.9 6.2 2.7 1 1 2 1.3 3.3 1.3H18c2 0 3 1.2 3 3v2H4a1 1 0 0 1-1-1V8Z" /><path d="M7 17v1.6M10 17v1.6M13 17v1.6M16 17v1.6" /></svg>);
    case "passball": return (<svg {...p}><circle cx="15" cy="10" r="5.5" /><path d="M15 6.6l1.7 1.2-.65 2h-2.1l-.65-2L15 6.6Z" /><path d="M3.5 18l5-2" /><path d="M8.5 16l-2.4-.4M8.5 16l-.4-2.4" /></svg>);
    case "shield": return (<svg {...p}><path d="M12 3l7 2.5V11c0 4.2-3 6.9-7 8.4-4-1.5-7-4.2-7-8.4V5.5L12 3Z" /><path d="M9.4 11.4l1.9 1.9 3.4-3.7" /></svg>);
    case "group": return (<svg {...p}><circle cx="12" cy="9" r="2.6" /><path d="M7 18c0-2.8 2.2-5 5-5s5 2.2 5 5" /><circle cx="5.5" cy="10" r="2" /><circle cx="18.5" cy="10" r="2" /><path d="M2.6 17c0-1.8 1.1-3.3 2.8-3.9M21.4 17c0-1.8-1.1-3.3-2.8-3.9" /></svg>);
    case "barsup": return (<svg {...p}><path d="M4 20h16" /><path d="M7 20v-5M12 20v-9M17 20v-13" /><rect x="15.6" y="2.8" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" /></svg>);
    default: return null;
  }
}

function TennisPage({ sport, onNav, onBack }) {
  const A = "#C5F84E";
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: TN_HERO_IMG ? ("right 18%/cover no-repeat url(" + TN_HERO_IMG + ")") : "linear-gradient(120deg,#0f140a,#0a0e0a)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Focus.<br />Perform.<br /><span style={{ color: A }}>Win.</span></h1>
            <p style={styles.fbSub}>From first practice to match point.<br />Track your journey. Celebrate every milestone.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, background: "#000000" }}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {TN_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px", background: "#000000" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "0.9fr 1.1fr", alignItems: "center" }}>
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", paddingLeft: "clamp(0px,3vw,50px)", background: "linear-gradient(90deg,#C5F84E,#FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: TN_BANNER_IMG ? ("center/cover no-repeat url(" + TN_BANNER_IMG + ")") : "linear-gradient(120deg,#0f140a,#0a0e0a)" }} />
        </div>
      </section>

      <section style={styles.bbOppSec}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.15fr 0.85fr" }}>
          <div style={{ ...styles.bbOppImg, background: TN_OPP_IMG ? ("center/cover no-repeat url(" + TN_OPP_IMG + ")") : "linear-gradient(120deg,#0f140a,#0a0e0a)" }} />
          <div style={{ ...styles.bbOppList, paddingLeft: "clamp(0px,6vw,110px)" }}>
            {TN_OPPS.map((o) => (
              <div key={o[1]} className="bb-opp-item" style={styles.bbOppItem}>
                <span style={{ ...styles.bbOppIcon, color: A }}>{o[2] ? <img src={o[2]} alt="" style={styles.bbOppIconImg} /> : null}</span>
                <span style={styles.bbOppLabel}>{o[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.bbCloseSec, background: "center/cover no-repeat url(https://i.ibb.co/sdJ1NFYz/24.png)" }}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", gap: 36 }}>
          <h2 style={{ ...styles.fbClosingH, textAlign: "left" }}>Every Rally.<br />Every Point.<br /><span style={{ color: A }}>Every Memory.</span></h2>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SwimmingPage({ sport, onNav, onBack }) {
  const A = "#22D3EE";
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: SW_HERO_IMG ? ("right 18%/cover no-repeat url(" + SW_HERO_IMG + ")") : "linear-gradient(120deg,#0a1420,#0a0e14)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Every<br /><span style={{ color: A }}>Second</span><br />Counts<span style={{ color: A }}>.</span></h1>
            <p style={styles.fbSub}>From your first lap to personal bests.<br />Track your journey. Celebrate your progress.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, background: "#000000" }}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {SW_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px", background: "#000000" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "0.9fr 1.1fr", alignItems: "center" }}>
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", paddingLeft: "clamp(0px,3vw,50px)", background: "linear-gradient(90deg,#FFFFFF,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
          <div style={{ ...styles.bbOppImg, minHeight: 385, width: "93%", marginLeft: "auto", background: SW_BANNER_IMG ? ("url(" + SW_BANNER_IMG + ") center/contain no-repeat #000") : "linear-gradient(120deg,#0a1420,#0a0e14)" }} />
        </div>
      </section>

      <section style={styles.bbOppSec}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.15fr 0.85fr" }}>
          <div style={{ ...styles.bbOppImg, minHeight: 450, background: SW_OPP_IMG ? ("url(" + SW_OPP_IMG + ") center/contain no-repeat #000") : "linear-gradient(120deg,#0a1420,#0a0e14)" }} />
          <div style={{ ...styles.bbOppList, paddingLeft: "clamp(0px,6vw,110px)" }}>
            {SW_OPPS.map((o) => (
              <div key={o[1]} className="bb-opp-item" style={styles.bbOppItem}>
                <span style={{ ...styles.bbOppIcon, color: A }}>{o[2] ? <img src={o[2]} alt="" style={styles.bbOppIconImg} /> : null}</span>
                <span style={styles.bbOppLabel}>{o[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.bbCloseSec, background: "center/cover no-repeat url(https://i.ibb.co/jsxnC95/22.png)" }}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", gap: 36, paddingLeft: "clamp(40px,7vw,120px)" }}>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
          <h2 style={{ ...styles.fbClosingH, textAlign: "left" }}>Every Lap.<br /><span style={{ color: A }}>Every Second.</span><br />Every Memory.</h2>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function KabaddiPage({ sport, onNav, onBack }) {
  const A = "#22C55E";
  const GRAD = "linear-gradient(90deg,#22C55E,#2DD4BF)";
  const gradTxt = { background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 };
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: KB_HERO_IMG ? ("right 18%/cover no-repeat url(" + KB_HERO_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Breathe.<br />Strategize.<br /><span style={gradTxt}>Dominate.</span></h1>
            <p style={styles.fbSub}>From your first raid to ultimate glory.<br />Track your journey. Build your legacy.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, background: "#000000" }}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {KB_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center" }}>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: KB_BANNER_IMG ? ("left center/cover no-repeat url(" + KB_BANNER_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }} />
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", background: "linear-gradient(90deg,#22C55E,#FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
        </div>
      </section>

      <section style={styles.bbOppSec}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid }}>
          <div style={{ ...styles.bbOppList, paddingLeft: "clamp(0px,6vw,110px)" }}>
            {KB_OPPS.map((o) => (
              <div key={o[1]} className="bb-opp-item" style={styles.bbOppItem}>
                <span style={{ ...styles.bbOppIcon, color: A }}>{o[2] ? <img src={o[2]} alt="" style={styles.bbOppIconImg} /> : null}</span>
                <span style={styles.bbOppLabel}>{o[1]}</span>
              </div>
            ))}
          </div>
          <div style={{ ...styles.bbOppImg, background: KB_OPP_IMG ? ("center/cover no-repeat url(" + KB_OPP_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }} />
        </div>
      </section>

      <section style={{ ...styles.bbCloseSec, background: "center/cover no-repeat url(https://i.ibb.co/3Yjc1QNq/20.png)" }}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", gap: 36, paddingLeft: "clamp(40px,7vw,120px)" }}>
          <h2 style={{ ...styles.fbClosingH, textAlign: "left" }}>Every Raid.<br />Every Tackle.<br />Every Moment.<br /><span style={gradTxt}>Every Memory.</span></h2>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BadmintonPage({ sport, onNav, onBack }) {
  const A = "#22C55E";
  const GRAD = "linear-gradient(90deg,#22C55E,#2DD4BF)";
  const gradTxt = { background: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 };
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: BM_HERO_IMG ? ("right 18%/cover no-repeat url(" + BM_HERO_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Focus.<br />Move.<br /><span style={gradTxt}>Outplay.</span></h1>
            <p style={styles.fbSub}>From first rallies to match points.<br />Track your journey. Celebrate every win.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, background: "#000000" }}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={{ ...styles.fbMeasureRow, gridTemplateColumns: "repeat(5,1fr)" }}>
            {BM_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "0.9fr 1.1fr", alignItems: "center" }}>
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", paddingLeft: "clamp(0px,3vw,50px)", background: "linear-gradient(90deg,#22C55E,#FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: BM_BANNER_IMG ? ("left center/cover no-repeat url(" + BM_BANNER_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }} />
        </div>
      </section>

      <section style={styles.bbOppSec}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.15fr 0.85fr" }}>
          <div style={{ ...styles.bbOppImg, background: BM_OPP_IMG ? ("center/cover no-repeat url(" + BM_OPP_IMG + ")") : "linear-gradient(120deg,#0c1712,#0a0a0c)" }} />
          <div style={{ ...styles.bbOppList, paddingLeft: "clamp(0px,8vw,150px)" }}>
            {BM_OPPS.map((o) => (
              <div key={o[1]} className="bb-opp-item" style={styles.bbOppItem}>
                <span style={{ ...styles.bbOppIcon, color: A }}>{o[2] ? <img src={o[2]} alt="" style={styles.bbOppIconImg} /> : null}</span>
                <span style={styles.bbOppLabel}>{o[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...styles.bbCloseSec, background: "center/cover no-repeat url(https://i.ibb.co/bR5xL7Sh/17.png)" }}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", gap: 36, transform: "translateY(36px)" }}>
          <h2 style={{ ...styles.fbClosingH, textAlign: "left" }}>Every Rally.<br />Every Point.<br /><span style={gradTxt}>Every Memory.</span></h2>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function VolleyballPage({ sport, onNav, onBack }) {
  const A = "#7B5BF0";
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: VB_HERO_IMG ? ("right 18%/cover no-repeat url(" + VB_HERO_IMG + ")") : "linear-gradient(120deg,#140d1f,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Rise<br /><span style={{ color: A }}>Together.</span></h1>
            <p style={styles.fbSub}>From first serves to championship moments.<br />Track your journey. Celebrate every point.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, marginTop: "clamp(24px,4vw,56px)", padding: "50px 0 76px", background: "#000000" }}>
        <div style={styles.wrap}>
          <div style={{ ...styles.fbEy2, color: A, textAlign: "left", fontSize: 16, marginLeft: "clamp(0px,3vw,50px)" }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {VB_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ marginTop: "clamp(24px,4vw,56px)", padding: "10px 0 50px" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center" }}>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: VB_BANNER_IMG ? ("center/cover no-repeat url(" + VB_BANNER_IMG + ")") : "linear-gradient(120deg,#140d1f,#0a0a0c)" }} />
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", background: "linear-gradient(90deg,#7B5BF0,#FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
        </div>
      </section>

      <section style={styles.fbVisSec}>
        <div className="fb-vis" style={{ ...styles.wrap, ...styles.fbVisGrid }}>
          <div style={{ paddingLeft: "clamp(0px,4vw,70px)" }}>
            <h2 style={styles.fbVisH2}>Visibility<br />Creates <span style={{ color: A }}>Opportunity.</span></h2>
            <div style={{ width: 60, height: 3, background: A, borderRadius: 2, margin: "16px 0 24px" }} />
            <div style={styles.fbVisTags}>Academies&ensp;|&ensp;Trials&ensp;|&ensp;Scholarships</div>
            <div style={styles.fbVisTags}>Scouts&ensp;|&ensp;Sponsors&ensp;|&ensp;Tournaments</div>
          </div>
          <div style={{ ...styles.fbVisImg, background: VB_VIS_IMG ? ("center/cover no-repeat url(" + VB_VIS_IMG + ")") : C.panel }} />
        </div>
      </section>

      <section style={styles.bbCloseSec}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <h2 style={{ ...styles.fbClosingH, fontSize: "clamp(30px,4.8vw,56px)", textAlign: "center" }}>Every Rally. <span style={{ color: A }}>Every Point.</span><br />Every Memory.</h2>
        </div>
      </section>

      <section style={{ padding: "clamp(72px,9vw,120px) 0", textAlign: "right", background: "center/cover no-repeat url(https://i.ibb.co/DPV0QqCx/14.png)" }}>
        <div style={{ ...styles.wrap, transform: "translateY(-24px)" }}>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
          <div style={{ ...styles.vbCloseSub, marginTop: 18 }}>Your Journey. Your Team. Your Playbook.</div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BasketballPage({ sport, onNav, onBack }) {
  const A = sport.color;
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: BB_HERO_IMG ? ("right 18%/cover no-repeat url(" + BB_HERO_IMG + ")") : "linear-gradient(120deg,#140f0a,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={styles.fbH1}>Own<br />The<br /><span style={{ color: A }}>Moment.</span></h1>
            <p style={styles.fbSub}>From street courts to championship nights.<br />Track your journey. Unlock your potential.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.fbMeasureSec, background: "#000000" }}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {BB_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : null}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center" }}>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: BB_MEASURE_IMG ? ("center 30%/cover no-repeat url(" + BB_MEASURE_IMG + ")") : "linear-gradient(120deg,#140f0a,#0a0a0c)" }} />
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", background: "linear-gradient(90deg,#F59E0B,#FFFFFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
        </div>
      </section>

      <section style={styles.bbOppSec}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid }}>
          <div style={{ ...styles.bbOppList, paddingLeft: "clamp(0px,5vw,90px)" }}>
            {BB_OPPS.map((o) => (
              <div key={o[1]} className="bb-opp-item" style={styles.bbOppItem}>
                <span style={{ ...styles.bbOppIcon, color: A }}>{o[2] ? <img src={o[2]} alt="" style={styles.bbOppIconImg} /> : null}</span>
                <span style={styles.bbOppLabel}>{o[1]}</span>
              </div>
            ))}
          </div>
          <div style={{ ...styles.bbOppImg, background: BB_OPP_IMG ? ("center/cover no-repeat url(" + BB_OPP_IMG + ")") : "linear-gradient(120deg,#1a120a,#0a0a0c)" }} />
        </div>
      </section>

      <section style={styles.bbCloseSec}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
          <h2 style={{ ...styles.fbClosingH, fontSize: "clamp(30px,4.8vw,56px)", textAlign: "center" }}>Every Game. Every Moment.<br /><span style={{ color: A }}>Every Memory.</span></h2>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FootballPage({ sport, onNav, onBack }) {
  const A = sport.color;
  return (
    <div style={{ ...styles.page, background: "#000000" }}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "Sports" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.fbHeroSec, background: FB_HERO_IMG ? ("right 18%/cover no-repeat url(" + FB_HERO_IMG + ")") : "linear-gradient(120deg,#0d140d,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={styles.fbHeroText}>
            <div style={{ ...styles.fbEy, color: A }}>{sport.name}<span style={{ ...styles.fbEyLine, background: A }} /></div>
            <h1 style={{ ...styles.fbH1, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 4 }}>Built For<br />The Moments<br />That Matter.</h1>
            <p style={styles.fbSub}>From local pitches to big stages.<br />Track your journey. Unlock your potential.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <section style={styles.fbMeasureSec}>
        <div style={{ ...styles.wrap, textAlign: "center" }}>
          <div style={{ ...styles.fbEy2, color: A }}>What Gets Measured</div>
          <div className="fb-measure-row" style={styles.fbMeasureRow}>
            {FB_MEASURE.map((m) => (
              <div key={m[1]} className="fb-measure-cell" style={styles.fbMeasureCell}>
                <span style={{ ...styles.fbMeasureIcon, color: A }}>{m[2] ? <img src={m[2]} alt="" style={styles.fbMeasureImg} /> : <FbMIcon name={m[0]} />}</span>
                <div style={styles.fbMeasureLabel}>{m[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "10px 0 50px" }}>
        <div className="bb-opp" style={{ ...styles.wrap, ...styles.bbOppGrid, gridTemplateColumns: "1.1fr 0.9fr", alignItems: "center" }}>
          <div style={{ ...styles.bbOppImg, minHeight: 320, background: FB_MEASURE_IMG ? ("center 30%/cover no-repeat url(" + FB_MEASURE_IMG + ")") : "linear-gradient(120deg,#0d140d,#0a0a0c)" }} />
          <h2 style={{ ...styles.swBigPlay, textAlign: "left", fontSize: "clamp(24px,3.6vw,44px)", background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Everything becomes part of your Playbook.</h2>
        </div>
      </section>

      <section style={styles.fbVisSec}>
        <div className="fb-vis" style={{ ...styles.wrap, ...styles.fbVisGrid }}>
          <div style={{ paddingLeft: "clamp(0px,5vw,90px)" }}>
            <h2 style={styles.fbVisH2}>Visibility Creates<br />Opportunity.</h2>
            <div style={{ width: 60, height: 3, background: A, borderRadius: 2, margin: "16px 0 24px" }} />
            <div style={styles.fbVisTags}>Academies&ensp;|&ensp;Trials&ensp;|&ensp;Scholarships</div>
            <div style={styles.fbVisTags}>Scouts&ensp;|&ensp;Sponsors&ensp;|&ensp;Tournaments</div>
          </div>
          <div style={{ ...styles.fbVisImg, background: FB_VIS_IMG ? ("center/cover no-repeat url(" + FB_VIS_IMG + ")") : "linear-gradient(120deg,#11150f,#0a0a0c)" }} />
        </div>
      </section>

      <section style={styles.fbClosingSec}>
        <div style={{ ...styles.wrap, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
          <h2 style={{ ...styles.fbClosingH, textAlign: "center" }}>The Beautiful Game<br />Deserves To Be <span style={{ color: A }}>Remembered.</span></h2>
          <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AuthHeader({ onNav, onBack }) {
  return (
    <header style={{ borderBottom: "1px solid " + C.line, padding: "18px 0" }}>
      <div style={{ ...styles.wrap, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span onClick={() => onNav("Home")} role="button" style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 24, color: "#fff", cursor: "pointer" }}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
        <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
      </div>
    </header>
  );
}

function SignInPage({ onNav, onBack }) {
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <AuthHeader onNav={onNav} onBack={onBack} />
      <section className="auth-wrap" style={styles.authWrap}>
        <div className="auth-card" style={styles.authCard}>
          <div style={styles.authEy}>Welcome Back</div>
          <h1 className="auth-title" style={styles.authTitle}>Sign In To <span style={{ color: C.blue }}>SportyQo</span></h1>
          <p style={styles.authSub}>Access your sporting identity, performance and opportunities.</p>
          <input style={styles.authInput} placeholder="Email address" type="email" />
          <input style={styles.authInput} placeholder="Password" type="password" />
          <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg, width: "100%", justifyContent: "center", marginTop: 6 }}>Sign In <Arrow /></button>
          <div style={styles.authAlt}>Don&apos;t have an account? <span style={{ color: C.blue, cursor: "pointer", fontWeight: 600 }}>Create one</span></div>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ onNav, onBack }) {
  const A = "#2563EB";
  const abH = { fontFamily: "'Poppins', sans-serif", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.05, margin: 0, letterSpacing: "0.5px" };
  const abP = { color: C.muted, fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.7, marginTop: 22, maxWidth: 520 };
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={styles.page}>
      <style>{css}</style>
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox} onClick={() => onNav("Home")} role="button">
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>
          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ ...styles.navLink, ...(item === "About Us" ? styles.navActive : {}) }} onClick={(e) => { e.preventDefault(); onNav(item); }}>{item}</a>
            ))}
          </nav>
          <button onClick={onBack} className="btn-outline" style={styles.btnOutline}>&#8592; Back</button>
        </div>
      </header>

      <section style={{ ...styles.wrap, padding: "clamp(56px,9vw,110px) 0 34px", textAlign: "center" }}>
        <h1 style={{ ...abH, fontSize: "clamp(40px,7vw,82px)", background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 6 }}>The Journey<br />Behind<br />SportyQo.</h1>
        <p style={{ marginTop: 30, fontSize: "clamp(18px,2.3vw,24px)", color: "#fff", fontWeight: 400, fontFamily: "'Inter', system-ui, sans-serif" }}>Built with one belief.</p>
        <p style={{ marginTop: 8, fontSize: "clamp(18px,2.3vw,24px)", color: C.muted, fontWeight: 400, fontFamily: "'Inter', system-ui, sans-serif" }}>Every athlete deserves to <span style={{ color: "#60A5FA" }}>be remembered.</span></p>
        <div className="scroll-cue" style={{ margin: "clamp(34px,5vw,60px) auto 0", width: "fit-content", display: "flex", flexDirection: "column", alignItems: "center", gap: 9, opacity: 1, pointerEvents: "none" }}>
          <div style={{ width: 26, height: 42, borderRadius: 16, border: "2px solid rgba(255,255,255,0.55)", display: "flex", justifyContent: "center", paddingTop: 7, boxSizing: "border-box" }}>
            <div className="scroll-dot" style={{ width: 4, height: 8, borderRadius: 3, background: "rgba(255,255,255,0.85)" }} />
          </div>
          <div className="scroll-chev" style={{ width: 11, height: 11, borderRight: "2px solid rgba(255,255,255,0.55)", borderBottom: "2px solid rgba(255,255,255,0.55)", transform: "rotate(45deg)" }} />
        </div>
      </section>

      <section style={{ ...styles.wrap, padding: "70px 0 76px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "center" }}>
          {ABOUT_LINES.map((l, i) => (
            <div key={i} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(18px,2.3vw,24px)", color: i === ABOUT_LINES.length - 1 ? "#fff" : C.muted, fontWeight: 400, lineHeight: 1.4 }}>{i === ABOUT_LINES.length - 1 ? <>Because their journey <span style={{ color: "#22C55E" }}>is forgotten.</span></> : l}</div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid " + C.line, borderBottom: "1px solid " + C.line, padding: "clamp(90px,12vw,170px) 0", background: "center/cover no-repeat url(https://i.ibb.co/DPHr9Mbr/25.png)" }}>
        <div className="ab-split" style={{ ...styles.wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
          <div style={{ paddingLeft: "0px", transform: "translateX(22px)" }}>
            <h2 style={{ ...abH, fontSize: "clamp(28px,4.2vw,50px)" }}>More Than<br />A Platform<span style={{ color: A }}>.</span></h2>
            <p style={{ ...abP, maxWidth: 660, fontSize: "clamp(17px,1.9vw,22px)", fontFamily: "'Inter', system-ui, sans-serif" }}>A place where players preserve memories<br />showcase achievements and unlock opportunities<br />throughout their journey.</p>
          </div>
          <div style={{ transform: "translateY(-10px)", textAlign: "right" }}>
            <h2 style={{ ...abH, fontSize: "clamp(28px,4.2vw,50px)" }}>Discover<br />Talent<span style={{ color: A }}>.</span></h2>
            <p style={{ ...abP, maxWidth: 660, fontSize: "clamp(17px,1.9vw,22px)", marginLeft: "auto", fontFamily: "'Inter', system-ui, sans-serif" }}>Find Your Position<br />Connect with Coaches<br />Enhance Your Skills.</p>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid " + C.line, padding: "clamp(44px,6vw,72px) 0", textAlign: "center" }}>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(24px,4.4vw,48px)", textTransform: "uppercase", color: "#fff", letterSpacing: "1px" }}><span style={{ color: "#22C55E" }}>Track</span> <span style={{ color: A }}>&bull;</span> Connect <span style={{ color: A }}>&bull;</span> <span style={{ color: A }}>Compete</span></div>
        <div style={{ marginTop: 16, color: C.muted, fontSize: "clamp(14px,1.6vw,17px)", letterSpacing: "1px" }}>The Grassroots Performance Pathway</div>
      </section>

      <section style={{ position: "relative", minHeight: 480, padding: "40px 0 80px", display: "flex", alignItems: "center", background: ABOUT_IMG2 ? ("center/cover no-repeat url(" + ABOUT_IMG2 + ")") : "linear-gradient(120deg,#0c1330,#0a0a0c)" }}>
        <div style={{ ...styles.wrap, width: "100%" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", transform: "translateY(-18px)" }}>
            <h2 style={{ ...abH, fontSize: "clamp(28px,4.4vw,58px)", whiteSpace: "nowrap", background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", paddingBottom: 6 }}>The Future Of Sports<br />Starts With Identity.</h2>
            <p style={{ ...abP, marginLeft: "auto", marginRight: "auto", fontSize: "clamp(17px,1.9vw,22px)" }}>Every athlete deserves more than a scorecard. SportyQo helps players preserve memories, showcase achievements and unlock opportunities throughout their journey.</p>
            <div style={{ marginTop: 32 }}><button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg, textTransform: "uppercase", letterSpacing: "1px", borderColor: A }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button></div>
          </div>
        </div>
      </section>

      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerBrand}>
              <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.footerLogoImg} />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                <span style={styles.footerTagline}>Building the future of athlete identity.</span>
              </div>
            </div>
            <nav style={styles.footerNav}>
              {FOOTER_NAV.map((l) => (<a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); onNav(footerRoute(l)); }}>{l}</a>))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (<a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [heroIdx, setHeroIdx] = React.useState(0);
  const [sport, setSport] = React.useState(null);
  const [playbookOpen, setPlaybookOpen] = React.useState(false);
  const [dugoutOpen, setDugoutOpen] = React.useState(false);
  const [featuresOpen, setFeaturesOpen] = React.useState(false);
  const [journeyOpen, setJourneyOpen] = React.useState(false);
  const [signInOpen, setSignInOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrollTarget, setScrollTarget] = React.useState(null);
  React.useEffect(() => {
    if (HERO_IMAGES.length < 2) return;
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 2000);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => {
    if (scrollTarget && !sport && !playbookOpen && !dugoutOpen && !featuresOpen && !journeyOpen && !signInOpen && !aboutOpen) {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrollTarget(null);
    }
  }, [scrollTarget, sport, playbookOpen, dugoutOpen, featuresOpen, journeyOpen, signInOpen, aboutOpen]);
  const go = (item) => {
    setSport(null); setPlaybookOpen(false); setDugoutOpen(false); setFeaturesOpen(false); setJourneyOpen(false); setSignInOpen(false); setAboutOpen(false);
    if (item === "Playbook") setPlaybookOpen(true);
    else if (item === "Dugout") setDugoutOpen(true);
    else if (item === "Features") setFeaturesOpen(true);
    else if (item === "Journey") setJourneyOpen(true);
    else if (item === "Sign In") setSignInOpen(true);
    else if (item === "About" || item === "About Us") setAboutOpen(true);
    else if (item === "Sports" || item === "Athletes") { setScrollTarget("sports"); return; }
    else if (item === "Contact") { setScrollTarget("contact"); return; }
    window.scrollTo(0, 0);
  };
  if (signInOpen) return <SignInPage onNav={go} onBack={() => go("Home")} />;
  if (aboutOpen) return <AboutPage onNav={go} onBack={() => go("Home")} />;
  if (journeyOpen) return <JourneyPage onNav={go} onBack={() => go("Home")} />;
  if (featuresOpen) return <FeaturesPage onNav={go} onBack={() => go("Home")} />;
  if (dugoutOpen) return <DugoutPage onNav={go} onBack={() => go("Home")} />;
  if (playbookOpen) return <PlaybookPage onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Tennis") return <TennisPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Swimming") return <SwimmingPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Kabaddi") return <KabaddiPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Badminton") return <BadmintonPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Volleyball") return <VolleyballPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Basketball") return <BasketballPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport && sport.name === "Football") return <FootballPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  if (sport) return <SportPage sport={sport} onNav={go} onBack={() => go("Home")} />;
  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* ---------- NAV ---------- */}
      <header style={styles.header}>
        <div style={{ ...styles.wrap, ...styles.nav }}>
          <div style={styles.logoBox}>
            <img src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={styles.logoImg} />
            <div>
              <div style={styles.logo}>Sporty<span style={{ color: C.blue }}>Qo</span></div>
              <div style={styles.tag}>Every player counts.</div>
            </div>
          </div>

          <nav className="nav-links" style={styles.navLinks}>
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className="navlink"
                style={{ ...styles.navLink, ...(i === 0 ? styles.navActive : {}) }}
                onClick={(e) => { e.preventDefault(); go(item); }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div style={styles.authBox}>
            <button className="btn-blue" style={{ ...styles.btnBlue, padding: "8px 15px", fontSize: 14 }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Sign in</button>
            <button className="nav-burger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)} style={{ display: "none", flexDirection: "column", gap: 4, background: "transparent", border: "1px solid " + C.line, borderRadius: 8, padding: "9px 10px", cursor: "pointer", marginLeft: 10 }}>
              <span style={{ width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
              <span style={{ width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
              <span style={{ width: 20, height: 2, background: "#fff", borderRadius: 2 }} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu" style={{ borderTop: "1px solid " + C.line, background: C.bg }}>
            {NAV.map((item) => (
              <a key={item} href="#" className="navlink" style={{ display: "block", padding: "14px clamp(20px,4vw,64px)", color: C.soft, textDecoration: "none", borderBottom: "1px solid " + C.line, fontFamily: "'Inter',sans-serif", fontSize: 15 }} onClick={(e) => { e.preventDefault(); setMenuOpen(false); go(item); }}>{item}</a>
            ))}
          </div>
        )}
      </header>

      {/* ---------- HERO ---------- */}
      <section style={styles.heroWrap}>
        {/* background slideshow — crossfades through HERO_IMAGES */}
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className="hero-photo"
            style={{ ...styles.heroPhoto, backgroundImage: `url('${img.src}')`, backgroundPosition: img.pos, opacity: i === heroIdx ? 1 : 0 }}
            aria-hidden="true"
          />
        ))}
        <div style={styles.heroOverlay} aria-hidden="true" />

        <div style={{ ...styles.wrap, ...styles.heroInner }}>
          <div style={styles.heroText}>
            <h1 style={styles.h1}>
              Build Your<br />Sporting Identity.
            </h1>
            <p style={styles.lede}>
              Create your verified sports profile, showcase achievements,<br />
              track performance, and connect with opportunities<br />
              that help you grow.
            </p>

            <div style={styles.heroBtns}>
              <button className="btn-blue lg" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>
                Create Your Profile <Arrow />
              </button>
              <button className="btn-outline lg" style={{ ...styles.btnOutline, ...styles.btnLg }} onClick={() => go("Sports")}>
                Explore Sports <Arrow />
              </button>
            </div>

            {/* social proof */}
            <div style={styles.social}>
              <div style={styles.avatars}>
                {[13, 31, 5, 52, 9].map((n, i) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/80?img=${n}`}
                    alt="Athlete"
                    style={{ ...styles.avatar, marginLeft: i ? -12 : 0 }}
                  />
                ))}
              </div>
              <p style={styles.socialText}>
                Join <b style={{ color: C.white }}>10,000+ athletes</b><br />
                building their future with SportyQo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS BAR ---------- */}
      <section style={styles.statsWrap}>
        <div style={styles.wrap}>
          <div className="stats-grid" style={styles.statsGrid}>
            {STATS.map((s, i) => (
              <div key={s.l} className="stat-cell" style={{ ...styles.statCell, borderLeft: i === 0 ? "none" : "1px solid " + C.line }}>
                <Icon name={s.icon} />
                <div style={styles.statNum}>{s.n}</div>
                <div style={styles.statLabel}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SUPPORTED SPORTS ---------- */}
      <section id="sports" style={styles.sportsWrap}>
        <div style={styles.wrap}>
          <span style={styles.sportsEyebrow}>Supported Sports</span>
          <h2 style={styles.sportsHead}><span style={{ color: "#22C55E" }}>One Identity.</span> <span style={{ color: C.blue }}>Every Sport.</span></h2>
          <div className="sports-grid" style={styles.sportsGrid}>
            {SPORTS.map((s) => (
              <article key={s.name} className="sport-card" style={{ ...styles.sportCard, cursor: "pointer" }} onClick={() => { setSport(s); window.scrollTo(0, 0); }}>
                <div className="sport-img" style={{ ...styles.sportImg, background: s.image ? `center top / cover no-repeat url(${s.image})` : `linear-gradient(165deg, ${s.color}55, #0c0c10)` }}>
                  <span style={styles.cardDots} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.3" /><circle cx="8" cy="2.5" r="1.3" /><circle cx="13.5" cy="2.5" r="1.3" /><circle cx="2.5" cy="8" r="1.3" /><circle cx="8" cy="8" r="1.3" /><circle cx="13.5" cy="8" r="1.3" /><circle cx="2.5" cy="13.5" r="1.3" /><circle cx="8" cy="13.5" r="1.3" /><circle cx="13.5" cy="13.5" r="1.3" /></svg>
                  </span>
                  <span style={styles.cardChev} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 6l6 6-6 6M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
                <div style={styles.sportBody}>
                  <h3 style={styles.sportTitle}>{s.name}</h3>
                  <p style={styles.sportDesc}>{s.desc}</p>
                  <div style={styles.sportStats}>
                    {[["Players", s.players], ["Leagues", s.leagues], ["Events", s.events]].map(([k, v]) => (
                      <div key={k} style={styles.statItem}>
                        <span style={{ color: s.color, display: "flex" }}>{STAT_ICONS[k]}</span>
                        <div>
                          <div style={styles.statVal}>{v}</div>
                          <div style={styles.statKey}>{k}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="sport-link" style={{ ...styles.sportLink, color: s.color }} onClick={(e) => { e.preventDefault(); setSport(s); window.scrollTo(0, 0); }}>
                    Explore {s.name} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE PLAYBOOK ---------- */}
      <section style={styles.playbookWrap}>
        <div style={styles.wrap}>
          <div className="playbook-grid" style={styles.playbookGrid}>
            <div>
              <span style={styles.pbLabel}>The Playbook</span>
              <h2 style={styles.pbHead}>Everything that defines you as an athlete.<br />In one verified profile.</h2>
              <p style={styles.pbLede}>
                Create a profile that showcases your achievements,<br />
                performances, videos, rankings, certificates, and<br />
                sporting journey.
              </p>
              <div className="feat-grid" style={styles.featGrid}>
                {FEATURES.map((f) => (
                  <div key={f.title} style={styles.featCard}>
                    <div style={{ ...styles.featIcon, background: f.color + "22", color: f.color }}>
                      <PIcon name={f.icon} />
                    </div>
                    <h4 style={styles.featTitle}>{f.title}</h4>
                    <p style={styles.featDesc}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.pbCard}>
              <div style={{ ...styles.pbImg, background: PLAYBOOK_IMG ? `center/cover no-repeat url(${PLAYBOOK_IMG})` : "linear-gradient(160deg,#16263f,#0c0c10)" }} />
              <div style={styles.pbStats}>
                {PROFILE_STATS.map((st, i) => (
                  <div key={st.l} style={{ ...styles.pbStatCell, borderTop: "1px solid " + C.line, borderLeft: i % 2 === 1 ? "1px solid " + C.line : "none" }}>
                    <div style={styles.pbStatTop}>
                      <span style={{ color: st.color, display: "flex" }}><PIcon name={st.icon} /></span>
                      <span style={styles.pbStatNum}>{st.n}</span>
                    </div>
                    <div style={styles.pbStatLabel}>{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE DUGOUT ---------- */}
      <section style={styles.playbookWrap}>
        <div style={styles.wrap}>
          <div className="playbook-grid pb-reverse" style={styles.playbookGrid}>
            <div>
              <span style={styles.pbLabel}>The DugOut</span>
              <h2 style={styles.pbHead}>Where athletes, coaches and fans come together.</h2>
              <p style={styles.pbLede}>
                Your front-row seat to the game — follow journeys,<br />
                join the conversation, and celebrate every milestone<br />
                as it happens.
              </p>
              <div className="feat-grid" style={styles.featGrid}>
                {DUGOUT.map((f) => (
                  <div key={f.title} className="feat-card" style={styles.featCard}>
                    <div style={{ ...styles.featIcon, background: f.color + "22", color: f.color }}>
                      <PIcon name={f.icon} />
                    </div>
                    <h4 style={styles.featTitle}>{f.title}</h4>
                    <p style={styles.featDesc}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...styles.pbCard, marginTop: 36 }}>
              <div style={{ ...styles.pbImg, background: DUGOUT_IMG ? `center/cover no-repeat url(${DUGOUT_IMG})` : "linear-gradient(160deg,#16321f,#0c0c10)" }} />
              <div style={styles.pbStats}>
                {DUGOUT_STATS.map((st, i) => (
                  <div key={st.l} style={{ ...styles.pbStatCell, borderTop: "1px solid " + C.line, borderLeft: i % 2 === 1 ? "1px solid " + C.line : "none" }}>
                    <div style={styles.pbStatTop}>
                      <span style={{ color: st.color, display: "flex" }}><PIcon name={st.icon} /></span>
                      <span style={styles.pbStatNum}>{st.n}</span>
                    </div>
                    <div style={styles.pbStatLabel}>{st.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section style={styles.ctaWrap}>
        <div style={styles.wrap}>
          <div style={styles.ctaCard}>
            <div className="cta-photo" style={{ ...styles.ctaPhoto, backgroundImage: CTA_IMG ? `url(${CTA_IMG})` : "linear-gradient(110deg,#0e1626,#0a0a0c)" }} aria-hidden="true" />
            <div style={styles.ctaOverlay} aria-hidden="true" />
            <div className="cta-inner" style={styles.ctaInner}>
              <div style={styles.ctaLeft}>
                <div style={styles.ctaIconRow}>
                  <div style={styles.ctaIcon}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /><path d="M12 13v4M9 20h6M10 20l.5-3M14 20l-.5-3" /></svg>
                  </div>
                  <h2 style={styles.ctaHead}>Join the Athletes<br /><span style={{ color: C.blue }}>Building Their Future.</span></h2>
                </div>
                <p style={styles.ctaDesc}>Create your sporting identity, connect with opportunities,<br />and get noticed by coaches, academies, and organizations.</p>
              </div>
              <div style={styles.ctaBtns}>
                <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Profile <Arrow /></button>
                <button className="btn-outline" style={{ ...styles.btnOutline, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Learn More <Arrow /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PLATFORM FEATURES ---------- */}
      <section style={styles.platWrap}>
        <div style={styles.wrap}>
          <span style={styles.sportsEyebrow}>Platform Features</span>
          <h2 style={styles.platHead}><span style={{ color: "#22C55E" }}>One platform.</span> <span style={{ color: C.blue }}>Every advantage.</span></h2>
          <div className="plat-grid" style={styles.platGrid}>
            {PLATFORM.map((f) => (
              <article key={f.title} className="plat-card" style={styles.platCard}>
                <div className="plat-img" style={{ ...styles.platImg, background: f.img ? `center/cover no-repeat url(${f.img})` : `linear-gradient(160deg, ${f.color}40, #0c0c10)` }}>
                </div>
                <div style={styles.platBody}>
                  <h3 style={styles.platTitle}>{f.title}</h3>
                  <p style={styles.platDesc}>{f.desc}</p>
                  <a href="#" className="plat-link" style={styles.platLink} onClick={(e) => { e.preventDefault(); window.open("https://wa.me/919901478098", "_blank"); }}>Learn More <Arrow /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="plat-trust" style={styles.platTrust}>
            <div className="trust-cell" style={{ ...styles.trustCell, flex: 1.6, paddingLeft: 0 }}>
              <div style={styles.avatars}>
                {[13, 31, 5, 52].map((n, i) => (
                  <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="Athlete" style={{ ...styles.avatar, marginLeft: i ? -12 : 0 }} />
                ))}
              </div>
              <div>
                <div style={styles.trustStrong}>Join 10,000+ athletes</div>
                <div style={styles.trustSub}>who are already building their future with SportyQo.</div>
              </div>
            </div>
            {TRUST.map((t) => (
              <div key={t.sub} className="trust-cell" style={{ ...styles.trustCell, borderLeft: "1px solid " + C.line }}>
                <span style={{ color: t.color, display: "flex" }}><PIcon name={t.icon} /></span>
                <div>
                  <div style={styles.trustStrong}>{t.strong}</div>
                  <div style={styles.trustSub}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ATHLETE GROWTH SCORE ---------- */}
      <section style={styles.scoreWrap}>
        <div style={styles.wrap}>
          <div className="score-grid" style={styles.scoreGrid}>
            <div style={styles.scoreLeftCard}>
              <div style={{ ...styles.scoreImg, background: SCORE_IMG ? `center/cover no-repeat url(${SCORE_IMG})` : "linear-gradient(160deg,#11203f,#0c0c10)" }} />
              <div style={styles.scoreLeftBody}>
                <div style={styles.scoreLabel}>Athlete Score</div>
                <div style={styles.scoreBigRow}>
                  <span style={styles.scoreBig}>242</span>
                  <span style={styles.scorePts}>pts</span>
                </div>
                <span style={styles.scoreBadge}>↑ 52 this month</span>
                <div style={styles.levelLabel}>Athlete Level</div>
                {LEVELS.map((lv) => (
                  <div key={lv.title} style={{ ...styles.levelRow, ...(lv.active ? styles.levelRowActive : {}) }}>
                    <div style={{ ...styles.levelIcon, color: lv.color, borderColor: lv.color + "66" }}><PIcon name="medal" /></div>
                    <div>
                      <div style={styles.levelTitle}>{lv.title}</div>
                      <div style={styles.levelDesc}>{lv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.scoreRightCard}>
              <div className="score-head" style={styles.scoreHead}>
                <div>
                  <span style={styles.sportsEyebrow}>Athlete Growth Score</span>
                  <h2 style={styles.scoreTitle}>Track Progress. Measure Growth.</h2>
                  <p style={styles.scoreSub}>Your SportyQo Score reflects your performance, consistency, participation, achievements, and development over time.</p>
                </div>
                <div style={styles.yearSelect}>2024 <span style={{ opacity: 0.6 }}>▾</span></div>
              </div>
              <GrowthChart />
              <div className="score-stats" style={styles.scoreStatsGrid}>
                {SCORE_STATS.map((s) => (
                  <div key={s.l} style={styles.scoreStatCard}>
                    <div style={{ ...styles.scoreStatIcon, background: s.color }}><PIcon name={s.icon} /></div>
                    <div style={styles.scoreStatNum}>{s.n}</div>
                    <div style={styles.scoreStatLabel}>{s.l}</div>
                    <div style={{ ...styles.scoreStatNote, color: s.noteColor }}>{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.analyticsCard}>
            <div className="analytics-inner" style={styles.analyticsInner}>
              <div className="analytics-photo-col" style={{ ...styles.analyticsPhotoCol, backgroundImage: ANALYTICS_IMG ? `url(${ANALYTICS_IMG})` : "linear-gradient(110deg,#0e1626,#0a0a0c)" }} aria-hidden="true" />
              <div className="analytics-content" style={styles.analyticsContent}>
                <div style={styles.analyticsText}>
                  <h2 style={styles.analyticsHead}>Every Match. Every Moment.<br /><span style={{ color: C.blue }}>Every Step Forward.</span></h2>
                  <p style={styles.analyticsDesc}>We track what matters so you can focus on what you love — the game.</p>
                </div>
                <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }}>View Full Analytics <Arrow /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SIMPLE PROCESS ---------- */}
      <section style={styles.processWrap}>
        <div style={styles.wrap}>
          <div style={styles.processHeadWrap}>
            <span style={styles.sportsEyebrow}>Simple Process</span>
            <h2 style={styles.processHead}>Your Journey Starts Here.</h2>
            <p style={styles.processSub}>Build your profile, track progress, get discovered,<br />and unlock opportunities.</p>
          </div>
          <div className="process-grid" style={styles.processGrid}>
            {PROCESS.map((p) => (
              <div key={p.n} style={styles.procCard}>
                <div style={styles.procNum}>{p.n}</div>
                <h3 style={styles.procTitle}>{p.title}</h3>
                <p style={styles.procDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-timeline" style={styles.timelineRow}>
            <div style={styles.timelineLine} />
            {PROCESS.map((p) => (
              <div key={p.n} style={styles.timelineCell}>
                <span style={styles.timelineDot} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING BANNER ---------- */}
      <section style={styles.closingWrap}>
        <div className="closing-photo" style={{ ...styles.closingPhoto, backgroundImage: CLOSING_IMG ? `url(${CLOSING_IMG})` : "linear-gradient(120deg,#0a0f1e,#0a0a0c)" }} aria-hidden="true" />
        <div style={styles.closingOverlay} aria-hidden="true" />
        <div style={{ ...styles.wrap, ...styles.closingInner }}>
          <div style={styles.closingText}>
            <h2 style={styles.closingHead}>The Future of Sports Starts with Identity.</h2>
            <div style={styles.closingAccent} />
            <p style={styles.closingSub}>Every athlete deserves more than a scorecard.</p>
            <p style={styles.closingDesc}>SportyQo helps athletes build credibility, showcase achievements, and unlock opportunities throughout their sporting journey.</p>
            <button className="btn-blue" style={{ ...styles.btnBlue, ...styles.btnLg }} onClick={() => window.open("https://wa.me/919901478098", "_blank")}>Create Your Profile <Arrow /></button>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919901478098" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="wa-float" style={{ position: "fixed", right: 24, bottom: 24, width: 58, height: 58, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 20px rgba(0,0,0,0.35)", zIndex: 999 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
      </a>

      {/* ---------- FOOTER ---------- */}
      <footer style={styles.footerWrap}>
        <div style={styles.wrap}>
          <div className="footer-hero" style={styles.footerHero}>
            <div className="footer-brand-left" style={{ ...styles.footerBrandLeft, transform: "translate(-134px,-50%)" }}>
              <div style={{ ...styles.footerBrand, marginLeft: "clamp(0px,9vw,170px)" }}>
                <img className="home-footer-logo" src="https://i.ibb.co/fzct1jjG/283732.png" alt="SportyQo logo" style={{ ...styles.footerLogoImg, height: 70, transform: "translate(-34px,-12px)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 8, transform: "translate(-4px,0px)" }}>
                  <span style={styles.footerLogo}>Sporty<span style={{ color: C.blue }}>Qo</span></span>
                  <span style={styles.footerTagline}>Building the future of athlete identity.</span>
                  <span style={{ marginTop: 20, color: C.muted, fontSize: 12, fontWeight: 400, fontFamily: "'Inter', system-ui, sans-serif" }}>An Initiative of Basicsports Ventures Pvt Ltd.</span>
                </div>
              </div>
            </div>
            <div id="contact" className="footer-contact" style={{ ...styles.footerContact, transform: "translateY(24px)" }}>
              <div style={{ ...styles.fcRow, borderTop: "none" }}><span style={styles.fcIcon}><ContactIcon name="pin" /></span><span style={styles.fcText}>#21 Thamoghana, RMV 2nd Stage, Bengaluru 560094</span></div>
              <div style={styles.fcRow}><span style={styles.fcIcon}><ContactIcon name="mail" /></span><span style={styles.fcText}>info@sportyqo.com</span></div>
              <div style={styles.fcRow}><span style={styles.fcIcon}><ContactIcon name="phone" /></span><span style={styles.fcText}>+91 9901478098 (IND)</span></div>
            </div>
          </div>
          <div className="footer-top" style={styles.footerTop}>
            <nav style={{ ...styles.footerNav, flex: "0 0 auto", justifyContent: "flex-start" }}>
              {FOOTER_NAV.map((l) => (
                <a key={l} href="#" className="footer-link" style={styles.footerLink} onClick={(e) => { e.preventDefault(); go(footerRoute(l)); }}>{l}</a>
              ))}
            </nav>
            <div style={styles.footerSocial}>
              {SOCIALS.map((s) => (
                <a key={s} href="#" className="social-link" style={styles.socialLink} aria-label={s}><SocialIcon name={s} /></a>
              ))}
            </div>
          </div>
          <div className="footer-bottom" style={styles.footerBottom}>
            <span>© 2026 SportyQo. All rights reserved.</span>
            <span>Powered by Trybe Analytics Pvt. Ltd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// arrow used in buttons
function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// cricket batsman graphic for the hero (swap for a real photo anytime — see notes)
function Cricketer() {
  return (
    <svg className="cricketer" viewBox="0 0 400 600" style={styles.cricketer} aria-hidden="true">
      <defs>
        <linearGradient id="cqBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B79FF" />
          <stop offset="1" stopColor="#1E55E0" />
        </linearGradient>
      </defs>

      <circle cx="332" cy="74" r="15" fill="#E23B3B" />
      <path d="M320 68 q12 6 24 0" stroke="#ffd9d9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M320 80 q12 -6 24 0" stroke="#ffd9d9" strokeWidth="2" fill="none" strokeLinecap="round" />

      <path d="M188 345 L150 445 L132 538" stroke="url(#cqBody)" strokeWidth="30" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M205 196 L250 162 L292 122" stroke="url(#cqBody)" strokeWidth="24" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M202 188 L188 345" stroke="url(#cqBody)" strokeWidth="52" fill="none" strokeLinecap="round" />
      <path d="M194 345 L222 440 L232 542" stroke="url(#cqBody)" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M205 202 L256 178 L295 128" stroke="url(#cqBody)" strokeWidth="22" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M150 445 L132 535" stroke="#9DC1FF" strokeWidth="18" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M222 440 L232 540" stroke="#9DC1FF" strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.85" />

      <ellipse cx="128" cy="542" rx="22" ry="9" fill="#15336E" />
      <ellipse cx="238" cy="547" rx="22" ry="9" fill="#15336E" />

      <path d="M293 124 L350 52" stroke="#C8A06A" strokeWidth="17" fill="none" strokeLinecap="round" />
      <path d="M284 134 L300 114" stroke="#15336E" strokeWidth="9" fill="none" strokeLinecap="round" />

      <circle cx="208" cy="150" r="33" fill="url(#cqBody)" />
      <path d="M176 144 q-16 3 -20 15 q18 -7 27 -5 z" fill="#15336E" />
      <path d="M182 150 h20 M182 158 h18 M184 166 h14" stroke="#0A1A40" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================
//  Inline styles
// ============================================================
const styles = {
  page: { background: C.bg, color: C.white, fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", overflowX: "hidden" },
  wrap: { maxWidth: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,64px)" },

  // nav
  header: { position: "relative", zIndex: 20 },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", height: 84 },
  logoBox: { display: "flex", alignItems: "center", gap: 12, lineHeight: 1 },
  logoImg: { height: 52, width: "auto", display: "block" },
  logo: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: ".2px" },
  tag: { fontSize: 12, letterSpacing: "2px", color: C.muted, textTransform: "uppercase", marginTop: 10 },
  navLinks: { display: "flex", gap: 34, alignItems: "center" },
  navLink: { color: C.soft, fontSize: 15, fontWeight: 500, textDecoration: "none", paddingBottom: 4 },
  navActive: { color: C.blue, borderBottom: "2px solid " + C.blue },
  authBox: { display: "flex", gap: 12, alignItems: "center" },

  btnOutline: { background: "transparent", color: C.white, border: "1px solid #34343C", padding: "10px 22px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center" },
  btnBlue: { background: C.blue, color: C.white, border: "none", padding: "10px 22px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center" },
  btnLg: { padding: "15px 28px", borderRadius: 12, fontSize: 16, fontWeight: 600 },

  // hero
  heroWrap: { position: "relative", minHeight: 640 },
  heroPhoto: {
    position: "absolute", inset: 0, zIndex: 0,
    backgroundSize: "cover", backgroundPosition: "center center",
    transition: "opacity 1.2s ease-in-out",
  },
  heroOverlay: {
    position: "absolute", inset: 0, zIndex: 1,
    background: "linear-gradient(to right, rgba(10,10,12,0.96) 0%, rgba(10,10,12,0.78) 32%, rgba(10,10,12,0.25) 62%, rgba(10,10,12,0) 100%)",
  },
  cricketer: { position: "absolute", right: "8%", bottom: 0, height: "90%", maxHeight: 600, width: "auto", zIndex: 1 },
  heroInner: { position: "relative", zIndex: 2, display: "flex", alignItems: "center", minHeight: 640, paddingTop: 20 },
  heroText: { maxWidth: 620, transform: "translateY(-34px)" },
  h1: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(28px,6.5vw,66px)", lineHeight: 1.16, letterSpacing: "-1px", margin: 0, paddingBottom: 6, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  lede: { color: "#C9CAD2", fontSize: 18, lineHeight: 1.6, maxWidth: "none", margin: "26px 0 34px" },
  heroBtns: { display: "flex", gap: 16, flexWrap: "wrap" },

  social: { display: "flex", alignItems: "center", gap: 16, marginTop: 40 },
  avatars: { display: "flex" },
  avatar: { width: 40, height: 40, borderRadius: "50%", border: "2px solid " + C.bg, display: "inline-block", objectFit: "cover" },
  socialText: { color: C.muted, fontSize: 14, lineHeight: 1.4, margin: 0 },

  // stats
  statsWrap: { position: "relative", zIndex: 3, marginTop: -45, padding: "0 0 56px" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "rgba(12,14,20,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16, padding: "36px 10px" },
  statCell: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "6px 16px", textAlign: "center" },
  statNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 36, lineHeight: 1 },
  statLabel: { color: C.muted, fontSize: 15 },

  // supported sports section
  sportsWrap: { padding: "60px 0 80px" },
  sportsEyebrow: { color: C.blue, fontWeight: 700, fontSize: 13, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: 14 },
  sportsHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(30px,4.5vw,46px)", letterSpacing: "-1px", margin: "0 0 36px" },
  sportsGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 },
  sportCard: { background: "#121214", border: "1px solid " + C.line, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" },
  sportImg: { height: 280, width: "100%", position: "relative" },
  sportBody: { padding: "22px 22px 24px", flex: 1, display: "flex", flexDirection: "column" },
  sportIcon: { width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginTop: -26, marginBottom: 14, position: "relative", zIndex: 2, border: "3px solid #121214" },
  sportEmoji: { fontSize: 24, lineHeight: 1 },
  cardDots: { position: "absolute", top: 14, left: 14, color: "rgba(255,255,255,0.5)", display: "flex" },
  cardChev: { position: "absolute", top: 14, right: 14, color: "rgba(255,255,255,0.5)", display: "flex" },
  sportStats: { display: "flex", gap: 16, margin: "2px 0 18px", paddingTop: 16, borderTop: "1px solid " + C.line, flexWrap: "wrap" },
  statItem: { display: "flex", alignItems: "center", gap: 7 },
  statVal: { fontWeight: 700, fontSize: 14, color: C.white, lineHeight: 1.15 },
  statKey: { fontSize: 10.5, color: C.muted, textTransform: "uppercase", letterSpacing: ".4px" },
  sportTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 10 },
  sportDesc: { color: C.muted, fontSize: 14.5, lineHeight: 1.6, marginBottom: 18, flex: 1 },
  crHero: { textAlign: "center", padding: "90px 0 70px", background: "radial-gradient(ellipse at 50% 0%, rgba(47,107,255,0.12), transparent 60%)" },
  crHeroEy: { color: C.blue, fontWeight: 700, letterSpacing: "3px", fontSize: 14, textTransform: "uppercase", marginBottom: 18 },
  crHeroH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(34px,6vw,66px)", letterSpacing: "-1.5px", lineHeight: 1.05, color: "#fff", textTransform: "uppercase" },
  crHeroLine: { width: 60, height: 3, background: C.blue, borderRadius: 2, margin: "26px auto" },
  crHeroP: { color: C.soft, fontSize: 18, lineHeight: 1.6, maxWidth: 560, margin: "0 auto" },
  crHeroSub: { color: C.muted, fontSize: 15, marginTop: 14 },
  crMouseWrap: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginTop: 44 },
  crMouse: { width: 22, height: 36, border: "2px solid " + C.muted, borderRadius: 12, display: "flex", justifyContent: "center" },
  crMouseDot: { width: 3, height: 7, borderRadius: 2, background: C.muted, marginTop: 6 },
  crChevron: { width: 9, height: 9, borderRight: "2px solid " + C.muted, borderBottom: "2px solid " + C.muted, transform: "rotate(45deg)" },
  crSection: { padding: "70px 0" },
  crEy: { fontWeight: 700, letterSpacing: "2.5px", fontSize: 13, textTransform: "uppercase", marginBottom: 16 },
  crH2: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,40px)", letterSpacing: "-1px", color: "#fff", marginBottom: 18 },
  crH2L: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,38px)", letterSpacing: "-1px", color: "#fff", lineHeight: 1.12, marginBottom: 16 },
  crLead: { color: C.soft, fontSize: 16, marginBottom: 6 },
  crLead2: { color: C.muted, fontSize: 15, lineHeight: 1.6, maxWidth: 640, margin: "0 auto" },
  crTimeline: { display: "flex", justifyContent: "space-between", gap: 8, margin: "46px 0 0", overflowX: "auto" },
  crTlItem: { flex: "1 0 78px", textAlign: "center" },
  crTlNum: { color: C.blue, fontWeight: 700, fontSize: 15, marginBottom: 8 },
  crTlLabel: { color: C.soft, fontSize: 12, lineHeight: 1.3, marginBottom: 0, minHeight: 30 },
  crTrack: { position: "relative", display: "flex", gap: 8, margin: "10px 0 24px", overflowX: "auto", alignItems: "flex-end" },
  crTrackLine: { position: "absolute", left: 8, right: 8, bottom: 5, height: 2, background: C.line, zIndex: 0 },
  crTrackCell: { flex: "1 0 78px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 },
  crStem: { width: 1, height: 22, background: C.line },
  crTlDot: { width: 12, height: 12, borderRadius: "50%", background: C.bg, border: "2px solid " + C.blue, margin: "0 auto" },
  crJourneyFoot: { textAlign: "center", color: C.muted, fontSize: 15, marginTop: 20 },
  crSplit: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" },
  crPhoneImg: { width: "clamp(320px,40vw,540px)", height: "auto", display: "block", margin: "0 auto" },
  crSplit2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" },
  crCompeteWrap: { display: "grid", gridTemplateColumns: "300px 1fr", gap: 50, alignItems: "center" },
  crP: { color: C.muted, fontSize: 16, lineHeight: 1.6, marginBottom: 26 },
  crBtnOutline: { background: "transparent", border: "1px solid", borderRadius: 10, padding: "12px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 },
  crBtnGhost: { background: "transparent", border: "none", padding: "0 0 4px", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, borderBottom: "1px solid currentColor" },
  crPhoneWrap: { display: "flex", justifyContent: "center" },
  crPhone: { width: 230, borderRadius: 30, border: "1px solid " + C.line, background: "#0c0c10", padding: 18, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" },
  crProfTop: { display: "flex", gap: 12, alignItems: "center", marginBottom: 18 },
  crAvatar: { width: 46, height: 46, borderRadius: "50%", objectFit: "cover" },
  crProfName: { color: "#fff", fontWeight: 700, fontSize: 15 },
  crProfRole: { color: C.muted, fontSize: 12 },
  crProfLoc: { color: C.muted, fontSize: 11 },
  crScoreLabel: { color: C.muted, fontSize: 12, textAlign: "center", fontWeight: 600, marginBottom: 4 },
  crProfStats: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 16, borderTop: "1px solid " + C.line, paddingTop: 14 },
  crStatCell: { textAlign: "center" },
  crStatNum: { color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "'Poppins',sans-serif" },
  crStatLbl: { color: C.muted, fontSize: 11, marginTop: 2 },
  crPlayList: { display: "flex", flexDirection: "column", gap: 14 },
  crPlayItem: { display: "flex", alignItems: "center", gap: 14, color: C.soft, fontSize: 24, fontWeight: 500 },
  crPerfRight: { display: "flex", alignItems: "center", justifyContent: "space-around", gap: 0, flexWrap: "wrap" },
  crPerfItem: { flex: "1 1 auto", textAlign: "center", padding: "6px 14px", borderLeft: "1px solid " + C.line },
  crPerfIcon: { color: "#d2d6e2", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 40, marginBottom: 10 },
  crSkill: { textAlign: "center" },
  crSkillIcon: { fontSize: 30, marginBottom: 8 },
  crSkillLbl: { color: C.muted, fontSize: 13, marginTop: 6 },
  crCompete: { display: "grid", gridTemplateColumns: "repeat(4,1fr)" },
  crCompeteItem: { padding: "18px 16px", color: C.soft, fontSize: 14, textAlign: "center" },
  crDugList: { display: "flex", flexDirection: "column", gap: 12, margin: "22px 0 28px" },
  crDugItem: { color: C.soft, fontSize: 17, display: "flex", gap: 12, alignItems: "center" },
  crDugPhoneWrap: { display: "flex", justifyContent: "flex-start" },
  crDugBand: { padding: "44px 0", background: "radial-gradient(75% 130% at 0% 50%, rgba(47,107,255,0.20), rgba(47,107,255,0) 65%)" },
  crDugBand2: { display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "start" },
  crDugCard: { display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 22, overflow: "hidden", border: "1px solid " + C.line, background: "#0e0c16", minHeight: 460 },
  crDugCardLeft: { padding: "48px 44px", alignSelf: "center" },
  crDugFeed: { minHeight: 460 },
  crDugLeftBg: { background: "linear-gradient(rgba(12,10,22,0.5), rgba(12,10,22,0.62)), center/cover no-repeat url(https://i.ibb.co/j1y6LNC/AA.png)", borderRadius: 18, padding: "40px 36px", border: "1px solid " + C.line },
  crDugPhone2: { width: "clamp(230px,22vw,290px)", height: 560, borderRadius: 30, border: "1px solid " + C.line },
  crDugPhone: { width: 240, borderRadius: 30, border: "1px solid " + C.line, background: "#0c0c10", padding: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" },
  crDugHead: { color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 12, paddingLeft: 4 },
  crDugPhoto: { height: 320, borderRadius: 18 },
  crOppGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 },
  crOppItem: { textAlign: "center" },
  crOppIcon: { width: 48, height: 48, borderRadius: 12, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.4)", color: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" },
  crOppLbl: { color: C.soft, fontSize: 13, lineHeight: 1.3 },
  crClosing: { textAlign: "center", padding: "80px 0 90px", background: "radial-gradient(75% 130% at 0% 50%, rgba(47,107,255,0.20), rgba(47,107,255,0) 65%)" },
  crClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(28px,5vw,54px)", letterSpacing: "-1px", color: "#fff", textTransform: "uppercase", lineHeight: 1.08 },
  crClosingSub: { color: C.muted, fontSize: 16, marginTop: 22 },
  crClosingSub2: { color: C.muted, fontSize: 15, marginTop: 6 },
  pbHeroSec: { position: "relative", minHeight: 600, display: "flex", alignItems: "center", padding: "60px 0" },
  pbHeroText: { maxWidth: 560, marginLeft: 0 },
  pbHeroGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" },
  pbEy: { color: C.blue, letterSpacing: "3px", fontWeight: 700, fontSize: 14, textTransform: "uppercase", marginBottom: 18 },
  pbH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(38px,6.5vw,70px)", letterSpacing: "-2px", lineHeight: 1.02, color: "#fff", textTransform: "uppercase" },
  pbHeroP: { color: C.soft, fontSize: 18, lineHeight: 1.6, margin: "24px 0 32px" },
  pbHeroImg: { minHeight: 460, backgroundColor: "transparent" },
  pbSection: { padding: "64px 0", borderTop: "1px solid #15151c" },
  pbTriGrid: { display: "grid", gridTemplateColumns: "1fr 0.9fr 1.05fr", gap: 40, alignItems: "center" },
  pbH2: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3.4vw,34px)", letterSpacing: "-0.5px", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, marginBottom: 16 },
  pbH2L: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.8vw,40px)", letterSpacing: "-1px", textTransform: "uppercase", color: "#fff", lineHeight: 1.08 },
  pbSmall: { color: C.muted, fontSize: 14.5, lineHeight: 1.6 },
  pbFeatList: { display: "flex", flexDirection: "column", gap: 0 },
  pbFeatItem: { display: "flex", gap: 14, alignItems: "center", color: C.soft, fontWeight: 600, fontSize: 19, padding: "18px 0", borderBottom: "1px solid " + C.line },
  pbFeatIcon: { color: C.blue, display: "flex" },
  pbGallery: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 },
  pbTile: { aspectRatio: "1 / 1", borderRadius: 12, border: "1px solid " + C.line, position: "relative", overflow: "hidden" },
  pbPlay: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" },
  pbPlayBtn: { width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.9)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, paddingLeft: 3 },
  pbJourGrid: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 50, alignItems: "center" },
  pbTimeline: { display: "flex", justifyContent: "space-between", gap: 16, position: "relative" },
  pbTlLine: { position: "absolute", left: 8, right: 8, top: 42, height: 2, background: C.line, zIndex: 0 },
  pbTlItem: { flex: 1, position: "relative", zIndex: 1 },
  pbTlYear: { color: "#fff", fontWeight: 700, fontSize: 17, fontFamily: "'Poppins',sans-serif", marginBottom: 14 },
  pbTlDot: { width: 14, height: 14, borderRadius: "50%", background: C.blue, border: "3px solid " + C.bg, marginBottom: 16, boxSizing: "content-box", marginLeft: -2 },
  pbTlTitle: { color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 6 },
  pbTlDesc: { color: C.muted, fontSize: 13, lineHeight: 1.45 },
  pbShareGrid: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 50, alignItems: "center" },
  pbShareIcons: { display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap" },
  pbShareItem: { textAlign: "center", color: C.soft, fontSize: 16, fontWeight: 600, flex: "1 0 110px" },
  pbShareIcon: { color: C.blue, width: 78, height: 78, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(47,107,255,0.4)", borderRadius: 18, background: "rgba(47,107,255,0.08)", margin: "0 auto 14px" },
  pbOneGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" },
  pbTags: { display: "flex", flexWrap: "nowrap", gap: 12, marginTop: 38, overflowX: "auto", justifyContent: "center" },
  pbTag: { border: "1px solid " + C.line, borderRadius: 999, padding: "9px 16px", color: C.soft, fontSize: 13, flexShrink: 0, whiteSpace: "nowrap" },
  pbClosing: { textAlign: "center", padding: "90px 0 100px", background: "linear-gradient(180deg, transparent, rgba(47,107,255,0.10))" },
  pbClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(30px,5.5vw,58px)", letterSpacing: "-1px", textTransform: "uppercase", color: "#fff", lineHeight: 1.05 },
  dgHero: { padding: "55px 0 70px" },
  dgHeroSec: { position: "relative", minHeight: 600, display: "flex", alignItems: "center", padding: "60px 0" },
  dgHeroText: { maxWidth: 560 },
  dgHeroGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" },
  dgEy: { color: C.blue, letterSpacing: "3px", fontWeight: 700, fontSize: 13, textTransform: "uppercase", marginBottom: 18 },
  dgH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(34px,5.6vw,58px)", letterSpacing: "-1.5px", lineHeight: 1.05, color: "#fff" },
  dgHeroP: { color: C.soft, fontSize: 16.5, lineHeight: 1.7, margin: "24px 0 30px", maxWidth: 470 },
  dgBtnRow: { display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" },
  dgWatch: { display: "inline-flex", alignItems: "center", gap: 12, color: C.soft, fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontSize: 15 },
  dgWatchCirc: { width: 40, height: 40, borderRadius: "50%", border: "1px solid " + C.line, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, paddingLeft: 2 },
  dgHeroRight: { display: "flex", gap: 18, alignItems: "center", justifyContent: "center" },
  dgPhone: { width: 264, borderRadius: 34, border: "1px solid " + C.line, background: "#0c0c10", padding: 16, boxShadow: "0 30px 70px rgba(0,0,0,0.6)", flexShrink: 0 },
  dgPhoneHead: { display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 14 },
  dgStories: { display: "flex", gap: 8, marginBottom: 14 },
  dgStoryAv: { width: 38, height: 38, borderRadius: "50%", border: "2px solid " + C.blue, objectFit: "cover" },
  dgTabs: { display: "flex", gap: 16, fontSize: 12, color: C.muted, borderBottom: "1px solid " + C.line, paddingBottom: 10, marginBottom: 12 },
  dgTabActive: { color: "#fff", borderBottom: "2px solid " + C.blue, paddingBottom: 10, marginBottom: -11 },
  dgPostHead: { display: "flex", gap: 10, alignItems: "center", marginBottom: 10 },
  dgPostImg: { height: 170, borderRadius: 14, marginBottom: 10 },
  dgPostStats: { display: "flex", gap: 16, color: C.muted, fontSize: 12, fontWeight: 600 },
  dgNotifCol: { display: "flex", flexDirection: "column", gap: 14 },
  dgNotif: { display: "flex", gap: 12, alignItems: "center", background: "#101016", border: "1px solid " + C.line, borderRadius: 14, padding: "12px 14px", width: 214 },
  dgNotifAv: { width: 38, height: 38, borderRadius: "50%", objectFit: "cover" },
  dgNotifName: { color: "#fff", fontWeight: 700, fontSize: 13 },
  dgNotifSub: { color: C.muted, fontSize: 12 },
  dgNotifTime: { color: "#6b6b76", fontSize: 11 },
  dgSection: { padding: "60px 0", borderTop: "1px solid #15151c" },
  dgSecGrid: { display: "grid", gridTemplateColumns: "1fr 0.92fr", gap: 50, alignItems: "center" },
  dgEy2: { color: C.blue, letterSpacing: "2px", fontWeight: 700, fontSize: 12, textTransform: "uppercase", marginBottom: 14 },
  dgH2: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3.3vw,34px)", letterSpacing: "-0.5px", color: "#fff", marginBottom: 24 },
  dgFeatGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  dgFeatCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "22px 20px" },
  dgFeatIcon: { width: 44, height: 44, borderRadius: 12, background: C.blue, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  dgFeatTitle: { color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 8 },
  dgFeatDesc: { color: C.muted, fontSize: 13.5, lineHeight: 1.5 },
  dgCommImg: { minHeight: 560, borderRadius: 16, border: "1px solid " + C.line },
  dgAchSec: { position: "relative", minHeight: 400, display: "flex", alignItems: "center", padding: "78px 0" },
  dgAchRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30 },
  dgAchLeft: { maxWidth: 440 },
  dgAchH2: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3.3vw,38px)", color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", whiteSpace: "nowrap" },
  dgAchP: { color: C.muted, fontSize: 14.5, lineHeight: 1.7, maxWidth: 320 },
  dgAchColR: { display: "flex", flexDirection: "column", gap: 14, width: 290, marginRight: "clamp(0px,4vw,70px)" },
  dgAchCard: { display: "flex", alignItems: "center", gap: 14, background: "rgba(15,18,30,0.72)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 18px", backdropFilter: "blur(4px)" },
  dgTrophyIcon: { fontSize: 26, flexShrink: 0 },
  dgAchName: { color: "#fff", fontWeight: 700, fontSize: 14 },
  dgAchWon: { color: C.soft, fontSize: 13, marginTop: 2 },
  dgAchMeta: { color: C.muted, fontSize: 12, marginTop: 4 },
  dgAchTime: { color: "#6b6b76", fontSize: 11, marginTop: 3 },
  dgAchStat: { color: C.soft, fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 8 },
  dgPlayCirc: { width: 40, height: 40, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.55)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, flexShrink: 0, paddingLeft: 3 },
  dgAchName2: { color: "#fff", fontWeight: 600, fontSize: 14 },
  dgPanel: { background: "#0c0c10", border: "1px solid " + C.line, borderRadius: 20, padding: 18 },
  dgPanelHead: { display: "flex", justifyContent: "space-between", color: "#fff", fontWeight: 700, marginBottom: 14 },
  dgPanelTabs: { display: "flex", gap: 10, marginBottom: 14 },
  dgPill: { fontSize: 12, padding: "6px 12px", borderRadius: 999 },
  dgVidGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 },
  dgVidImg: { height: 150, borderRadius: 12, position: "relative", marginBottom: 8 },
  dgPlay: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" },
  dgPlayB: { width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.9)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: 3, flexShrink: 0 },
  dgVidName: { color: "#fff", fontSize: 12.5, fontWeight: 600 },
  dgVidStat: { color: C.muted, fontSize: 11, marginTop: 2 },
  dgVidLikes: { display: "flex", justifyContent: "space-between", color: C.muted, fontSize: 11, marginTop: 6 },
  dgAchGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, alignItems: "center" },
  dgTrophy: { height: 240, borderRadius: 16, border: "1px solid " + C.line },
  dgAchCards: { display: "flex", flexDirection: "column", gap: 12 },
  dgCard: { background: "#101016", border: "1px solid " + C.line, borderRadius: 14, padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" },
  dgMoreGrid: { display: "grid", gridTemplateColumns: "300px 1fr", gap: 40, alignItems: "center" },
  dgMoreCards: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 },
  dgMoreCard: { position: "relative", height: 200, borderRadius: 16, border: "1px solid " + C.line, overflow: "hidden" },
  dgMoreShade: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,11,0.94) 16%, rgba(8,8,11,0.4) 48%, rgba(8,8,11,0.08) 100%)" },
  dgMoreInner: { position: "absolute", left: 18, right: 18, bottom: 16, display: "flex", alignItems: "center", gap: 14, zIndex: 1 },
  dgMoreIcon: { width: 46, height: 46, borderRadius: "50%", background: C.blue, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  dgMoreTitle: { color: "#fff", fontWeight: 700, fontSize: 17 },
  dgMoreDesc: { color: C.soft, fontSize: 13, marginTop: 3, lineHeight: 1.45 },
  dgMomGrid: { display: "grid", gridTemplateColumns: "300px 1fr", gap: 40, alignItems: "center" },
  dgMomRow: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 },
  dgMom: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, padding: "2px 16px 2px 0", borderRight: "1px solid " + C.line },
  dgMomTop: { display: "flex", gap: 11, alignItems: "flex-start" },
  dgMomIcon: { width: 38, height: 38, borderRadius: "50%", flexShrink: 0, border: "1px solid " + C.line },
  dgMomName: { color: "#fff", fontWeight: 700, fontSize: 13.5, lineHeight: 1.3 },
  dgMomDetail: { color: C.muted, fontSize: 12.5, lineHeight: 1.35, marginTop: 2 },
  dgMomTime: { color: "#6b6b76", fontSize: 11.5, marginTop: 5 },
  dgMomLikes: { color: C.soft, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 },
  dgClosing: { padding: "70px 0", background: "linear-gradient(160deg, rgba(47,107,255,0.16), #0c0c10)", borderTop: "1px solid #15151c" },
  dgCloseSec: { position: "relative", minHeight: 200, display: "flex", alignItems: "center", padding: "46px 0", borderTop: "1px solid #15151c" },
  dgCloseRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30 },
  dgCloseP: { color: C.soft, fontSize: 14.5, marginTop: 14 },
  dgCloseRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20 },
  dgCloseIcons: { display: "flex", alignItems: "center", gap: 22 },
  dgCloseIcon: { display: "flex", flexDirection: "column", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 600 },
  dgCloseDiv: { width: 1, height: 34, background: C.line },
  dgClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4.2vw,44px)", letterSpacing: "-1px", color: "#fff", lineHeight: 1.06 },
  ftHero: { textAlign: "center", padding: "80px 0 50px" },
  ftEy: { color: C.blue, letterSpacing: "4px", fontWeight: 700, fontSize: 13, textTransform: "uppercase", marginBottom: 22 },
  ftH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(40px,8vw,82px)", letterSpacing: "-2px", lineHeight: 1.0, color: "#fff", textTransform: "uppercase" },
  ftSub: { color: C.soft, fontSize: 18, marginTop: 28 },
  ftList: { padding: "20px 0 40px" },
  ftRow: { display: "grid", gridTemplateColumns: "72px minmax(0,1.05fr) minmax(0,1.15fr) auto", gap: 44, alignItems: "center", padding: "30px 0", paddingLeft: "clamp(0px,4vw,80px)", borderBottom: "1px solid #15151c" },
  ftIconImg: { width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 },
  ftIconBox: { width: 64, height: 64, borderRadius: 16, background: "rgba(47,107,255,0.08)", border: "1px solid rgba(47,107,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: C.blue },
  ftContent: { display: "grid", gridTemplateColumns: "minmax(220px,300px) 1fr", gap: 30, alignItems: "center" },
  ftTitle: { color: "#fff", fontWeight: 700, fontSize: 22.5, marginBottom: 9, fontFamily: "'Poppins',sans-serif" },
  ftDesc: { color: C.muted, fontSize: 16, lineHeight: 1.55 },
  ftTags: { color: C.soft, fontSize: 16, display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginLeft: "clamp(0px,6vw,110px)" },
  ftDotSep: { color: C.blue },
  ftArrow: { color: C.blue, display: "flex", justifyContent: "flex-end", paddingLeft: 10 },
  ftQo: { width: 38, height: 38, borderRadius: "50%", border: "2px solid #2F6BFF", display: "flex", alignItems: "center", justifyContent: "center", color: C.blue, fontWeight: 800, fontSize: 13, fontFamily: "'Poppins',sans-serif" },
  ftClosing: { textAlign: "center", padding: "60px 0 90px" },
  ftClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(28px,5vw,54px)", color: "#fff", textTransform: "uppercase", letterSpacing: "-1px" },
  jrHero: { textAlign: "center", padding: "78px 0 40px" },
  jrEy: { color: C.blue, letterSpacing: "4px", fontWeight: 700, fontSize: 13, textTransform: "uppercase", marginBottom: 18 },
  jrH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(40px,7.5vw,74px)", letterSpacing: "-2px", lineHeight: 1.0, color: "#fff", textTransform: "uppercase" },
  jrUnder: { width: 56, height: 3, background: C.blue, borderRadius: 2, margin: "22px auto" },
  jrSub: { color: C.soft, fontSize: 17 },
  jrSteps: { padding: "30px 0 50px" },
  jrStep: { display: "grid", gridTemplateColumns: "64px 64px 1fr 1fr", gap: 18, alignItems: "stretch", padding: "28px 0", paddingLeft: "clamp(0px,5vw,100px)", borderBottom: "1px solid #14141b" },
  jrNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(38px,4vw,56px)", color: "#222a3a", lineHeight: 1, paddingTop: 6 },
  jrIconCol: { display: "flex", flexDirection: "column", alignItems: "center" },
  jrCircle: { width: 62, height: 62, borderRadius: "50%", border: "1px solid #2b3350", display: "flex", alignItems: "center", justifyContent: "center", color: C.blue, flexShrink: 0, background: "#0c0c12" },
  jrLine: { width: 2, flex: 1, minHeight: 44, background: "#222a40", marginTop: 6 },
  jrDot: { width: 11, height: 11, borderRadius: "50%", background: C.blue, boxShadow: "0 0 14px 2px rgba(47,107,255,0.7)", marginTop: -1, marginBottom: -34 },
  jrText: { paddingTop: 6 },
  jrStepLabel: { color: C.blue, fontWeight: 700, fontSize: 13.5, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 },
  jrTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(23px,2.8vw,30px)", textTransform: "uppercase", color: "#fff", letterSpacing: "-0.5px", marginBottom: 12 },
  jrDesc: { color: C.muted, fontSize: 16.5, lineHeight: 1.6, maxWidth: 290 },
  jrVisual: { display: "flex", alignItems: "center", justifyContent: "center", minHeight: 150 },
  jrClosing: { textAlign: "center", padding: "50px 0 90px", borderTop: "1px solid #15151c" },
  jrClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4.5vw,48px)", color: "#fff", textTransform: "uppercase", letterSpacing: "-1px", marginBottom: 14 },
  jrClosingSub: { color: C.muted, fontSize: 16, marginBottom: 30 },
  sportLink: { fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 },

  // the playbook section
  playbookWrap: { padding: "18px 0 56px" },
  playbookGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" },
  pbLabel: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,42px)", letterSpacing: "-.5px", display: "inline-block", marginBottom: 14, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  pbHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(20px,2.3vw,24px)", lineHeight: 1.3, letterSpacing: "-.3px", margin: "0 0 18px" },
  pbLede: { color: C.muted, fontSize: 16, lineHeight: 1.7, maxWidth: "none", marginBottom: 30 },
  featGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 18 },
  featCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 14, padding: "18px 18px 20px" },
  featIcon: { width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  featTitle: { fontWeight: 700, fontSize: 15.5, marginBottom: 7, lineHeight: 1.25 },
  featDesc: { color: C.muted, fontSize: 13.5, lineHeight: 1.55 },
  pbCard: { borderRadius: 20, overflow: "hidden", border: "1px solid " + C.line, background: C.panel },
  pbImg: { height: 340 },
  pbStats: { display: "grid", gridTemplateColumns: "1fr 1fr" },
  pbStatCell: { padding: "22px 26px" },
  pbStatTop: { display: "flex", alignItems: "center", gap: 10, marginBottom: 4 },
  pbStatNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 26 },
  pbStatLabel: { color: C.muted, fontSize: 13.5 },

  // the dugout section
  dugoutWrap: { padding: "40px 0 90px" },
  dugoutHeadWrap: { textAlign: "center", maxWidth: 720, margin: "0 auto 46px" },
  dugoutLabel: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,46px)", letterSpacing: "-.5px", display: "inline-block", marginBottom: 16, background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  dugoutLede: { color: C.muted, fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: "0 auto" },
  dugoutGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 },
  dugoutCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "28px 26px" },
  dugoutIcon: { width: 52, height: 52, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 },
  dugoutCardTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 19, marginBottom: 10 },
  dugoutCardDesc: { color: C.muted, fontSize: 14.5, lineHeight: 1.6 },

  // cta banner
  ctaWrap: { padding: "10px 0 90px" },
  ctaCard: { position: "relative", overflow: "hidden", borderRadius: 24, border: "1px solid " + C.line, background: C.panel, minHeight: 300 },
  ctaPhoto: { position: "absolute", inset: 0, backgroundSize: "cover", backgroundPosition: "right 45%", backgroundRepeat: "no-repeat" },
  ctaOverlay: { position: "absolute", inset: 0, background: "transparent" },
  ctaInner: { position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30, padding: "60px 48px", flexWrap: "wrap" },
  ctaLeft: { maxWidth: 560 },
  ctaIconRow: { display: "flex", alignItems: "center", gap: 18, marginBottom: 16 },
  ctaIcon: { width: 60, height: 60, borderRadius: "50%", border: "1px solid rgba(47,107,255,.45)", display: "flex", alignItems: "center", justifyContent: "center", color: C.blue, flexShrink: 0 },
  ctaHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(22px,2.8vw,32px)", lineHeight: 1.12, letterSpacing: "-.5px" },
  ctaDesc: { color: C.muted, fontSize: 15.5, lineHeight: 1.6 },
  ctaBtns: { display: "flex", gap: 14, flexShrink: 0, alignSelf: "flex-end", marginBottom: -26 },

  // platform features
  platWrap: { padding: "18px 0 56px" },
  platHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(28px,3.8vw,42px)", letterSpacing: "-.5px", margin: "12px 0 34px" },
  platGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 },
  platCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" },
  platImg: { height: 340, position: "relative" },
  platIcon: { position: "absolute", top: 16, left: 16, width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" },
  platBody: { padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" },
  platTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 21, marginBottom: 10, lineHeight: 1.2 },
  platDesc: { color: C.muted, fontSize: 14.5, lineHeight: 1.6, marginBottom: 16, flex: 1 },
  platLink: { color: C.blue, fontWeight: 600, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 },
  platTrust: { marginTop: 28, border: "1px solid " + C.line, borderRadius: 16, background: C.panel, display: "flex", alignItems: "center", padding: "20px 28px", flexWrap: "wrap", gap: 20 },
  trustCell: { display: "flex", alignItems: "center", gap: 12, flex: 1, paddingLeft: 22, minWidth: 200 },
  trustStrong: { fontWeight: 700, fontSize: 16, color: C.white, lineHeight: 1.2 },
  trustSub: { color: C.muted, fontSize: 13 },

  // athlete growth score
  scoreWrap: { padding: "20px 0 90px" },
  scoreGrid: { display: "grid", gridTemplateColumns: "380px 1fr", gap: 24, alignItems: "stretch" },
  scoreLeftCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 20, overflow: "hidden" },
  scoreImg: { height: 300 },
  scoreLeftBody: { padding: "22px 24px 26px" },
  scoreLabel: { color: C.muted, fontSize: 14, marginBottom: 4 },
  scoreBigRow: { display: "flex", alignItems: "baseline", gap: 8 },
  scoreBig: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1, color: C.white },
  scorePts: { color: C.blue, fontWeight: 700, fontSize: 20 },
  scoreBadge: { display: "inline-block", marginTop: 14, color: "#22C55E", background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.3)", borderRadius: 8, padding: "6px 12px", fontSize: 13, fontWeight: 600 },
  levelLabel: { color: C.muted, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", margin: "26px 0 14px" },
  levelRow: { display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", borderRadius: 12, border: "1px solid " + C.line, marginBottom: 10, background: "#0e0e12" },
  levelRowActive: { borderColor: "rgba(47,107,255,.6)", background: "rgba(47,107,255,.1)" },
  levelIcon: { width: 38, height: 38, borderRadius: "50%", border: "1px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  levelTitle: { fontWeight: 700, fontSize: 14.5, color: C.white },
  levelDesc: { color: C.muted, fontSize: 12.5, marginTop: 2 },

  scoreRightCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 20, padding: "28px 30px 30px" },
  scoreHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, marginBottom: 18 },
  scoreTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#22C55E", fontSize: "clamp(24px,2.8vw,32px)", letterSpacing: "-.5px", margin: "10px 0 10px" },
  scoreSub: { color: C.muted, fontSize: 15, lineHeight: 1.6, maxWidth: 520 },
  yearSelect: { flexShrink: 0, border: "1px solid " + C.line, borderRadius: 10, padding: "10px 16px", fontSize: 14, fontWeight: 600, color: C.white, background: "#0e0e12", whiteSpace: "nowrap" },
  scoreStatsGrid: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginTop: 24 },
  scoreStatCard: { background: "#0e0e12", border: "1px solid " + C.line, borderRadius: 14, padding: "18px 16px" },
  scoreStatIcon: { width: 40, height: 40, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: 14 },
  scoreStatNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 30, lineHeight: 1, color: C.white },
  scoreStatLabel: { color: C.muted, fontSize: 12.5, lineHeight: 1.35, marginTop: 6, minHeight: 34 },
  scoreStatNote: { fontSize: 12.5, fontWeight: 600, marginTop: 12 },

  analyticsCard: { position: "relative", overflow: "hidden", borderRadius: 20, border: "1px solid " + C.line, background: C.panel, marginTop: 24, minHeight: 200 },
  analyticsPhoto: { position: "absolute", inset: 0, backgroundSize: "cover", backgroundPosition: "left center", backgroundRepeat: "no-repeat" },
  analyticsOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(14,14,18,0) 0%, rgba(14,14,18,0) 30%, rgba(14,14,18,0.55) 46%, rgba(14,14,18,0.97) 66%)" },
  analyticsInner: { position: "relative", zIndex: 2, display: "flex", alignItems: "stretch" },
  analyticsPhotoCol: { flex: "0 0 46%", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", minHeight: 300 },
  analyticsContent: { flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36, padding: "40px 48px", flexWrap: "wrap" },
  analyticsText: { maxWidth: 520 },
  analyticsHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(24px,2.6vw,32px)", lineHeight: 1.12, letterSpacing: "-.5px" },
  analyticsDesc: { color: C.muted, fontSize: 15.5, lineHeight: 1.6, marginTop: 12, maxWidth: 420 },

  // simple process
  processWrap: { padding: "10px 0 90px" },
  processHeadWrap: { textAlign: "center", maxWidth: 760, margin: "0 auto 46px" },
  processHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(32px,5vw,54px)", letterSpacing: "-1px", margin: "10px 0 16px", display: "inline-block", background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  processSub: { color: C.muted, fontSize: 17, lineHeight: 1.6, maxWidth: 560, margin: "0 auto" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 },
  procCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "36px 22px 26px", position: "relative" },
  procNum: { position: "absolute", top: -16, left: 22, width: 36, height: 36, borderRadius: "50%", background: C.blue, color: "#fff", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid " + C.bg },
  procIcon: { color: C.blue, marginBottom: 18, display: "flex" },
  procTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: C.white, lineHeight: 1.25, marginBottom: 12 },
  procDesc: { color: C.muted, fontSize: 13.5, lineHeight: 1.6 },
  timelineRow: { position: "relative", display: "grid", gridTemplateColumns: "repeat(6,1fr)", marginTop: 24 },
  timelineLine: { position: "absolute", top: "50%", left: "8%", right: "8%", borderTop: "2px dashed rgba(47,107,255,0.45)", transform: "translateY(-50%)" },
  timelineCell: { display: "flex", justifyContent: "center" },
  timelineDot: { width: 16, height: 16, borderRadius: "50%", background: C.blue, boxShadow: "0 0 0 4px rgba(47,107,255,0.2)", position: "relative", zIndex: 1 },

  // closing banner
  closingWrap: { position: "relative", minHeight: 580, overflow: "hidden" },
  closingPhoto: { position: "absolute", inset: 0, backgroundSize: "cover", backgroundPosition: "right 25%", backgroundRepeat: "no-repeat" },
  closingOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,12,0.97) 0%, rgba(10,10,12,0.82) 34%, rgba(10,10,12,0.35) 62%, rgba(10,10,12,0.05) 100%)" },
  closingInner: { position: "relative", zIndex: 2, display: "flex", alignItems: "center", minHeight: 580 },
  closingText: { maxWidth: 600 },
  closingHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(36px,6vw,70px)", lineHeight: 1.05, letterSpacing: "-1.5px", display: "inline-block", background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  closingAccent: { width: 64, height: 4, background: C.blue, borderRadius: 2, margin: "26px 0 22px" },
  closingSub: { color: C.white, fontSize: 19, fontWeight: 500, marginBottom: 16 },
  closingDesc: { color: C.muted, fontSize: 16.5, lineHeight: 1.7, marginBottom: 32, maxWidth: 470 },

  // footer
  footerWrap: { borderTop: "1px solid " + C.line, padding: "40px 0 36px" },
  footerTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30, flexWrap: "wrap", paddingBottom: 26, borderBottom: "1px solid " + C.line, marginBottom: 22 },
  footerBrand: { display: "flex", alignItems: "center", gap: 18, marginLeft: "0px" },
  footerLogoImg: { height: 82, width: "auto", display: "block" },
  footerLogo: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 50, color: C.white },
  footerTagline: { color: C.muted, fontSize: 16, lineHeight: 1.45, maxWidth: 280 },
  footerNav: { display: "flex", gap: 38, flexWrap: "wrap", flex: 1, justifyContent: "center" },
  footerLink: { color: C.soft, fontSize: 15, textDecoration: "none" },
  fbHeroSec: { position: "relative", minHeight: 640, display: "flex", alignItems: "center", padding: "70px 0" },
  fbHeroText: { maxWidth: 640 },
  fbMeasureSec: { position: "relative", padding: "48px 0 42px", background: "linear-gradient(180deg, rgba(34,197,94,0.06), rgba(10,10,12,0) 70%)" },
  fbBanner: { height: 440, width: "100%" },
  bbOppSec: { padding: "58px 0" },
  bbOppGrid: { display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 44, alignItems: "stretch" },
  bbOppList: { display: "flex", flexDirection: "column", justifyContent: "center" },
  bbOppItem: { display: "flex", alignItems: "center", gap: 18, padding: "16px 0", borderBottom: "1px solid " + C.line },
  bbOppIcon: { width: 34, display: "flex", justifyContent: "center", flexShrink: 0 },
  bbOppIconImg: { height: 30, width: "auto", display: "block" },
  bbOppLabel: { color: "#fff", fontWeight: 600, fontSize: 17, letterSpacing: "1px", textTransform: "uppercase" },
  bbOppImg: { minHeight: 340, borderRadius: 14, border: "1px solid " + C.line },
  bbCloseSec: { padding: "20px 0 80px" },
  swBigPlay: { fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 800, lineHeight: 1.15, textAlign: "center", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px", margin: 0 },
  vbMeasureGrid: { display: "grid", gridTemplateColumns: "1.25fr 0.9fr", gap: 44, alignItems: "center" },
  vbMeasureImg: { minHeight: 300, borderRadius: 14, border: "1px solid " + C.line, alignSelf: "stretch" },
  vbCloseRight: { display: "flex", alignItems: "center", gap: 40, marginRight: "clamp(0px,6vw,110px)" },
  vbCloseDivider: { width: 1, height: 110, background: C.line },
  vbCloseSub: { color: C.muted, fontSize: 15, letterSpacing: "1px", textTransform: "uppercase", marginTop: 18 },
  fbVisSec: { padding: "62px 0" },
  fbVisGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 54, alignItems: "center" },
  fbVisH2: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: "#fff", textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.1 },
  fbVisTags: { color: C.muted, fontSize: 15.5, letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: 2.1 },
  fbVisImg: { height: 320, borderRadius: 14, border: "1px solid " + C.line },
  fbClosingSec: { padding: "20px 0 80px" },
  fbClosingRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30 },
  fbClosingH: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.6vw,42px)", color: "#fff", textTransform: "uppercase", letterSpacing: "-0.5px", lineHeight: 1.12 },
  fbEy2: { fontWeight: 700, letterSpacing: "3px", fontSize: 13, textTransform: "uppercase", marginBottom: 32 },
  fbMeasureRow: { display: "grid", gridTemplateColumns: "repeat(6,1fr)" },
  fbMeasureCell: { textAlign: "center", padding: "8px 12px 26px", borderRight: "1px solid rgba(255,255,255,0.12)" },
  fbMeasureIcon: { display: "flex", justifyContent: "center", marginBottom: 18 },
  fbMeasureImg: { height: 50, width: "auto", display: "block" },
  fbMeasureLabel: { color: "#fff", fontWeight: 700, fontSize: 14.5, letterSpacing: "0.5px", textTransform: "uppercase" },
  fbMeasureSub: { color: C.soft, fontSize: 15, marginTop: 26 },
  fbEy: { display: "flex", alignItems: "center", gap: 16, fontWeight: 700, letterSpacing: "3px", fontSize: 14, textTransform: "uppercase", marginBottom: 22 },
  fbEyLine: { width: 46, height: 2, display: "inline-block" },
  fbH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(40px,7vw,82px)", letterSpacing: "-2px", lineHeight: 1.0, color: "#fff", textTransform: "uppercase" },
  fbSub: { color: C.soft, fontSize: 16.5, lineHeight: 1.7, marginTop: 28 },
  authWrap: { display: "flex", justifyContent: "center", padding: "70px 20px 110px" },
  authCard: { width: "100%", maxWidth: 440, margin: "0 auto", textAlign: "center", background: C.panel, border: "1px solid " + C.line, borderRadius: 20, padding: "40px 34px" },
  authEy: { color: C.blue, fontWeight: 700, fontSize: 12, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 },
  authTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.4vw,34px)", color: "#fff", letterSpacing: "-0.5px", marginBottom: 10 },
  authSub: { color: C.muted, fontSize: 14.5, lineHeight: 1.6, marginBottom: 26 },
  authInput: { width: "100%", boxSizing: "border-box", background: C.bg, border: "1px solid " + C.line, borderRadius: 12, padding: "14px 16px", color: "#fff", fontSize: 15, marginBottom: 14, outline: "none" },
  authAlt: { color: C.muted, fontSize: 14, textAlign: "center", marginTop: 20 },
  aboutH1: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(30px,5vw,52px)", color: "#fff", letterSpacing: "-1px", lineHeight: 1.08, marginBottom: 26 },
  aboutP: { color: C.soft, fontSize: 17, lineHeight: 1.75, marginBottom: 20, maxWidth: 760 },
  footerSocial: { display: "flex", gap: 16, color: C.muted },
  socialLink: { color: C.muted, display: "flex" },
  footerHero: { position: "relative", display: "flex", justifyContent: "center", paddingBottom: 30, marginBottom: 30, borderBottom: "1px solid " + C.line },
  footerBrandLeft: { position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" },
  footerImgRight: { position: "absolute", right: 240, top: "50%", transform: "translateY(calc(-50% - 22px))" },
  footerImg: { width: 330, height: 240, borderRadius: 16, border: "none", overflow: "hidden" },
  footerContact: { maxWidth: 470 },
  footerContactHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 25, color: C.white, marginBottom: 14 },
  fcRow: { display: "flex", alignItems: "flex-start", gap: 14, padding: "15px 0", borderTop: "1px solid " + C.line },
  fcIcon: { color: C.muted, marginTop: 1, flexShrink: 0, display: "flex" },
  fcText: { color: C.soft, fontSize: 17, lineHeight: 1.55 },
  footerBottom: { display: "flex", justifyContent: "space-between", color: C.muted, fontSize: 13.5, flexWrap: "wrap", gap: 10 },

  // ---- sport inner page ----
  spHeroWrap: { position: "relative", minHeight: 540, overflow: "hidden", borderBottom: "1px solid " + C.line },
  spHeroPhoto: { position: "absolute", inset: 0, zIndex: 0 },
  spHeroOverlay: { position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, rgba(10,10,12,0.97) 0%, rgba(10,10,12,0.72) 46%, rgba(10,10,12,0.45) 100%)" },
  spHeroInner: { position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: 540, paddingTop: 90, paddingBottom: 48 },
  spHeroContent: { marginLeft: 32, maxWidth: 600 },
  spBack: { position: "absolute", zIndex: 3, top: 26, left: "clamp(20px,4vw,64px)", background: "rgba(255,255,255,0.08)", color: C.white, border: "1px solid rgba(255,255,255,0.18)", padding: "8px 16px", borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: "pointer" },
  spIconBadge: { width: 64, height: 64, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 6 },
  spTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(40px,7vw,72px)", letterSpacing: "-1.5px", lineHeight: 1.02, margin: "8px 0 0" },
  spLede: { color: C.soft, fontSize: 18, lineHeight: 1.6, maxWidth: 560, margin: "14px 0 22px" },
  spStats: { display: "flex", gap: 36, flexWrap: "wrap", marginBottom: 26 },
  spStat: { display: "flex", alignItems: "center", gap: 10 },
  spStatVal: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 22, color: C.white, lineHeight: 1 },
  spStatKey: { color: C.muted, fontSize: 13 },
  spBtns: { display: "flex", gap: 14, flexWrap: "wrap" },
  spBadge: { display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid", padding: "6px 14px", borderRadius: 999, fontSize: 12.5, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 22, alignSelf: "flex-start" },
  spStatsCards: { position: "absolute", right: "clamp(20px,4vw,64px)", bottom: 48, display: "flex", gap: 14 },
  spStatCard2: { background: "rgba(14,14,18,0.55)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid " + C.line, borderRadius: 14, padding: "14px 20px", textAlign: "center", minWidth: 90 },
  spStatCardIcon: { display: "flex", justifyContent: "center", marginBottom: 6 },
  spStatCardVal: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 20, color: C.white, lineHeight: 1 },
  spStatCardKey: { color: C.muted, fontSize: 12, marginTop: 3 },
  spSection: { padding: "64px 0" },
  spHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(26px,3.4vw,40px)", letterSpacing: "-.5px", margin: "8px 0 8px" },
  spSub: { color: C.muted, fontSize: 16, lineHeight: 1.6, maxWidth: 560, marginBottom: 30 },
  spWhyGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 28 },
  spWhyCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "28px 24px" },
  spWhyIcon: { width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid " + C.line, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  spWhyTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 18, color: C.white, marginBottom: 10 },
  spWhyDesc: { color: C.muted, fontSize: 14, lineHeight: 1.6 },
  spAthGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 },
  spAthCard: { position: "relative", background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "22px", textAlign: "center" },
  spAthScore: { position: "absolute", top: 14, right: 14, fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 14, background: "#0e0e12", border: "1px solid " + C.line, borderRadius: 999, padding: "3px 9px" },
  spAthTop: { display: "flex", justifyContent: "center", marginBottom: 16 },
  spAthImg: { width: 84, height: 84, borderRadius: "50%", objectFit: "cover", border: "2px solid " + C.line },
  spAthName: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 16, color: C.white, marginBottom: 4 },
  spAthTag: { color: C.muted, fontSize: 13 },
  spLeagueGrid: { display: "grid", gap: 14 },
  spLeagueCard: { display: "flex", alignItems: "center", gap: 18, background: C.panel, border: "1px solid " + C.line, borderRadius: 14, padding: "18px 22px" },
  spLeagueBadge: { width: 46, height: 46, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 },
  spLeagueTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 17, color: C.white, marginBottom: 4 },
  spLeagueMeta: { color: C.muted, fontSize: 13.5 },
  spLeagueNote: { fontSize: 13, fontWeight: 600, padding: "5px 12px", borderRadius: 999, border: "1px solid", flexShrink: 0 },
  spCta: { borderRadius: 24, padding: "56px 40px", textAlign: "center" },
  spCtaHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: "#fff", fontSize: "clamp(26px,3.2vw,38px)", letterSpacing: "-.5px", marginBottom: 12 },
  spCtaSub: { color: "rgba(255,255,255,0.85)", fontSize: 16.5, marginBottom: 26, maxWidth: 460, marginLeft: "auto", marginRight: "auto" },
  spCtaEyebrow: { display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: ".5px", marginBottom: 16, background: "rgba(255,255,255,0.18)", padding: "6px 15px", borderRadius: 999 },
  spBanner: { display: "grid", gridTemplateColumns: "1fr 1fr", background: C.panel, border: "1px solid " + C.line, borderRadius: 20, overflow: "hidden" },
  spBannerImg: { minHeight: 340, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" },
  spBannerBody: { padding: "44px", display: "flex", flexDirection: "column", justifyContent: "center" },
  spBannerEyebrow: { display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 700, letterSpacing: ".4px", marginBottom: 14 },
  spBannerHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(23px,2.5vw,31px)", color: C.white, lineHeight: 1.25, marginBottom: 16 },
  spBannerDesc: { color: C.muted, fontSize: 15.5, lineHeight: 1.75, marginBottom: 24 },
  spBannerStats: { display: "flex", gap: 34, flexWrap: "wrap" },
  spBannerStatVal: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1 },
  spBannerStatKey: { color: C.muted, fontSize: 13, marginTop: 5 },
  spAdvGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 30 },
  spAdvCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, overflow: "hidden" },
  spAdvImg: { height: 150, position: "relative" },
  spAdvBadge: { position: "absolute", left: 18, bottom: 14, width: 46, height: 46, borderRadius: 12, background: "rgba(10,10,12,0.72)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 },
  spAdvBody: { padding: "24px 22px 26px" },
  spAdvTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 18, color: C.white, marginBottom: 10 },
  spAdvDesc: { color: C.muted, fontSize: 14, lineHeight: 1.6 },
  paDash: { display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 22, marginBottom: 22 },
  paCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 18, padding: "26px 28px" },
  paTableScroll: { overflowX: "auto" },
  paTable: { minWidth: 660 },
  paRow: { display: "grid", gridTemplateColumns: "34px 1.4fr 1fr 0.9fr 1.1fr 1.3fr 84px", alignItems: "center", gap: 10, padding: "16px 0", borderTop: "1px solid " + C.line },
  paHeadRow: { borderTop: "none", paddingTop: 0, paddingBottom: 14 },
  paHeadCell: { color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase" },
  paNum: { color: C.muted, fontWeight: 700, fontSize: 14 },
  paOpp: { color: C.white, fontWeight: 600, fontSize: 14.5 },
  paCell: { color: C.soft, fontSize: 13.5 },
  paBreak: { fontSize: 12.5, color: C.muted, lineHeight: 1.7 },
  paPtsWrap: { display: "flex", justifyContent: "flex-end" },
  paPtsBadge: { width: 54, height: 54, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.5)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  paPtsNum: { color: "#22C55E", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 17, lineHeight: 1 },
  paPtsLbl: { color: "#22C55E", fontSize: 9, opacity: 0.85 },
  paBonusRow: { display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: "1px solid " + C.line },
  paBonusIcon: { width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 },
  paBonusLabel: { color: C.white, fontWeight: 600, fontSize: 14.5 },
  paBonusPts: { color: "#22C55E", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 17 },
  paBonusPtsLbl: { color: C.muted, fontSize: 11, fontWeight: 500 },
  paTotalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18 },
  paTotalLabel: { color: "#22C55E", fontWeight: 700, fontSize: 13.5, letterSpacing: ".3px" },
  paTotalVal: { color: "#22C55E", fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18 },
  paBottom: { display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 30, alignItems: "center", background: C.panel, border: "1px solid " + C.line, borderRadius: 18, padding: "30px 34px" },
  paScoreSide: { display: "flex", alignItems: "center", gap: 16 },
  paStar: { width: 54, height: 54, borderRadius: 14, background: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, color: "#0A0A0C", flexShrink: 0 },
  paScoreLabel: { color: C.muted, fontSize: 14, marginBottom: 4 },
  paScoreVal: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 26, color: C.white },
  paScoreUnit: { color: "#22C55E", fontSize: 16 },
  paScoreNote: { color: C.muted, fontSize: 13, fontWeight: 500 },
  paSummaryText: { color: C.soft, fontSize: 14.5, marginBottom: 18 },
  paBars: { display: "flex", alignItems: "flex-end", gap: 10, height: 90 },
  paBarCol: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" },
  paBarTrack: { width: "100%", flex: 1, display: "flex", alignItems: "flex-end" },
  paBarFill: { width: "100%", borderRadius: 6, minHeight: 6 },
  paBarLabel: { color: C.muted, fontSize: 11 },
  careerEyebrow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 22, fontWeight: 700, letterSpacing: ".3px", marginBottom: 32 },
  careerGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" },
  careerHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.08, letterSpacing: "-1px", color: C.white, marginBottom: 20 },
  careerHeadGrad: { background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  careerDesc: { color: C.muted, fontSize: 16, lineHeight: 1.7, marginBottom: 30, maxWidth: 480 },
  careerFeats: { display: "flex", flexDirection: "column", gap: 22 },
  careerFeat: { display: "flex", gap: 16, alignItems: "flex-start" },
  careerFeatIcon: { width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  careerFeatTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 16, color: C.white, marginBottom: 4 },
  careerFeatDesc: { color: C.muted, fontSize: 14, lineHeight: 1.55 },
  ccCard: { background: "#0d130e", border: "1px solid rgba(34,197,94,0.28)", borderRadius: 22, padding: "30px 30px 28px", boxShadow: "0 20px 50px rgba(0,0,0,0.4)" },
  ccHeader: { display: "flex", gap: 18, alignItems: "center" },
  ccAvatar: { width: 66, height: 66, borderRadius: "50%", objectFit: "cover", border: "2px solid #22C55E", padding: 2 },
  ccName: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 19, color: C.white },
  ccRole: { color: C.muted, fontSize: 14, marginTop: 2 },
  ccTier: { display: "flex", alignItems: "center", gap: 7, color: "#22C55E", fontSize: 13.5, fontWeight: 600, marginTop: 6 },
  ccDot: { width: 9, height: 9, borderRadius: "50%", background: "#2F6BFF" },
  ccDivider: { height: 1, background: C.line, margin: "22px 0" },
  ccStats: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 },
  ccStatBox: { background: "rgba(255,255,255,0.03)", border: "1px solid " + C.line, borderRadius: 12, padding: "16px 10px", textAlign: "center" },
  ccStatNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 24, color: "#22C55E", lineHeight: 1 },
  ccStatLbl: { color: C.muted, fontSize: 13, marginTop: 6 },
  ccBadges: { display: "flex", gap: 10, flexWrap: "wrap", margin: "20px 0 18px" },
  ccBadge: { background: "rgba(245,158,11,0.14)", border: "1px solid rgba(245,158,11,0.4)", color: "#F59E0B", fontSize: 12.5, fontWeight: 600, padding: "6px 12px", borderRadius: 999 },
  ccViews: { display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", border: "1px solid " + C.line, borderRadius: 12, padding: "13px 16px", color: C.soft, fontSize: 13.5 },
  acadTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: C.white, fontSize: "clamp(30px,4.5vw,50px)", letterSpacing: "-1px", lineHeight: 1.08, margin: "8px 0 0" },
  acadPills: { display: "flex", gap: 12, flexWrap: "nowrap", overflowX: "auto", marginTop: 36 },
  acadPill: { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: C.soft, fontSize: 13.5, fontWeight: 500, padding: "8px 16px", borderRadius: 999, whiteSpace: "nowrap", flexShrink: 0 },
  acadGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 },
  acadCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, overflow: "hidden" },
  acadImg: { height: 180, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" },
  acadBody: { padding: "22px 22px 24px" },
  acadName: { fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 18, color: C.white, marginBottom: 8 },
  acadLoc: { color: C.muted, fontSize: 14, display: "flex", alignItems: "center", gap: 5 },
  hiwHero: { padding: "84px 0 64px", textAlign: "center", borderBottom: "1px solid " + C.line, background: "radial-gradient(circle at 50% -10%, rgba(34,197,94,0.10), transparent 55%)" },
  hiwEyebrow: { color: "#22C55E", fontWeight: 700, fontSize: 13, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 22 },
  hiwHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(36px,6vw,66px)", letterSpacing: "-1.5px", color: C.white, lineHeight: 1.05 },
  hiwHeadGrad: { background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  hiwDesc: { color: C.muted, fontSize: 18, lineHeight: 1.6, maxWidth: 620, margin: "20px auto 0" },
  hiwPills: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 26, marginTop: 32 },
  hiwPill: { display: "inline-flex", alignItems: "center", gap: 8, color: C.soft, fontWeight: 600, fontSize: 15 },
  hiwGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 },
  hiwCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 18, padding: "28px 26px 30px" },
  hiwCardTop: { display: "flex", alignItems: "center", gap: 14, marginBottom: 18 },
  hiwIcon: { width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 },
  hiwStep: { fontWeight: 700, fontSize: 12.5, letterSpacing: "2px" },
  hiwTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 19, color: C.white, marginBottom: 10 },
  hiwDesc2: { color: C.muted, fontSize: 14, lineHeight: 1.6 },
  hiwRow: { display: "grid", gap: 50, alignItems: "center", marginBottom: 64 },
  hiwRowImgWrap: { position: "relative", display: "flex", justifyContent: "center" },
  hiwRowImg: { width: "100%", aspectRatio: "1 / 1", borderRadius: 22 },
  hiwRowBadge: { position: "absolute", bottom: -18, left: "50%", transform: "translateX(-50%)", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A0A0C", fontWeight: 800, fontSize: 16 },
  hiwRowStep: { display: "flex", alignItems: "center", gap: 16, marginBottom: 14 },
  hiwRowLine: { height: 1, width: 90, display: "inline-block" },
  hiwRowTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-.5px", color: C.white, marginBottom: 14 },
  hiwRowDesc: { color: C.muted, fontSize: 16, lineHeight: 1.7, marginBottom: 26, maxWidth: 720 },
  hiwChecks: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  hiwCheck: { display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.03)", border: "1px solid " + C.line, borderRadius: 10, padding: "13px 16px" },
  hiwCheckIcon: { width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 },
  hiwCheckText: { color: C.soft, fontSize: 13.5, lineHeight: 1.4 },
  abtHero: { padding: "80px 0 50px", textAlign: "center", background: "radial-gradient(circle at 50% -10%, rgba(34,197,94,0.10), transparent 55%)" },
  abtBadge: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.4)", color: "#22C55E", fontWeight: 700, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", padding: "8px 18px", borderRadius: 999, marginBottom: 26 },
  abtHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(36px,6vw,64px)", letterSpacing: "-1.5px", color: C.white, lineHeight: 1.08 },
  abtHeadGrad: { background: "linear-gradient(90deg,#22C55E,#2F6BFF)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" },
  abtDesc: { color: C.muted, fontSize: 18, lineHeight: 1.6, maxWidth: 600, margin: "20px auto 0" },
  abtStatsWrap: { padding: "30px 0 50px", borderBottom: "1px solid " + C.line },
  abtStats: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 },
  abtStat: { textAlign: "center" },
  abtStatIcon: { fontSize: 28, marginBottom: 10 },
  abtStatNum: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 30, color: "#22C55E", lineHeight: 1 },
  abtStatLbl: { color: C.muted, fontSize: 14, marginTop: 6 },
  abtStoryCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 20, padding: "40px 44px", maxWidth: 820, margin: "0 auto", textAlign: "center" },
  abtStoryP: { color: C.soft, fontSize: 16.5, lineHeight: 1.8, marginBottom: 22 },
  abtGoal: { maxWidth: 820, margin: "22px auto 0", textAlign: "center", background: "linear-gradient(120deg, rgba(34,197,94,0.12), rgba(47,107,255,0.12))", border: "1px solid " + C.line, borderRadius: 18, padding: "30px 40px", color: C.white, fontWeight: 600, fontSize: 19, lineHeight: 1.6 },
  abtGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 },
  abtCard: { background: C.panel, border: "1px solid " + C.line, borderRadius: 16, padding: "28px 24px" },
  abtCardIcon: { width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18 },
  abtCardTitle: { fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 18, color: C.white, marginBottom: 10 },
  abtCardDesc: { color: C.muted, fontSize: 14, lineHeight: 1.6 },
  abtVision: { padding: "70px 0 100px", textAlign: "center" },
  abtVisionIcon: { width: 70, height: 70, borderRadius: "50%", border: "1px solid rgba(47,107,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, color: "#F59E0B", margin: "0 auto 18px", background: "rgba(47,107,255,0.06)" },
  abtVisionLabel: { color: "#2F6BFF", fontWeight: 700, fontSize: 13, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 24 },
  abtVisionHead: { fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4.5vw,52px)", letterSpacing: "-1px", color: C.white, lineHeight: 1.12, maxWidth: 900, margin: "0 auto" },
  abtVisionSub: { color: C.muted, fontSize: 17, marginTop: 22 },
  abtVisionBtn: { marginTop: 32, border: "none", color: "#0A0A0C", fontWeight: 700, fontSize: 16, padding: "15px 32px", borderRadius: 999, cursor: "pointer", background: "linear-gradient(90deg,#22C55E,#A3E635)", boxShadow: "0 0 40px rgba(34,197,94,0.4)" },
};

// ============================================================
//  font import + hover + responsive (what inline styles can't do)
// ============================================================
const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:${C.bg}}
html,body{overflow-x:hidden;max-width:100vw;-webkit-text-size-adjust:100%}
img{max-width:100%}
*{-webkit-tap-highlight-color:transparent}
@media(max-width:980px){.nav-burger{display:inline-flex!important}}
@media(min-width:981px){.nav-burger{display:none!important}.mobile-menu{display:none!important}}
@media(max-width:760px){.fb-measure-row{grid-template-columns:repeat(3,1fr)!important;gap:26px 10px!important}}
@media(max-width:430px){.fb-measure-row{grid-template-columns:repeat(2,1fr)!important}}

.navlink:hover{color:${C.white}!important}
.btn-blue:hover{background:${C.blueDark}!important;transform:translateY(-1px)}
.btn-outline:hover{border-color:${C.blue}!important;background:rgba(47,107,255,.08)!important}
.btn-blue,.btn-outline,.navlink{transition:all .18s}

:focus-visible{outline:2px solid ${C.blue};outline-offset:3px}

@media(max-width:980px){
  .nav-links{display:none!important}
}
@media(max-width:760px){
  .hero-photo{display:none!important}
  .stats-grid{grid-template-columns:1fr 1fr!important;gap:24px 0}
  .stat-cell{border-left:none!important}
}
@media(max-width:440px){
  .stats-grid{grid-template-columns:1fr!important}
}
@media(max-width:780px){
  .footer-hero{flex-direction:column;gap:30px}
  .footer-brand-left{position:static!important;transform:none!important;display:flex;justify-content:center}
  .footer-img-right{position:static!important;transform:none!important;display:flex;justify-content:center}
  .footer-contact{margin:0 auto}
  .home-footer-logo{transform:translateY(-6px)!important}
}
@media(min-width:781px){
  .footer-contact{margin-left:auto;margin-right:220px;transform:none}
}
@media(max-width:820px){
  .jr-step{grid-template-columns:42px 56px 1fr!important;gap:14px!important}
  .jr-visual{display:none!important}
}
@media(max-width:820px){
  .ft-row{grid-template-columns:1fr!important;gap:14px!important}
  .ft-content{grid-template-columns:1fr!important;gap:10px!important}
  .ft-row > div:last-child{display:none!important}
}
@media(max-width:900px){
  .dg-hero{grid-template-columns:1fr!important}
  .dg-heroright{flex-direction:column}
  .dg-grid{grid-template-columns:1fr!important;gap:32px!important}
  .dg-ach{flex-direction:column!important;align-items:flex-start!important;gap:28px!important}
  .dg-close{flex-direction:column!important;align-items:flex-start!important;gap:26px!important}
  .dg-more{grid-template-columns:1fr!important;gap:24px!important}
  .dg-morecards{grid-template-columns:1fr!important}
  .dg-mom{grid-template-columns:1fr!important;gap:22px!important}
  .dg-momrow{grid-template-columns:repeat(2,1fr)!important}
}
@media(max-width:900px){
  .pb-hero{grid-template-columns:1fr!important}
  .pb-feat-item:last-child{border-bottom:none}
  .dg-momchip:last-child{border-right:none}
  .fb-measure-cell:last-child{border-right:none}
  .vb-measure{grid-template-columns:1fr!important;gap:28px!important}
  .ab-split{grid-template-columns:1fr!important;gap:30px!important}
  .bb-opp{grid-template-columns:1fr!important;gap:26px!important}
  .fb-vis{grid-template-columns:1fr!important;gap:30px!important}
  .fb-close{flex-direction:column!important;align-items:flex-start!important;gap:26px!important}
  .pb-tri{grid-template-columns:1fr!important;gap:30px!important}
  .pb-jour{grid-template-columns:1fr!important;gap:24px!important}
  .pb-share{grid-template-columns:1fr!important;gap:24px!important}
  .pb-one{grid-template-columns:1fr!important;gap:18px!important}
  .pb-timeline{flex-direction:column;gap:22px}
  .pb-tlline{display:none!important}
}
.cr-cell{border-right:1px solid #262E47;border-bottom:1px solid #262E47}
.cr-cell:nth-child(4n){border-right:none}
.cr-cell:nth-last-child(-n+4){border-bottom:none}
@media(max-width:980px){
  .cr-dugband{grid-template-columns:1fr!important;gap:38px!important}
}
@media(max-width:860px){
  .cr-split{grid-template-columns:1fr!important;gap:36px!important}
  .cr-split2{grid-template-columns:1fr!important;gap:32px!important}
  .cr-compwrap{grid-template-columns:1fr!important;gap:30px!important}
  .cr-compete{grid-template-columns:repeat(2,1fr)!important}
  .cr-oppgrid{grid-template-columns:repeat(3,1fr)!important}
}
@media(max-width:480px){
  .cr-oppgrid{grid-template-columns:repeat(2,1fr)!important}
}
@media(max-width:900px){
  .ab-split > div,.ab-split > div > div,
  .cr-split > div,.cr-split > div > div,
  .cr-dugband > div,.cr-dugband > div > div,
  .dg-grid > div,.dg-grid > div > div{
    transform:none!important;margin-left:0!important;margin-right:0!important;padding-left:0!important;
  }
  .cr-dugphone-wrap{justify-content:center!important}
}
/* ---- PORTRAIT phones ---- */
@media(max-width:560px){
  .auth-wrap{padding:40px 16px 70px!important}
  .auth-card{padding:28px 20px!important}
  .auth-title{font-size:22px!important}
}
@media (orientation: portrait) and (max-width: 560px){
  .wrap{padding-left:18px!important;padding-right:18px!important}
}
/* ---- LANDSCAPE phones (short height) ---- */
@media (orientation: landscape) and (max-height: 520px){
  .nav-links{display:none!important}
  .nav-burger{display:inline-flex!important}
  header{padding-top:8px!important;padding-bottom:8px!important}
  .wa-float{width:46px!important;height:46px!important;right:14px!important;bottom:14px!important}
  .scroll-cue{display:none!important}
}

.sport-card{transition:transform .2s,border-color .2s}
.sport-card:hover{transform:translateY(-5px);border-color:rgba(47,107,255,.4)}
.sport-link{transition:gap .2s}
.sport-link:hover{gap:10px}

@media(max-width:980px){
  .sports-grid{grid-template-columns:1fr 1fr!important}
}
@media(max-width:560px){
  .sports-grid{grid-template-columns:1fr!important}
}

.feat-card{transition:border-color .2s}
@media(max-width:980px){
  .playbook-grid{grid-template-columns:1fr!important}
}
@media(max-width:560px){
  .feat-grid{grid-template-columns:1fr!important}
}

.dugout-card{transition:transform .2s,border-color .2s}
.dugout-card:hover{transform:translateY(-4px);border-color:rgba(34,197,94,.4)}
@media(max-width:860px){
  .dugout-grid{grid-template-columns:1fr!important}
}
@media(min-width:981px){
  .pb-reverse > div:first-child{order:2}
  .pb-reverse > div:last-child{order:1}
}

@media(max-width:860px){
  .cta-inner{flex-direction:column;align-items:flex-start!important}
  .cta-photo{opacity:.35}
}

.plat-card{transition:transform .2s,border-color .2s}
.plat-card:hover{transform:translateY(-5px);border-color:rgba(47,107,255,.4)}
.plat-link{transition:gap .2s}
.plat-link:hover{gap:10px}
@media(max-width:980px){.plat-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:560px){.plat-grid{grid-template-columns:1fr!important}}
@media(max-width:860px){
  .plat-trust{flex-direction:column;align-items:flex-start!important;gap:18px!important}
  .trust-cell{border-left:none!important;padding-left:0!important}
}

@media(max-width:980px){.score-grid{grid-template-columns:1fr!important}}
@media(max-width:1150px){.score-stats{grid-template-columns:repeat(3,1fr)!important}}
@media(max-width:680px){.score-stats{grid-template-columns:repeat(2,1fr)!important}}
@media(max-width:860px){
  .score-head{flex-direction:column;align-items:flex-start!important;gap:14px}
  .analytics-inner{flex-direction:column}
  .analytics-photo-col{flex:none!important;width:100%;min-height:200px!important}
  .analytics-content{align-items:flex-start!important;justify-content:flex-start!important;padding:32px 28px!important}
}

@media(max-width:1150px){.process-grid{grid-template-columns:repeat(3,1fr)!important}.process-timeline{display:none!important}}
@media(max-width:680px){.process-grid{grid-template-columns:repeat(2,1fr)!important}}
@media(max-width:460px){.process-grid{grid-template-columns:1fr!important}}
@media(max-width:900px){.sp-why-grid{grid-template-columns:1fr!important}.sp-ath-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:1024px){.sp-stat-cards{position:static!important;margin-top:30px}}
@media(max-width:860px){.sp-banner{grid-template-columns:1fr!important}}
@media(max-width:900px){.sp-adv-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:560px){.sp-adv-grid{grid-template-columns:1fr!important}}
@media(max-width:900px){.pa-dash{grid-template-columns:1fr!important}.pa-bottom{grid-template-columns:1fr!important}}
@media(max-width:900px){.career-grid{grid-template-columns:1fr!important;gap:36px!important}}
@media(max-width:900px){.acad-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:560px){.acad-grid{grid-template-columns:1fr!important}}
@media(max-width:900px){.hiw-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:560px){.hiw-grid{grid-template-columns:1fr!important}}
@media(max-width:900px){.hiw-row{grid-template-columns:1fr!important}.hiw-checks{grid-template-columns:1fr!important}}
@media(max-width:900px){.abt-stats{grid-template-columns:1fr 1fr!important}.abt-grid{grid-template-columns:1fr 1fr!important}}
@media(max-width:560px){.abt-grid{grid-template-columns:1fr!important}}
.abt-join{transition:transform .15s}
.abt-join:hover{transform:translateY(-2px)}
@media(max-width:460px){.sp-ath-grid{grid-template-columns:1fr!important}}
.sp-back{transition:background .2s}
.sp-back:hover{background:rgba(255,255,255,0.16)!important}

.footer-link,.social-link{transition:color .2s}
.footer-link:hover{color:#fff!important}
.fb-measure-cell:last-child{border-right:none}
.bb-opp-item:last-child{border-bottom:none}
.social-link:hover{color:#fff!important}
@media(max-width:860px){
  .closing-photo{opacity:.4}
  .footer-top{flex-direction:column;align-items:flex-start!important;gap:24px}
  .footer-bottom{flex-direction:column;gap:8px}
}
`;