import React from 'react';
import Link from 'next/link';
import HeroSpeaking from "@/components/HeroSpeaking";


const Speakingexercises = () => {
    return (
        <div>
        
            <HeroSpeaking/>
            <div className='exercises-container'>
                <div className='gallery'>
                                       
                                            <div className="card">
                                            <div className="card-header-speaking">
                                                <h2 className="card-title">Topic Group 1</h2>
                                            </div>
                                            <div className="card-body">
                                                <ul className="card-links">
                                                    <li><Link href="/grammar1">Topic 1</Link></li>
                                                </ul>
                                            </div>
                                            </div>
                                      
            
                                                
                                                    <div className="card">
                                                    <div className="card-header-speaking">
                                                        <h2 className="card-title">Topic Group 2</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Topic 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                               

                                               
                                                    <div className="card">
                                                    <div className="card-header-speaking">
                                                        <h2 className="card-title">Topic Group 3</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Topic 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                
        
        </div>
        </div>
       
    </div>
    )
}
 
export default Speakingexercises;

