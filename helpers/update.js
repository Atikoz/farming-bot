import { getUserBalance } from "../function/crossfi/getUserBalance.js";
import getUserTx from "../function/crossfi/getUserTx.js";

async () => {
  await getUserTx ('mx1utyfgv6hlj85m06j4p567wca5jcuxztadcq0dh');

  await getUserBalance('mx1utyfgv6hlj85m06j4p567wca5jcuxztadcq0dh')
}