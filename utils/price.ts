import { formatVariantPrice } from "medusa-react";
import type { Cart } from "medusa-react/dist/types";
import type { ProductVariant } from "@medusajs/medusa";

export const formatPrice = (variant: ProductVariant, cart: Cart) => {
  if (cart)
    return formatVariantPrice({
      variant: variant,
      region: { currency_code: "usd", tax_code: "$", tax_rate: 0 },
    });
};
