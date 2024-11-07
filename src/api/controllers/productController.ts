// src/api/controllers/productController.ts
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { Product } from '../models/Product';

const dataPath = path.join(__dirname, '../data/products.json');

// Leer productos desde el archivo JSON
function getProducts(): Product[] {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data) as Product[];
}

// Guardar productos en el archivo JSON
function saveProducts(products: Product[]): void {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

// Obtener todos los productos
export const getAllProducts = (req: Request, res: Response): void => {
  const products = getProducts();
  res.json(products);
};

// Crear un nuevo producto
export const createProduct = (req: Request, res: Response): void => {
  const products = getProducts();

  // Generar un ID único para el nuevo producto
  const newProductId = products.length > 0 ? Math.max(...products.map(p => parseInt(p.id))) + 1 : 1;

  const newProduct: Product = {
    id: newProductId.toString(),
    ...req.body
  };

  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
};

// Obtener un producto por ID
export const getProductById = (req: Request, res: Response): void => {
  const products = getProducts();
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Actualizar un producto por ID
export const updateProduct = (req: Request, res: Response): void => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    const updatedProduct = { ...products[index], ...req.body };
    products[index] = updatedProduct;
    saveProducts(products);
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Eliminar un producto por ID
export const deleteProduct = (req: Request, res: Response): void => {
  const products = getProducts();
  const filteredProducts = products.filter(p => p.id !== req.params.id);
  if (filteredProducts.length !== products.length) {
    saveProducts(filteredProducts);
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
