class UserG {
  constructor(
    public name: string,
    public email: string,
  ) {}

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }
}

class EmailService {
  sendEmail(user: UserG, message: string) {
    console.log(`Send email: ${message}`);
  }
}
