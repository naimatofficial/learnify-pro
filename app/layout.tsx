import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LearnifyPro - Learning Management System",
	description: `LearnifyPro is a comprehensive Learning Management System
    (LMS) platform designed to facilitate online learning experiences.
    Empower educators, engage learners, and track progress effortlessly.`,
	keywords: `LMS, learning management system, online education, e-learning, 
    education platform, IT learning, computer courses, programming`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
