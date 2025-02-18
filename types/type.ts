export type MessageType = {
  avatar: "user" | "ai", 
  text: string,
};

export type NextResponseType = {
  answer: string,
  error: string,
};
