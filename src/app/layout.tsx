import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from '@/components/bootstrap';
import Navmenu from './Navmenu';
import Footer from './Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "English Exam Exercises",
    template: "%s - English Exam Exercises"
  } ,
  description: "English exam practice exercies for all types of English exams. Smash those exams with this practice!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Navmenu />
            <main>
              <Container className='py-4'>
                {children}
              </Container>
            </main>
            <Footer />
      </body>
    </html>
  )
}
