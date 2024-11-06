interface DeveloperG {
  code(): void;
}

class FrontEndDeveloperG implements DeveloperG {
  code() {
    console.log("Coding in JavaScript");
  }
}

class BackEndDeveloperG implements DeveloperG {
  code() {
    console.log("Coding in Typescript");
  }
}

class ProjectG {
  constructor(private developer: DeveloperG) {}

  develop() {
    this.developer.code();
  }
}
