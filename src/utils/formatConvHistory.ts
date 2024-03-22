export function formatConvHistory(messages: any) {
  return messages
    .map((message: { message: string; sender: string }) => {
      if (message.sender == "user") {
        return `Human: ${message.message}`;
      } else {
        return `AI: ${message.message}`;
      }
    })
    .join("\n");
}
