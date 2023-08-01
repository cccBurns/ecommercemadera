import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = { id: 1, image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/126F3/production/_95870557_gettyimages-521230034.jpg", title: "caca1" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;