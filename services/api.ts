const API_BASE_URL = "https://coding-challenge-api.aerolab.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyYzkwNGZjMDBjNzAwMWE1YzJhYTgiLCJpYXQiOjE2NDQzNDk3MDB9.jTNIWZHUbKLkdDfGSAXXiYwm827tG_zMIcbCYwIlDRk";
const defaultHeader = {
  Authorization: "Bearer " + API_KEY,
};

export async function getProducts() {
  try {
    const res = await fetch(API_BASE_URL + "/products", {
      headers: defaultHeader,
    });
    const products = await res.json();
    return products;
  } catch (err) {
    return err;
  }
}

export async function getUser() {
  try {
    const res = await fetch(API_BASE_URL + "/user/me", {
      headers: defaultHeader,
    });
    const user = await res.json();
    return user;
  } catch (err) {
    return err;
  }
}
