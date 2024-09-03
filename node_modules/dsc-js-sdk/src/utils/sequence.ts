const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/* Extract sequence from error message
{
  error: {
    code: 2,
    message: 'account sequence mismatch, expected 49, got 0: incorrect account sequence: unknown request',
    details: []
  }
}
*/
export function checkSequenceSimulate(error: any): string {
  let expectedSequence = "";
  if (Number(error.code) === 2 && error.message) {
    if (error.message) {
      const message = Array.from(error.message);
      for (let i = 0; i < message.length; i++) {
        if (expectedSequence.length && message[i] === ",") {
          break;
        }
        if (digits.includes(message[i] as string)) {
          expectedSequence += message[i];
        }
      }
    }
  }
  return expectedSequence;
}

/* Extract sequence from error message
{
  code: 32,
  codeSpace: 'sdk',
  log: 'account sequence mismatch, expected 49, got 0: incorrect account sequence',
  ...
}
*/
export function checkSequenceBroadcast(broadcasted: any): string {
  let expectedSequence = "";
  if (Number(broadcasted.code) === 32 && broadcasted.log) {
    if (broadcasted.log) {
      const log = Array.from(broadcasted.log);
      for (let i = 0; i < log.length; i++) {
        if (expectedSequence.length && log[i] === ",") {
          break;
        }
        if (digits.includes(log[i] as string)) {
          expectedSequence += log[i];
        }
      }
    }
  }
  return expectedSequence;
}
