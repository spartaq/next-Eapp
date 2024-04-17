
import React from 'react';
import Link from 'next/link';
import HeroListening from '@/components/HeroListening';

const Listeningexercises = () => {
    return (
    <div>
        
        <HeroListening/>
        <div className='exercises-container'>
                <div className='gallery'>
                                        
                                            <div className="card">
                                            <div className="card-header-listening">
                                                <h2 className="card-title">Podcast Snippets</h2>
                                            </div>
                                            <div className="card-body">
                                                <ul className="card-links">
                                                    <li><Link href="/grammar1">Podcast 1</Link></li>
                                                </ul>
                                            </div>
                                            </div>
                                        
            
                                                
                                                    <div className="card">
                                                    <div className="card-header-listening">
                                                        <h2 className="card-title">Videos</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Video 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                               

                                                
                                                    <div className="card">
                                                    <div className="card-header-listening">
                                                        <h2 className="card-title">Audio</h2>
                                                    </div>
                                                    <div className="card-body">
                                                        <ul className="card-links">
                                                            <li><Link href="/grammar1">Audio 1</Link></li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                
                    </div>
                    </div>
                    </div>
    )
}
 
export default Listeningexercises;




