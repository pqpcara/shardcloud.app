export class Databases {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public test() {
    return "Databases";
  }
}
