import React from 'react';
import Link from 'next/link';
import HeroVocab from "@/components/HeroVocab";

const Vocabularyexercises = () => {
    return ( 
    <div>
            <HeroVocab/>
            <div className='exercises-container'>
                <div className='gallery'>
                                        
                                            <div className="card">
                                            <div className="card-header-vocab">
                                                <h2 className="card-title">Vocab Group 1</h2>
                                            </div>
                                            <div className="card-body">
                                                <ul className="card-links">
                                                    <li><Link href="/flash1">Flashcard 1</Link></li>
                                                </ul>
                                            </div>
                                            </div>
                                        
            
                                                
                                                    <div className="card">
                                                    <div className="card-header-vocab">
                                                        <h2 className="card-title">Vocab Group 2</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Vocab 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                               

                                                
                                                    <div className="card">
                                                    <div className="card-header-vocab">
                                                        <h2 className="card-title">Vocab Group 3</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Vocab 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                               
        
                    </div>
                    </div>
        
        </div>
        )
}
 
export default Vocabularyexercises;



