abstract class UseCase {
  abstract execute(input: unknown): Promise<any>;
}

export default UseCase;
