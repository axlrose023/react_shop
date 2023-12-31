import {GoodsItem} from "./GoodsItem";
import React from 'react';

function Goodslist(props) {
    const {goods = [], addToBasket=Function.prototype} = props;
    if (!goods.length) {
        return <h3>Nothing there</h3>
    }
    return (<div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
        ))}
    </div>);
}

export {Goodslist};
