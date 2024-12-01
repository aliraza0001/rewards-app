// API response structure
interface ApiResponse<T> {
  data: T | null | undefined;
  ok: boolean;
  problem: string | null;
  status: number | null;
  headers: Record<string, string>;
  duration: number | null;
  config?: Record<string, unknown>;
  originalError?: unknown;
}
