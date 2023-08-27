import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from './itemDetail';

const arrayProductos = [
    
  
        { id: 0, nombre: "Samsung s20", images: "https://ar.celulares.com/fotos/samsung-galaxy-s20-5g-85685-g-alt.jpeg",  categoria: "celulares", data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit assumenda, iure nesciunt deleniti fugiat cum obcaecati repudiandae, sint est aperiam odit, unde ab. Qui possimus error eligendi provident ea?" },
        { id: 1, nombre: "Samsung s23 ", images: "https://static.nb.com.ar/i/nb_samsung-celular-galaxy-s23-ultra-256-12gb-8gb-green_ver_be9d1e736831717a40154f363d28dc17.jpg", categoria: "celulares", data: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est saepe incidunt eum, error magni et veniam enim nesciunt laborum ipsam excepturi temporibus maxime harum dignissimos reiciendis at maiores id." },
        { id: 1, nombre: "Notebook Samsung Book 3 i7 Silver", images:" https://tutiendabancor.com.ar/media/catalog/product/cache/9c08c714c8eb7e564db9a133e4630037/b/o/book3_cucarda.png ",     categoria:"notebook", data:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aspernatur, labore dignissimos nihil non fuga nam vitae voluptates accusantium et beatae corrupti alias necessitatibus suscipit, voluptas harum inventore architecto dolor." }
      
];

const ItemDetailContainer = () => {
    const { categoriaId, productoId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const productoDetalle = arrayProductos.find(producto => producto.id === parseInt(productoId));
        
        
        setData(productoDetalle);
    }, [categoriaId, productoId]);
    
    if (!data) {
        return <div>Cargando detalles del producto...</div>;
    }
    
    return <ItemDetail data={data} />;
};

export default ItemDetailContainer;