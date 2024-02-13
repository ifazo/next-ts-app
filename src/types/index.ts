export type Role = "user" | "admin" | "super_admin";

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  id: number;
  userId: string;
  products: IProduct[];
  total: number;
  createdAt: string;
  updatedAt: string;
}
