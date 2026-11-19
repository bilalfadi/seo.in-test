/** SITE 4 — seogroupsbuy.com member shop */
export const SHOP_LOGIN_URL = 'https://seogroupsbuy.com/users/login';
export const SHOP_SIGNUP_URL = 'https://seogroupsbuy.com/users/signup';

export function shopCartUrl(productId: number): string {
  return `https://seogroupsbuy.com/users/cart/index/product/id/${productId}/c/`;
}