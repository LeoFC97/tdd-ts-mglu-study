abstract class UseCase {
  abstract execute(input: unknown, params?: unknown): Promise<any>;
}

export default UseCase;
