import React, { useEffect, useState}  from "react";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from "../Title";
import { useParams } from "react-router-dom";

const films = [
    { id: 1, image:"https://www.skincancer.org/wp-content/uploads/Poop-emoji-1024x668.jpg", category: "films", title: "caca1"},
    { id: 2, image:"https://ichef.bbci.co.uk/news/640/cpsprodpb/126F3/production/_95870557_gettyimages-521230034.jpg", category: "films", title: "caca2"},
    { id: 3, image:"https://img.freepik.com/vector-premium/personaje-es-caca-kawaii-vector-ilustracion-estilo-dibujos-animados-aislado-concepto-personaje-caca_485992-711.jpg?w=2000", category: "series", title: "caca3"},
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }


    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} /> 
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;