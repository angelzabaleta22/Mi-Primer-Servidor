const items = [];

const index = (req, res) => {
  res.render("index", {
    titulo: "Mi Tienda Web",
  });
};

const listaDeProductos = (req, res, next) => {
  res.render("Productos", {
    titulo: "Lista de Productos",
    items,
  });
};

const nuevoProducto = (req, res, next) => {
  const newItem = req.body.newItem;
  console.log(newItem);
  items.push({
    id: items.length + 1,
    name: newItem,
  });
  res.redirect("/Productos");
};

module.exports = {
  index,
  listaDeProductos,
  nuevoProducto,
};
