import { add } from '../src/util';

export default function Page1() {
  return (
    <div>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
    </div>
  );
}
