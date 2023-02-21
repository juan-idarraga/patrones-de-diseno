interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if (user == "admin" && password == "1234") {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if (user == "admin" && password == "admin") {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
const res = auth.login("admin", "entra");
console.log(res);
auth.setStrategy(new LoginServiceStrategy());
