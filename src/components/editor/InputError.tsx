/**
 * Displays an error message for an input field.
 */
export const InputError = ({ error }: { error: string }) => (
  <p
    className="text-red-500 text-sm font-medium"
  >
    {error}
  </p>
)