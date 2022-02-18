const API_BASE_URL = "https://coding-challenge-api.aerolab.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyYzkwNGZjMDBjNzAwMWE1YzJhYTgiLCJpYXQiOjE2NDQzNDk3MDB9.jTNIWZHUbKLkdDfGSAXXiYwm827tG_zMIcbCYwIlDRk";
const defaultHeader = {
  Authorization: "Bearer " + API_KEY,
  Accept: "application/json",
  "Content-Type": "application/json",
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

export async function postRedeem(productId: string): Promise<Response> {
  const res = await fetch(API_BASE_URL + "/redeem", {
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      productId,
    }),
  });
  return res;
}

export async function postPoints(
  amount: 1000 | 5000 | 7500
): Promise<Response> {
  const res = await fetch(API_BASE_URL + "/user/points", {
    method: "POST",
    headers: defaultHeader,
    body: JSON.stringify({
      amount,
    }),
  });
  return res;
}