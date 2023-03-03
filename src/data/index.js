import { slider1, slider2, slider3, slider4 } from "../assets";
import {
  faLock,
  faStore,
  faTruckFast,
  faFileShield,
} from "@fortawesome/free-solid-svg-icons";

export const navBar = [
  {
    id: 0,
    link: "Home",
    to:"#"
  },
  {
    id: 1,
    link: "Products",
    to: '#products'
  },
  {
    id: 2,
    link: "About Us",
    to: "#about-us"
  },
];

export const slides = [
  slider1, slider2, slider3, slider4,
];

export const benefits = [
  {
    id: 0,
    fontaaw: faTruckFast,
    h4: "shipments to the whole country",
    p: "from $15",
  },
  {
    id: 1,
    fontaaw: faStore,
    h4: "free local pickup",
    p: "at all locations in the country",
  },
  {
    id: 2,
    fontaaw: faLock,
    h4: "100% secure purchases",
    p: "on all online purchases",
  },
  {
    id: 3,
    fontaaw: faFileShield,
    h4: "safe guarantee",
    p: "to be sure of any inconvenience",
  },
];

export const colorfilter = [
  {
    id: 0, 
    colorStyle: 'bg-[#f1f1f1]',
    color: 'White'
  },
  {
    id: 1, 
    colorStyle: 'bg-[#000] border-solid border-[2.5px] border-[#f1f1f1]',
    color: 'Black'
  },
  {
    id: 2, 
    colorStyle: 'bg-[#FF0000]',
    color: 'Red'
  },
  {
    id: 3, 
    colorStyle: 'bg-[#0000FF]',
    color: 'Blue'
  },
  {
    id: 4, 
    colorStyle: 'bg-[#ef2777]',
    color: 'Pink'
  },
  {
    id: 5, 
    colorStyle: 'bg-[#32CD30]',
    color: 'Green'
  },
]

export const sizefillter = [
  {
    id: 6,
    size: 'Sm',
  },
  {
    id: 7,
    size: 'Md',
  },
  {
    id: 8,
    size: 'Lg',
  },
  {
    id: 9,
    size: 'XL',
  },
  {
    id: 10,
    size: 'XXL',
  }
]