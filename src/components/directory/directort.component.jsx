import React from 'react';

import './directory.style.css';

import BG1 from './bgimg/img1.jpg';
import BG2 from './bgimg/img2.jpg';
import BG3 from './bgimg/img3.jpg';
import BG4 from './bgimg/img4.jpg';
import BG5 from './bgimg/img5.jpg';

import MenuItem from '../menu-items/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'HAT',
                    id: 1,
                    image: BG1,
                    linkUrl: 'HAT PAGE'
                },
                {
                    title: 'BAG',
                    id: 2,
                    image: BG2
                },
                {
                    title: 'SHOES',
                    id: 3,
                    image: BG3
                },
                {
                    title: 'MEN',
                    id: 4,
                    image: BG4,
                    size: 'large'
                },
                {
                    title: 'WOMEN',
                    id: 5,
                    image: BG5,
                    size: 'large'
                }
            ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key= {id} {...otherSectionProps} /> )}
            </div>
        )
    }
}

export default Directory;