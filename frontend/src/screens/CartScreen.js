import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
import { addToCart } from "../actions/cartActions";

function CartScreen(props, history) {
  const { id } = useParams();
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const qty = search ? Number(search.split("=")[1]) : 1;
  const productId = id;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
}

export default CartScreen;
