import React from 'react';
import Link from 'next/link';
import HeroReading from '@/components/HeroReading';

const Readingexercises = () => {
    return (
        <div>
            <HeroReading />
            <div className='exercises-container'>
                <div className='gallery'>
                            
                            <div className="card">
                                            <div className="card-header-reading">
                                                <h2 className="card-title">Reading Comprehension</h2>
                                            </div>
                                                <div className="card-body">
                                                    <ul className="card-links">
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                        <li><Link href="/readingcomp1">Reading 1</Link></li>
                                                    </ul>
                                                </div>  
        
                            </div>

                            <div className="card">
                                            <div className="card-header-reading">
                                                <h2 className="card-title">Paragraph Headings</h2>
                                            </div>
                                                <div className="card-body">
                                                    <ul className="card-links">
                                                        <li><Link href="/headings1">Headings 1</Link></li>
                                                        <li><Link href="/headings2">Headings 2</Link></li>
                                                        <li><Link href="/headings3">Headings 3</Link></li>
                                                    </ul>
                                                </div>
                            </div>  
                </div>
            </div>
            </div>
            
    )
}
 
export default Readingexercises;