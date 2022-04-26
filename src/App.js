import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './store/cart/cartReducer';
import logo from "./logo.svg";
import "./App.css";

const items1 = [
  {
    id: 1265283,
    name: "Наушники вкладыши беспроводные TWS Xiaomi Redmi AirDots 2 Black",
    price: 649,
    image: "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/_/t/_tws_xiaomi_redmi_airdots_2_black_1_.jpg",
  },
  {
    id: 2878733,
    name: "Набор чашек с двойными стенками Ardesto 250 мл 2 шт. (AR2625DWP)",
    price: 399,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/i/m/img_8407_1.jpg",
  },
  {
    id: 3412083,
    name: "Форма для выпечки Rondell RDF-1316 Loft Professional 23,7x6,5 см",
    price: 449,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/_/r/_rondell_rdf-1316_loft_professional_23_7x6_5__01_1_.jpg",
  },
  {
    id: 2409283,
    name: "Фен Rowenta CV5831F0",
    price: 999,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/_/c/_context_bwfzdgvyfgltywdlc3wynjm1mhxpbwfnzs9qcgvnfgltywdlcy9oztavadkylze0otyznjuxmduxntuwlmpwz3wzzmuymjy4m2y4ztaymjiwyjgzotqxnzgyndgzmwrlzjmzzjixmjfkztc0ogvmnja0odyymzi3ntjjy2q4ngq1.jpg",
  },
  {
    id: 1135443,
    name: "Маршрутизатор интернет WiFi6 Huawei AX3 (Dual Core) WS7100-20 White",
    price: 1999,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/e/t/ethernet_huawei_ax3_quad_core_ws7200-20_white_17__1.jpg",
  },
  {
    id: 2025123,
    name: "Холодильник LG GA-B509SLSM",
    price: 19699,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/0/2/02_ga_b509slsm_front_inverter.jpg",
  },
  {
    id: 2830903,
    name: "Смартфон Apple iPhone 13 128Gb Midnight",
    price: 31999,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/i/p/iphone_13_q421_midnight_pdp_image_position-1a__ww-ru_1_.jpg",
  },
  {
    id: 3628003,
    name: "Смартфон Xiaomi Redmi Note 11 4/128Gb Graphite Gray",
    price: 8499,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/n/o/note_11_gray_6_1.jpg",
  },
  {
    id: 269343,
    name: "Холодильник Vestfrost CX263W",
    price: 6999,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/1/3/1318632_vestfrost_cx263w_18.jpg",
  },
  {
    id: 688963,
    name: "Смартфон Apple iPhone 11 64GB White",
    price: 20499,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/a/p/apple_iphone_11_64gb_white_0_3.jpg",
  },
  {
    id: 949653,
    name: "Стартовый пакет Vodafone SuperNet Start",
    price: 1,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/1/5/1550702.jpg",
  },
  {
    id: 311783,
    name: "Холодильник Vestfrost CW286W",
    price: 9555,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/1/3/1325575_vestfrost_cw286w_23.jpg",
  },
  {
    id: 753203,
    name: "Холодильник Bosch KGN39XI326",
    price: 19499,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/b/o/bosch_kgn39xi326.jpg",
  },
  {
    id: 1998153,
    name: "Смартфон Samsung Galaxy A52 8/256Gb Black (SM-A525FZKISEK)",
    price: 13499,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/s/m/sm_a526_galaxya52_5g_awesome_black_back_1__1.jpg",
  },
  {
    id: 2182453,
    name: "Смартфон OPPO A54 4/64Gb Blue",
    price: 6399,
    image:
      "media/catalog/product/cache/4/small_image/270x265/62defc7f46f3fbfc8afcd112227d1181/o/p/oppo_a54_blue_2.jpg",
  },
];

function App() {
  const cart = useSelector((state) => state.cart.cart)
  const [items, setItem] = useState(items1);

  return (
    <div className="app">
      <header className="header">
        <div className="header-body">
          <a href="/">
            <img src={logo} className="react-logo" alt="react-logo" />
          </a>
          <a href="/">Home</a>
          <a className="cart" href="/">Go To Cart{cart.length ? `: ${cart.length}` : ''}</a>
        </div>
      </header>

      <div className="content">
        <div className="product-wrapper">
          {items.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-body">
          <a href="/">
            <img src={logo} className="react-logo" alt="react-logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function ProductCard(props) {
  const cart = useSelector((state) => state.cart.cart);
  const [alreadyInCart, setAlreadyInCart] = useState(cart.includes(props.product))
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(props.product));
    setAlreadyInCart(true);
  };

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={logo}
        alt="product-image"
      ></img>
      <h3 className="product-card__title">{props.product.name}</h3>
      <div className="product-card__buy">
      <p className="product-card__buy--price">{props.product.price}₴</p>
      <button className="product-card__buy--add-to-cart" onClick={add} disabled={alreadyInCart}>{alreadyInCart ? 'inCart' : 'Buy'}</button>
      </div>
    </div>
  );
}

export default App;
