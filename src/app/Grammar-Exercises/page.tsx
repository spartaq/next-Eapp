import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import HeroGrammar from '@/components/HeroGrammar';

export const metadata: Metadata = {
    title: "Grammar",
    description: "English exam practice exercies for all types of English exams. Smash those exams with this practice!",
  };

const Grammarexercises = () => {
    return (
    <div>
           <HeroGrammar /> 
            <div className='exercises-container'>
                <div className='gallery'>
                                      
                                            <div className="card">
                                                <div className="card-header-grammar">
                                                    <h2 className="card-title">Present Perfect</h2>
                                                </div>
                                                
                                                <div className="card-body">
                                                    <ul className="card-links">
                                                        <li><Link href="/grammar1">Grammar 1</Link></li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        
            
                                               
                                                    <div className="card">
                                                    <div className="card-header-grammar">
                                                        <h2 className="card-title">Simple Past</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Grammar 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                               
                </div>
            </div>
       
        
    </div>
    )
}
 
export default Grammarexercises;

