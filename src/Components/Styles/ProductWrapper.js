import styled from "styled-components";

const ProductWrapper = styled.div`
    .card {
        border-color : transparent;
        transition : all 0.5s linear;
    }
    .card-footer {
        background : transparent;
        border-top : transparent;
        transition : all 0.5s linear;
    }
    &:hover {
        .card {
            border : 0.04rem solid rgba(0,0,0,0.3);
            box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.3);
        }
        .card-footer {
            background : grey;
            color : white;
        }
    }
    .img-container {
        position : relative;
        overflow : hidden;
    }
    .card-img-top {
        transition : all 0.5s linear;  
    }
    .img-container:hover .card-img-top {
        transform : scale(1.2);
    }
    .cart-btn {
        position : absolute;
        bottom : 0;
        right : 0;
        padding : 0.1rem 0.4rem;
        background : var(--mainBlue);
        border : none;
        color : var(--mainWhite);
        font-size : 1.1rem;
        border-radius : 0.5rem 0 0 0;
        transform : translate(100%, 100%);
        transition : all 0.5s linear; 
        text-align : center;
    }
    .img-container:hover .cart-btn {
        transform : translate(0,0);
    }
    .cart-btn:hover {
        color : var(--mainYellow);
    }
    .edit-btn {
        position : absolute;
        top : 0;
        right : 0;
        padding : 0.1rem 0.4rem;
        background : var(--mainBlue);
        border : none;
        color : var(--mainWhite);
        font-size : 1.1rem;
        border-radius : 0 0 0 0.5rem;
        transform : translate(100%, -100%);
        transition : all 0.5s linear; 
        text-align : center;
    }
    .img-container:hover .edit-btn {
        transform : translate(0, 0);
    }
    .edit-btn:hover {
        color : var(--mainYellow);
    }
`;

export default ProductWrapper;