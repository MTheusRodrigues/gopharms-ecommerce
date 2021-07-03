import React, { Component } from 'react';
import Carousel from '../Caroulsel'
//IMPLEMENTAR CARROUCEL
const IMAGES = [
    "/static/banners/.jpg",
    "/static/banners/.jpg",
    "/static/banners/.jpg",
    "/static/banners/.jpg",
];

class Banners extends Component {
    state = { 
        img: IMAGES[0],
        idx: 0
    }

    onChange = (index) => {
        let opcao = (index < 0) ? 
                        IMAGES.length - 1 : 
                        ( index >= IMAGES.length ) ? 
                            0 : 
                            index;
        this.setState({ img: IMAGES[opcao], idx: opcao });
    }

    componentDidMount(){
        this.scroll = window.setInterval(() => this.onChange(this.state.idx + 1), 5000);
    }

    componentWillUnmount(){
        window.clearInterval(this.scroll);
    }

    renderBanners(){
        const { img } = this.state;
        return (
            <div className="flex-1 banner">
                <img src={img} className="banner" alt="banner" width="100%" />
            </div>
        )
    }

    render(){
        return (
            <div className="Banners flex">
                <Carousel/>
            </div>
        )
    }
}

export default Banners;