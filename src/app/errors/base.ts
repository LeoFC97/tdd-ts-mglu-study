export default abstract class BaseError extends Error {
  public abstract name: string;
  public abstract message: string;
}
