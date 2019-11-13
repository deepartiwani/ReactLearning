import React,{ Component } from 'react';
import CarouselProducts from '../carouselProducts';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        console.log("constructor - [Carousel Component]");
        this.state = {shiftCount : 0}    // State variable maintained to disable the next and prev arrows
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps - [Carousel Component]");
        return "getDerivedStateFromProps - [Carousel Component]";
    }

    componentDidMount() {
        console.log("componentDidMount - [Carousel Component]");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate - [Carousel Component]");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate - [Carousel Component]");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate - [Carousel Component]");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount - [Carousel Component]");
    }

    nextImageArrow = () => {
        this.listcard.style.position = "absolute";
        this.setState({shiftCount : this.state.shiftCount += -268});
        this.listcard.style.left = this.state.shiftCount + "px";
    }

    prevImageArrow = () => {
        this.listcard.style.position = "absolute";
        this.setState({shiftCount : this.state.shiftCount += 268});
        this.listcard.style.left = this.state.shiftCount + "px"; 
    }

    iterateSingleProduct = this.props.productsdata.map(element =>{
        let imageUrl = element.compositeProducts[0].EProductMedia.smallURI,
            skuname = element.sfdcName, 
            partnumber = element.SKU,
            price = element.compositeProducts[0].priceEntry.listPrice,
            sfid = element.sfid;
        return (
            <CarouselProducts imageUrl={imageUrl} skuname={skuname} partnumber={partnumber} price={price} key={sfid}/>
        )
    }) 
    render() {
        console.log("render - [Carousel Component]");
        return(
            <div class="flexcontainer">
                <button class="carouselbtn" onClick={this.prevImageArrow} disabled={this.state.shiftCount== 0}><i class="fa fa-angle-left carouselarrow" aria-hidden="true"></i></button>
                <div class="containerwrapper">
                    <div class="container" ref={(imageref) => {this.listcard = imageref;}}>
                        {this.iterateSingleProduct}
                    </div>
                </div>
                <button class="carouselbtn" onClick={this.nextImageArrow} disabled={this.state.shiftCount== -1608}><i class="fa fa-angle-right carouselarrow" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default Carousel;