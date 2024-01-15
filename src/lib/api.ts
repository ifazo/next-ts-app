import axios from "axios";

const apiUrl = process.env.API_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUser = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (data: any) => {
  const response = await api.post("/users", data);
  return response.data;
};

export const updateUser = async (id: string, data: any) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (data: any) => {
  const response = await api.post("/products", data);
  return response.data;
};

export const updateProduct = async (id: string, data: any) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getCategory = async (id: string) => {
  const response = await api.get(`/categories/${id}`);
  return response.data;
};

export const createCategory = async (data: any) => {
  const response = await api.post("/categories", data);
  return response.data;
};

export const updateCategory = async (id: string, data: any) => {
  const response = await api.put(`/categories/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await api.delete(`/categories/${id}`);
  return response.data;
};

export const getBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

export const getBlog = async (id: string) => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};

export const createBlog = async (data: any) => {
  const response = await api.post("/blogs", data);
  return response.data;
};

export const updateBlog = async (id: string, data: any) => {
  const response = await api.put(`/blogs/${id}`, data);
  return response.data;
};

export const deleteBlog = async (id: string) => {
  const response = await api.delete(`/blogs/${id}`);
  return response.data;
};
