import styled from "styled-components"
import { useAuth } from "../Provider/auth";
import logo from '../Assets/Images/Logo.png'


export default function Header() {

    const { name } = useAuth()

    return (
        <HeaderTag>
            {(!name) ?
                <article>
                    <div>
                        <Text color="green"></Text>
                    </div>
                    <div>
                        <Text color="green">Entrar</Text>
                        <Text>Cadastrar-se &#127942;</Text>
                    </div>
                </article>
                :
                <article>
                    <div>
                        <Text color="green">Seja bem-vindo(a), {name}</Text>
                    </div>
                    <div>
                        <Text>Home</Text>
                        <Text>Ranking</Text>
                        <Text>Sair</Text>
                    </div>
                </article>}

                <img src={logo} alt={logo} />
        </HeaderTag>
    )
}

const HeaderTag = styled.header`

    position: relative;
    width: 100%;
    height: 150px;
    font-weight: 400;
    font-size: 18px;

    article{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 90px;
        padding: 0 100px 10px 100px;
    }

    div{
        display: flex;
        gap: 20px;
    }
    div span{
        cursor: pointer;
    }
    div span:hover{
        text-decoration: underline;
    }
    img{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 130px;
        left: 0;    
        right: 0;
        
    }

`;
const Text = styled.span`

    color: ${props => (props.color === 'green') ? '#5D9040' : '#9C9C9C'};
`;