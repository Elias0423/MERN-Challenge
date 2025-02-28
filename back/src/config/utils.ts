export const DEFAULT_RESPONSE = (code: number, success: boolean, message: string, data?: unknown) => {
  return { code, success, message, data };
};
