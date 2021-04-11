/* ---FUNCIONES----*/

function productTable(products,table) {
    /*
    products: productos recibidos a traves de la api --> Array
    table: elemento html para mostrar los productos --> HTML ELEMENT(table)
    
    */
        
    return products.forEach(p => {
        table.innerHTML += `<tbody>
        <tr>
            <th scope="row">
                <p>
                    ${p.id}
                </p>
            </th>
            <td class="name">
                <a href="/product/${p.id }">
                    <p>
                        ${p.name}
                    </p>
                </a>
            </td>
            <td class="img">
                <img src="/images/productos/${p.imagenes[0].name}" alt="">
            </td>
            <td class="price">
                <p>$ ${p.price.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "." )}
                </p>
            </td>
            <td class="cate">
                <p>
                    ${p.categoria.name}
                </p>
            </td>
            <td class="accion">
                <form action="/admin/delete/${p.id}?_method=DELETE" method="POST"
                    class="card-body__form" id="dele${p.id}">
                    <button class="delete" type="submit"
                        onclick="confirmar(event,document.querySelector('#dele${p.id}'))"></i><i
                            class="far fa-trash-alt"></i></button>
                        </form>
                        <a href="/admin/edit/<%= p.id %>"><button class="edit"> <i
                                    class="fas fa-pencil-alt"></i></li></button></a>
            </td>
        </tr>
        
    </tbody>`
    });
   
    
}
