class ProductG {
  name: string;
  color: string;
  size: string;

  constructor(name: string, color: string, size: string) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class Filter {
  isOk(_item: ProductG): boolean {
    console.log("Filter isOk method should be overridden");

    return false;
  }
}

class NameFilter extends Filter {
  private criteria: string;

  constructor(name: string) {
    super();
    this.criteria = name;
  }

  isOk(item: ProductG): boolean {
    return item.name === this.criteria;
  }
}

class ColorFilter extends Filter {
  private criteria: string;

  constructor(color: string) {
    super();
    this.criteria = color;
  }

  isOk(item: ProductG): boolean {
    return item.color === this.criteria;
  }
}

class SizeFilter extends Filter {
  private criteria: string;

  constructor(size: string) {
    super();
    this.criteria = size;
  }

  isOk(item: ProductG): boolean {
    return item.size === this.criteria;
  }
}
