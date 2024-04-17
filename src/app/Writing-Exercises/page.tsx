import React from 'react';
import Link from 'next/link';
import HeroWriting from '@/components/HeroWriting';

const Writingexercises = () => {
    return (
    
    <div>
        
        <HeroWriting/>
        <div className='exercises-container'>
        <div className='gallery'>
                                        
                                            <div className="card">
                                            <div className="card-header-writing">
                                                <h2 className="card-title">Opinions</h2>
                                            </div>
                                            <div className="card-body">
                                                <ul className="card-links">
                                                    <li><Link href="/grammar1">Opinion 1</Link></li>
                                                </ul>
                                            </div>
                                            </div>
                                        
            
                                                
                                                    <div className="card">
                                                    <div className="card-header-writing">
                                                        <h2 className="card-title">Pros/Cons</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Pro/Con 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                             

                                               
                                                    <div className="card">
                                                    <div className="card-header-writing">
                                                        <h2 className="card-title">Email</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Email</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                              
                                                    </div>
                    </div>
                    </div>
        
    )   
}
 
export default Writingexercises;

