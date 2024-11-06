class FrontEndDeveloperB {
  code() {
    console.log("Coding in JavaScript");
  }
}

class ProjectB {
  constructor(private developer: FrontEndDeveloperB) {}

  develop() {
    this.developer.code();
  }
}

// If we now want to add BackEndDeveloper to the Project, we will have to edit the Project class
class BackEndDeveloperB {
  code() {
    console.log("Coding in Python");
  }
}

// Modify the Project class to work with BackEndDeveloper
class ProjectB2 {
  constructor(private developer: FrontEndDeveloperB | BackEndDeveloperB) {}

  develop() {
    this.developer.code();
  }
}
