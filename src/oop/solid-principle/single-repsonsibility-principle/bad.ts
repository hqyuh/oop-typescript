class UserB {
  constructor(
    public name: string,
    public email: string,
  ) {}

  changeEmail(newEmail: string) {
    this.email = newEmail;
  }

  sendEmail(message: string) {
    console.log(`Send email: ${message}`);
  }
}
