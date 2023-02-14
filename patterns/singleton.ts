class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTS {
    if (!this.instance) {
      this.instance = new SingletonTS();
    }
    return this.instance;
  }
}

const singletont = SingletonTS.getInstance();
console.log(singletont.random);
