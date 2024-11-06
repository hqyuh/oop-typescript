class ProductB {
  name: string;
  color: string;
  size: string;

  constructor(name: string, color: string, size: string) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// if we want to add a new filter, we have to modify the ProductFilter class
// BAD
class ProductFilter {
  byName(products: ProductB[], name: string): ProductB[] {
    return products.filter((el) => el.name === name);
  }

  bySize(products: ProductB[], size: string): ProductB[] {
    return products.filter((el) => el.size === size);
  }

  byColor(products: ProductB[], color: string): ProductB[] {
    return products.filter((el) => el.color === color);
  }

  bySizeAndColor(products: ProductB[], size: string, color: string): ProductB[] {
    return products.filter((el) => el.size === size && el.color === color);
  }
}
