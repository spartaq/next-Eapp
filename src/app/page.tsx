import Link from "next/link";
import HeroMain from '@/components/HeroMain';
import Image from 'next/image'

export default async function Home () {

    return (
        <div>
        <HeroMain />
        <div className="title">
        <h1>Start Practicing With Effective Exercises</h1>

        </div>
        <div className="gallery">
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Grammar</h2>
                                        <h3>Grammar Exercises</h3>
                                        <p>Cover every grammar point imaginable</p>
                                        <Link href="/Grammar-Exercises">Go To Exercises</Link>
                                    </div>
                                </div>
                            </div>
                    
                        
                    
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Reading</h2>
                                        <h3>Reading Exercises</h3>
                                        <p>Bring Your Reading Skills Up To Par</p>
                                        <Link href="/Reading-Exercises">Go To Exercises </Link>
                                    </div>
                                </div>
                            </div>
                        
                    
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Writing</h2>
                                        <h3>Writing Exercises</h3>
                                        <p>Become The Next John Steinbeck</p>
                                        <Link href="/Writing-Exercises">Go To Exercises</Link>
                                    </div>
                                </div>
                            </div>
                    
                        
                    
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Listening</h2>
                                        <h3>Listening Exercises</h3>
                                        <p>Practice Understanding With Podcasts, Videos, etc.</p>
                                        <Link href="/Listening-Exercises">Go To Exercises</Link>
                                    </div>
                                </div>
                            </div>
                    
                        
                    
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Vocabulary</h2>
                                        <h3>Vocabulary Exercises</h3>
                                        <p>Shakespeare Will Have Nothing On You After These Exerciese!</p>
                                        <Link href="/Vocabulary-Exercises">Go To Exercises</Link>
                                    </div>
                                </div>
                            </div>
                    
                        
                    
                            <div className="card">
                                <div className="box">
                                    <div className="content">
                                        <h2>Speaking</h2>
                                        <h3>Speaking Exercises</h3>
                                        <p>Practice The Most Common Topics That Appear on Exams</p>
                                        <Link href="/Speaking-Exercises">Go To Exercises</Link>
                                    </div>
                                </div>
                            </div>
                    
        </div>
        <div className="hometext">
            
            <div className="heromainpic">
            <Image
                src="/AA-man-standing.png"
                width={500}
                height={500}
                alt="Todd Williams"
            />
            </div>

            <div>   
                <h1 className="title">How to be effective with these exercises</h1>
        
                <p> I’ve gathered together a ton of exercises to help you practice for exams. Sure, you can get exercises like this at other sites, but the one thing that makes this site different is that it has exercises catered directly for the exams – I’ve analyzed years of exams to present the most common topics and vocabulary in these exercises. On top of that, I have sections here that match the different sections found on all types of tests like paragraph headings, picture compare, typical topics on the speaking sections, etc. The best part is I am constantly updating the exercises so you should always have some new exercises to practice.</p>

                <p>The one thing these exercises necessarily miss, though, is speaking practice. Yes, I do have some topics and you can surely use those for preparation. But, really, you also need to talk live in English for, after all, that is the point.</p>

                <p>This is where I come in. I offer exam practice session online to help you, your friends, your children, get through the exams that are so necessary nowadays. Click for details.</p>
            </div>
        
        </div>
       
      </div>
    )
}
       
    