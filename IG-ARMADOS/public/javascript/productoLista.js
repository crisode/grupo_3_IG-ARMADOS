let $li = document.querySelectorAll('ul.father > li > a.child');
let $table = document.querySelector('.table');
let $select = document.querySelector('#categoria');
let $precio = document.querySelector('#precio')
let $orden = document.querySelector('#orden')
console.log('estas conectado')


let seleccionado = $select.options[$select.selectedIndex].value;

console.log(seleccionado)

let contador = 4;
let pagina = 1;
let category = "hola";
let price = "";
let letter;





fetch('http://localhost:3002/api/products/productlist?skip=' + 0)
        .then(result => result.json())
        .then(result => {
            let products = result.data;

            productTable(products,$table)
       


            $orden.addEventListener('change',function(e) {
                letter = $orden.options[$orden.selectedIndex].value;
                console.log(letter)

                
                $table.innerHTML = " "

                $table.innerHTML += ` <thead>
                                
                <tr class="columna">
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th class="img" scope="col">Imagen</th>
                    <th scope="col">Precio</th>
                    <th class="cate" cope="col">Categoria</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>`
                
                fetch('http://localhost:3002/api/products/productlist?skip=' + 0 + "&letter=" + letter + "&categoria=" + category)
                .then(result => result.json())
                .then(result => {
                    let products = result.data;

                    productTable(products,$table)

                })


            })

            $select.addEventListener('change', function(e){
                category = $select.options[$select.selectedIndex].value;
                console.log(category)

                $table.innerHTML = " "

                $table.innerHTML += ` <thead>
                                
                <tr class="columna">
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th class="img" scope="col">Imagen</th>
                    <th scope="col">Precio</th>
                    <th class="cate" cope="col">Categoria</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>`

                fetch('http://localhost:3002/api/products/productlist?skip=' + 0 + "&categoria=" + category + "&filtro=" + price)
                .then(result => result.json())
                .then(result => {
                    let products = result.data;

                    productTable(products,$table)
                   

                })
                     
            })

            $precio.addEventListener('change', function(e){
                price = $precio.options[$precio.selectedIndex].value;
                console.log(price)

                $table.innerHTML = " "

                $table.innerHTML += ` <thead>
                                
                <tr class="columna">
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th class="img" scope="col">Imagen</th>
                    <th scope="col">Precio</th>
                    <th class="cate" cope="col">Categoria</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>`


                fetch('http://localhost:3002/api/products/productlist?skip=' + 0 + "&filtro=" + price + "&categoria=" + category)
                .then(result => result.json())
                .then(result => {
                    let products = result.data;

                    productTable(products,$table)
                    

                })
            })

            for (let elemento of $li) {
                elemento.addEventListener('click', function(e){
                    let hijo = e.target;
                    
                   
                    
                    if(Number(hijo.innerText)){
                        pagina = hijo.innerText
                        console.log(pagina + " es un numero")
                    };

                    if(hijo.innerText === "Next" && pagina < ($li.length - 2)){
                        pagina = Number(pagina) + 1;
                        console.log(pagina)

                    }else if(hijo.innerText === "Previous" && pagina != 1){
                        pagina =  Number(pagina) - 1;
                        console.log(pagina)

                    }

                    let skip = contador * (pagina - 1);

                    $table.innerHTML = " "

                    fetch('http://localhost:3002/api/products/productlist?skip=' + skip + "&categoria=" + category + "&filtro=" + price + "&letter=" + letter)
                    .then(result => result.json())
                    .then(result => {
                        console.log(result)

                        let productos = result.data;
                        
                        
                        $table.innerHTML += ` <thead>
                                
                        <tr class="columna">
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th class="img" scope="col">Imagen</th>
                            <th scope="col">Precio</th>
                            <th class="cate" cope="col">Categoria</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>`
                    
                        productTable(productos,$table)
                        
                    })
                })
            }           
        })


