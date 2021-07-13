import React, { Component } from 'react';
import Link from 'next/link';
import { getCountItemsCart } from '../../utils/cart';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai';
import { RiShoppingBasketFill } from 'react-icons/ri'
class CardCarrinho extends Component {
    state = { cartQtd: 0 }
   
    componentDidMount(){
        this.setState({ cartQtd: getCountItemsCart() })
    }

    render(){
        return (
            <div className="itens-cabecalho flex-2 flex flex-center">
              
                <Link href="/area-cliente/mapbox">
                    <div className="item-cabecalho">
                        <i>
                        <FaMapMarkerAlt size={22}/>
                        </i>
                        <span>Meu local</span>
                    </div>
                </Link>
                
                
                <Link href="/area-cliente">
                    <div className="item-cabecalho">
                        <i>
                        <AiOutlineUser />
                        </i>
                        <span>Minha Conta</span>
                    </div>
                </Link>
                <Link href="/carrinho">
                    <div className="item-cabecalho cart">
                        <i >
                        <RiShoppingBasketFill />
                        </i>
                        <span>{ this.state.cartQtd || 0 }</span>
                       
                    </div>
                </Link>
                
            </div>
            
        )
    }
}

export default CardCarrinho;
