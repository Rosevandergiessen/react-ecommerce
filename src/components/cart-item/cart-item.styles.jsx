import styled from "styled-components";
import { Arrow, RemoveButton } from "../checkout-item/checkout-item.styles";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`

export const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 5%;
`

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
  width: 30%;
`

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
`

export const Price = styled.span`
  font-size: 16px;
`
export const ChangeQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CartArrow = styled(Arrow)`
  font-weight: bold;
  font-size: 25px;
`

export const CartRemoveButton = styled(RemoveButton)`
  align-self: center;
  font-size: 20px;
`
