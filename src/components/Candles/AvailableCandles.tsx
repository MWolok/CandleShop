import React from 'react'
import { Candle } from './Candle';
import './AvailableCandles.css'
import Card from '../Layout/Card';
import CandleItem from './CandleItem/CandleItem';

//For test 
 const candles: Candle[] = [
    {
      id: 1,
      amount:0,
      color: "Red",
      size: "Medium",
      smell: "Rose",
      price: 12.99,
    },
    {
      id: 2,
      amount:0,
      color: "Blue",
      size: "Large",
      smell: "Ocean Breeze",
      price: 15.49,
    },
    {
      id: 3,
      amount:0,
      color: "Purple",
      size: "Small",
      smell: "Lavender",
      price: 8.99,
    },
    {
      id: 4,
      amount:0,
      color: "Brown",
      size: "Medium",
      smell: "Cinnamon",
      price: 10.99,
    },
    {
      id: 5,
      amount:0,
      color: "Ivory",
      size: "Tealight",
      smell: "Vanilla",
      price: 6.99,
    },
    {
      id: 6,
      amount:0,
      color: "Beige",
      size: "Large",
      smell: "Sandalwood and Amber",
      price: 18.99,
    },
    {
      id: 7,
      amount:0,
      color: "Green",
      size: "Small",
      smell: "Eucalyptus Mint",
      price: 9.49,
    },
    {
      id: 8,
      amount:0,
      color: "White",
      size: "Taper",
      smell: "Fresh Linen",
      price: 14.99,
    },
    {
      id: 9,
      amount:0,
      color: "Yellow",
      size: "Medium",
      smell: "Citrus Burst",
      price: 11.49,
    },
    {
      id: 10,
      amount:0,
      color: "Dark Green",
      size: "Medium",
      smell: "Patchouli and Cedarwood",
      price: 13.99,
    },
  ];




export default function AvailableCandles() {
const candlelist = candles.map(candle => <CandleItem key={candle.id} {...candle} />);



  return (
   <><section className='candle'>
    <Card>
    <ul>
        {candlelist}
    </ul>
    </Card>
    </section></>
  )
}
