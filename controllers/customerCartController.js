// Responsável por exibir o carrinho, podendo ter outras funções que trabalhem a lógica do carrinho

const customerCartController = {}


// Para armazenar o produto
add ProductInCart: (req, res) => {

// se a sessão for iniciada, tiver algo e/ou não for undefined, incluir na página de carrinho
    const product = products.find (p=> p.id == id);
    if (req.session.cart != undefined){
        const productSelect = req.session.cart.find(p => parseInt(p.id)==parseInt(id));

    if (productSelect){
        productSelect.
    }
    }
