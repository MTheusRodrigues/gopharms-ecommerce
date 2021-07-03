import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import actions from '../../../redux/actions';

class MenuAreaDoCliente extends Component {

 


    renderMenu(){
        const url = this.props.router.pathname;
        const estaEmDados = url.includes("/area-cliente/dados");
        const estaEmAlterarSenha = url.includes("/area-cliente/alterar-senha");
        const estaEmPedidos = !estaEmDados && !estaEmAlterarSenha;
       
        return (

            
                
                <div className="flex flex-center ">
                    <div className="categorias-menu">
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                        <Link href="/area-cliente">
                            <span>Pedidos</span>
                        </Link>
                        <Link href="/area-cliente/dados">
                            <span>Perfil</span>
                        </Link>    
                        
                        <Link href="/carrinho">
                            <span>
                                Cestinha
                            </span>
                        </Link>
                    </div>
                </div>
                

            
        )
    }

    render(){
        return (
            <div className="flex-1 flex vertical">
                { this.renderMenu() }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    token: state.auth.token,
    cliente: state.cliente.cliente
});

export default connect(mapStateToProps, actions)(withRouter(MenuAreaDoCliente));