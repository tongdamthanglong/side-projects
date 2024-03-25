import { reverseString } from "./helpers/utils";

export default function Hello() {
  return (
    <div>
      <h1>JS</h1>
      <h3>data and algo</h3>
      <button onClick={() => reverseString("Long please reversed me!")}>
        Run!
      </button>
    </div>
  );
}
