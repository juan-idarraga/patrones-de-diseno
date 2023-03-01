class DocumentContext {
  constructor() {
    this.cintent = "";
  }

  setState(state) {
    this.state = state;
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}
